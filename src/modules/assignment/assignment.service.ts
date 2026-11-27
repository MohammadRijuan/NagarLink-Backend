
import httpStatus from "http-status";
import {
  AssignmentStatus,
  PaymentStatus,
  Role,
} from "../../../generated/prisma/enums";

import { prisma } from "../../lib/prisma";
import { RequestUser } from "../../middlewares/checkAuth";
import { AppError } from "../../utils/AppError";
import { projectAssignmentContacts } from "../../utils/contactPrivacy";

import { IReviewAssignmentPayload } from "./assignment.interface";

// Shared Prisma relations for assignment responses
const assignmentInclude = {
  staff: {
    omit: {
      password: true,
    },
  },
  citizen: {
    omit: {
      password: true,
    },
  },
  request: {
    include: {
      payments: {
        where: {
          status: PaymentStatus.PAID,
        },
        select: {
          id: true,
          status: true,
        },
      },
    },
  },
  attachments: true,
};

// 1. Get assignments according to logged-in user
const getMyAssignmentsService = async (user: RequestUser) => {
  let where = {};

  if (user.role === Role.CITIZEN) {
    where = {
      citizenId: user.userId,
    };
  } else if (user.role === Role.STAFF) {
    where = {
      staffId: user.userId,
    };
  }

  const result = await prisma.assignment.findMany({
    where,
    include: assignmentInclude,
    orderBy: {
      createdAt: "desc",
    },
  });

  return result.map((assignment) =>
    projectAssignmentContacts(assignment, user),
  );
};

// 2. Get assignment by ID
const getAssignmentByIdService = async (
  id: string,
  user: RequestUser,
) => {
  const assignment = await prisma.assignment.findUnique({
    where: {
      id,
    },
    include: assignmentInclude,
  });

  if (!assignment) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Assignment not found",
    );
  }

  const isParticipant =
    assignment.citizenId === user.userId ||
    assignment.staffId === user.userId;

  const isManagerOrAdmin =
    user.role === Role.MANAGER ||
    user.role === Role.ADMIN;

  if (!isParticipant && !isManagerOrAdmin) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to access this assignment",
    );
  }

  return projectAssignmentContacts(assignment, user);
};

// 3. Staff submits assignment completion
const submitAssignmentCompletionService = async (
  id: string,
  user: RequestUser,
) => {
  const assignment = await prisma.assignment.findUnique({
    where: {
      id,
    },
    include: {
      attachments: true,
    },
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
      "Only ongoing assignments can be submitted",
    );
  }

  if (assignment.attachments.length === 0) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Please upload at least one attachment before submitting",
    );
  }

  const result = await prisma.assignment.update({
    where: {
      id,
    },
    data: {
      status: AssignmentStatus.COMPLETION_SUBMITTED,
    },
    include: assignmentInclude,
  });

  return projectAssignmentContacts(result, user);
};

// 4. Manager/Admin reviews submitted completion
const reviewAssignmentCompletionService = async (
  id: string,
  payload: IReviewAssignmentPayload,
  user: RequestUser,
) => {
  if (
    user.role !== Role.MANAGER &&
    user.role !== Role.ADMIN
  ) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "Only managers and admins can review assignments",
    );
  }

  const assignment = await prisma.assignment.findUnique({
    where: {
      id,
    },
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
      "This assignment has not been submitted for review",
    );
  }

  if (
    payload.status !== AssignmentStatus.COMPLETED &&
    payload.status !== AssignmentStatus.ONGOING
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Invalid assignment review status",
    );
  }

  const result = await prisma.assignment.update({
    where: {
      id,
    },
    data: {
      status: payload.status,
    },
    include: assignmentInclude,
  });

  return projectAssignmentContacts(result, user);
};

// Export services
export const assignmentServices = {
  getMyAssignmentsService,
  getAssignmentByIdService,
  submitAssignmentCompletionService,
  reviewAssignmentCompletionService,
};
