import httpStatus from "http-status";

import {
  ICreateStaffApplication,
  IUpdateStaffApplication,
} from "./staffApplication.interface";
import { RequestUser } from "../../middlewares/checkAuth";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import { IQuery } from "../../interfaces";
import { StaffApplicationWhereInput } from "../../../generated/prisma/models";
import { Role, StaffApplicationStatus } from "../../../generated/prisma/enums";

// Create Staff Application
const createStaffApplicationService = async (
  payload: ICreateStaffApplication,
  user: RequestUser,
) => {
  const existingApplication = await prisma.staffApplication.findUnique({
    where: {
      applicantId: user.userId,
    },
  });

  if (existingApplication) {
    throw new AppError(
      httpStatus.CONFLICT,
      "You have already submitted a staff application",
    );
  }

  const result = await prisma.$transaction(async (tx) => {
    // Update the applicant's profile
    await tx.user.update({
      where: {
        id: user.userId,
      },
      data: {
        division: payload.division,
        district: payload.district,
        address: payload.address,
        postalCode: payload.postalCode,
      },
    });

    // Create staff application
    return await tx.staffApplication.create({
      data: {
        experience: payload.experience,
        experienceDetails: payload.experienceDetails,
        applicantId: user.userId,
      },
      omit: {
        applicantId: true,
      },
      include: {
        applicant: {
          select: {
            id: true,
            name: true,
            email: true,
            division: true,
            district: true,
            address: true,
            postalCode: true,
          },
        },
      },
    });
  });

  return result;
};

// Get All Staff Applications

const getAllStaffApplicationsService = async (query: IQuery) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";

  const andConditions: StaffApplicationWhereInput[] = [];

  if (query.status) {
    andConditions.push({
      status: query.status as StaffApplicationStatus,
    });
  }

  if (query.searchTerm) {
    andConditions.push({
      applicant: {
        is: {
          OR: [
            {
              name: {
                contains: query.searchTerm,
                mode: "insensitive",
              },
            },
            {
              email: {
                contains: query.searchTerm,
                mode: "insensitive",
              },
            },
          ],
        },
      },
    });
  }

  const applications = await prisma.staffApplication.findMany({
    where: {
      AND: andConditions,
    },
    take: limit,
    skip,
    orderBy: { [sortBy]: sortOrder },
    include: {
      applicant: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          phone: true,
          division: true,
          district: true,
          address: true,
          postalCode: true,
        },
      },
    },
  });

  const total = await prisma.staffApplication.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    data: applications,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

// Get Single Staff Application
const getStaffApplicationByIdService = async (id: string) => {
  const result = await prisma.staffApplication.findUnique({
    where: {
      id,
    },
    include: {
      applicant: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          phone: true,
          division: true,
          district: true,
          address: true,
          postalCode: true,
        },
      },
    },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Staff application not found");
  }

  return result;
};

// Update Staff Application
const updateStaffApplicationService = async (
  id: string,
  payload: IUpdateStaffApplication,
) => {
  const isExist = await prisma.staffApplication.findUnique({
    where: {
      id,
    },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Staff application not found");
  }

  // Prevent processing an already reviewed application
  if (isExist.status !== StaffApplicationStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This application has already been reviewed",
    );
  }

  //for multiple update we will use transaction otherwise we need separate api
  const result = await prisma.$transaction(async (tx) => {
    // Update applicant role only when application is approved
    if (payload.status === StaffApplicationStatus.APPROVED) {
      await tx.user.update({
        where: {
          id: isExist.applicantId,
        },
        data: {
          role: Role.STAFF,
        },
      });
    } else if (payload.status === StaffApplicationStatus.REJECTED) {
      await tx.user.update({
        where: {
          id: isExist.applicantId,
        },
        data: {
          role: Role.CITIZEN,
        },
      });
    }

    // Update application status
    return await tx.staffApplication.update({
      where: {
        id,
      },
      data: {
        status: payload.status,
      },
      include: {
        applicant: {
          //   omit: {
          //     password: true,
          //   },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            division: true,
            district: true,
            address: true,
            postalCode: true,
          },
        },
      },
    });
  });

  return result;
};

// Delete Staff Application
const deleteStaffApplicationService = async (id: string) => {
  const isExist = await prisma.staffApplication.findUnique({
    where: {
      id,
    },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Staff application not found");
  }

  const result = await prisma.staffApplication.delete({
    where: {
      id,
    },
    include: {
      applicant: {
        omit: {
          password: true,
        },
      },
    },
  });

  return result;
};

export const staffApplicationServices = {
  createStaffApplicationService,
  getAllStaffApplicationsService,
  getStaffApplicationByIdService,
  updateStaffApplicationService,
  deleteStaffApplicationService,
};
