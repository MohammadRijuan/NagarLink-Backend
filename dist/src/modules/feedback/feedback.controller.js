"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const feedback_service_1 = require("./feedback.service");
// CREATE FEEDBACK
const createFeedback = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await feedback_service_1.feedbackServices.createFeedbackService(req.body, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Feedback submitted successfully",
        data: result,
    });
});
// GET MY FEEDBACK
const getMyFeedback = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await feedback_service_1.feedbackServices.getMyFeedbackService(req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Your feedback retrieved successfully",
        data: result,
    });
});
// GET STAFF FEEDBACK
const getStaffFeedback = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await feedback_service_1.feedbackServices.getStaffFeedbackService(req.params.staffId, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Staff feedback retrieved successfully",
        data: result,
    });
});
// GET ALL FEEDBACK
const getAllFeedback = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await feedback_service_1.feedbackServices.getAllFeedbackService(req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All feedback retrieved successfully",
        data: result,
    });
});
// EXPORT CONTROLLERS
exports.feedbackControllers = {
    createFeedback,
    getMyFeedback,
    getStaffFeedback,
    getAllFeedback,
};
//# sourceMappingURL=feedback.controller.js.map