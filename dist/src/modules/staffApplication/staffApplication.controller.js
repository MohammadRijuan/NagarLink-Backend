"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffApplicationControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const staffApplication_service_1 = require("./staffApplication.service");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
// Create Staff Application
const createStaffApplication = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await staffApplication_service_1.staffApplicationServices.createStaffApplicationService(payload, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Staff application form submitted successfully",
        data: result,
    });
});
// Get All Staff Applications
const getAllStaffApplications = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { data, meta } = await staffApplication_service_1.staffApplicationServices.getAllStaffApplicationsService(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All Staff application retrieved successfully",
        data,
        meta
    });
});
// Get Single Staff Application
const getStaffApplicationById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const result = await staffApplication_service_1.staffApplicationServices.getStaffApplicationByIdService(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Desitre Staff application retrieved successfully",
        data: result
    });
});
// Update Staff Application
const updateStaffApplication = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await staffApplication_service_1.staffApplicationServices.updateStaffApplicationService(id, payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Staff application status updated successfully",
        data: result
    });
});
// Delete Staff Application
const deleteStaffApplication = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const result = await staffApplication_service_1.staffApplicationServices.deleteStaffApplicationService(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: " Staff application deleted successfully",
        data: result
    });
});
exports.staffApplicationControllers = {
    createStaffApplication,
    getAllStaffApplications,
    getStaffApplicationById,
    updateStaffApplication,
    deleteStaffApplication,
};
//# sourceMappingURL=staffApplication.controller.js.map