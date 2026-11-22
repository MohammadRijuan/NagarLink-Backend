"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const user_service_1 = require("./user.service");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const getAllUsers = (0, catchAsync_1.catchAsync)(async (req, res) => {
    // const payload = req.body;
    const { data, meta } = await user_service_1.userServices.getAllUserService(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All user retrieved successfully",
        data,
        meta,
    });
});
const getUserById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const result = await user_service_1.userServices.getUserByIdService(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User data retrieved successfully",
        data: result,
    });
});
const updateUserById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await user_service_1.userServices.updateUserByIdService(id, payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User updated successfully",
        data: result,
    });
});
const deleteUserById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req?.params.id;
    await user_service_1.userServices.deleteUserByIdService(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User deleted successfully",
        data: null,
    });
});
const getAllStaffs = (0, catchAsync_1.catchAsync)(async (req, res) => {
    // const payload = req.body;
    const { data, meta } = await user_service_1.userServices.getAllStaffsService(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All staff retrieved successfully",
        data,
        meta,
    });
});
exports.userControllers = {
    getAllUsers,
    updateUserById,
    getUserById,
    deleteUserById,
    getAllStaffs,
};
//# sourceMappingURL=user.controller.js.map