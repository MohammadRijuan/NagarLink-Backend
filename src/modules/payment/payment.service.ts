
import httpStatus from "http-status";
import { randomUUID } from "crypto";
import { Prisma } from "../../../generated/prisma/client";

import {
  AssignmentStatus,
  PaymentStatus,
  WorkStatus,
} from "../../../generated/prisma/enums";

import { prisma } from "../../lib/prisma";
import {
  createSslCommerzSession,
  validateSslCommerzPayment,
} from "../../lib/sslcommerz";

import { AppError } from "../../utils/AppError";
import { RequestUser } from "../../middlewares/checkAuth";
import ICreatePayment from "./payment.interface";
import config from "../../config";

type VerifyResult =
  | { success: true; status: "PAID" }
  | { success: false; status: "UNDER_REVIEW" };

const PENDING_EXPIRY_MS = 30 * 60 * 1000;

// ============================================
// HELPER: HANDLE PRISMA UNIQUE CONSTRAINT ERROR
// ============================================

const isPrismaUniqueError = (error: unknown) => {
  return (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  );
};

// ============================================
// CREATE PAYMENT
// ============================================

const createPaymentService = async (
  payload: ICreatePayment,
  user: RequestUser,
) => {
  const workRequest = await prisma.workRequest.findUnique({
    where: {
      id: payload.requestId,
    },
    include: {
      selectedQuotation: true,
    },
  });

  if (!workRequest) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Work request not found",
    );
  }

  if (workRequest.citizenId !== user.userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to pay",
    );
  }

  if (
    !workRequest.selectedQuotation ||
    workRequest.status !== WorkStatus.CITIZEN_ACCEPTED
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "No accepted quotation found",
    );
  }

  // Check whether payment is already completed
  const paidPayment = await prisma.payment.findFirst({
    where: {
      requestId: payload.requestId,
      status: PaymentStatus.PAID,
    },
  });

  if (paidPayment) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This work request has already been paid",
    );
  }

  // Check existing pending payment
  const pendingPayment = await prisma.payment.findFirst({
    where: {
      requestId: payload.requestId,
      status: PaymentStatus.PENDING,
    },
  });

  if (pendingPayment) {
    const gatewayResponse =
      pendingPayment.gatewayResponse as Record<
        string,
        unknown
      > | null;

    // Never expire a payment under manual review
    if (gatewayResponse?.reviewRequired === true) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Your previous payment is under review. Please wait for verification.",
      );
    }

    const paymentAge =
      Date.now() - pendingPayment.createdAt.getTime();

    if (paymentAge < PENDING_EXPIRY_MS) {
      throw new AppError(
        httpStatus.CONFLICT,
        "A payment session is already active. Please try again later.",
      );
    }

    // Expire stale pending payment conditionally
    const expired = await prisma.payment.updateMany({
      where: {
        id: pendingPayment.id,
        status: PaymentStatus.PENDING,
      },
      data: {
        status: PaymentStatus.FAILED,
      },
    });

    if (expired.count === 0) {
      throw new AppError(
        httpStatus.CONFLICT,
        "Payment status has changed. Please try again.",
      );
    }
  }

  // Calculate 15% advance payment
  const amount = new Prisma.Decimal(
    workRequest.selectedQuotation.proposedFee,
  )
    .mul(0.15)
    .toDecimalPlaces(2);

  if (amount.lessThan(10)) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Advance payment must be at least 10 BDT",
    );
  }

  const merchantInvoiceNumber = `NL-${randomUUID()}`;

  // Create payment record
  // A database unique index must prevent concurrent active payments.
  let payment;

  try {
    payment = await prisma.payment.create({
      data: {
        requestId: payload.requestId,
        amount,
        merchantInvoiceNumber,
      },
    });
  } catch (error) {
    if (isPrismaUniqueError(error)) {
      throw new AppError(
        httpStatus.CONFLICT,
        "A payment is already pending or completed for this work request",
      );
    }

    throw error;
  }

  // Create SSLCommerz session
  let session;

  try {
    session = await createSslCommerzSession({
      total_amount: amount.toFixed(2),
      currency: "BDT",
      tran_id: merchantInvoiceNumber,

      success_url: `${config.app_url}/api/v1/payments/success`,
      fail_url: `${config.app_url}/api/v1/payments/failure`,
      cancel_url: `${config.app_url}/api/v1/payments/cancel`,
      ipn_url: `${config.app_url}/api/v1/payments/ipn`,

      product_name: workRequest.title,
      product_category: "Service",
      product_profile: "general",

      cus_name: user.name,
      cus_email: user.email,
      cus_add1: workRequest.address,
      cus_city: workRequest.city,
      cus_postcode: workRequest.postalCode,
      cus_country: "Bangladesh",
      cus_phone: workRequest.phone,

      shipping_method: "NO",
    });
  } catch (error) {
    console.error(
      "[SSLCommerz] Session creation error:",
      error,
    );

    await prisma.payment.updateMany({
      where: {
        id: payment.id,
        status: PaymentStatus.PENDING,
      },
      data: {
        status: PaymentStatus.FAILED,
        gatewayResponse: {
          error: "SSLCommerz session creation failed",
        },
      },
    });

    throw new AppError(
      httpStatus.BAD_GATEWAY,
      "Unable to connect to SSLCommerz",
    );
  }

  const gatewayUrl = session.GatewayPageURL;

  if (session.status !== "SUCCESS" || !gatewayUrl) {
    await prisma.payment.updateMany({
      where: {
        id: payment.id,
        status: PaymentStatus.PENDING,
      },
      data: {
        status: PaymentStatus.FAILED,
        gatewayResponse: session as Prisma.InputJsonValue,
      },
    });

    throw new AppError(
      httpStatus.BAD_GATEWAY,
      session.failedreason ||
        "Unable to initiate SSLCommerz payment",
    );
  }

  // Save gateway response and SSLCommerz transaction
  try {
    await prisma.$transaction(async (tx) => {
      await tx.payment.update({
        where: {
          id: payment.id,
        },
        data: {
          gatewayResponse: session as Prisma.InputJsonValue,
        },
      });

      await tx.sslCommerzPayment.create({
        data: {
          paymentId: payment.id,
          tranId: merchantInvoiceNumber,
          gatewayResponse: session as Prisma.InputJsonValue,
        },
      });
    });
  } catch (error) {
    // Session creation succeeded but local persistence failed.
    // Mark payment failed only if it is still pending.
    await prisma.payment.updateMany({
      where: {
        id: payment.id,
        status: PaymentStatus.PENDING,
      },
      data: {
        status: PaymentStatus.FAILED,
      },
    });

    throw error;
  }

  return {
    paymentId: payment.id,
    amount: amount.toFixed(2),
    paymentUrl: gatewayUrl,
  };
};

