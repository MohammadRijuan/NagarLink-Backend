import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { departmentServices } from "./department.service";

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await departmentServices.createDepartmentService(payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Created a new department successfully",
    data: result,
  });
});

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const result = await departmentServices.getAllDepartmentService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Department retrieved successfully",
    data: result,
  });
});

const getDepartmentById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await departmentServices.getDepartmentByIdService(
    id as string,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "department retrieved successfully",
    data: result,
  });
});

const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  const result = await departmentServices.updateDepartmentByIdService(
    payload,
    id as string,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Deprtment data updated successfully",
    data: result,
  });
});
const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await departmentServices.deleteDepartmentByIdService(
    id as string,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "department deleted successfully",
    data: result,
  });
});

export const departmentControllers = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
