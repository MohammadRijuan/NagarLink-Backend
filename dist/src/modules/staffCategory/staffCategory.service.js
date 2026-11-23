"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffCategoryServices = void 0;
const prisma_1 = require("../../lib/prisma");
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../utils/AppError");
const enums_1 = require("../../../generated/prisma/enums");
// Assign Categories to Staff
const assignCategoriesToStaffService = async (staffId, payload) => {
    // 1. Check whether staff exists
    const isStaffExist = await prisma_1.prisma.user.findFirst({
        where: {
            id: staffId,
            role: enums_1.Role.STAFF,
        },
    });
    if (!isStaffExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff not found");
    }
    // 2. Check whether category IDs are provided
    if (!payload.categoryIds.length) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Please provide at least one category");
    }
    // 3. Remove duplicate IDs from the request
    const categoryIds = [...new Set(payload.categoryIds)];
    // 4. Check whether all categories exist
    const categories = await prisma_1.prisma.category.findMany({
        where: {
            id: {
                in: categoryIds,
            },
        },
    });
    if (categories.length !== categoryIds.length) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "One or more categories not found");
    }
    // 5. Update staff category assignments
    await prisma_1.prisma.$transaction(async (tx) => {
        // Find currently assigned categories
        const existingCategories = await tx.staffCategory.findMany({
            where: {
                staffId,
            },
            select: {
                categoryId: true,
            },
        });
        // Get existing category IDs
        const existingCategoryIds = existingCategories.map((item) => item.categoryId);
        // Check whether categories are already up to date
        const isAlreadyUpdated = existingCategoryIds.length === categoryIds.length &&
            categoryIds.every((id) => existingCategoryIds.includes(id));
        if (isAlreadyUpdated) {
            throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Categories are already up to date");
        }
        // Remove categories not included in the latest request
        await tx.staffCategory.deleteMany({
            where: {
                staffId,
                categoryId: {
                    notIn: categoryIds,
                },
            },
        });
        // Get only new category IDs
        const newCategoryIds = categoryIds.filter((categoryId) => !existingCategoryIds.includes(categoryId));
        // Add only new categories
        if (newCategoryIds.length > 0) {
            await tx.staffCategory.createMany({
                data: newCategoryIds.map((categoryId) => ({
                    staffId,
                    categoryId,
                })),
            });
        }
    });
    // 6. Get all currently assigned categories
    const result = await prisma_1.prisma.staffCategory.findMany({
        where: {
            staffId,
        },
        include: {
            category: {
                omit: {
                    departmentId: true,
                },
                include: {
                    department: true,
                },
            },
        },
    });
    // 8. Group categories by department
    const departments = [];
    for (const item of result) {
        const department = item.category.department;
        let existing = departments.find((d) => d.id === department.id);
        if (!existing) {
            existing = {
                id: department.id,
                name: department.name,
                categories: [],
            };
            departments.push(existing);
        }
        existing.categories.push({
            id: item.category.id,
            name: item.category.name,
        });
    }
    // 9. Return response
    return {
        staffId,
        departments,
    };
};
// Get Staff Categories
const getStaffCategoriesService = async (staffId) => {
    const isStaffExist = await prisma_1.prisma.user.findFirst({
        where: {
            id: staffId,
            role: enums_1.Role.STAFF,
        },
    });
    if (!isStaffExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff not found");
    }
    // 2. Get all assigned categories
    const result = await prisma_1.prisma.staffCategory.findMany({
        where: {
            staffId,
        },
        include: {
            category: {
                omit: {
                    departmentId: true,
                },
                include: {
                    department: true,
                },
            },
        },
    });
    // 4. Group categories by department
    const departments = [];
    for (const item of result) {
        const department = item.category.department;
        let existing = departments.find((d) => d.id === department.id);
        if (!existing) {
            existing = {
                id: department.id,
                name: department.name,
                categories: [],
            };
            departments.push(existing);
        }
        existing.categories.push({
            id: item.category.id,
            name: item.category.name,
        });
    }
    // 5. Return response
    return {
        staffId,
        departments,
    };
};
// Remove Staff Category
// Remove Staff Category
const removeStaffCategoryService = async (staffId, categoryId) => {
    // 1. Check whether staff exists
    const isStaffExist = await prisma_1.prisma.user.findFirst({
        where: {
            id: staffId,
            role: enums_1.Role.STAFF,
        },
    });
    if (!isStaffExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff not found");
    }
    // 2. Check whether category is assigned to this staff
    const isCategoryAssigned = await prisma_1.prisma.staffCategory.findFirst({
        where: {
            staffId,
            categoryId,
        },
    });
    if (!isCategoryAssigned) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "This category is not assigned to this staff");
    }
    // 3. Remove category assignment
    await prisma_1.prisma.staffCategory.delete({
        where: {
            staffId_categoryId: {
                staffId,
                categoryId,
            },
        },
    });
    // 4. Get remaining assigned categories
    const result = await getStaffCategoriesService(staffId);
    // 5. Return updated data
    return result;
};
exports.staffCategoryServices = {
    assignCategoriesToStaffService,
    getStaffCategoriesService,
    removeStaffCategoryService,
};
//# sourceMappingURL=staffCategory.service.js.map