// ============================================
// VERIFY AND COMPLETE PAYMENT
// ============================================

const verifyAndCompletePayment = async (
  data: Record<string, unknown>,
): Promise<VerifyResult> => {
  const tranId = String(data.tran_id || "");
  const valId = String(data.val_id || "");

  if (!tranId || !valId) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Invalid payment callback",
    );
  }

  // 1. Find payment
  const payment = await prisma.payment.findUnique({
    where: {
      merchantInvoiceNumber: tranId,
    },
    include: {
      request: {
        include: {
          selectedQuotation: true,
        },
      },
      sslcommerzPayment: true,
    },
  });

  if (!payment) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Payment not found",
    );
  }

  // 2. Idempotency
  if (payment.status === PaymentStatus.PAID) {
    return {
      success: true,
      status: "PAID",
    };
  }

  if (payment.status !== PaymentStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Payment is not pending",
    );
  }

  // 3. Check saved transaction ID
  if (
    payment.sslcommerzPayment &&
    payment.sslcommerzPayment.tranId !== tranId
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Transaction ID mismatch",
    );
  }

  // 4. Validate directly with SSLCommerz
  const validation = await validateSslCommerzPayment(valId);

  // 5. Verify returned transaction details
  const validStatus = ["VALID", "VALIDATED"].includes(
    String(validation.status).toUpperCase(),
  );

  const validTranId = validation.tran_id === tranId;

  const validValId =
    !validation.val_id || validation.val_id === valId;

  const validCurrency =
    String(validation.currency).toUpperCase() ===
    payment.currency.toUpperCase();

  let validAmount = false;

  try {
    validAmount =
      validation.amount !== undefined &&
      new Prisma.Decimal(
        String(validation.amount),
      ).equals(payment.amount);
  } catch {
    validAmount = false;
  }

  // Use the store ID returned by the server-side validation.
  // Do not trust store_id supplied only by the browser callback.
  const validStoreId =
    String(validation.store_id || "") ===
    String(config.ssl_store_id);

  if (!config.ssl_is_live) {
    console.log("[SSLCommerz] Validation checks:", {
      tranId,
      validStatus,
      validTranId,
      validValId,
      validCurrency,
      validAmount,
      validStoreId,
      risk_level: validation.risk_level,
      risk_title: validation.risk_title,
    });
  }

  if (
    !validStatus ||
    !validTranId ||
    !validValId ||
    !validCurrency ||
    !validAmount ||
    !validStoreId
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "SSLCommerz transaction validation failed",
    );
  }

  // 6. Risk review
  const isRisky =
    String(validation.risk_level) === "1";

  if (isRisky && config.ssl_is_live) {
    const reviewResult = await prisma.payment.updateMany({
      where: {
        id: payment.id,
        status: PaymentStatus.PENDING,
      },
      data: {
        gatewayResponse: {
          ...(payment.gatewayResponse as Record<
            string,
            unknown
          > | null),
          ...(validation as Record<string, unknown>),
          reviewRequired: true,
        } as Prisma.InputJsonValue,
      },
    });

    if (reviewResult.count === 0) {
      const latestPayment = await prisma.payment.findUnique({
        where: {
          id: payment.id,
        },
      });

      if (latestPayment?.status === PaymentStatus.PAID) {
        return {
          success: true,
          status: "PAID",
        };
      }

      throw new AppError(
        httpStatus.CONFLICT,
        "Payment status changed during verification",
      );
    }

    console.warn(
      `[SSLCommerz] Payment ${tranId} flagged risky, held for manual review`,
    );

    return {
      success: false,
      status: "UNDER_REVIEW",
    };
  }

  if (isRisky) {
    console.warn(
      "[SSLCommerz] Risky transaction accepted because SSL_IS_LIVE=false",
    );
  }

  if (!payment.request.selectedQuotation) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Selected quotation not found",
    );
  }

  const selectedQuotation = payment.request.selectedQuotation;

  // 7. Complete payment atomically
  await prisma.$transaction(async (tx) => {
    // Atomically change PENDING to PAID.
    // Only one callback can successfully perform this transition.
    const paymentUpdate = await tx.payment.updateMany({
      where: {
        id: payment.id,
        status: PaymentStatus.PENDING,
      },
      data: {
        status: PaymentStatus.PAID,
        paidAt: new Date(),
        gatewayResponse: validation as Prisma.InputJsonValue,
      },
    });

    if (paymentUpdate.count === 0) {
      const latestPayment = await tx.payment.findUnique({
        where: {
          id: payment.id,
        },
      });

      if (latestPayment?.status === PaymentStatus.PAID) {
        return;
      }

      throw new AppError(
        httpStatus.CONFLICT,
        "Payment status changed during verification",
      );
    }

    // Ensure the request is still waiting for payment completion.
    const requestUpdate = await tx.workRequest.updateMany({
      where: {
        id: payment.requestId,
        status: WorkStatus.CITIZEN_ACCEPTED,
        selectedQuotationId: selectedQuotation.id,
      },
      data: {
        status: WorkStatus.ADVANCE_PAID,
      },
    });

    if (requestUpdate.count === 0) {
      throw new AppError(
        httpStatus.CONFLICT,
        "Work request status changed during payment completion",
      );
    }

    const storeAmount = validation.store_amount
      ? new Prisma.Decimal(
          String(validation.store_amount),
        )
      : null;

    // Save SSLCommerz transaction information
    await tx.sslCommerzPayment.upsert({
      where: {
        paymentId: payment.id,
      },
      create: {
        paymentId: payment.id,
        tranId,
        valId,
        bankTranId: String(
          validation.bank_tran_id || "",
        ),
        cardType: String(validation.card_type || ""),
        cardIssuer: String(validation.card_issuer || ""),
        cardBrand: String(validation.card_brand || ""),
        cardIssuerCountry: String(
          validation.card_issuer_country || "",
        ),
        storeAmount,
        gatewayResponse: validation as Prisma.InputJsonValue,
      },
      update: {
        valId,
        bankTranId: String(
          validation.bank_tran_id || "",
        ),
        cardType: String(validation.card_type || ""),
        cardIssuer: String(validation.card_issuer || ""),
        cardBrand: String(validation.card_brand || ""),
        cardIssuerCountry: String(
          validation.card_issuer_country || "",
        ),
        storeAmount,
        gatewayResponse: validation as Prisma.InputJsonValue,
      },
    });

    // Create assignment only once
    await tx.assignment.upsert({
      where: {
        requestId: payment.requestId,
      },
      create: {
        requestId: payment.requestId,
        staffId: selectedQuotation.staffId,
        citizenId: payment.request.citizenId,
        amount: selectedQuotation.proposedFee,
        advanceAmount: payment.amount,
        status: AssignmentStatus.ONGOING,
      },
      update: {},
    });
  });

  return {
    success: true,
    status: "PAID",
  };
};

