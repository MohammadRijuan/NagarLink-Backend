import { AssignmentStatus, Role } from "../../../generated/prisma/enums";
import { RequestUser } from "../../middlewares/checkAuth";
import { ICreateFeedbackPayload } from "./feedback.interface";
declare const createFeedbackService: (payload: ICreateFeedbackPayload, user: RequestUser) => Promise<{
    assignment: {
        id: string;
        status: AssignmentStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        advanceAmount: import("@prisma/client-runtime-utils").Decimal;
        requestId: string;
        staffId: string;
        citizenId: string;
        createdAt: Date;
        updatedAt: Date;
    };
    citizen: {
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
    rating: number;
    comment: string | null;
    assignmentId: string;
    citizenId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getMyFeedbackService: (user: RequestUser) => Promise<({
    assignment: {
        id: string;
        status: AssignmentStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        advanceAmount: import("@prisma/client-runtime-utils").Decimal;
        requestId: string;
        staffId: string;
        citizenId: string;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    rating: number;
    comment: string | null;
    assignmentId: string;
    citizenId: string;
    createdAt: Date;
    updatedAt: Date;
})[]>;
declare const getStaffFeedbackService: (staffId: string, user: RequestUser) => Promise<({
    assignment: {
        id: string;
        status: AssignmentStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        advanceAmount: import("@prisma/client-runtime-utils").Decimal;
        requestId: string;
        staffId: string;
        citizenId: string;
        createdAt: Date;
        updatedAt: Date;
    };
    citizen: {
        id: string;
        name: string;
    };
} & {
    id: string;
    rating: number;
    comment: string | null;
    assignmentId: string;
    citizenId: string;
    createdAt: Date;
    updatedAt: Date;
})[]>;
declare const getAllFeedbackService: (user: RequestUser) => Promise<({
    assignment: {
        id: string;
        status: AssignmentStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        advanceAmount: import("@prisma/client-runtime-utils").Decimal;
        requestId: string;
        staffId: string;
        citizenId: string;
        createdAt: Date;
        updatedAt: Date;
    };
    citizen: {
        id: string;
        name: string;
    };
} & {
    id: string;
    rating: number;
    comment: string | null;
    assignmentId: string;
    citizenId: string;
    createdAt: Date;
    updatedAt: Date;
})[]>;
export declare const feedbackServices: {
    createFeedbackService: typeof createFeedbackService;
    getMyFeedbackService: typeof getMyFeedbackService;
    getStaffFeedbackService: typeof getStaffFeedbackService;
    getAllFeedbackService: typeof getAllFeedbackService;
};
export {};
//# sourceMappingURL=feedback.service.d.ts.map