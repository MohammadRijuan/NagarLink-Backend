
import { Request, Response } from "express";
import httpStatus from "http-status";
import { assignmentServices } from "./assignment.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";


// ============================================
// GET MY ASSIGNMENTS
// ============================================

const getMyAssignments = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await assignmentServices.getMyAssignmentsService(
        req.user!,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Assignments retrieved successfully",
      data: result,
    });
  },
);

// ============================================
// GET ASSIGNMENT BY ID
// ============================================

const getAssignmentById = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await assignmentServices.getAssignmentByIdService(
        req.params["id"] as string,
        req.user!,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Assignment retrieved successfully",
      data: result,
    });
  },
);

// ============================================
// STAFF SUBMITS COMPLETION
// ============================================

const submitAssignmentCompletion = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await assignmentServices.submitAssignmentCompletionService(
        req.params["id"] as string,
        req.user!,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Work completion submitted successfully",
      data: result,
    });
  },
);

// ============================================
// MANAGER/ADMIN REVIEWS COMPLETION
// ============================================

const reviewAssignmentCompletion = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await assignmentServices.reviewAssignmentCompletionService(
        req.params["id"]  as string,
        req.body,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message:
        req.body.status === "COMPLETED"
          ? "Assignment completed successfully"
          : "Assignment sent back for correction",
      data: result,
    });
  },
);

export const assignmentControllers = {
  getMyAssignments,
  getAssignmentById,
  submitAssignmentCompletion,
  reviewAssignmentCompletion,
};
