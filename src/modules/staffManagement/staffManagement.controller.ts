import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { staffServices } from "./staffManagement.service";

// Get All Staff
const getAllStaff = catchAsync(async (req: Request, res: Response) => {
  const { data, meta } = await staffServices.getAllStaffService(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User data retrieved successfully",
    data,
    meta,
  });
});

// Get Staff By ID
const getStaffById = catchAsync(async (req: Request, res: Response) => {
  const staffId = req.params.id;

  const result = await staffServices.getStaffByIdService(staffId as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User data retrieved successfully",
    data: result,
  });
});

// Delete Staff
const deleteStaff = catchAsync(async (req: Request, res: Response) => {
  const staffId = req.params.id;

  const result = await staffServices.deleteStaffService(staffId as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Staff deleted successfully",
    data: result,
  });
});

export const staffControllers = {
  getAllStaff,
  getStaffById,
  deleteStaff,
};
