"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotationServices = void 0;
const enums_1 = require("../../../generated/prisma/enums");
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const http_status_1 = __importDefault(require("http-status"));
// Create Quotation
const createQuotationService = async (payload, user) => {
    const quotation = await prisma_1.prisma.quotation.findFirst({
        where: {
            requestId: payload.requestId,
            staffId: user.userId,
        },
    });
    if (quotation) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "You have already submitted a quotation for this request");
    }
    // 2. Create quotation
    const result = await prisma_1.prisma.quotation.create({
        data: {
            proposedFee: payload.proposedFee,
            requestId: payload.requestId,
            staffId: user.userId,
        },
    });
    return result;
};
// Get All Quotations
const getAllQuotationsService = async (query) => {
    // Pagination
    const limit = query.limit ? Number(query.limit) : 10;
    const page = query.page ? Number(query.page) : 1;
    const skip = (page - 1) * limit;
    // Sorting
    const sortBy = query.sortBy ? query.sortBy : "createdAt";
    const sortOrder = query.sortOrder ? query.sortOrder : "desc";
    // Filtering
    const andConditions = [];
    if (query.status) {
        andConditions.push({
            status: query.status,
        });
    }
    // Get quotations
    const quotations = await prisma_1.prisma.quotation.findMany({
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
    const total = await prisma_1.prisma.quotation.count({
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
const getQuotationByIdService = async (id, user) => {
    const quotation = await prisma_1.prisma.quotation.findFirst({
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
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Quotation not found");
    }
    return quotation;
};
// Update Quotation
const updateQuotationService = async (id, payload, user) => {
    const quotation = await prisma_1.prisma.quotation.findFirst({
        where: {
            id,
            staffId: user.userId,
        },
    });
    if (!quotation) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Quotation not found");
    }
    if (quotation.status !== enums_1.QuotationStatus.PENDING) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "You cannot update an approved or rejected quotation");
    }
    // 3. Update quotation
    const result = await prisma_1.prisma.quotation.update({
        where: {
            id,
        },
        data: {
            proposedFee: payload.proposedFee,
        },
    });
    return result;
};
// Update Quotation Status
// Update Quotation Status
const updateQuotationStatusService = async (id, payload, user) => {
    // 1. Check whether quotation exists
    const quotation = await prisma_1.prisma.quotation.findUnique({
        where: {
            id,
        },
    });
    if (!quotation) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Quotation not found");
    }
    // 2. Check whether quotation is already processed
    if (quotation.status !== enums_1.QuotationStatus.PENDING) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Quotation status has already been updated");
    }
    // 3. Update quotation status
    const result = await prisma_1.prisma.quotation.update({
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
            request: true,
        },
    });
    return result;
};
// Delete Quotation
// Delete Quotation
const deleteQuotationService = async (id, user) => {
    // 1. Check whether quotation exists and belongs to this staff
    const quotation = await prisma_1.prisma.quotation.findFirst({
        where: {
            id,
            staffId: user.userId,
        },
    });
    if (!quotation) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Quotation not found");
    }
    // 2. Check whether quotation is pending
    if (quotation.status !== enums_1.QuotationStatus.PENDING) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "You cannot delete an approved or rejected quotation");
    }
    // 3. Delete quotation
    const result = await prisma_1.prisma.quotation.delete({
        where: {
            id,
        },
    });
    return result;
};
// Select Quotation by Citizen
const selectQuotationService = async (payload, user) => {
    const quotation = await prisma_1.prisma.quotation.findUnique({
        where: {
            id: payload.quotationId,
        },
        include: {
            request: true,
        },
    });
    if (!quotation) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Quotation not found");
    }
    // Only the owner of the work request can select a quotation
    if (quotation.request.citizenId !== user.userId) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not allowed to select this quotation");
    }
    // Only pending quotations can be selected
    if (quotation.status !== enums_1.QuotationStatus.PENDING) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "This quotation is no longer available");
    }
    // Prevent selecting another quotation after one is selected
    if (quotation.request.selectedQuotationId) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "A quotation has already been selected");
    }
    if (quotation.request.status !== enums_1.WorkStatus.REQUESTED) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "This work request is not available for quotation selection");
    }
    const result = await prisma_1.prisma.$transaction(async (tx) => {
        // Approve selected quotation
        const selectedQuotation = await tx.quotation.update({
            where: {
                id: quotation.id,
            },
            data: {
                status: enums_1.QuotationStatus.APPROVED,
            },
        });
        // Reject other quotations for this request
        await tx.quotation.updateMany({
            where: {
                requestId: quotation.requestId,
                id: {
                    not: quotation.id,
                },
                status: enums_1.QuotationStatus.PENDING,
            },
            data: {
                status: enums_1.QuotationStatus.REJECTED,
            },
        });
        // Save selected quotation and update work request status
        const updatedRequest = await tx.workRequest.update({
            where: {
                id: quotation.requestId,
            },
            data: {
                selectedQuotationId: quotation.id,
                status: enums_1.WorkStatus.CITIZEN_ACCEPTED,
            },
            include: {
                selectedQuotation: {
                    include: {
                        staff: {
                            omit: {
                                password: true,
                            },
                        },
                    },
                },
            },
        });
        return {
            quotation: selectedQuotation,
            workRequest: updatedRequest,
        };
    });
    return result;
};
exports.quotationServices = {
    createQuotationService,
    getAllQuotationsService,
    getQuotationByIdService,
    updateQuotationService,
    updateQuotationStatusService,
    deleteQuotationService,
    selectQuotationService,
    // paySelectedQuotationCallbackService,       //bkash
};
//# sourceMappingURL=quotation.service.js.map