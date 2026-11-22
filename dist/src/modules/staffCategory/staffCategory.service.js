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
    // Check whether staff exists
    const isStaffExist = await prisma_1.prisma.user.findFirst({
        where: {
            id: staffId,
            role: enums_1.Role.STAFF,
        },
    });
    if (!isStaffExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Staff not found");
    }
    // Check whether category IDs are provided
    if (!payload.categoryIds.length) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Please provide at least one category");
    }
    // Check whether all categories exist
    const categories = await prisma_1.prisma.category.findMany({
        where: {
            id: {
                // in means match any value from the provided list.
                in: payload.categoryIds, //["id-1", "id-2", "id-3"]
            },
        },
    });
    if (categories.length !== payload.categoryIds.length) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "One or more categories not found");
    }
    // Assign categories
    const result = await prisma_1.prisma.$transaction(payload.categoryIds.map((categoryId) => prisma_1.prisma.staffCategory.create({
        data: {
            staffId,
            categoryId,
        },
        omit: {
            categoryId: true
        },
        include: {
            category: {
                include: {
                    department: true
                },
                omit: {
                    departmentId: true
                }
            }
        },
    })));
    const departments = new Map();
    for (const { category } of result) {
        const department = category.department;
        let groupedDepartment = departments.get(department.id);
        if (!groupedDepartment) {
            groupedDepartment = {
                id: department.id,
                name: department.name,
                categories: [],
            };
            departments.set(department.id, groupedDepartment);
        }
        groupedDepartment.categories.push({
            id: category.id,
            name: category.name,
        });
    }
    return {
        staffId,
        departments: [...departments.values()],
    };
};
// Get Staff Categories
const getStaffCategoriesService = async (staffId) => { };
// Remove Staff Category
const removeStaffCategoryService = async (staffId, categoryId) => { };
exports.staffCategoryServices = {
    assignCategoriesToStaffService,
    getStaffCategoriesService,
    removeStaffCategoryService,
};
//# sourceMappingURL=staffCategory.service.js.map