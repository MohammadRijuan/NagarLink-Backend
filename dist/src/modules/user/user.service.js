"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const enums_1 = require("../../../generated/prisma/enums");
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const http_status_1 = __importDefault(require("http-status"));
const getAllUserService = async (query) => {
    const limit = query.limit ? Number(query.limit) : 10;
    const page = query.page ? Number(query.page) : 1;
    const skip = (page - 1) * limit;
    const sortBy = query.sortBy ? query.sortBy : "createdAt";
    const sortOrder = query.sortOrder ? query.sortOrder : "desc";
    const andConditions = [];
    if (query.role) {
        andConditions.push({
            role: query.role,
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
    const users = await prisma_1.prisma.user.findMany({
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
    const total = await prisma_1.prisma.user.count({
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
const getUserByIdService = async (userId) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User not found");
    }
    // Check deleted or inactive user
    if (user.isDeleted || !user.isActive) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "User is inactive or deleted");
    }
    if (user.role === "CITIZEN") {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to access this information");
    }
    if (user.role === "MANAGER") {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to access this information");
    }
    if (user.role === "STAFF") {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to access this information");
    }
    return user;
};
const updateUserByIdService = async (userId, payload) => {
    const User = await prisma_1.prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (!User) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User not found");
    }
    // Check deleted or inactive user
    if (User.isDeleted) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "User is deleted");
    }
    const updatedUser = await prisma_1.prisma.user.update({
        where: {
            id: userId,
        },
        data: payload,
        omit: {
            password: true,
        },
    });
    return updatedUser;
};
const deleteUserByIdService = async (userId) => {
    const User = await prisma_1.prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (!User) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User not found");
    }
    // Check deleted or inactive user
    if (User.isDeleted) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "User is deleted");
    }
    const deleteUser = await prisma_1.prisma.user.delete({
        where: {
            id: userId,
        },
    });
    return deleteUser;
};
const getAllStaffsService = async (query) => {
    const limit = query.limit ? Number(query.limit) : 10;
    const page = query.page ? Number(query.page) : 1;
    const skip = (page - 1) * limit;
    const sortBy = query.sortBy ? query.sortBy : "createdAt";
    const sortOrder = query.sortOrder ? query.sortOrder : "desc";
    const andConditions = [];
    if (query.role) {
        andConditions.push({
            role: query.role,
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
    const users = await prisma_1.prisma.user.findMany({
        where: {
            AND: andConditions,
            role: enums_1.Role.STAFF,
        },
        take: limit,
        skip,
        orderBy: { [sortBy]: sortOrder },
        omit: {
            password: true,
        },
    });
    const total = await prisma_1.prisma.user.count({
        where: {
            AND: andConditions,
            role: enums_1.Role.STAFF,
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
exports.userServices = {
    getAllUserService,
    updateUserByIdService,
    deleteUserByIdService,
    getUserByIdService,
    getAllStaffsService,
};
//# sourceMappingURL=user.service.js.map