// ============================================
// SUCCESS CALLBACK
// ============================================

const paymentSuccessService = async (
  data: Record<string, unknown>,
) => {
  try {
    const result = await verifyAndCompletePayment(data);

    if (result.status === "UNDER_REVIEW") {
      return {
        redirectUrl: `${config.frontend_url}/payment/under-review`,
      };
    }

    return {
      redirectUrl: `${config.frontend_url}/payment/success`,
    };
  } catch (error) {
    console.error(
      "[SSLCommerz] Success callback failed:",
      error,
    );

    return {
      redirectUrl: `${config.frontend_url}/payment/failed`,
    };
  }
};

// ============================================
// MARK PAYMENT FAILED
// ============================================

const markPaymentFailed = async (
  data: Record<string, unknown>,
) => {
  const tranId = String(data.tran_id || "");

  if (!tranId) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Transaction ID is missing",
    );
  }

  const payment = await prisma.payment.findUnique({
    where: {
      merchantInvoiceNumber: tranId,
    },
  });

  if (!payment) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Payment not found",
    );
  }

  // Never overwrite PAID or other non-pending states
  await prisma.payment.updateMany({
    where: {
      id: payment.id,
      status: PaymentStatus.PENDING,
    },
    data: {
      status: PaymentStatus.FAILED,
      gatewayResponse: data as Prisma.InputJsonValue,
    },
  });
};

