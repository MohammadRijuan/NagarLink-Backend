import { randomUUID } from "crypto";
import { Prisma } from "../../../generated/prisma/client";
import {
  AssignmentStatus,
  PaymentStatus,
  QuotationStatus,
  WorkStatus,
} from "../../../generated/prisma/enums";
import { QuotationWhereInput } from "../../../generated/prisma/models";
import config from "../../config";
import { IQuery } from "../../interfaces";
import { getBkashIdToken } from "../../lib/bkash";
import { prisma } from "../../lib/prisma";
import { RequestUser } from "../../middlewares/checkAuth";
import { AppError } from "../../utils/AppError";
import IPaySelectedQuotationPayload, {
  ICreateQuotation,
  IUpdateQuotation,
} from "./quotation.interface";
import httpStatus from "http-status";
import axios from "axios";
import ISelectQuotationPayload from "./quotation.interface";

// Create Quotation
const createQuotationService = async (
  payload: ICreateQuotation,
  user: RequestUser,
) => {
  const quotation = await prisma.quotation.findFirst({
    where: {
      requestId: payload.requestId,
      staffId: user.userId,
    },
  });

  if (quotation) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You have already submitted a quotation for this request",
    );
  }

  // 2. Create quotation
  const result = await prisma.quotation.create({
    data: {
      proposedFee: payload.proposedFee,
      requestId: payload.requestId,
      staffId: user.userId,
    },
  });

  return result;
};

// Get All Quotations
const getAllQuotationsService = async (query: IQuery) => {
  // Pagination
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;

  // Sorting
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";

  // Filtering
  const andConditions: QuotationWhereInput[] = [];

  if (query.status) {
    andConditions.push({
      status: query.status as QuotationStatus,
    });
  }

  // Get quotations
  const quotations = await prisma.quotation.findMany({
    where: {
      AND: andConditions,
    },
    take: limit,
    skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      staff: {
        omit: {
          password: true,
        },
      },
      request: true,
    },
  });

  // Count total quotations
  const total = await prisma.quotation.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    data: quotations,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

// Get Quotation By ID
const getQuotationByIdService = async (id: string, user: RequestUser) => {
  const quotation = await prisma.quotation.findFirst({
    where: {
      id,
      staffId: user.userId,
    },
    include: {
      staff: {
        omit: {
          password: true,
        },
      },
      request: true,
    },
  });

  if (!quotation) {
    throw new AppError(httpStatus.NOT_FOUND, "Quotation not found");
  }

  return quotation;
};

// Update Quotation
const updateQuotationService = async (
  id: string,
  payload: IUpdateQuotation,
  user: RequestUser,
) => {
  const quotation = await prisma.quotation.findFirst({
    where: {
      id,
      staffId: user.userId,
    },
  });

  if (!quotation) {
    throw new AppError(httpStatus.NOT_FOUND, "Quotation not found");
  }

  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You cannot update an approved or rejected quotation",
    );
  }

  // 3. Update quotation
  const result = await prisma.quotation.update({
    where: {
      id,
    },
    data: {
      proposedFee: payload.proposedFee!,
    },
  });

  return result;
};

// Update Quotation Status
// Update Quotation Status
const updateQuotationStatusService = async (
  id: string,
  payload: IUpdateQuotation,
  user: RequestUser,
) => {
  // 1. Check whether quotation exists
  const quotation = await prisma.quotation.findUnique({
    where: {
      id,
    },
  });

  if (!quotation) {
    throw new AppError(httpStatus.NOT_FOUND, "Quotation not found");
  }

  // 2. Check whether quotation is already processed
  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Quotation status has already been updated",
    );
  }

  // 3. Update quotation status
  const result = await prisma.quotation.update({
    where: {
      id,
    },
    data: {
      status: payload.status!,
    },
    include: {
      staff: {
        omit: {
          password: true,
        },
      },
      request: true,
    },
  });

  return result;
};

// Delete Quotation
// Delete Quotation
const deleteQuotationService = async (id: string, user: RequestUser) => {
  // 1. Check whether quotation exists and belongs to this staff
  const quotation = await prisma.quotation.findFirst({
    where: {
      id,
      staffId: user.userId,
    },
  });

  if (!quotation) {
    throw new AppError(httpStatus.NOT_FOUND, "Quotation not found");
  }

  // 2. Check whether quotation is pending
  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You cannot delete an approved or rejected quotation",
    );
  }

  // 3. Delete quotation
  const result = await prisma.quotation.delete({
    where: {
      id,
    },
  });

  return result;
};



// Select Quotation by Citizen
const selectQuotationService = async (
  payload: ISelectQuotationPayload,
  user: RequestUser,
) => {
  const quotation = await prisma.quotation.findUnique({
    where: {
      id: payload.quotationId,
    },
    include: {
      request: true,
    },
  });

  if (!quotation) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Quotation not found",
    );
  }

  // Only the owner of the work request can select a quotation
  if (quotation.request.citizenId !== user.userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to select this quotation",
    );
  }

  // Only pending quotations can be selected
  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This quotation is no longer available",
    );
  }

  // Prevent selecting another quotation after one is selected
  if (quotation.request.selectedQuotationId) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "A quotation has already been selected",
    );
  }

  if (quotation.request.status !== WorkStatus.REQUESTED) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This work request is not available for quotation selection",
    );
  }

  const result = await prisma.$transaction(async (tx) => {
    // Approve selected quotation
    const selectedQuotation = await tx.quotation.update({
      where: {
        id: quotation.id,
      },
      data: {
        status: QuotationStatus.APPROVED,
      },
    });

    // Reject other quotations for this request
    await tx.quotation.updateMany({
      where: {
        requestId: quotation.requestId,
        id: {
          not: quotation.id,
        },
        status: QuotationStatus.PENDING,
      },
      data: {
        status: QuotationStatus.REJECTED,
      },
    });

    // Save selected quotation and update work request status
    const updatedRequest = await tx.workRequest.update({
      where: {
        id: quotation.requestId,
      },
      data: {
        selectedQuotationId: quotation.id,
        status: WorkStatus.CITIZEN_ACCEPTED,
      },
      include: {
        selectedQuotation: {
          include: {
            staff: {
              omit: {
                password: true,
              },
            },
          },
        },
      },
    });

    return {
      quotation: selectedQuotation,
      workRequest: updatedRequest,
    };
  });

  return result;
};


export const quotationServices = {
  createQuotationService,
  getAllQuotationsService,
  getQuotationByIdService,
  updateQuotationService,
  updateQuotationStatusService,
  deleteQuotationService,
  selectQuotationService,              
  // paySelectedQuotationCallbackService,       //bkash
};
