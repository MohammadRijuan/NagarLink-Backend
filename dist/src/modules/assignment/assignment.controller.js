"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const assignment_service_1 = require("./assignment.service");
const getAssignmentContacts = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await assignment_service_1.assignmentServices.getAssignmentContactsService(req.params.requestId, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Assignment contacts retrieved successfully",
        data: result,
    });
});
exports.assignmentControllers = {
    getAssignmentContacts,
};
//# sourceMappingURL=assignment.controller.js.map