// ============================================
// FAILURE CALLBACK
// ============================================

const paymentFailureService = async (
  data: Record<string, unknown>,
) => {
  try {
    await markPaymentFailed(data);
  } catch (error) {
    console.error(
      "[SSLCommerz] Failure callback error:",
      error,
    );
  }

  return {
    redirectUrl: `${config.frontend_url}/payment/failed`,
  };
};

// ============================================
// CANCEL CALLBACK
// ============================================

const paymentCancelService = async (
  data: Record<string, unknown>,
) => {
  try {
    await markPaymentFailed(data);
  } catch (error) {
    console.error(
      "[SSLCommerz] Cancel callback error:",
      error,
    );
  }

  return {
    redirectUrl: `${config.frontend_url}/payment/cancelled`,
  };
};

// ============================================
// IPN
// ============================================

const paymentIpnService = async (
  data: Record<string, unknown>,
) => {
  const status = String(data.status || "").toUpperCase();

  if (
    !["VALID", "VALIDATED"].includes(status) ||
    !data.val_id
  ) {
    return;
  }

  try {
    await verifyAndCompletePayment(data);
  } catch (error) {
    console.error(
      "[SSLCommerz] IPN processing failed:",
      error,
    );
  }
};

// ============================================
// ADMIN / MANAGER: APPROVE REVIEWED PAYMENT
// ============================================

