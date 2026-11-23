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

const PENDING_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes

// ============================================
// CREATE PAYMENT
// ============================================

const createPaymentService = async (
  payload: ICreatePayment,
  user: RequestUser,
) => {
  const workRequest = await prisma.workRequest.findUnique({
    where: { id: payload.requestId },
    include: { selectedQuotation: true },
  });

  if (!workRequest) {
    throw new AppError(httpStatus.NOT_FOUND, "Work request not found");
  }

  if (workRequest.citizenId !== user.userId) {
    throw new AppError(httpStatus.FORBIDDEN, "You are not allowed to pay");
  }

  if (
    !workRequest.selectedQuotation ||
    workRequest.status !== WorkStatus.CITIZEN_ACCEPTED
  ) {
    throw new AppError(httpStatus.BAD_REQUEST, "No accepted quotation found");
  }

  // Already paid?
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

  // Existing pending payment?
  const pendingPayment = await prisma.payment.findFirst({
    where: {
      requestId: payload.requestId,
      status: PaymentStatus.PENDING,
    },
  });

  if (pendingPayment) {
    // A payment held for manual review must never be expired or duplicated
    const gatewayResponse = pendingPayment.gatewayResponse as Record<
      string,
      unknown
    > | null;

    if (gatewayResponse && gatewayResponse.reviewRequired === true) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Your previous payment is under review. Please wait for verification.",
      );
    }

    const paymentAge = Date.now() - pendingPayment.createdAt.getTime();

    if (paymentAge < PENDING_EXPIRY_MS) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "A payment session is already active. Please try again later.",
      );
    }

    // Expire the stale pending payment
    await prisma.payment.updateMany({
      where: { id: pendingPayment.id, status: PaymentStatus.PENDING },
      data: { status: PaymentStatus.FAILED },
    });
  }

  // 15% advance payment
  const amount = new Prisma.Decimal(workRequest.selectedQuotation.proposedFee)
    .mul(0.15)
    .toDecimalPlaces(2);

  if (amount.lessThan(10)) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Advance payment must be at least 10 BDT",
    );
  }

  const merchantInvoiceNumber = `NL-${randomUUID()}`;

  // Create pending payment
  const payment = await prisma.payment.create({
    data: {
      requestId: payload.requestId,
      amount,
      merchantInvoiceNumber,
    },
  });

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
    console.error("[SSLCommerz] Session creation error:", error);

    await prisma.payment.update({
      where: { id: payment.id },
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
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: PaymentStatus.FAILED,
        gatewayResponse: session as Prisma.InputJsonValue,
      },
    });

    throw new AppError(
      httpStatus.BAD_GATEWAY,
      session.failedreason || "Unable to initiate SSLCommerz payment",
    );
  }

  // Save gateway response and transaction record
  await prisma.$transaction(async (tx) => {
    await tx.payment.update({
      where: { id: payment.id },
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
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid payment callback");
  }

  // 1. Find payment
  const payment = await prisma.payment.findUnique({
    where: { merchantInvoiceNumber: tranId },
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
    throw new AppError(httpStatus.NOT_FOUND, "Payment not found");
  }

  // 2. Idempotency: already completed
  if (payment.status === PaymentStatus.PAID) {
    return { success: true, status: "PAID" };
  }

  if (payment.status !== PaymentStatus.PENDING) {
    throw new AppError(httpStatus.BAD_REQUEST, "Payment is not pending");
  }

  // 3. Check transaction ID against saved gateway record
  if (
    payment.sslcommerzPayment &&
    payment.sslcommerzPayment.tranId !== tranId
  ) {
    throw new AppError(httpStatus.BAD_REQUEST, "Transaction ID mismatch");
  }

  // 4. Validate directly with SSLCommerz (the real security check)
  const validation = await validateSslCommerzPayment(valId);

  // 5. Run checks
  const validStatus = ["VALID", "VALIDATED"].includes(
    String(validation.status).toUpperCase(),
  );

  const validTranId = validation.tran_id === tranId;

  const validCurrency =
    String(validation.currency).toUpperCase() ===
    payment.currency.toUpperCase();

  const validAmount =
    validation.amount !== undefined &&
    new Prisma.Decimal(String(validation.amount)).equals(payment.amount);

  // The validation API may not return store_id, so fall back to the callback
  const receivedStoreId = String(validation.store_id || data.store_id || "");
  const validStoreId = receivedStoreId === String(config.ssl_store_id);

  if (!config.ssl_is_live) {
    console.log("[SSLCommerz] Validation checks:", {
      tranId,
      validStatus,
      validTranId,
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
  // risk_level 1 = flagged by SSLCommerz. The payment itself is valid, but the
  // merchant should review it before delivering the service.
  const isRisky = String(validation.risk_level) === "1";

  if (isRisky && config.ssl_is_live) {
    // Production: keep payment PENDING and flag it for manual review
    await prisma.payment.updateMany({
      where: { id: payment.id, status: PaymentStatus.PENDING },
      data: {
        gatewayResponse: {
          ...(validation as Record<string, unknown>),
          reviewRequired: true,
        } as Prisma.InputJsonValue,
      },
    });

    console.warn(
      `[SSLCommerz] Payment ${tranId} flagged risky, held for manual review`,
    );

    return { success: false, status: "UNDER_REVIEW" };
  }

  if (isRisky) {
    console.warn(
      "[SSLCommerz] Risky transaction accepted because SSL_IS_LIVE=false",
    );
  }

  if (!payment.request.selectedQuotation) {
    throw new AppError(httpStatus.BAD_REQUEST, "Selected quotation not found");
  }

  // 7. Complete payment atomically
  await prisma.$transaction(async (tx) => {
    const currentPayment = await tx.payment.findUnique({
      where: { id: payment.id },
    });

    // Another request (IPN or success callback) already completed it
    if (!currentPayment || currentPayment.status === PaymentStatus.PAID) {
      return;
    }

    if (currentPayment.status !== PaymentStatus.PENDING) {
      throw new AppError(httpStatus.BAD_REQUEST, "Payment is not pending");
    }

    const currentRequest = await tx.workRequest.findUnique({
      where: { id: payment.requestId },
      include: { selectedQuotation: true },
    });

    if (
      !currentRequest ||
      currentRequest.status !== WorkStatus.CITIZEN_ACCEPTED ||
      !currentRequest.selectedQuotation
    ) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Work request is not ready for assignment",
      );
    }

    const storeAmount = validation.store_amount
      ? new Prisma.Decimal(String(validation.store_amount))
      : null;

    // Mark payment as paid
    await tx.payment.update({
      where: { id: payment.id },
      data: {
        status: PaymentStatus.PAID,
        paidAt: new Date(),
        gatewayResponse: validation as Prisma.InputJsonValue,
      },
    });

    // Update SSLCommerz transaction record
    await tx.sslCommerzPayment.upsert({
      where: { paymentId: payment.id },
      create: {
        paymentId: payment.id,
        tranId,
        valId,
        bankTranId: String(validation.bank_tran_id || ""),
        cardType: String(validation.card_type || ""),
        cardIssuer: String(validation.card_issuer || ""),
        cardBrand: String(validation.card_brand || ""),
        cardIssuerCountry: String(validation.card_issuer_country || ""),
        storeAmount,
        gatewayResponse: validation as Prisma.InputJsonValue,
      },
      update: {
        valId,
        bankTranId: String(validation.bank_tran_id || ""),
        cardType: String(validation.card_type || ""),
        cardIssuer: String(validation.card_issuer || ""),
        cardBrand: String(validation.card_brand || ""),
        cardIssuerCountry: String(validation.card_issuer_country || ""),
        storeAmount,
        gatewayResponse: validation as Prisma.InputJsonValue,
      },
    });

    // Update work request status
    await tx.workRequest.update({
      where: { id: payment.requestId },
      data: {
        status: WorkStatus.ADVANCE_PAID,
      },
    });

    // Create assignment only once
    await tx.assignment.upsert({
      where: { requestId: payment.requestId },
      create: {
        requestId: payment.requestId,
        staffId: currentRequest.selectedQuotation.staffId,
        citizenId: currentRequest.citizenId,
        amount: currentRequest.selectedQuotation.proposedFee,
        advanceAmount: payment.amount,
        status: AssignmentStatus.ONGOING,
      },
      update: {},
    });
  });

  return { success: true, status: "PAID" };
};

// ============================================
// SUCCESS CALLBACK
// ============================================

const paymentSuccessService = async (data: Record<string, unknown>) => {
  try {
    const result = await verifyAndCompletePayment(data);

    if (result.status === "UNDER_REVIEW") {
      return { redirectUrl: `${config.frontend_url}/payment/under-review` };
    }

    return { redirectUrl: `${config.frontend_url}/payment/success` };
  } catch (error) {
    // This is a browser redirect, so never return JSON to the user
    console.error("[SSLCommerz] Success callback failed:", error);
    return { redirectUrl: `${config.frontend_url}/payment/failed` };
  }
};

// ============================================
// FAILURE CALLBACK
// ============================================

const markPaymentFailed = async (data: Record<string, unknown>) => {
  const tranId = String(data.tran_id || "");

  if (!tranId) {
    throw new AppError(httpStatus.BAD_REQUEST, "Transaction ID is missing");
  }

  const payment = await prisma.payment.findUnique({
    where: { merchantInvoiceNumber: tranId },
  });

  if (!payment) {
    throw new AppError(httpStatus.NOT_FOUND, "Payment not found");
  }

  // Never overwrite a successful payment
  if (payment.status === PaymentStatus.PENDING) {
    await prisma.payment.updateMany({
      where: { id: payment.id, status: PaymentStatus.PENDING },
      data: {
        status: PaymentStatus.FAILED,
        gatewayResponse: data as Prisma.InputJsonValue,
      },
    });
  }
};

const paymentFailureService = async (data: Record<string, unknown>) => {
  try {
    await markPaymentFailed(data);
  } catch (error) {
    console.error("[SSLCommerz] Failure callback error:", error);
  }

  return { redirectUrl: `${config.frontend_url}/payment/failed` };
};

// ============================================
// CANCEL CALLBACK
// ============================================

const paymentCancelService = async (data: Record<string, unknown>) => {
  try {
    await markPaymentFailed(data);
  } catch (error) {
    console.error("[SSLCommerz] Cancel callback error:", error);
  }

  return { redirectUrl: `${config.frontend_url}/payment/cancelled` };
};

// ============================================
// IPN (server-to-server)
// ============================================

const paymentIpnService = async (data: Record<string, unknown>) => {
  const status = String(data.status || "").toUpperCase();

  if (!["VALID", "VALIDATED"].includes(status) || !data.val_id) {
    return;
  }

  try {
    await verifyAndCompletePayment(data);
  } catch (error) {
    // Do not throw: it would make SSLCommerz keep retrying
    console.error("[SSLCommerz] IPN processing failed:", error);
  }
};

// ============================================
// ADMIN: APPROVE A PAYMENT HELD FOR REVIEW
// ============================================

const approveReviewedPaymentService = async (paymentId: string) => {
  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: {
      request: { include: { selectedQuotation: true } },
      sslcommerzPayment: true,
    },
  });

  if (!payment) {
    throw new AppError(httpStatus.NOT_FOUND, "Payment not found");
  }

  const gatewayResponse = payment.gatewayResponse as Record<
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

  if (!payment.request.selectedQuotation) {
    throw new AppError(httpStatus.BAD_REQUEST, "Selected quotation not found");
  }

  const quotation = payment.request.selectedQuotation;

  await prisma.$transaction(async (tx) => {
    await tx.payment.update({
      where: { id: payment.id },
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

    await tx.workRequest.update({
      where: { id: payment.requestId },
      data: { status: WorkStatus.ADVANCE_PAID },
    });

    await tx.assignment.upsert({
      where: { requestId: payment.requestId },
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

  return { success: true };
};

// ============================================
// GET PAYMENT
// ============================================

const getPaymentByIdService = async (id: string, user: RequestUser) => {
  const payment = await prisma.payment.findUnique({
    where: { id },
    include: {
      sslcommerzPayment: true,
      request: true,
    },
  });

  if (!payment) {
    throw new AppError(httpStatus.NOT_FOUND, "Payment not found");
  }

  if (
    payment.request.citizenId !== user.userId &&
    user.role !== "ADMIN" &&
    user.role !== "MANAGER"
  ) {
    throw new AppError(httpStatus.FORBIDDEN, "You cannot view this payment");
  }

  return payment;
};

export const paymentServices = {
  createPaymentService,
  paymentSuccessService,
  paymentFailureService,
  paymentCancelService,
  paymentIpnService,
  approveReviewedPaymentService,
  getPaymentByIdService,
};