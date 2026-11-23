"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const enums_1 = require("../../../generated/prisma/enums");
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
// ============================================
// GET MY ASSIGNMENTS
// ============================================
const getMyAssignmentsService = async (user) => {
    const where = user.role === enums_1.Role.CITIZEN
        ? { citizenId: user.userId }
        : user.role === enums_1.Role.STAFF
            ? { staffId: user.userId }
            : {};
    const assignments = await prisma_1.prisma.assignment.findMany({
        where,
        include: {
            staff: {
                omit: { password: true },
            },
            citizen: {
                omit: { password: true },
            },
            request: true,
            attachments: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return assignments;
};
// ============================================
// GET ASSIGNMENT BY ID
// ============================================
const getAssignmentByIdService = async (id, user) => {
    const assignment = await prisma_1.prisma.assignment.findUnique({
        where: { id },
        include: {
            staff: {
                omit: { password: true },
            },
            citizen: {
                omit: { password: true },
            },
            request: true,
            attachments: true,
        },
    });
    if (!assignment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Assignment not found");
    }
    const isOwner = assignment.citizenId === user.userId ||
        assignment.staffId === user.userId;
    const isAdminOrManager = user.role === enums_1.Role.ADMIN ||
        user.role === enums_1.Role.MANAGER;
    if (!isOwner && !isAdminOrManager) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to view this assignment");
    }
    return assignment;
};
// ============================================
// STAFF SUBMITS WORK COMPLETION
// ============================================
const submitAssignmentCompletionService = async (id, user) => {
    const assignment = await prisma_1.prisma.assignment.findUnique({
        where: { id },
    });
    if (!assignment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Assignment not found");
    }
    if (assignment.staffId !== user.userId) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "Only the assigned staff can submit completion");
    }
    if (assignment.status !== enums_1.AssignmentStatus.ONGOING) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Only ongoing assignments can be submitted for completion");
    }
    // At least one attachment is required
    const attachmentCount = await prisma_1.prisma.workAttachment.count({
        where: {
            assignmentId: id,
        },
    });
    if (attachmentCount === 0) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Please upload at least one attachment before submitting completion");
    }
    const updatedAssignment = await prisma_1.prisma.assignment.update({
        where: { id },
        data: {
            status: enums_1.AssignmentStatus.COMPLETION_SUBMITTED,
        },
        include: {
            staff: {
                omit: { password: true },
            },
            citizen: {
                omit: { password: true },
            },
            request: true,
            attachments: true,
        },
    });
    return updatedAssignment;
};
// ============================================
// MANAGER/ADMIN REVIEWS COMPLETION
// ============================================
const reviewAssignmentCompletionService = async (id, payload, user) => {
    // Only manager and admin can review
    if (user.role !== enums_1.Role.MANAGER &&
        user.role !== enums_1.Role.ADMIN) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "Only managers and admins can review completion");
    }
    // Validate review status
    if (payload.status !== "COMPLETED" &&
        payload.status !== "ONGOING") {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Invalid review status. Use COMPLETED or ONGOING");
    }
    const assignment = await prisma_1.prisma.assignment.findUnique({
        where: { id },
    });
    if (!assignment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Assignment not found");
    }
    if (assignment.status !==
        enums_1.AssignmentStatus.COMPLETION_SUBMITTED) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "This assignment has not been submitted for completion");
    }
    const updatedAssignment = await prisma_1.prisma.assignment.update({
        where: { id },
        data: {
            status: payload.status === "COMPLETED"
                ? enums_1.AssignmentStatus.COMPLETED
                : enums_1.AssignmentStatus.ONGOING,
        },
        include: {
            staff: {
                omit: { password: true },
            },
            citizen: {
                omit: { password: true },
            },
            request: true,
            attachments: true,
        },
    });
    return updatedAssignment;
};
// ============================================
// EXPORT SERVICES
// ============================================
exports.assignmentServices = {
    getMyAssignmentsService,
    getAssignmentByIdService,
    submitAssignmentCompletionService,
    reviewAssignmentCompletionService,
};
//# sourceMappingURL=assignment.service.js.map