import { InvitationStatus, WorkStatus } from "../../../generated/prisma/enums";
import { IQuery } from "../../interfaces";
import { RequestUser } from "../../middlewares/checkAuth";
import { ICreateStaffInvitation, IRespondToInvitation } from "./staffInvitation.interface";
declare const createStaffInvitationService: (payload: ICreateStaffInvitation, user: RequestUser) => Promise<{
    id: string;
    requestId: string;
    staffId: string;
    status: InvitationStatus;
    responseNote: string | null;
    createdAt: Date;
    updatedAt: Date;
    staff: {
        department: string | undefined;
        categories: string[];
        address: string | null;
        district: string | null;
        division: string | null;
        email: string;
        id: string;
        name: string;
        postalCode: string | null;
        staffCategories: ({
            category: {
                department: {
                    name: string;
                };
            } & {
                id: string;
                name: string;
                departmentId: string;
            };
        } & {
            id: string;
            staffId: string;
            categoryId: string;
        })[];
    };
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
}>;
declare const getAllStaffInvitationsService: (query: IQuery, user: RequestUser) => Promise<{
    data: ({
        request: {
            description: string;
            id: string;
            status: WorkStatus;
            title: string;
        };
        staff: {
            email: string;
            id: string;
            name: string;
        };
    } & {
        id: string;
        requestId: string;
        staffId: string;
        status: InvitationStatus;
        responseNote: string | null;
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
declare const getMyInvitationsService: (query: IQuery, user: RequestUser) => Promise<{
    data: ({
        request: {
            address: string;
            city: string;
            department: {
                name: string;
            };
            description: string;
            division: string;
            id: string;
            postalCode: string;
            status: WorkStatus;
            title: string;
        };
    } & {
        id: string;
        requestId: string;
        staffId: string;
        status: InvitationStatus;
        responseNote: string | null;
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
declare const getStaffInvitationByIdService: (id: string, user: RequestUser) => Promise<{
    request: {
        citizen: {
            email: string;
            id: string;
            name: string;
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
        citizenId: string;
        departmentId: string;
        selectedQuotationId: string | null;
        createdAt: Date;
        updatedAt: Date;
    };
    staff: {
        address: string | null;
        district: string | null;
        division: string | null;
        email: string;
        id: string;
        name: string;
        postalCode: string | null;
    };
} & {
    id: string;
    requestId: string;
    staffId: string;
    status: InvitationStatus;
    responseNote: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const respondToInvitationService: (id: string, payload: IRespondToInvitation, user: RequestUser) => Promise<{
    request: {
        id: string;
        status: WorkStatus;
        title: string;
    };
} & {
    id: string;
    requestId: string;
    staffId: string;
    status: InvitationStatus;
    responseNote: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deleteStaffInvitationService: (id: string, user: RequestUser) => Promise<{
    request: {
        id: string;
        title: string;
    };
    staff: {
        email: string;
        id: string;
        name: string;
    };
} & {
    id: string;
    requestId: string;
    staffId: string;
    status: InvitationStatus;
    responseNote: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const staffInvitationServices: {
    createStaffInvitationService: typeof createStaffInvitationService;
    getAllStaffInvitationsService: typeof getAllStaffInvitationsService;
    getMyInvitationsService: typeof getMyInvitationsService;
    getStaffInvitationByIdService: typeof getStaffInvitationByIdService;
    respondToInvitationService: typeof respondToInvitationService;
    deleteStaffInvitationService: typeof deleteStaffInvitationService;
};
export {};
//# sourceMappingURL=staffInvitation.service.d.ts.map