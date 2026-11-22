import httpStatus from "http-status";

import { staffApplicationServices } from "./staffApplication.service";
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

// Create Staff Application
const createStaffApplication = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user;
    const payload = req.body;

    const result = await staffApplicationServices.createStaffApplicationService(
      payload,
      user! ,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Staff application form submitted successfully",
      data: result,
    });
  },
);

// Get All Staff Applications
const getAllStaffApplications = catchAsync(
  async (req: Request, res: Response) => {
    const { data, meta } = await staffApplicationServices.getAllStaffApplicationsService(req.query)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Staff application retrieved successfully",
      data,
      meta
    });
  },
);

// Get Single Staff Application
const getStaffApplicationById = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await staffApplicationServices.getStaffApplicationByIdService(id as string)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Desitre Staff application retrieved successfully",
      data : result
    });
  },
);

// Update Staff Application
const updateStaffApplication = catchAsync(
  async (req: Request, res: Response) => {
     const id = req.params.id
     const payload = req.body

    const result = await staffApplicationServices.updateStaffApplicationService(id as string, payload)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Staff application status updated successfully",
      data : result
    });

  },
);

// Delete Staff Application
const deleteStaffApplication = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await staffApplicationServices.deleteStaffApplicationService(id as string)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " Staff application deleted successfully",
      data : result
    });
  },
);

export const staffApplicationControllers = {
  createStaffApplication,
  getAllStaffApplications,
  getStaffApplicationById,
  updateStaffApplication,
  deleteStaffApplication,
};
