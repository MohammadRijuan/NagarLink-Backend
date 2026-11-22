import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { staffInvitationServices } from "./staffInvitation.service";

const createStaffInvitation = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const user = req.user!;

    const result = await staffInvitationServices.createStaffInvitationService(
      payload,
      user,
    );

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Staff invitation sent successfully",
      data: result,
    });
  },
);

const getAllStaffInvitations = catchAsync(
  async (req: Request, res: Response) => {
    const query = req.query;
    const user = req.user!;

    const {data,meta} = await staffInvitationServices.getAllStaffInvitationsService(
      query,
      user,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Staff invitations retrieved successfully",
      data,
      meta
    });
  },
);

const getMyInvitations = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;
  const user = req.user!;

  const {data,meta} = await staffInvitationServices.getMyInvitationsService(
    query,
    user,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your invitations retrieved successfully",
    data,
    meta
  });
});

const getStaffInvitationById = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const user = req.user!;

    const result = await staffInvitationServices.getStaffInvitationByIdService(
      id,
      user,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Staff invitation retrieved successfully",
      data: result,
    });
  },
);

const respondToInvitation = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const payload = req.body;
  const user = req.user!;

  const result = await staffInvitationServices.respondToInvitationService(
    id,
    payload,
    user,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invitation response submitted successfully",
    data: result,
  });
});

const deleteStaffInvitation = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const user = req.user!;

    const result = await staffInvitationServices.deleteStaffInvitationService(
      id,
      user,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Staff invitation deleted successfully",
      data: result,
    });
  },
);

export const staffInvitationControllers = {
  createStaffInvitation,
  getAllStaffInvitations,
  getMyInvitations,
  getStaffInvitationById,
  respondToInvitation,
  deleteStaffInvitation,
};
