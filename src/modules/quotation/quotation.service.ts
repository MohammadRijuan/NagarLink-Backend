import { QuotationStatus } from "../../../generated/prisma/enums";
import { QuotationWhereInput } from "../../../generated/prisma/models";
import { IQuery } from "../../interfaces";
import { prisma } from "../../lib/prisma";
import { RequestUser } from "../../middlewares/checkAuth";
import { AppError } from "../../utils/AppError";
import { ICreateQuotation, IUpdateQuotation } from "./quotation.interface";
import httpStatus from "http-status";

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
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Quotation not found",
    );
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
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Quotation not found",
    );
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
const deleteQuotationService = async (
  id: string,
  user: RequestUser,
) => {
  // 1. Check whether quotation exists and belongs to this staff
  const quotation = await prisma.quotation.findFirst({
    where: {
      id,
      staffId: user.userId,
    },
  });

  if (!quotation) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Quotation not found",
    );
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

export const quotationServices = {
  createQuotationService,
  getAllQuotationsService,
  getQuotationByIdService,
  updateQuotationService,
  updateQuotationStatusService,
  deleteQuotationService,
};
