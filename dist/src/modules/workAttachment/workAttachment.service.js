"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workAttachmentServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const enums_1 = require("../../../generated/prisma/enums");
const prisma_1 = require("../../lib/prisma");
const cloudinary_1 = require("../../lib/cloudinary");
const AppError_1 = require("../../utils/AppError");
// Upload file to Cloudinary
const uploadToCloudinary = async (file) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary_1.cloudinary.uploader.upload_stream({
            folder: "nagarlink/work-attachments",
            resource_type: "auto",
        }, (error, result) => {
            if (error || !result) {
                return reject(error || new Error("Cloudinary upload failed"));
            }
            resolve({
                secure_url: result.secure_url,
                public_id: result.public_id,
                resource_type: result.resource_type,
            });
        });
        stream.end(file.buffer);
    });
};
// Check whether user is allowed to access the assignment
const checkAssignmentAccess = (assignment, user) => {
    const isParticipant = assignment.staffId === user.userId ||
        assignment.citizenId === user.userId;
    const isManagerOrAdmin = user.role === enums_1.Role.MANAGER || user.role === enums_1.Role.ADMIN;
    if (!isParticipant && !isManagerOrAdmin) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to access this attachment");
    }
};
// 1. Create attachment
const createWorkAttachmentService = async (payload) => {
    const { assignmentId, file, user } = payload;
    if (!file) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Please upload a file");
    }
    const assignment = await prisma_1.prisma.assignment.findUnique({
        where: {
            id: assignmentId,
        },
    });
    if (!assignment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Assignment not found");
    }
    if (assignment.staffId !== user.userId) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "Only the assigned staff can upload attachments");
    }
    if (assignment.status !== enums_1.AssignmentStatus.ONGOING) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Attachments can only be uploaded while the assignment is ongoing");
    }
    const uploadedFile = await uploadToCloudinary(file);
    try {
        const result = await prisma_1.prisma.workAttachment.create({
            data: {
                assignmentId,
                fileUrl: uploadedFile.secure_url,
                fileName: file.originalname,
                fileType: file.mimetype,
                publicId: uploadedFile.public_id,
                resourceType: uploadedFile.resource_type,
            },
        });
        return result;
    }
    catch (error) {
        // Remove uploaded file if database creation fails
        await cloudinary_1.cloudinary.uploader.destroy(uploadedFile.public_id, {
            resource_type: uploadedFile.resource_type,
        });
        throw error;
    }
};
// 2. Get all attachments of an assignment
const getAllWorkAttachmentsService = async (payload) => {
    const { assignmentId, user } = payload;
    const assignment = await prisma_1.prisma.assignment.findUnique({
        where: {
            id: assignmentId,
        },
    });
    if (!assignment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Assignment not found");
    }
    checkAssignmentAccess(assignment, user);
    const result = await prisma_1.prisma.workAttachment.findMany({
        where: {
            assignmentId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
};
// 3. Get attachment by ID
const getWorkAttachmentByIdService = async (payload) => {
    const { attachmentId, user } = payload;
    const attachment = await prisma_1.prisma.workAttachment.findUnique({
        where: {
            id: attachmentId,
        },
        include: {
            assignment: true,
        },
    });
    if (!attachment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Attachment not found");
    }
    checkAssignmentAccess(attachment.assignment, user);
    return attachment;
};
// 4. Delete attachment
const deleteWorkAttachmentService = async (payload) => {
    const { attachmentId, user } = payload;
    const attachment = await prisma_1.prisma.workAttachment.findUnique({
        where: {
            id: attachmentId,
        },
        include: {
            assignment: true,
        },
    });
    if (!attachment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Attachment not found");
    }
    const isStaffOwner = attachment.assignment.staffId === user.userId;
    const isManagerOrAdmin = user.role === enums_1.Role.MANAGER || user.role === enums_1.Role.ADMIN;
    if (!isStaffOwner && !isManagerOrAdmin) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to delete this attachment");
    }
    if (isStaffOwner &&
        attachment.assignment.status !== enums_1.AssignmentStatus.ONGOING) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "You cannot delete attachments after submitting completion");
    }
    // Delete file from Cloudinary
    await cloudinary_1.cloudinary.uploader.destroy(attachment.publicId, {
        resource_type: attachment.resourceType,
    });
    // Delete attachment record from database
    const result = await prisma_1.prisma.workAttachment.delete({
        where: {
            id: attachmentId,
        },
    });
    return result;
};
// Export all services in one object
exports.workAttachmentServices = {
    createWorkAttachmentService,
    getAllWorkAttachmentsService,
    getWorkAttachmentByIdService,
    deleteWorkAttachmentService,
};
//# sourceMappingURL=workAttachment.service.js.map