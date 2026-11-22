import { Role } from "../../../generated/prisma/enums";
import { UserWhereInput } from "../../../generated/prisma/models";
import { IQuery } from "../../interfaces";
import { prisma } from "../../lib/prisma";

import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";


// Get All Staff
const getAllStaffService = async (query: IQuery) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";

  const andConditions: UserWhereInput[] = [];

  // Only STAFF users
  andConditions.push({
    role: Role.STAFF,
  });

  // Search by name or email
  if (query.searchTerm) {
    andConditions.push({
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
    });
  }

  const staffs = await prisma.user.findMany({
    where: {
      AND: andConditions,
    //   role:Role.STAFF
    },
    take: limit,
    skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
    omit: {
      password: true,
    },
    include: {
      staffCategories: {
        include: {
          category: true,
        },
      },
    },
  });

  const total = await prisma.user.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    data: staffs,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

// Get Staff By ID
const getStaffByIdService = async (id: string) => {
  const staff = await prisma.user.findFirst({
    where: {
      id,
      role: Role.STAFF,
    },
    omit: {
      password: true,
    },
    include: {
      staffCategories: {
        include: {
          category: {
            include: {
              department: true,
            },
          },
        },
      },
    },
  });

  if (!staff) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Staff not found",
    );
  }

  return staff;
};


// Delete Staff
const deleteStaffService = async (id: string) => {
  const isExist = await prisma.user.findFirst({
    where: {
      id,
      role: Role.STAFF,
    },
  });

  if (!isExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Staff not found",
    );
  }

  const result = await prisma.user.delete({
    where: {
      id,
    },
    omit: {
      password: true,
    },
  });

  return result;
};

export const staffServices = {
  getAllStaffService,
  getStaffByIdService,
  deleteStaffService,
};