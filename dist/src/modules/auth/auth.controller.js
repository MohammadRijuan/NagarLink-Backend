"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const auth_service_1 = require("./auth.service");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const registerUser = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    await auth_service_1.authServices.registerUserService(payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Otp has sent to your email to verify",
        data: null,
    });
});
const verifyUserEmail = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const result = await auth_service_1.authServices.verifyUserEmailService(payload);
    const { accessToken, refreshToken, user } = result;
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24, // 24 hour or 1 day
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Email Verified Successfully",
        data: {
            accessToken,
            refreshToken,
            user,
        },
    });
});
const loginUser = (0, catchAsync_1.catchAsync)(async (req, res) => { });
const getMyProfile = (0, catchAsync_1.catchAsync)(async (req, res) => { });
const refreshToken = (0, catchAsync_1.catchAsync)(async (req, res) => { });
const googleLogin = (0, catchAsync_1.catchAsync)(async (req, res) => { });
const forgotPassword = (0, catchAsync_1.catchAsync)(async (req, res) => { });
const resetPassword = (0, catchAsync_1.catchAsync)(async (req, res) => { });
exports.authControllers = {
    registerUser,
    loginUser,
    getMyProfile,
    refreshToken,
    googleLogin,
    forgotPassword,
    resetPassword,
    verifyUserEmail,
};
//# sourceMappingURL=auth.controller.js.map