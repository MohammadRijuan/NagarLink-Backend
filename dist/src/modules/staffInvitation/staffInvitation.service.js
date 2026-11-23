"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffInvitationServices = void 0;
const enums_1 = require("../../../generated/prisma/enums");
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const http_status_1 = __importDefault(require("http-status"));
const createStaffInvitationService = async (payload, user) => {
    // 1. Check manager/admin permission
    if (user.role !== enums_1.Role.MANAGER && user.role !== enums_1.Role.ADMIN) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to send invitations");
    }
    // 2. Check WorkRequest
    const workRequest = await prisma_1.prisma.workRequest.findUnique({
        where: { id: payload.requestId },
    });
    if (!workRequest) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Work request not found");
    }
    if (workRequest.status !== enums_1.WorkStatus.PENDING &&
        workRequest.status !== enums_1.WorkStatus.REQUESTED) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "This work request cannot receive invitations");
    }
    // 3. Check staff
    const staff = await prisma_1.prisma.user.findFirst({
        where: {
            id: payload.staffId,
            role: enums_1.Role.STAFF,
        },
    });
    if (!staff) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff not found");
    }
    // 4. Check staff category assignment in the request's department
    const staffCategory = await prisma_1.prisma.staffCategory.findFirst({
        where: {
            staffId: payload.staffId,
            category: {
                departmentId: workRequest.departmentId,
            },
        },
    });
    if (!staffCategory) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Staff is not assigned to this department's categories");
    }
    // 5. Check duplicate invitation
    const existingInvitation = await prisma_1.prisma.staffInvitation.findUnique({
        where: {
            requestId_staffId: {
                requestId: payload.requestId,
                staffId: payload.staffId,
            },
        },
    });
    if (existingInvitation) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "This staff member has already been invited");
    }
    // 6. Create invitation
    const result = await prisma_1.prisma.staffInvitation.create({
        data: {
            requestId: payload.requestId,
            staffId: payload.staffId,
        },
        include: {
            staff: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    division: true,
                    district: true,
                    address: true,
                    postalCode: true,
                    staffCategories: {
                        include: {
                            category: {
                                include: {
                                    department: {
                                        select: {
                                            name: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            request: true,
        },
    });
    // 7. Update WorkRequest status
    if (workRequest.status === enums_1.WorkStatus.PENDING) {
        await prisma_1.prisma.workRequest.update({
            where: { id: payload.requestId },
            data: {
                status: enums_1.WorkStatus.REQUESTED,
            },
        });
    }
    const formattedResult = {
        ...result,
        staff: {
            ...result.staff,
            department: result.staff.staffCategories[0]?.category.department.name,
            categories: result.staff.staffCategories.map((item) => item.category.name),
        },
    };
    delete formattedResult.staff.staffCategories;
    return formattedResult;
};
const getAllStaffInvitationsService = async (query, user) => {
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
            OR: [
                {
                    staff: {
                        name: {
                            contains: query.searchTerm,
                            mode: "insensitive",
                        },
                    },
                },
                {
                    staff: {
                        email: {
                            contains: query.searchTerm,
                            mode: "insensitive",
                        },
                    },
                },
                {
                    request: {
                        title: {
                            contains: query.searchTerm,
                            mode: "insensitive",
                        },
                    },
                },
            ],
        });
    }
    const invitations = await prisma_1.prisma.staffInvitation.findMany({
        where: {
            AND: andConditions,
        },
        take: limit,
        skip,
        orderBy: { [sortBy]: sortOrder },
        include: {
            staff: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
            request: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    status: true,
                },
            },
        },
    });
    const total = await prisma_1.prisma.staffInvitation.count({
        where: {
            AND: andConditions,
        },
    });
    return {
        data: invitations,
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
};
const getMyInvitationsService = async (query, user) => {
    const limit = query.limit ? Number(query.limit) : 10;
    const page = query.page ? Number(query.page) : 1;
    const skip = (page - 1) * limit;
    const sortBy = query.sortBy ? query.sortBy : "createdAt";
    const sortOrder = query.sortOrder ? query.sortOrder : "desc";
    const andConditions = [];
    // Only show invitations belonging to the logged-in staff
    andConditions.push({
        staffId: user.userId,
    });
    if (query.status) {
        andConditions.push({
            status: query.status,
        });
    }
    if (query.searchTerm) {
        andConditions.push({
            request: {
                title: {
                    contains: query.searchTerm,
                    mode: "insensitive",
                },
            },
        });
    }
    const invitations = await prisma_1.prisma.staffInvitation.findMany({
        where: {
            AND: andConditions,
        },
        take: limit,
        skip,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            request: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    division: true,
                    city: true,
                    address: true,
                    postalCode: true,
                    status: true,
                    department: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
        },
    });
    const total = await prisma_1.prisma.staffInvitation.count({
        where: {
            AND: andConditions,
        },
    });
    return {
        data: invitations,
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
};
const getStaffInvitationByIdService = async (id, user) => {
    const invitation = await prisma_1.prisma.staffInvitation.findUnique({
        where: {
            id,
        },
        include: {
            staff: {
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
            request: {
                include: {
                    department: true,
                    citizen: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    },
                },
            },
        },
    });
    if (!invitation) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff invitation not found");
    }
    // Staff can only view their own invitation
    if (user.role === enums_1.Role.STAFF && invitation.staffId !== user.userId) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to view this invitation");
    }
    return invitation;
};
const respondToInvitationService = async (id, payload, user) => {
    // 1. Find invitation
    const invitation = await prisma_1.prisma.staffInvitation.findUnique({
        where: {
            id,
        },
    });
    if (!invitation) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff invitation not found");
    }
    // 2. Check ownership
    if (invitation.staffId !== user.userId) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to respond to this invitation");
    }
    // 3. Check invitation status
    if (invitation.status !== enums_1.InvitationStatus.REQUESTED) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "You have already responded to this invitation");
    }
    // 4. Validate response status
    if (payload.status !== enums_1.InvitationStatus.ACCEPTED &&
        payload.status !== enums_1.InvitationStatus.REJECTED) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Invalid invitation response");
    }
    // 5. Update invitation
    const result = await prisma_1.prisma.staffInvitation.update({
        where: {
            id,
        },
        data: {
            status: payload.status,
            responseNote: payload.responseNote,
        },
        include: {
            request: {
                select: {
                    id: true,
                    title: true,
                    status: true,
                },
            },
        },
    });
    return result;
};
const deleteStaffInvitationService = async (id, user) => {
    // 1. Find invitation
    const invitation = await prisma_1.prisma.staffInvitation.findUnique({
        where: {
            id,
        },
    });
    if (!invitation) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff invitation not found");
    }
    // 2. Only Admin or Manager can delete
    if (user.role !== enums_1.Role.ADMIN && user.role !== enums_1.Role.MANAGER) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to delete this invitation");
    }
    // 3. Delete invitation
    const result = await prisma_1.prisma.staffInvitation.delete({
        where: {
            id,
        },
        include: {
            staff: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
            request: {
                select: {
                    id: true,
                    title: true,
                },
            },
        },
    });
    return result;
};
exports.staffInvitationServices = {
    createStaffInvitationService,
    getAllStaffInvitationsService,
    getMyInvitationsService,
    getStaffInvitationByIdService,
    respondToInvitationService,
    deleteStaffInvitationService,
};
//# sourceMappingURL=staffInvitation.service.js.map