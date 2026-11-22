"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffApplicationServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const enums_1 = require("../../../generated/prisma/enums");
// Create Staff Application
const createStaffApplicationService = async (payload, user) => {
    const existingApplication = await prisma_1.prisma.staffApplication.findUnique({
        where: {
            applicantId: user.userId,
        },
    });
    if (existingApplication) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "You have already submitted a staff application");
    }
    const result = await prisma_1.prisma.$transaction(async (tx) => {
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
const getAllStaffApplicationsService = async (query) => {
    const limit = query.limit ? Number(query.limit) : 10;
    const page = query.page ? Number(query.page) : 1;
    const skip = (page - 1) * limit;
    const sortBy = query.sortBy ? query.sortBy : "createdAt";
    const sortOrder = query.sortOrder ? query.sortOrder : "desc";
    const andConditions = [];
    if (query.status) {
        andConditions.push({
            status: query.status,
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
    const applications = await prisma_1.prisma.staffApplication.findMany({
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
    const total = await prisma_1.prisma.staffApplication.count({
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
const getStaffApplicationByIdService = async (id) => {
    const result = await prisma_1.prisma.staffApplication.findUnique({
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
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff application not found");
    }
    return result;
};
// Update Staff Application
const updateStaffApplicationService = async (id, payload) => {
    const isExist = await prisma_1.prisma.staffApplication.findUnique({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff application not found");
    }
    // Prevent processing an already reviewed application
    if (isExist.status !== enums_1.StaffApplicationStatus.PENDING) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "This application has already been reviewed");
    }
    //for multiple update we will use transaction otherwise we need separate api
    const result = await prisma_1.prisma.$transaction(async (tx) => {
        // Update applicant role only when application is approved
        if (payload.status === enums_1.StaffApplicationStatus.APPROVED) {
            await tx.user.update({
                where: {
                    id: isExist.applicantId,
                },
                data: {
                    role: enums_1.Role.STAFF,
                },
            });
        }
        else if (payload.status === enums_1.StaffApplicationStatus.REJECTED) {
            await tx.user.update({
                where: {
                    id: isExist.applicantId,
                },
                data: {
                    role: enums_1.Role.CITIZEN,
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
const deleteStaffApplicationService = async (id) => {
    const isExist = await prisma_1.prisma.staffApplication.findUnique({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff application not found");
    }
    const result = await prisma_1.prisma.staffApplication.delete({
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
exports.staffApplicationServices = {
    createStaffApplicationService,
    getAllStaffApplicationsService,
    getStaffApplicationByIdService,
    updateStaffApplicationService,
    deleteStaffApplicationService,
};
//# sourceMappingURL=staffApplication.service.js.map