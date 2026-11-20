import { Role } from "../../../generated/prisma/enums";
import { UserWhereInput } from "../../../generated/prisma/models";
import { IQuery } from "../../interfaces";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import httpStatus from "http-status";
import { IUpdateUser } from "./user.interface";
import { RequestUser } from "../../middlewares/checkAuth";

const getAllUserService = async (query: IQuery) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";

  const andConditions: UserWhereInput[] = [];

  if (query.role) {
    andConditions.push({
      role: query.role as Role,
    });
  }

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

  const users = await prisma.user.findMany({
    where: {
      AND: andConditions,
    },
    take: limit,
    skip,
    orderBy: { [sortBy]: sortOrder },
    omit: {
      password: true,
    },
  });

  const total = await prisma.user.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    data: users,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getUserByIdService = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  // Check deleted or inactive user
  if (user.isDeleted || !user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, "User is inactive or deleted");
  }

  if (user.role === "CITIZEN") {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to access this information",
    );
  }
  if (user.role === "MANAGER") {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to access this information",
    );
  }
  if (user.role === "STAFF") {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to access this information",
    );
  }

  return user;
};

const updateUserByIdService = async (userId: string, payload: IUpdateUser) => {
  const User = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!User) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  // Check deleted or inactive user
  if (User.isDeleted || !User.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, "User is inactive or deleted");
  }

  if (User.role === "CITIZEN") {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to access this information",
    );
  }
  if (User.role === "MANAGER") {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to access this information",
    );
  }
  if (User.role === "STAFF") {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to access this information",
    );
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: payload,
    omit:{
        password:true
    }
  });

  return updatedUser;
};

const deleteUserByIdService = async () => {};

const getAllStaffsService = async () => {};

export const userServices = {
  getAllUserService,
  updateUserByIdService,
  deleteUserByIdService,
  getUserByIdService,
  getAllStaffsService,
};
