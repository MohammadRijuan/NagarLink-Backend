import { AssignmentStatus } from "../../../generated/prisma/enums";
import { ICreateWorkAttachment, IDeleteWorkAttachment, IGetWorkAttachmentById, IGetWorkAttachments } from "./workAttachment.interface";
declare const createWorkAttachmentService: (payload: ICreateWorkAttachment) => Promise<{
    id: string;
    assignmentId: string;
    fileUrl: string;
    publicId: string;
    resourceType: string;
    fileType: string | null;
    fileName: string | null;
    createdAt: Date;
}>;
declare const getAllWorkAttachmentsService: (payload: IGetWorkAttachments) => Promise<{
    id: string;
    assignmentId: string;
    fileUrl: string;
    publicId: string;
    resourceType: string;
    fileType: string | null;
    fileName: string | null;
    createdAt: Date;
}[]>;
declare const getWorkAttachmentByIdService: (payload: IGetWorkAttachmentById) => Promise<{
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
    assignmentId: string;
    fileUrl: string;
    publicId: string;
    resourceType: string;
    fileType: string | null;
    fileName: string | null;
    createdAt: Date;
}>;
declare const deleteWorkAttachmentService: (payload: IDeleteWorkAttachment) => Promise<{
    id: string;
    assignmentId: string;
    fileUrl: string;
    publicId: string;
    resourceType: string;
    fileType: string | null;
    fileName: string | null;
    createdAt: Date;
}>;
export declare const workAttachmentServices: {
    createWorkAttachmentService: typeof createWorkAttachmentService;
    getAllWorkAttachmentsService: typeof getAllWorkAttachmentsService;
    getWorkAttachmentByIdService: typeof getWorkAttachmentByIdService;
    deleteWorkAttachmentService: typeof deleteWorkAttachmentService;
};
export {};
//# sourceMappingURL=workAttachment.service.d.ts.map