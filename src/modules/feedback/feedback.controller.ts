import httpStatus from "http-status";
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { RequestUser } from "../../middlewares/checkAuth";
import { feedbackServices } from "./feedback.service";

// CREATE FEEDBACK
const createFeedback = catchAsync(
  async (req: Request, res: Response) => {
    const result = await feedbackServices.createFeedbackService(
      req.body,
      req.user as RequestUser,
    );

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Feedback submitted successfully",
      data: result,
    });
  },
);

// GET MY FEEDBACK
const getMyFeedback = catchAsync(
  async (req: Request, res: Response) => {
    const result = await feedbackServices.getMyFeedbackService(
      req.user as RequestUser,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Your feedback retrieved successfully",
      data: result,
    });
  },
);

// GET STAFF FEEDBACK
const getStaffFeedback = catchAsync(
  async (req: Request, res: Response) => {
    const result = await feedbackServices.getStaffFeedbackService(
      req.params.staffId as string,
      req.user as RequestUser,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Staff feedback retrieved successfully",
      data: result,
    });
  },
);

// GET ALL FEEDBACK
const getAllFeedback = catchAsync(
  async (req: Request, res: Response) => {
    const result = await feedbackServices.getAllFeedbackService(
      req.user as RequestUser,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All feedback retrieved successfully",
      data: result,
    });
  },
);

// EXPORT CONTROLLERS
export const feedbackControllers = {
  createFeedback,
  getMyFeedback,
  getStaffFeedback,
  getAllFeedback,
};