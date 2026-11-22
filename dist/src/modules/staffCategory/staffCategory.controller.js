"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffCategoryControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../utils/sendResponse");
const catchAsync_1 = require("../../utils/catchAsync");
const staffCategory_service_1 = require("./staffCategory.service");
// Assign Categories to Staff
const assignCategoriesToStaff = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const staffId = req.params.staffId;
    const payload = req.body;
    const result = await staffCategory_service_1.staffCategoryServices.assignCategoriesToStaffService(staffId, payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Categories assigned to staff successfully",
        data: result,
    });
});
// Get Staff Categories
const getStaffCategories = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const staffId = req.params.staffId;
    const result = await staffCategory_service_1.staffCategoryServices.getStaffCategoriesService(staffId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Staff categories retrieved successfully",
        data: result,
    });
});
// Remove Staff Category
const removeStaffCategory = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const staffId = req.params.staffId;
    const categoryId = req.params.categoryId;
    const result = await staffCategory_service_1.staffCategoryServices.removeStaffCategoryService(staffId, categoryId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Staff category removed successfully",
        data: result,
    });
});
exports.staffCategoryControllers = {
    assignCategoriesToStaff,
    getStaffCategories,
    removeStaffCategory,
};
//# sourceMappingURL=staffCategory.controller.js.map