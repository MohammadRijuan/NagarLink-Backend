import { Role, WorkStatus } from "../../../generated/prisma/enums";
import { WorkRequestWhereInput } from "../../../generated/prisma/models";
import { IQuery } from "../../interfaces";
import { prisma } from "../../lib/prisma";
import { RequestUser } from "../../middlewares/checkAuth";
import { AppError } from "../../utils/AppError";
import {
  ICreateWorkRequest,
  IUpdateWorkRequest,
  IUpdateWorkRequestStatus,
} from "./workRequest.interface";
import httpStatus from "http-status";
const createWorkRequestService = async (
  payload: ICreateWorkRequest,
  user: RequestUser,
) => {
  const citizen = await prisma.user.findUnique({
    where: {
      id: user.userId,
    },
  });

  if (!citizen) {
    throw new AppError(httpStatus.NOT_FOUND, "Citizen not found");
  }

  const division = payload.division || citizen.division;
  const city = payload.city || citizen.district;
  const postalCode = payload.postalCode || citizen.postalCode;
  const address = payload.address || citizen.address;
  const phone = payload.phone || citizen.phone;

  if (!division || !city || !postalCode || !address || !phone) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Please provide your complete address and contact information",
    );
  }

  const existingRequest = await prisma.workRequest.findFirst({
    where: {
      citizenId: user.userId,
      title: payload.title,
      description: payload.description,
      departmentId: payload.departmentId,
      division,
      city,
      postalCode,
      address,
      phone,
      status: WorkStatus.PENDING,
    },
  });

  if (existingRequest) {
    throw new AppError(
      httpStatus.CONFLICT,
      "You have already submitted this request",
    );
  }

  const workRequest = await prisma.workRequest.create({
    data: {
      title: payload.title,
      description: payload.description,
      departmentId: payload.departmentId,
      division,
      city,
      postalCode,
      address,
      phone,
      citizenId: user.userId,
    },
    omit: {
      citizenId: true,
      departmentId: true,
    },
    include: {
      citizen: {
        select: {
          name: true,
          email: true,
          role: true,
        },
      },
      department: true,
    },
  });

  return workRequest;
};

const getAllWorkRequestsService = async (query: IQuery, user: RequestUser) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;

  const andConditions: WorkRequestWhereInput[] = [];

  // Citizen can see only their own requests
  if (user.role === Role.CITIZEN) {
    andConditions.push({
      citizenId: user.userId,
    });
  }

  // Search by title or description
  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          title: {
            contains: query.searchTerm as string,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: query.searchTerm as string,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  // Filter by status
  if (query.status) {
    andConditions.push({
      status: query.status as WorkStatus,
    });
  }

  const whereConditions: WorkRequestWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.workRequest.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: {
      [query.sortBy || "createdAt"]: query.sortOrder || "desc",
    },
    omit: {
      citizenId: true,
      departmentId: true,
    },
    include: {
      citizen: {
        select: {
          name: true,
          email: true,
          role: true,
        },
      },
      department: true,
    },
  });

  const total = await prisma.workRequest.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: result,
  };
};

const getWorkRequestByIdService = async (id: string, user: RequestUser) => {
  const workRequest = await prisma.workRequest.findUnique({
    where: {
      id,
    },
    omit: {
      citizenId: true,
      departmentId: true,
    },
    include: {
      citizen: {
        select: {
          id: true,
          name: true,
          role: true,
        },
      },
      department: true,
      quotations: true,
      staffInvitations: true,
      payments: true,
    },
  });

  if (!workRequest) {
    throw new AppError(httpStatus.NOT_FOUND, "Work request not found");
  }

  // Citizen can only view their own request
  if (user.role === Role.CITIZEN && workRequest.citizen.id !== user.userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to view this work request",
    );
  }

  return workRequest;
};

const updateWorkRequestService = async (
  id: string,
  payload: IUpdateWorkRequest,
  user: RequestUser,
) => {
  const workRequest = await prisma.workRequest.findFirst({
    where: {
      id,
      citizenId: user.userId,
    },
  });

  if (!workRequest) {
    throw new AppError(httpStatus.NOT_FOUND, "Work request not found");
  }

  if (workRequest.status !== WorkStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You cannot update this request anymore",
    );
  }

  const result = await prisma.workRequest.update({
    where: {
      id,
    },
    data: payload,
    omit: {
      citizenId: true,
    },
    include: {
      citizen: {
        select: {
          id: true,
          name: true,
          role: true,
        },
      },
      department: true,
    },
  });

  return result;
};

const updateWorkRequestStatusService = async (
  id: string,
  payload: IUpdateWorkRequestStatus,
  user: RequestUser,
) => {
  const workRequest = await prisma.workRequest.findUnique({
    where: {
      id,
    },
  });

  if (!workRequest) {
    throw new AppError(httpStatus.NOT_FOUND, "Work request not found");
  }
  

  if (workRequest.status !== WorkStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Work request status cannot be changed",
    );
  }

  if (payload.status === WorkStatus.REJECTED && !payload.rejectionReason) {
    throw new AppError(httpStatus.BAD_REQUEST, "Rejection reason is required");
  }

  const result = await prisma.workRequest.update({
    where: {
      id,
    },
    data: {
      status: payload.status,
      rejectionReason:
        payload.status === WorkStatus.REJECTED ? payload.rejectionReason! : null,
    },
    omit: {
      citizenId: true,
    },
    include: {
      citizen: {
        select: {
          id: true,
          name: true,
          role: true,
        },
      },
      department: true,
    },
  });

  return result;
};

const deleteWorkRequestService = async (
  id: string,
  user: RequestUser
) => {
  const workRequest = await prisma.workRequest.findFirst({
    where: {
      id,
      citizenId: user.userId,
    },
  });

  if (!workRequest) {
    throw new AppError(httpStatus.NOT_FOUND, "Work request not found");
  }

  if (workRequest.status !== WorkStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You cannot delete this work request anymore"
    );
  }

  const result = await prisma.workRequest.delete({
    where: { id },
    omit: { citizenId: true },
    include: {
      department: true,
    },
  });

  return result;
};

export const workRequestServices = {
  createWorkRequestService,
  getAllWorkRequestsService,
  getWorkRequestByIdService,
  updateWorkRequestService,
  updateWorkRequestStatusService,
  deleteWorkRequestService,
};
