import { PaymentStatus, WorkStatus } from "../../../generated/prisma/enums";
import { RequestUser } from "../../middlewares/checkAuth";
import ICreatePayment from "./payment.interface";
declare const createPaymentService: (payload: ICreatePayment, user: RequestUser) => Promise<{
    paymentId: string;
    amount: string;
    paymentUrl: string;
}>;
declare const paymentSuccessService: (data: Record<string, unknown>) => Promise<{
    redirectUrl: string;
}>;
declare const paymentFailureService: (data: Record<string, unknown>) => Promise<{
    redirectUrl: string;
}>;
declare const paymentCancelService: (data: Record<string, unknown>) => Promise<{
    redirectUrl: string;
}>;
declare const paymentIpnService: (data: Record<string, unknown>) => Promise<void>;
declare const approveReviewedPaymentService: (paymentId: string) => Promise<{
    success: boolean;
}>;
declare const getPaymentByIdService: (id: string, user: RequestUser) => Promise<{
    request: {
        id: string;
        title: string;
        description: string;
        division: string;
        city: string;
        address: string;
        postalCode: string;
        phone: string;
        approvedFee: import("@prisma/client-runtime-utils").Decimal | null;
        status: WorkStatus;
        rejectionReason: string | null;
        citizenId: string;
        departmentId: string;
        selectedQuotationId: string | null;
        createdAt: Date;
        updatedAt: Date;
    };
    sslcommerzPayment: {
        id: string;
        paymentId: string;
        tranId: string;
        bankTranId: string | null;
        valId: string | null;
        cardType: string | null;
        cardIssuer: string | null;
        cardBrand: string | null;
        cardIssuerCountry: string | null;
        storeAmount: import("@prisma/client-runtime-utils").Decimal | null;
        gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    } | null;
} & {
    id: string;
    status: PaymentStatus;
    amount: import("@prisma/client-runtime-utils").Decimal;
    currency: string;
    paymentGateway: string;
    merchantInvoiceNumber: string;
    paidAt: Date | null;
    gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
    refundTrxId: string | null;
    refundAmount: import("@prisma/client-runtime-utils").Decimal | null;
    refundReason: string | null;
    refundedAt: Date | null;
    requestId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const paymentServices: {
    createPaymentService: typeof createPaymentService;
    paymentSuccessService: typeof paymentSuccessService;
    paymentFailureService: typeof paymentFailureService;
    paymentCancelService: typeof paymentCancelService;
    paymentIpnService: typeof paymentIpnService;
    approveReviewedPaymentService: typeof approveReviewedPaymentService;
    getPaymentByIdService: typeof getPaymentByIdService;
};
export {};
//# sourceMappingURL=payment.service.d.ts.map