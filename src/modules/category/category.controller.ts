import httpStatus from "http-status";

import { categoryServices } from "./category.service";
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

// Create Category
const createCategory = catchAsync(async (req:Request, res:Response) => {
  const result = await categoryServices.createCategoryService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Category created successfully",
    data: result,
  });
});

// Get All Categories
const getAllCategories = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategoriesService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories retrieved successfully",
    data: result,
  });
});

// Get Categories By Department
const getCategoriesByDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;

  const result =
    await categoryServices.getCategoriesByDepartmentService(departmentId as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Department categories retrieved successfully",
    data: result,
  });
});

// Get Single Category
const getCategoryById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await categoryServices.getCategoryByIdService(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category retrieved successfully",
    data: result,
  });
});

// Update Category
const updateCategory = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await categoryServices.updateCategoryService(id as string, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category updated successfully",
    data: result,
  });
});

// Delete Category
const deleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await categoryServices.deleteCategoryService(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category deleted successfully",
    data: result,
  });
});

export const categoryControllers = {
  createCategory,
  getAllCategories,
  getCategoriesByDepartment,
  getCategoryById,
  updateCategory,
  deleteCategory,
};