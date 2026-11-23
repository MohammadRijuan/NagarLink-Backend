"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotationControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const quotation_service_1 = require("./quotation.service");
// Create Quotation
const createQuotation = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await quotation_service_1.quotationServices.createQuotationService(payload, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Quotation created successfully",
        data: result,
    });
});
// Get All Quotations
const getAllQuotations = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const query = req.query;
    const result = await quotation_service_1.quotationServices.getAllQuotationsService(query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Quotations retrieved successfully",
        data: result,
    });
});
// Get Quotation By ID
const getQuotationById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await quotation_service_1.quotationServices.getQuotationByIdService(id, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Quotation retrieved successfully",
        data: result,
    });
});
// Update Quotation
const updateQuotation = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await quotation_service_1.quotationServices.updateQuotationService(id, payload, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Quotation updated successfully",
        data: result,
    });
});
// Update Quotation Status
const updateQuotationStatus = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await quotation_service_1.quotationServices.updateQuotationStatusService(id, payload, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Quotation status updated successfully",
        data: result,
    });
});
// Delete Quotation
const deleteQuotation = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await quotation_service_1.quotationServices.deleteQuotationService(id, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Quotation deleted successfully",
        data: result,
    });
});
// Select Quotation by Citizen
const selectQuotation = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await quotation_service_1.quotationServices.selectQuotationService(req.body, req.user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Quotation selected successfully",
        data: result,
    });
});
exports.quotationControllers = {
    createQuotation,
    getAllQuotations,
    getQuotationById,
    updateQuotation,
    updateQuotationStatus,
    deleteQuotation,
    selectQuotation,
};
//# sourceMappingURL=quotation.controller.js.map