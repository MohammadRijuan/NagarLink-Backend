import { ICreateStaffApplication, IUpdateStaffApplication } from "./staffApplication.interface";
import { RequestUser } from "../../middlewares/checkAuth";
import { IQuery } from "../../interfaces";
import { Role, StaffApplicationStatus } from "../../../generated/prisma/enums";
declare const createStaffApplicationService: (payload: ICreateStaffApplication, user: RequestUser) => Promise<{
    applicant: {
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
    experience: number;
    experienceDetails: string;
    status: StaffApplicationStatus;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getAllStaffApplicationsService: (query: IQuery) => Promise<{
    data: ({
        applicant: {
            address: string | null;
            district: string | null;
            division: string | null;
            email: string;
            id: string;
            name: string;
            phone: string | null;
            postalCode: string | null;
            role: Role;
        };
    } & {
        id: string;
        experience: number;
        experienceDetails: string;
        status: StaffApplicationStatus;
        applicantId: string;
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
declare const getStaffApplicationByIdService: (id: string) => Promise<{
    applicant: {
        address: string | null;
        district: string | null;
        division: string | null;
        email: string;
        id: string;
        name: string;
        phone: string | null;
        postalCode: string | null;
        role: Role;
    };
} & {
    id: string;
    experience: number;
    experienceDetails: string;
    status: StaffApplicationStatus;
    applicantId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const updateStaffApplicationService: (id: string, payload: IUpdateStaffApplication) => Promise<{
    applicant: {
        address: string | null;
        district: string | null;
        division: string | null;
        email: string;
        id: string;
        name: string;
        phone: string | null;
        postalCode: string | null;
        role: Role;
    };
} & {
    id: string;
    experience: number;
    experienceDetails: string;
    status: StaffApplicationStatus;
    applicantId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deleteStaffApplicationService: (id: string) => Promise<{
    applicant: {
        id: string;
        name: string;
        email: string;
        needPasswordChange: boolean;
        emailVerified: boolean;
        googleId: string | null;
        authProvider: import("../../../generated/prisma/enums").AuthProvider;
        phone: string | null;
        role: Role;
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
    experience: number;
    experienceDetails: string;
    status: StaffApplicationStatus;
    applicantId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const staffApplicationServices: {
    createStaffApplicationService: typeof createStaffApplicationService;
    getAllStaffApplicationsService: typeof getAllStaffApplicationsService;
    getStaffApplicationByIdService: typeof getStaffApplicationByIdService;
    updateStaffApplicationService: typeof updateStaffApplicationService;
    deleteStaffApplicationService: typeof deleteStaffApplicationService;
};
export {};
//# sourceMappingURL=staffApplication.service.d.ts.map