const approveReviewedPaymentService = async (
  paymentId: string,
) => {
  const payment = await prisma.payment.findUnique({
    where: {
      id: paymentId,
    },
    include: {
      request: {
        include: {
          selectedQuotation: true,
        },
      },
      sslcommerzPayment: true,
    },
  });

  if (!payment) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Payment not found",
    );
  }

  const gatewayResponse =
    payment.gatewayResponse as Record<
      string,
      unknown
    > | null;

  if (
    payment.status !== PaymentStatus.PENDING ||
    !gatewayResponse ||
    gatewayResponse.reviewRequired !== true
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Payment is not waiting for review",
    );
  }

  const quotation = payment.request.selectedQuotation;

  if (!quotation) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Selected quotation not found",
    );
  }

  await prisma.$transaction(async (tx) => {
    // Atomically approve only a pending payment
    const paymentUpdate = await tx.payment.updateMany({
      where: {
        id: payment.id,
        status: PaymentStatus.PENDING,
      },
      data: {
        status: PaymentStatus.PAID,
        paidAt: new Date(),
        gatewayResponse: {
          ...gatewayResponse,
          reviewRequired: false,
          reviewApproved: true,
        } as Prisma.InputJsonValue,
      },
    });

    if (paymentUpdate.count === 0) {
      throw new AppError(
        httpStatus.CONFLICT,
        "Payment has already been processed",
      );
    }

    // Ensure the request is still awaiting payment completion
    const requestUpdate = await tx.workRequest.updateMany({
      where: {
        id: payment.requestId,
        status: WorkStatus.CITIZEN_ACCEPTED,
        selectedQuotationId: quotation.id,
      },
      data: {
        status: WorkStatus.ADVANCE_PAID,
      },
    });

    if (requestUpdate.count === 0) {
      throw new AppError(
        httpStatus.CONFLICT,
        "Work request status has changed",
      );
    }

    // Create assignment only once
    await tx.assignment.upsert({
      where: {
        requestId: payment.requestId,
      },
      create: {
        requestId: payment.requestId,
        staffId: quotation.staffId,
        citizenId: payment.request.citizenId,
        amount: quotation.proposedFee,
        advanceAmount: payment.amount,
        status: AssignmentStatus.ONGOING,
      },
      update: {},
    });
  });

  return {
    success: true,
  };
};

// ============================================
// GET PAYMENT BY ID
// ============================================

const getPaymentByIdService = async (
  id: string,
  user: RequestUser,
) => {
  const payment = await prisma.payment.findUnique({
    where: {
      id,
    },
    include: {
      sslcommerzPayment: true,
      request: {
        omit: {
          phone: true,
        },
      },
    },
  });

  if (!payment) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Payment not found",
    );
  }

  const isOwner =
    payment.request.citizenId === user.userId &&
    user.role === "CITIZEN";

  const isAdminOrManager =
    user.role === "ADMIN" ||
    user.role === "MANAGER";

  if (!isOwner && !isAdminOrManager) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You cannot view this payment",
    );
  }

  return payment;
};

// ============================================
// EXPORT SERVICES
// ============================================

export const paymentServices = {
  createPaymentService,
  paymentSuccessService,
  paymentFailureService,
  paymentCancelService,
  paymentIpnService,
  approveReviewedPaymentService,
  getPaymentByIdService,
};
