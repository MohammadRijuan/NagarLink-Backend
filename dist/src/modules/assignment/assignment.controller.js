"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const assignment_service_1 = require("./assignment.service");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
// ============================================
// GET MY ASSIGNMENTS
// ============================================
const getMyAssignments = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await assignment_service_1.assignmentServices.getMyAssignmentsService(req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Assignments retrieved successfully",
        data: result,
    });
});
// ============================================
// GET ASSIGNMENT BY ID
// ============================================
const getAssignmentById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await assignment_service_1.assignmentServices.getAssignmentByIdService(req.params["id"], req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Assignment retrieved successfully",
        data: result,
    });
});
// ============================================
// STAFF SUBMITS COMPLETION
// ============================================
const submitAssignmentCompletion = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await assignment_service_1.assignmentServices.submitAssignmentCompletionService(req.params["id"], req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Work completion submitted successfully",
        data: result,
    });
});
// ============================================
// MANAGER/ADMIN REVIEWS COMPLETION
// ============================================
const reviewAssignmentCompletion = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await assignment_service_1.assignmentServices.reviewAssignmentCompletionService(req.params.id, req.body, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: req.body.status === "COMPLETED"
            ? "Assignment completed successfully"
            : "Assignment sent back for correction",
        data: result,
    });
});
exports.assignmentControllers = {
    getMyAssignments,
    getAssignmentById,
    submitAssignmentCompletion,
    reviewAssignmentCompletion,
};
//# sourceMappingURL=assignment.controller.js.map