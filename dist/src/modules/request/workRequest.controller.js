"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workRequestControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const workRequest_service_1 = require("./workRequest.service");
const http_status_1 = __importDefault(require("http-status"));
const createWorkRequest = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await workRequest_service_1.workRequestServices.createWorkRequestService(payload, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Work request created successfully",
        data: result,
    });
});
const getAllWorkRequests = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { data, meta } = await workRequest_service_1.workRequestServices.getAllWorkRequestsService(req.query, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Work requests retrieved successfully",
        data,
        meta,
    });
});
const getWorkRequestById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const id = req.params.id;
    const result = await workRequest_service_1.workRequestServices.getWorkRequestByIdService(id, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Work request data retrieved successfully",
        data: result,
    });
});
const updateWorkRequest = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const user = req.user;
    const result = await workRequest_service_1.workRequestServices.updateWorkRequestService(id, payload, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Work request updated successfully",
        data: result,
    });
});
const updateWorkRequestStatus = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const user = req.user;
    const result = await workRequest_service_1.workRequestServices.updateWorkRequestStatusService(id, payload, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Work request status updated successfully",
        data: result,
    });
});
const deleteWorkRequest = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const user = req.user;
    const result = await workRequest_service_1.workRequestServices.deleteWorkRequestService(id, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Work request deleted successfully",
        data: result,
    });
});
exports.workRequestControllers = {
    createWorkRequest,
    getAllWorkRequests,
    getWorkRequestById,
    updateWorkRequest,
    updateWorkRequestStatus,
    deleteWorkRequest,
};
//# sourceMappingURL=workRequest.controller.js.map