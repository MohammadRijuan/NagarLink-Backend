"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workAttachmentControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const workAttachment_service_1 = require("./workAttachment.service");
// 1. Create attachment
const createWorkAttachment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await workAttachment_service_1.workAttachmentServices.createWorkAttachmentService({
        assignmentId: req.params.assignmentId,
        file: req.file,
        user: req.user,
    });
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Attachment uploaded successfully",
        data: result,
    });
});
// 2. Get all attachments
const getAllWorkAttachments = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await workAttachment_service_1.workAttachmentServices.getAllWorkAttachmentsService({
        assignmentId: req.params.assignmentId,
        user: req.user,
    });
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Attachments retrieved successfully",
        data: result,
    });
});
// 3. Get attachment by ID
const getWorkAttachmentById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await workAttachment_service_1.workAttachmentServices.getWorkAttachmentByIdService({
        attachmentId: req.params.id,
        user: req.user,
    });
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Attachment retrieved successfully",
        data: result,
    });
});
// 4. Delete attachment
const deleteWorkAttachment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await workAttachment_service_1.workAttachmentServices.deleteWorkAttachmentService({
        attachmentId: req.params.id,
        user: req.user,
    });
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Attachment deleted successfully",
        data: result,
    });
});
// Export all controllers in one object
exports.workAttachmentControllers = {
    createWorkAttachment,
    getAllWorkAttachments,
    getWorkAttachmentById,
    deleteWorkAttachment,
};
//# sourceMappingURL=workAttachment.controller.js.map