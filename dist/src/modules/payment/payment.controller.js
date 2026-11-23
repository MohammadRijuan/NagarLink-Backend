"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const payment_service_1 = require("./payment.service");
const createPayment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await payment_service_1.paymentServices.createPaymentService(req.body, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Payment initiated successfully",
        data: result,
    });
});
const paymentSuccess = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await payment_service_1.paymentServices.paymentSuccessService(req.body);
    res.redirect(result.redirectUrl);
});
const paymentFailure = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await payment_service_1.paymentServices.paymentFailureService(req.body);
    res.redirect(result.redirectUrl);
});
const paymentCancel = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await payment_service_1.paymentServices.paymentCancelService(req.body);
    res.redirect(result.redirectUrl);
});
const paymentIpn = (0, catchAsync_1.catchAsync)(async (req, res) => {
    await payment_service_1.paymentServices.paymentIpnService(req.body);
    res.status(http_status_1.default.OK).send("IPN received");
});
const getPaymentById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params["id"];
    const result = await payment_service_1.paymentServices.getPaymentByIdService(id, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Payment retrieved successfully",
        data: result,
    });
});
exports.paymentControllers = {
    createPayment,
    paymentSuccess,
    paymentFailure,
    paymentCancel,
    paymentIpn,
    getPaymentById,
};
//# sourceMappingURL=payment.controller.js.map