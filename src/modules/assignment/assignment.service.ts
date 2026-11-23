
import httpStatus from "http-status";
import {
  AssignmentStatus,
  Role,
} from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { RequestUser } from "../../middlewares/checkAuth";
import { AppError } from "../../utils/AppError";
import { IReviewAssignmentPayload } from "./assignment.interface";

// ============================================
// GET MY ASSIGNMENTS
// ============================================

const getMyAssignmentsService = async (user: RequestUser) => {
  const where =
    user.role === Role.CITIZEN
      ? { citizenId: user.userId }
      : user.role === Role.STAFF
        ? { staffId: user.userId }
        : {};

  const assignments = await prisma.assignment.findMany({
    where,
    include: {
      staff: {
        omit: { password: true },
      },
      citizen: {
        omit: { password: true },
      },
      request: true,
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

const getAssignmentByIdService = async (
  id: string,
  user: RequestUser,
) => {
  const assignment = await prisma.assignment.findUnique({
    where: { id },
    include: {
      staff: {
        omit: { password: true },
      },
      citizen: {
        omit: { password: true },
      },
      request: true,
    },
  });

  if (!assignment) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Assignment not found",
    );
  }

  const isOwner =
    assignment.citizenId === user.userId ||
    assignment.staffId === user.userId;

  const isAdminOrManager =
    user.role === Role.ADMIN ||
    user.role === Role.MANAGER;

  if (!isOwner && !isAdminOrManager) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to view this assignment",
    );
  }

  return assignment;
};

// ============================================
// STAFF SUBMITS WORK COMPLETION
// ============================================

const submitAssignmentCompletionService = async (
  id: string,
  user: RequestUser,
) => {
  const assignment = await prisma.assignment.findUnique({
    where: { id },
  });

  if (!assignment) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Assignment not found",
    );
  }

  if (assignment.staffId !== user.userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "Only the assigned staff can submit completion",
    );
  }

  if (assignment.status !== AssignmentStatus.ONGOING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Only ongoing assignments can be submitted for completion",
    );
  }

  const updatedAssignment = await prisma.assignment.update({
    where: { id },
    data: {
      status: AssignmentStatus.COMPLETION_SUBMITTED,
    },
    include: {
      staff: {
        omit: { password: true },
      },
      citizen: {
        omit: { password: true },
      },
      request: true,
    },
  });

  return updatedAssignment;
};

// ============================================
// MANAGER/ADMIN REVIEWS COMPLETION
// ============================================

const reviewAssignmentCompletionService = async (
  id: string,
  payload: IReviewAssignmentPayload,
) => {
  const assignment = await prisma.assignment.findUnique({
    where: { id },
  });

  if (!assignment) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Assignment not found",
    );
  }

  if (
    assignment.status !==
    AssignmentStatus.COMPLETION_SUBMITTED
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This assignment has not been submitted for completion",
    );
  }

  const updatedAssignment = await prisma.assignment.update({
    where: { id },
    data: {
      status:
        payload.status === "COMPLETED"
          ? AssignmentStatus.COMPLETED
          : AssignmentStatus.ONGOING,
    },
    include: {
      staff: {
        omit: { password: true },
      },
      citizen: {
        omit: { password: true },
      },
      request: true,
    },
  });

  return updatedAssignment;
};

export const assignmentServices = {
  getMyAssignmentsService,
  getAssignmentByIdService,
  submitAssignmentCompletionService,
  reviewAssignmentCompletionService,
};
