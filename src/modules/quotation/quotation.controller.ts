import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { quotationServices } from "./quotation.service";


// Create Quotation
const createQuotation = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user;
    const payload = req.body;

    const result = await quotationServices.createQuotationService(
      payload,
      user!,
    );

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Quotation created successfully",
      data: result,
    });
  },
);

// Get All Quotations
const getAllQuotations = catchAsync(
  async (req: Request, res: Response) => {
    const query = req.query;

    const result = await quotationServices.getAllQuotationsService(query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Quotations retrieved successfully",
      data: result,
    });
  },
);

// Get Quotation By ID
const getQuotationById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await quotationServices.getQuotationByIdService(
      id as string,
      req.user!,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Quotation retrieved successfully",
      data: result,
    });
  },
);

// Update Quotation
const updateQuotation = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;

    const result = await quotationServices.updateQuotationService(
      id as string,
      payload,
      req.user!,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Quotation updated successfully",
      data: result,
    });
  },
);

// Update Quotation Status
const updateQuotationStatus = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;

    const result = await quotationServices.updateQuotationStatusService(
      id as string,
      payload,
      req.user!,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Quotation status updated successfully",
      data: result,
    });
  },
);

// Delete Quotation
const deleteQuotation = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await quotationServices.deleteQuotationService(
      id as string,
      req.user!,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Quotation deleted successfully",
      data: result,
    });
  },
);

const selectQuotation = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const user = req.user!;

    const result = await quotationServices.selectQuotationService(
      id,
      user,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Quotation selected successfully",
      data: result,
    });
  },
);

export const quotationControllers = {
  createQuotation,
  getAllQuotations,
  getQuotationById,
  updateQuotation,
  updateQuotationStatus,
  deleteQuotation,
  selectQuotation
};