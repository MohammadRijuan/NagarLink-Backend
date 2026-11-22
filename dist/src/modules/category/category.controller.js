"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const category_service_1 = require("./category.service");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
// Create Category
const createCategory = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await category_service_1.categoryServices.createCategoryService(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Category created successfully",
        data: result,
    });
});
// Get All Categories
const getAllCategories = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await category_service_1.categoryServices.getAllCategoriesService();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Categories retrieved successfully",
        data: result,
    });
});
// Get Categories By Department
const getCategoriesByDepartment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { departmentId } = req.params;
    const result = await category_service_1.categoryServices.getCategoriesByDepartmentService(departmentId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Department categories retrieved successfully",
        data: result,
    });
});
// Get Single Category
const getCategoryById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await category_service_1.categoryServices.getCategoryByIdService(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Category retrieved successfully",
        data: result,
    });
});
// Update Category
const updateCategory = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await category_service_1.categoryServices.updateCategoryService(id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Category updated successfully",
        data: result,
    });
});
// Delete Category
const deleteCategory = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await category_service_1.categoryServices.deleteCategoryService(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Category deleted successfully",
        data: result,
    });
});
exports.categoryControllers = {
    createCategory,
    getAllCategories,
    getCategoriesByDepartment,
    getCategoryById,
    updateCategory,
    deleteCategory,
};
//# sourceMappingURL=category.controller.js.map