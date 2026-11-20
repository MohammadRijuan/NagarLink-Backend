import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { userServices } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const { data, meta } = await userServices.getAllUserService(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All user retrieved successfully",
    data,
    meta,
  });
});

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await userServices.getUserByIdService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User data retrieved successfully",
    data: result,
  });
});

const updateUserById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const payload = req.body;

  const result = await userServices.updateUserByIdService(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User updated successfully",
    data: result,
  });
});

const deleteUserById = catchAsync(async (req: Request, res: Response) => {});
const getAllStaffs = catchAsync(async (req: Request, res: Response) => {});

export const userControllers = {
  getAllUsers,
  updateUserById,
  getUserById,
  deleteUserById,
  getAllStaffs,
};
