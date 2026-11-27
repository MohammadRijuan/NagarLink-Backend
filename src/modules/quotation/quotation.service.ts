
import httpStatus from "http-status";
import {
  PaymentStatus,
  QuotationStatus,
  Role,
  WorkStatus,
} from "../../../generated/prisma/enums";

import { prisma } from "../../lib/prisma";
import { RequestUser } from "../../middlewares/checkAuth";
import { AppError } from "../../utils/AppError";
import {
  omitPhoneAndPassword,
  projectQuotationContacts,
  projectSelectedQuotation,
} from "../../utils/contactPrivacy";

import ISelectQuotationPayload, {
  ICreateQuotation,
  IUpdateQuotation,
} from "./quotation.interface";

// 1. Create quotation
const createQuotationService = async (
  payload: ICreateQuotation,
  user: RequestUser,
) => {
  const { requestId, proposedFee } = payload;

  const request = await prisma.workRequest.findUnique({
    where: {
      id: requestId,
    },
  });

  if (!request) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Work request not found",
    );
  }

  const existingQuotation = await prisma.quotation.findFirst({
    where: {
      requestId,
      staffId: user.userId,
    },
  });

  if (existingQuotation) {
    throw new AppError(
      httpStatus.CONFLICT,
      "You have already submitted a quotation for this request",
    );
  }

  const result = await prisma.quotation.create({
    data: {
      requestId,
      proposedFee,
      staffId: user.userId,
    },
  });

  return result;
};

// 2. Get all quotations
const getAllQuotationsService = async (query: any) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const where = {
    ...(query.status
      ? {
          status: query.status,
        }
      : {}),
  };

  const [data, total] = await prisma.$transaction([
    prisma.quotation.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        staff: {
          omit: {
            password: true,
          },
        },
        request: {
          omit: {
            phone: true,
          },
        },
      },
    }),
    prisma.quotation.count({
      where,
    }),
  ]);

  return {
    data: data.map((quotation) => ({
      ...quotation,
      staff: omitPhoneAndPassword(quotation.staff),
    })),
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

// 3. Get quotation by ID
const getQuotationByIdService = async (
  id: string,
  user: RequestUser,
) => {
  const quotation = await prisma.quotation.findUnique({
    where: {
      id,
    },
    include: {
      staff: {
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
          assignment: {
            select: {
              staffId: true,
            },
          },
        },
      },
    },
  });

  if (!quotation) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Quotation not found",
    );
  }

  if (
    user.role === Role.STAFF &&
    quotation.staffId !== user.userId
  ) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to access this quotation",
    );
  }

  return projectQuotationContacts(quotation, user);
};

// 4. Update quotation
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
      "Quotation not found or you are not its owner",
    );
  }

  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Only pending quotations can be updated",
    );
  }

  // Staff can update the proposed fee only.
  // Status changes are handled by Admin/Manager.
  if (payload.status !== undefined) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Staff cannot update quotation status",
    );
  }

  if (payload.proposedFee === undefined) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Proposed fee is required",
    );
  }

  const result = await prisma.quotation.update({
    where: {
      id,
    },
    data: {
      proposedFee: payload.proposedFee,
    },
  });

  return result;
};

// 5. Update quotation status (Admin/Manager)
const updateQuotationStatusService = async (
  id: string,
  payload: { status: QuotationStatus },
  user: RequestUser,
) => {
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

  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Only pending quotations can be reviewed",
    );
  }

  const result = await prisma.quotation.update({
    where: {
      id,
    },
    data: {
      status: payload.status,
    },
    include: {
      staff: {
        omit: {
          password: true,
        },
      },
      request: {
        omit: {
          phone: true,
        },
      },
    },
  });

  return {
    ...result,
    staff: omitPhoneAndPassword(result.staff),
  };
};

// 6. Delete quotation (Admin)
const deleteQuotationService = async (
  id: string,
  user: RequestUser,
) => {
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

  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Only pending quotations can be deleted",
    );
  }

  const result = await prisma.quotation.delete({
    where: {
      id,
    },
  });

  return result;
};

// 7. Citizen selects a quotation
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
      staff: {
        omit: {
          password: true,
        },
      },
    },
  });

  if (!quotation) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Quotation not found",
    );
  }

  if (quotation.request.citizenId !== user.userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to select this quotation",
    );
  }

  if (quotation.status !== QuotationStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This quotation is not available for selection",
    );
  }

  if (quotation.request.selectedQuotationId) {
    throw new AppError(
      httpStatus.CONFLICT,
      "A quotation has already been selected",
    );
  }

  if (quotation.request.status !== WorkStatus.REQUESTED) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This work request is not ready for quotation selection",
    );
  }

  const result = await prisma.$transaction(async (tx) => {
    // Atomically reserve the request for this quotation
    const requestUpdate = await tx.workRequest.updateMany({
      where: {
        id: quotation.requestId,
        citizenId: user.userId,
        selectedQuotationId: null,
        status: WorkStatus.REQUESTED,
      },
      data: {
        selectedQuotationId: quotation.id,
        status: WorkStatus.CITIZEN_ACCEPTED,
      },
    });

    if (requestUpdate.count === 0) {
      throw new AppError(
        httpStatus.CONFLICT,
        "A quotation has already been selected or the request has changed",
      );
    }

    // Approve selected quotation
    await tx.quotation.update({
      where: {
        id: quotation.id,
      },
      data: {
        status: QuotationStatus.APPROVED,
      },
    });

    // Reject other pending quotations for this request
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

    // Return selected quotation without participant phone numbers
    return tx.quotation.findUniqueOrThrow({
      where: {
        id: quotation.id,
      },
      include: {
        staff: {
          omit: {
            password: true,
          },
        },
        request: {
          omit: {
            phone: true,
          },
        },
      },
    });
  });

  return projectSelectedQuotation(result);
};

// Export all quotation services
export const quotationServices = {
  createQuotationService,
  getAllQuotationsService,
  getQuotationByIdService,
  updateQuotationService,
  updateQuotationStatusService,
  deleteQuotationService,
  selectQuotationService,
};
