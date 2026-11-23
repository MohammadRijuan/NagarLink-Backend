import httpStatus from "http-status";
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { RequestUser } from "../../middlewares/checkAuth";
import { workAttachmentServices } from "./workAttachment.service";

// 1. Create attachment
const createWorkAttachment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await workAttachmentServices.createWorkAttachmentService({
      assignmentId: req.params.assignmentId as string,
      file: req.file as Express.Multer.File,
      user: req.user as RequestUser,
    });

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Attachment uploaded successfully",
      data: result,
    });
  },
);

// 2. Get all attachments
const getAllWorkAttachments = catchAsync(
  async (req: Request, res: Response) => {
    const result = await workAttachmentServices.getAllWorkAttachmentsService({
      assignmentId: req.params.assignmentId as string,
      user: req.user as RequestUser,
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Attachments retrieved successfully",
      data: result,
    });
  },
);

// 3. Get attachment by ID
const getWorkAttachmentById = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await workAttachmentServices.getWorkAttachmentByIdService({
        attachmentId: req.params.id as string,
        user: req.user as RequestUser,
      });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Attachment retrieved successfully",
      data: result,
    });
  },
);

// 4. Delete attachment
const deleteWorkAttachment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await workAttachmentServices.deleteWorkAttachmentService({
      attachmentId: req.params.id as string,
      user: req.user as RequestUser,
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Attachment deleted successfully",
      data: result,
    });
  },
);

// Export all controllers in one object
export const workAttachmentControllers = {
  createWorkAttachment,
  getAllWorkAttachments,
  getWorkAttachmentById,
  deleteWorkAttachment,
};