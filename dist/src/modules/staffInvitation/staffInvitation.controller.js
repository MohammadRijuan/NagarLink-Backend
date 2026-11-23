"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffInvitationControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const staffInvitation_service_1 = require("./staffInvitation.service");
const createStaffInvitation = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const user = req.user;
    const result = await staffInvitation_service_1.staffInvitationServices.createStaffInvitationService(payload, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Staff invitation sent successfully",
        data: result,
    });
});
const getAllStaffInvitations = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const query = req.query;
    const user = req.user;
    const { data, meta } = await staffInvitation_service_1.staffInvitationServices.getAllStaffInvitationsService(query, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Staff invitations retrieved successfully",
        data,
        meta
    });
});
const getMyInvitations = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const query = req.query;
    const user = req.user;
    const { data, meta } = await staffInvitation_service_1.staffInvitationServices.getMyInvitationsService(query, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Your invitations retrieved successfully",
        data,
        meta
    });
});
const getStaffInvitationById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const user = req.user;
    const result = await staffInvitation_service_1.staffInvitationServices.getStaffInvitationByIdService(id, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Staff invitation retrieved successfully",
        data: result,
    });
});
const respondToInvitation = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const user = req.user;
    const result = await staffInvitation_service_1.staffInvitationServices.respondToInvitationService(id, payload, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Invitation response submitted successfully",
        data: result,
    });
});
const deleteStaffInvitation = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const user = req.user;
    const result = await staffInvitation_service_1.staffInvitationServices.deleteStaffInvitationService(id, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Staff invitation deleted successfully",
        data: result,
    });
});
exports.staffInvitationControllers = {
    createStaffInvitation,
    getAllStaffInvitations,
    getMyInvitations,
    getStaffInvitationById,
    respondToInvitation,
    deleteStaffInvitation,
};
//# sourceMappingURL=staffInvitation.controller.js.map