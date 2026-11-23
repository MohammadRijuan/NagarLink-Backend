import { QuotationStatus, WorkStatus } from "../../../generated/prisma/enums";
import { IQuery } from "../../interfaces";
import { RequestUser } from "../../middlewares/checkAuth";
import { ICreateQuotation, IUpdateQuotation } from "./quotation.interface";
import ISelectQuotationPayload from "./quotation.interface";
declare const createQuotationService: (payload: ICreateQuotation, user: RequestUser) => Promise<{
    id: string;
    proposedFee: import("@prisma/client-runtime-utils").Decimal;
    status: QuotationStatus;
    requestId: string;
    staffId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getAllQuotationsService: (query: IQuery) => Promise<{
    data: ({
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
        staff: {
            id: string;
            name: string;
            email: string;
            needPasswordChange: boolean;
            emailVerified: boolean;
            googleId: string | null;
            authProvider: import("../../../generated/prisma/enums").AuthProvider;
            phone: string | null;
            role: import("../../../generated/prisma/enums").Role;
            division: string | null;
            district: string | null;
            address: string | null;
            postalCode: string | null;
            isActive: boolean;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        proposedFee: import("@prisma/client-runtime-utils").Decimal;
        status: QuotationStatus;
        requestId: string;
        staffId: string;
        createdAt: Date;
        updatedAt: Date;
    })[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
declare const getQuotationByIdService: (id: string, user: RequestUser) => Promise<{
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
    staff: {
        id: string;
        name: string;
        email: string;
        needPasswordChange: boolean;
        emailVerified: boolean;
        googleId: string | null;
        authProvider: import("../../../generated/prisma/enums").AuthProvider;
        phone: string | null;
        role: import("../../../generated/prisma/enums").Role;
        division: string | null;
        district: string | null;
        address: string | null;
        postalCode: string | null;
        isActive: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    proposedFee: import("@prisma/client-runtime-utils").Decimal;
    status: QuotationStatus;
    requestId: string;
    staffId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const updateQuotationService: (id: string, payload: IUpdateQuotation, user: RequestUser) => Promise<{
    id: string;
    proposedFee: import("@prisma/client-runtime-utils").Decimal;
    status: QuotationStatus;
    requestId: string;
    staffId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const updateQuotationStatusService: (id: string, payload: IUpdateQuotation, user: RequestUser) => Promise<{
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
    staff: {
        id: string;
        name: string;
        email: string;
        needPasswordChange: boolean;
        emailVerified: boolean;
        googleId: string | null;
        authProvider: import("../../../generated/prisma/enums").AuthProvider;
        phone: string | null;
        role: import("../../../generated/prisma/enums").Role;
        division: string | null;
        district: string | null;
        address: string | null;
        postalCode: string | null;
        isActive: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    proposedFee: import("@prisma/client-runtime-utils").Decimal;
    status: QuotationStatus;
    requestId: string;
    staffId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deleteQuotationService: (id: string, user: RequestUser) => Promise<{
    id: string;
    proposedFee: import("@prisma/client-runtime-utils").Decimal;
    status: QuotationStatus;
    requestId: string;
    staffId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const selectQuotationService: (payload: ISelectQuotationPayload, user: RequestUser) => Promise<{
    quotation: {
        id: string;
        proposedFee: import("@prisma/client-runtime-utils").Decimal;
        status: QuotationStatus;
        requestId: string;
        staffId: string;
        createdAt: Date;
        updatedAt: Date;
    };
    workRequest: {
        selectedQuotation: ({
            staff: {
                id: string;
                name: string;
                email: string;
                needPasswordChange: boolean;
                emailVerified: boolean;
                googleId: string | null;
                authProvider: import("../../../generated/prisma/enums").AuthProvider;
                phone: string | null;
                role: import("../../../generated/prisma/enums").Role;
                division: string | null;
                district: string | null;
                address: string | null;
                postalCode: string | null;
                isActive: boolean;
                isDeleted: boolean;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            proposedFee: import("@prisma/client-runtime-utils").Decimal;
            status: QuotationStatus;
            requestId: string;
            staffId: string;
            createdAt: Date;
            updatedAt: Date;
        }) | null;
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
        citizenId: string;
        departmentId: string;
        selectedQuotationId: string | null;
        createdAt: Date;
        updatedAt: Date;
    };
}>;
export declare const quotationServices: {
    createQuotationService: typeof createQuotationService;
    getAllQuotationsService: typeof getAllQuotationsService;
    getQuotationByIdService: typeof getQuotationByIdService;
    updateQuotationService: typeof updateQuotationService;
    updateQuotationStatusService: typeof updateQuotationStatusService;
    deleteQuotationService: typeof deleteQuotationService;
    selectQuotationService: typeof selectQuotationService;
};
export {};
//# sourceMappingURL=quotation.service.d.ts.map