"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const staffManagement_service_1 = require("./staffManagement.service");
// Get All Staff
const getAllStaff = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { data, meta } = await staffManagement_service_1.staffServices.getAllStaffService(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User data retrieved successfully",
        data,
        meta,
    });
});
// Get Staff By ID
const getStaffById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const staffId = req.params.id;
    const result = await staffManagement_service_1.staffServices.getStaffByIdService(staffId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User data retrieved successfully",
        data: result,
    });
});
// Delete Staff
const deleteStaff = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const staffId = req.params.id;
    const result = await staffManagement_service_1.staffServices.deleteStaffService(staffId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Staff deleted successfully",
        data: result,
    });
});
exports.staffControllers = {
    getAllStaff,
    getStaffById,
    deleteStaff,
};
//# sourceMappingURL=staffManagement.controller.js.map