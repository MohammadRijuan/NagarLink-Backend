import { Role, WorkStatus } from "../../../generated/prisma/enums";
import { IQuery } from "../../interfaces";
import { RequestUser } from "../../middlewares/checkAuth";
import { ICreateWorkRequest, IUpdateWorkRequest, IUpdateWorkRequestStatus } from "./workRequest.interface";
declare const createWorkRequestService: (payload: ICreateWorkRequest, user: RequestUser) => Promise<{
    citizen: {
        email: string;
        name: string;
        role: Role;
    };
    department: {
        id: string;
        name: string;
    };
} & {
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
    selectedQuotationId: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getAllWorkRequestsService: (query: IQuery, user: RequestUser) => Promise<{
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
    data: ({
        citizen: {
            email: string;
            name: string;
            role: Role;
        };
        department: {
            id: string;
            name: string;
        };
    } & {
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
        selectedQuotationId: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[];
}>;
declare const getWorkRequestByIdService: (id: string, user: RequestUser) => Promise<{
    citizen: {
        id: string;
        name: string;
        role: Role;
    };
    department: {
        id: string;
        name: string;
    };
    payments: {
        id: string;
        status: import("../../../generated/prisma/enums").PaymentStatus;
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
    }[];
    quotations: {
        id: string;
        proposedFee: import("@prisma/client-runtime-utils").Decimal;
        status: import("../../../generated/prisma/enums").QuotationStatus;
        requestId: string;
        staffId: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
    staffInvitations: {
        id: string;
        requestId: string;
        staffId: string;
        status: import("../../../generated/prisma/enums").InvitationStatus;
        responseNote: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
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
    selectedQuotationId: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const updateWorkRequestService: (id: string, payload: IUpdateWorkRequest, user: RequestUser) => Promise<{
    citizen: {
        id: string;
        name: string;
        role: Role;
    };
    department: {
        id: string;
        name: string;
    };
} & {
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
    departmentId: string;
    selectedQuotationId: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const updateWorkRequestStatusService: (id: string, payload: IUpdateWorkRequestStatus, user: RequestUser) => Promise<{
    citizen: {
        id: string;
        name: string;
        role: Role;
    };
    department: {
        id: string;
        name: string;
    };
} & {
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
    departmentId: string;
    selectedQuotationId: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deleteWorkRequestService: (id: string, user: RequestUser) => Promise<{
    department: {
        id: string;
        name: string;
    };
} & {
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
    departmentId: string;
    selectedQuotationId: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const workRequestServices: {
    createWorkRequestService: typeof createWorkRequestService;
    getAllWorkRequestsService: typeof getAllWorkRequestsService;
    getWorkRequestByIdService: typeof getWorkRequestByIdService;
    updateWorkRequestService: typeof updateWorkRequestService;
    updateWorkRequestStatusService: typeof updateWorkRequestStatusService;
    deleteWorkRequestService: typeof deleteWorkRequestService;
};
export {};
//# sourceMappingURL=workRequest.service.d.ts.map