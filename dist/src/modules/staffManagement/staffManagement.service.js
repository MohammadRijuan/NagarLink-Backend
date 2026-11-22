"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffServices = void 0;
const enums_1 = require("../../../generated/prisma/enums");
const prisma_1 = require("../../lib/prisma");
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../utils/AppError");
// Get All Staff
const getAllStaffService = async (query) => {
    const limit = query.limit ? Number(query.limit) : 10;
    const page = query.page ? Number(query.page) : 1;
    const skip = (page - 1) * limit;
    const sortBy = query.sortBy ? query.sortBy : "createdAt";
    const sortOrder = query.sortOrder ? query.sortOrder : "desc";
    const andConditions = [];
    // Only STAFF users
    andConditions.push({
        role: enums_1.Role.STAFF,
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
    const staffs = await prisma_1.prisma.user.findMany({
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
    const total = await prisma_1.prisma.user.count({
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
const getStaffByIdService = async (id) => {
    const staff = await prisma_1.prisma.user.findFirst({
        where: {
            id,
            role: enums_1.Role.STAFF,
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
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff not found");
    }
    return staff;
};
// Delete Staff
const deleteStaffService = async (id) => {
    const isExist = await prisma_1.prisma.user.findFirst({
        where: {
            id,
            role: enums_1.Role.STAFF,
        },
    });
    if (!isExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff not found");
    }
    const result = await prisma_1.prisma.user.delete({
        where: {
            id,
        },
        omit: {
            password: true,
        },
    });
    return result;
};
exports.staffServices = {
    getAllStaffService,
    getStaffByIdService,
    deleteStaffService,
};
//# sourceMappingURL=staffManagement.service.js.map