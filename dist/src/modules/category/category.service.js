"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
// Create Category
const createCategoryService = async (payload) => {
    const categoryName = payload.name.trim().toLowerCase();
    const isExistCategory = await prisma_1.prisma.category.findFirst({
        where: {
            name: categoryName,
            departmentId: payload.departmentId,
        },
    });
    if (isExistCategory) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "Category already exists in this department");
    }
    const category = await prisma_1.prisma.category.create({
        data: {
            name: categoryName,
            departmentId: payload.departmentId,
        },
        omit: {
            departmentId: true,
        },
        include: {
            department: true,
        },
    });
    return category;
};
// Get All Categories
const getAllCategoriesService = async () => {
    const categories = await prisma_1.prisma.category.findMany({
        omit: {
            departmentId: true,
        },
        include: {
            department: true,
        },
    });
    return categories;
};
const getCategoriesByDepartmentService = async (departmentId) => {
    const department = await prisma_1.prisma.department.findUnique({
        where: {
            id: departmentId,
        },
        include: {
            categories: {
                omit: {
                    departmentId: true,
                },
            },
        },
    });
    if (!department) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Department does not exist");
    }
    return department;
};
// Get Single Category
const getCategoryByIdService = async (categoryId) => {
    const isCategory = await prisma_1.prisma.category.findFirst({
        where: {
            id: categoryId,
        },
        omit: {
            departmentId: true,
        },
        include: {
            department: true,
        },
    });
    if (!isCategory) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Category not exist");
    }
    return isCategory;
};
// Update Category
const updateCategoryService = async (categoryId, payload) => {
    const categoryName = payload.name.trim().toLowerCase();
    const isExistCategory = await prisma_1.prisma.category.findFirst({
        where: {
            id: categoryId,
        },
    });
    if (!isExistCategory) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Category does not exists ");
    }
    if (isExistCategory.name.toLowerCase() === categoryName) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "Your current category is same as updated one");
    }
    const updatedCategory = await prisma_1.prisma.category.update({
        where: {
            id: categoryId
        },
        data: {
            name: payload.name,
            departmentId: payload?.departmentId
        },
        omit: {
            departmentId: true
        },
        include: {
            department: true
        }
    });
    return updatedCategory;
};
// Delete Category
const deleteCategoryService = async (categoryId) => {
    const isExistCategory = await prisma_1.prisma.category.findFirst({
        where: {
            id: categoryId,
        },
    });
    if (!isExistCategory) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Category does not exists ");
    }
    const deletedCategory = await prisma_1.prisma.category.delete({
        where: {
            id: categoryId
        },
    });
    return deletedCategory;
};
exports.categoryServices = {
    createCategoryService,
    getAllCategoriesService,
    getCategoriesByDepartmentService,
    getCategoryByIdService,
    updateCategoryService,
    deleteCategoryService,
};
//# sourceMappingURL=category.service.js.map