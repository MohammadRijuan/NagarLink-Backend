import httpStatus from "http-status";
import { AssignmentStatus, Role } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { RequestUser } from "../../middlewares/checkAuth";
import { AppError } from "../../utils/AppError";
import { ICreateFeedbackPayload } from "./feedback.interface";

// ============================================
// CREATE FEEDBACK
// ============================================

const createFeedbackService = async (
  payload: ICreateFeedbackPayload,
  user: RequestUser,
) => {
  const { assignmentId, rating, comment } = payload;

  // Validate rating
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Rating must be between 1 and 5",
    );
  }

  // Find assignment
  const assignment = await prisma.assignment.findUnique({
    where: {
      id: assignmentId,
    },
  });

  if (!assignment) {
    throw new AppError(httpStatus.NOT_FOUND, "Assignment not found");
  }

  // Only assigned citizen can submit feedback
  if (assignment.citizenId !== user.userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "Only the citizen of this assignment can submit feedback",
    );
  }

  // Assignment must be completed
  if (assignment.status !== AssignmentStatus.COMPLETED) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Feedback can only be submitted after assignment completion",
    );
  }

  // Check existing feedback
  const existingFeedback = await prisma.feedback.findUnique({
    where: {
      assignmentId,
    },
  });

  if (existingFeedback) {
    throw new AppError(
      httpStatus.CONFLICT,
      "Feedback has already been submitted for this assignment",
    );
  }

  const result = await prisma.feedback.create({
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

const getMyFeedbackService = async (user: RequestUser) => {
  const result = await prisma.feedback.findMany({
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

const getStaffFeedbackService = async (staffId: string, user: RequestUser) => {
  // Staff can view only their own feedback
  if (user.role === Role.STAFF && user.userId !== staffId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You can only view your own feedback",
    );
  }

  // Only staff, manager and admin can access
  if (
    user.role !== Role.STAFF &&
    user.role !== Role.MANAGER &&
    user.role !== Role.ADMIN
  ) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to view staff feedback",
    );
  }

  const result = await prisma.feedback.findMany({
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

const getAllFeedbackService = async (user: RequestUser) => {
  if (user.role !== Role.MANAGER && user.role !== Role.ADMIN) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "Only managers and admins can view all feedback",
    );
  }

  const result = await prisma.feedback.findMany({
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

export const feedbackServices = {
  createFeedbackService,
  getMyFeedbackService,
  getStaffFeedbackService,
  getAllFeedbackService,
};
