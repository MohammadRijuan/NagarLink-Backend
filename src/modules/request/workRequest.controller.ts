import { Request, Response } from "express";

import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { workRequestServices } from "./workRequest.service";
import httpStatus from "http-status";

const createWorkRequest = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const payload = req.body;
  const result = await workRequestServices.createWorkRequestService(
    payload,
    user!,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Work request created successfully",
    data: result,
  });
});

const getAllWorkRequests = catchAsync(async (req: Request, res: Response) => {
  const {data ,meta} = await workRequestServices.getAllWorkRequestsService(
    req.query,req.user!
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Work requests retrieved successfully",
    data,
    meta,
  });
});

const getWorkRequestById = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const id = req.params.id as string;
  const result = await workRequestServices.getWorkRequestByIdService(id, user!);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Work request data retrieved successfully",
    data: result,
  });
});

const updateWorkRequest = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const payload = req.body;
  const user = req.user;
  const result = await workRequestServices.updateWorkRequestService(
    id,
    payload,
    user!,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Work request updated successfully",
    data: result,
  });
});

const updateWorkRequestStatus = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const payload = req.body;
    const user = req.user;
    const result = await workRequestServices.updateWorkRequestStatusService(
      id,
      payload,
      user!,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Work request status updated successfully",
      data: result,
    });
  },
);

const deleteWorkRequest = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const user = req.user;
  const result = await workRequestServices.deleteWorkRequestService(id, user!);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Work request deleted successfully",
    data: result,
  });
});

export const workRequestControllers = {
  createWorkRequest,
  getAllWorkRequests,
  getWorkRequestById,
  updateWorkRequest,
  updateWorkRequestStatus,
  deleteWorkRequest,
};
