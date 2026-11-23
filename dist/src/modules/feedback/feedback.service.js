"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const enums_1 = require("../../../generated/prisma/enums");
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
// ============================================
// CREATE FEEDBACK
// ============================================
const createFeedbackService = async (payload, user) => {
    const { assignmentId, rating, comment } = payload;
    // Validate rating
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Rating must be between 1 and 5");
    }
    // Find assignment
    const assignment = await prisma_1.prisma.assignment.findUnique({
        where: {
            id: assignmentId,
        },
    });
    if (!assignment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Assignment not found");
    }
    // Only assigned citizen can submit feedback
    if (assignment.citizenId !== user.userId) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "Only the citizen of this assignment can submit feedback");
    }
    // Assignment must be completed
    if (assignment.status !== enums_1.AssignmentStatus.COMPLETED) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Feedback can only be submitted after assignment completion");
    }
    // Check existing feedback
    const existingFeedback = await prisma_1.prisma.feedback.findUnique({
        where: {
            assignmentId,
        },
    });
    if (existingFeedback) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "Feedback has already been submitted for this assignment");
    }
    const result = await prisma_1.prisma.feedback.create({
        data: {
            assignmentId,
            citizenId: user.userId,
            rating,
            comment: comment ?? null,
        },
        include: {
            citizen: {
                omit: {
                    password: true,
                },
            },
            assignment: true,
        },
    });
    return result;
};
// ============================================
// GET MY FEEDBACK
// ============================================
const getMyFeedbackService = async (user) => {
    const result = await prisma_1.prisma.feedback.findMany({
        where: {
            citizenId: user.userId,
        },
        include: {
            assignment: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
};
// ============================================
// GET FEEDBACK RECEIVED BY STAFF
// ============================================
const getStaffFeedbackService = async (staffId, user) => {
    // Staff can view only their own feedback
    if (user.role === enums_1.Role.STAFF && user.userId !== staffId) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You can only view your own feedback");
    }
    // Only staff, manager and admin can access
    if (user.role !== enums_1.Role.STAFF &&
        user.role !== enums_1.Role.MANAGER &&
        user.role !== enums_1.Role.ADMIN) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to view staff feedback");
    }
    const result = await prisma_1.prisma.feedback.findMany({
        where: {
            assignment: {
                staffId,
            },
        },
        include: {
            citizen: {
                select: {
                    id: true,
                    name: true,
                },
            },
            assignment: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
};
// ============================================
// GET ALL FEEDBACK (MANAGER / ADMIN)
// ============================================
const getAllFeedbackService = async (user) => {
    if (user.role !== enums_1.Role.MANAGER && user.role !== enums_1.Role.ADMIN) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "Only managers and admins can view all feedback");
    }
    const result = await prisma_1.prisma.feedback.findMany({
        include: {
            citizen: {
                select: {
                    id: true,
                    name: true,
                },
            },
            assignment: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
};
// ============================================
// EXPORT SERVICES
// ============================================
exports.feedbackServices = {
    createFeedbackService,
    getMyFeedbackService,
    getStaffFeedbackService,
    getAllFeedbackService,
};
//# sourceMappingURL=feedback.service.js.map