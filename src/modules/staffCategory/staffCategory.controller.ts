import { Request, Response } from "express";
import httpStatus from "http-status";

import { sendResponse } from "../../utils/sendResponse";
import { catchAsync } from "../../utils/catchAsync";
import { staffCategoryServices } from "./staffCategory.service";

// Assign Categories to Staff
const assignCategoriesToStaff = catchAsync(
  async (req: Request, res: Response) => {
    const staffId = req.params.staffId;
    const payload = req.body;

    const result =
      await staffCategoryServices.assignCategoriesToStaffService(
        staffId as string,
        payload,
      );

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Categories assigned to staff successfully",
      data: result,
    });
  },
);

// Get Staff Categories
const getStaffCategories = catchAsync(
  async (req: Request, res: Response) => {
    const staffId = req.params.staffId;

    const result =
      await staffCategoryServices.getStaffCategoriesService(
        staffId as string,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Staff categories retrieved successfully",
      data: result,
    });
  },
);

// Remove Staff Category
const removeStaffCategory = catchAsync(
  async (req: Request, res: Response) => {
    const staffId = req.params.staffId;
    const categoryId = req.params.categoryId;

    const result =
      await staffCategoryServices.removeStaffCategoryService(
        staffId as string,
        categoryId as string,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Staff's category removed successfully",
      data: result,
    });
  },
);

export const staffCategoryControllers = {
  assignCategoriesToStaff,
  getStaffCategories,
  removeStaffCategory,
};