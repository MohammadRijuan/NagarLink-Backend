"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const crypto_1 = require("crypto");
const client_1 = require("../../../generated/prisma/client");
const enums_1 = require("../../../generated/prisma/enums");
const prisma_1 = require("../../lib/prisma");
const sslcommerz_1 = require("../../lib/sslcommerz");
const AppError_1 = require("../../utils/AppError");
const config_1 = __importDefault(require("../../config"));
// ============================================
// HELPERS
// ============================================
const getAppUrl = () => {
    if (!config_1.default.app_url) {
        throw new AppError_1.AppError(http_status_1.default.INTERNAL_SERVER_ERROR, "APP_URL is not configured");
    }
    return config_1.default.app_url.replace(/\/+$/, "");
};
const getFrontendUrl = () => {
    if (!config_1.default.frontend_url) {
        throw new AppError_1.AppError(http_status_1.default.INTERNAL_SERVER_ERROR, "FRONTEND_URL is not configured");
    }
    return config_1.default.frontend_url.replace(/\/+$/, "");
};
const getValidationString = (value) => typeof value === "string" || typeof value === "number"
    ? String(value).trim()
    : "";
// ============================================
// CREATE PAYMENT
// ============================================
const createPaymentService = async (payload, user) => {
    const workRequest = await prisma_1.prisma.workRequest.findUnique({
        where: { id: payload.requestId },
        include: { selectedQuotation: true },
    });
    if (!workRequest) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Work request not found");
    }
    if (workRequest.citizenId !== user.userId) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to pay");
    }
    if (!workRequest.selectedQuotation ||
        workRequest.status !== enums_1.WorkStatus.CITIZEN_ACCEPTED) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "No accepted quotation found");
    }
    // Calculate 15% advance payment
    const amount = new client_1.Prisma.Decimal(workRequest.selectedQuotation.proposedFee)
        .mul(0.15)
        .toDecimalPlaces(2);
    if (amount.lessThan(10)) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Advance payment must be at least 10 BDT");
    }
    // Keep transaction ID within a shorter length
    const merchantInvoiceNumber = `NL-${(0, crypto_1.randomUUID)()
        .replace(/-/g, "")
        .slice(0, 24)}`;
    // Reserve a pending payment.
    // Serializable isolation helps prevent simultaneous requests
    // from creating multiple pending payments.
    const payment = await prisma_1.prisma.$transaction(async (tx) => {
        const paidPayment = await tx.payment.findFirst({
            where: {
                requestId: payload.requestId,
                status: enums_1.PaymentStatus.PAID,
            },
        });
        if (paidPayment) {
            throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "This work request has already been paid");
        }
        const pendingPayment = await tx.payment.findFirst({
            where: {
                requestId: payload.requestId,
                status: enums_1.PaymentStatus.PENDING,
            },
        });
        if (pendingPayment) {
            throw new AppError_1.AppError(http_status_1.default.CONFLICT, "A payment is already pending for this work request. Please check its status before trying again.");
        }
        return tx.payment.create({
            data: {
                requestId: payload.requestId,
                amount,
                merchantInvoiceNumber,
            },
        });
    }, {
        isolationLevel: client_1.Prisma.TransactionIsolationLevel.Serializable,
    });
    // Create SSLCommerz session
    // If the network fails, leave the payment pending.
    // The gateway might have created the session even if our request timed out.
    let session;
    try {
        session = await (0, sslcommerz_1.createSslCommerzSession)({
            total_amount: amount.toFixed(2),
            currency: "BDT",
            tran_id: merchantInvoiceNumber,
            success_url: `${getAppUrl()}/api/v1/payments/success`,
            fail_url: `${getAppUrl()}/api/v1/payments/failure`,
            cancel_url: `${getAppUrl()}/api/v1/payments/cancel`,
            ipn_url: `${getAppUrl()}/api/v1/payments/ipn`,
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
    }
    catch {
        throw new AppError_1.AppError(http_status_1.default.BAD_GATEWAY, "Unable to connect to SSLCommerz. Please check payment status before retrying.");
    }
    const gatewayUrl = session.GatewayPageURL;
    if (session.status !== "SUCCESS" || !gatewayUrl) {
        await prisma_1.prisma.payment.update({
            where: { id: payment.id },
            data: {
                status: enums_1.PaymentStatus.FAILED,
                gatewayResponse: session,
            },
        });
        throw new AppError_1.AppError(http_status_1.default.BAD_GATEWAY, session.failedreason || "Unable to initiate SSLCommerz payment");
    }
    // Save the initial gateway response and transaction ID
    await prisma_1.prisma.$transaction(async (tx) => {
        await tx.payment.update({
            where: { id: payment.id },
            data: {
                gatewayResponse: session,
            },
        });
        await tx.sslCommerzPayment.create({
            data: {
                paymentId: payment.id,
                tranId: merchantInvoiceNumber,
                gatewayResponse: session,
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
const verifyAndCompletePayment = async (data) => {
    const tranId = getValidationString(data.tran_id);
    const valId = getValidationString(data.val_id);
    if (!tranId || !valId) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Invalid payment callback");
    }
    // Find payment and its original SSLCommerz transaction record
    const payment = await prisma_1.prisma.payment.findUnique({
        where: {
            merchantInvoiceNumber: tranId,
        },
        include: {
            sslcommerzPayment: true,
            request: {
                include: {
                    selectedQuotation: true,
                },
            },
        },
    });
    if (!payment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Payment not found");
    }
    // Idempotency: already-paid payments should not be processed again
    if (payment.status === enums_1.PaymentStatus.PAID) {
        return { success: true };
    }
    if (payment.status !== enums_1.PaymentStatus.PENDING) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Payment is not pending");
    }
    // Ensure the transaction matches our stored transaction
    if (!payment.sslcommerzPayment ||
        payment.sslcommerzPayment.tranId !== tranId) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Payment transaction record does not match");
    }
    // Validate directly with SSLCommerz
    const validation = await (0, sslcommerz_1.validateSslCommerzPayment)(valId);
    const validationStatus = getValidationString(validation.status).toUpperCase();
    const validationTranId = getValidationString(validation.tran_id);
    const validationValId = getValidationString(validation.val_id);
    const validationCurrency = getValidationString(validation.currency ?? validation.currency_type).toUpperCase();
    const validationStoreId = getValidationString(validation.store_id);
    const validationAmount = getValidationString(validation.amount);
    let validAmount = false;
    if (validationAmount) {
        try {
            validAmount = new client_1.Prisma.Decimal(validationAmount).equals(payment.amount);
        }
        catch {
            validAmount = false;
        }
    }
    const validationProblems = [
        !["VALID", "VALIDATED"].includes(validationStatus) && "status",
        validationTranId !== tranId && "transaction ID",
        (validationValId && validationValId !== valId) && "validation ID",
        validationCurrency !== payment.currency.trim().toUpperCase() && "currency",
        (validationStoreId &&
            validationStoreId !== String(config_1.default.ssl_store_id ?? "").trim()) &&
            "store ID",
        !validAmount && "amount",
    ].filter(Boolean);
    if (validationProblems.length > 0) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, `SSLCommerz transaction validation failed: ${validationProblems.join(", ")}`);
    }
    // A risk-flagged payment must not automatically create an assignment.
    if (String(validation.risk_level) === "1") {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Payment requires additional risk review");
    }
    if (!payment.request.selectedQuotation) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Selected quotation not found");
    }
    // Complete payment and create assignment atomically
    await prisma_1.prisma.$transaction(async (tx) => {
        // Atomically claim the pending payment.
        // Only one callback can successfully change PENDING to PAID.
        const paymentUpdate = await tx.payment.updateMany({
            where: {
                id: payment.id,
                status: enums_1.PaymentStatus.PENDING,
            },
            data: {
                status: enums_1.PaymentStatus.PAID,
                paidAt: new Date(),
            },
        });
        if (paymentUpdate.count === 0) {
            const latestPayment = await tx.payment.findUnique({
                where: { id: payment.id },
            });
            if (latestPayment?.status === enums_1.PaymentStatus.PAID) {
                return;
            }
            throw new AppError_1.AppError(http_status_1.default.CONFLICT, "Payment has already been processed or is no longer pending");
        }
        const currentRequest = await tx.workRequest.findUnique({
            where: {
                id: payment.requestId,
            },
            include: {
                selectedQuotation: true,
            },
        });
        if (!currentRequest ||
            currentRequest.status !== enums_1.WorkStatus.CITIZEN_ACCEPTED ||
            !currentRequest.selectedQuotation) {
            throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Work request is not ready for assignment");
        }
        // Update SSLCommerz transaction details
        await tx.sslCommerzPayment.update({
            where: {
                paymentId: payment.id,
            },
            data: {
                valId,
                bankTranId: validation.bank_tran_id
                    ? String(validation.bank_tran_id)
                    : null,
                cardType: validation.card_type
                    ? String(validation.card_type)
                    : null,
                cardIssuer: validation.card_issuer
                    ? String(validation.card_issuer)
                    : null,
                cardBrand: validation.card_brand
                    ? String(validation.card_brand)
                    : null,
                cardIssuerCountry: validation.card_issuer_country
                    ? String(validation.card_issuer_country)
                    : null,
                storeAmount: validation.store_amount
                    ? new client_1.Prisma.Decimal(String(validation.store_amount))
                    : null,
                gatewayResponse: validation,
            },
        });
        // Update work request
        await tx.workRequest.update({
            where: {
                id: payment.requestId,
            },
            data: {
                status: enums_1.WorkStatus.ADVANCE_PAID,
            },
        });
        // Create assignment only once per work request
        await tx.assignment.upsert({
            where: {
                requestId: payment.requestId,
            },
            create: {
                requestId: payment.requestId,
                staffId: currentRequest.selectedQuotation.staffId,
                citizenId: currentRequest.citizenId,
                amount: currentRequest.selectedQuotation.proposedFee,
                advanceAmount: payment.amount,
                status: enums_1.AssignmentStatus.ONGOING,
            },
            update: {},
        });
    });
    return { success: true };
};
// ============================================
// SUCCESS CALLBACK
// ============================================
const paymentSuccessService = async (data) => {
    await verifyAndCompletePayment(data);
    return {
        redirectUrl: `${getFrontendUrl()}/payment/success`,
    };
};
// ============================================
// FAILURE CALLBACK
// ============================================
const paymentFailureService = async (_data) => {
    // Do not trust callback data to change payment status.
    // A delayed or forged failure callback must not overwrite
    // a payment that was actually successful.
    return {
        redirectUrl: `${getFrontendUrl()}/payment/failed`,
    };
};
// ============================================
// CANCEL CALLBACK
// ============================================
const paymentCancelService = async (_data) => {
    // Keep the payment pending until its actual gateway status
    // has been reconciled. Do not trust the browser callback.
    return {
        redirectUrl: `${getFrontendUrl()}/payment/cancelled`,
    };
};
// ============================================
// IPN
// ============================================
const paymentIpnService = async (data) => {
    const tranId = String(data.tran_id || "");
    const valId = String(data.val_id || "");
    if (!tranId || !valId) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Invalid SSLCommerz IPN data");
    }
    await verifyAndCompletePayment(data);
};
// ============================================
// GET PAYMENT BY ID
// ============================================
const getPaymentByIdService = async (id, user) => {
    const payment = await prisma_1.prisma.payment.findUnique({
        where: { id },
        include: {
            sslcommerzPayment: true,
            request: true,
        },
    });
    if (!payment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Payment not found");
    }
    if (payment.request.citizenId !== user.userId &&
        user.role !== "ADMIN" &&
        user.role !== "MANAGER") {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You cannot view this payment");
    }
    return payment;
};
// ============================================
// EXPORT SERVICES
// ============================================
exports.paymentServices = {
    createPaymentService,
    paymentSuccessService,
    paymentFailureService,
    paymentCancelService,
    paymentIpnService,
    getPaymentByIdService,
};
//# sourceMappingURL=payment.service.js.map