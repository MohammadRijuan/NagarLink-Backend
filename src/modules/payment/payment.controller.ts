import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { paymentServices } from "./payment.service";

const createPayment = catchAsync(async (req: Request, res: Response) => {
  const result = await paymentServices.createPaymentService(
    req.body,
    req.user!,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Payment initiated successfully",
    data: result,
  });
});

const paymentSuccess = catchAsync(async (req: Request, res: Response) => {
  const result = await paymentServices.paymentSuccessService(
    req.body as Record<string, unknown>,
  );

  res.redirect(result.redirectUrl);
});

const paymentFailure = catchAsync(async (req: Request, res: Response) => {
  const result = await paymentServices.paymentFailureService(
    req.body as Record<string, unknown>,
  );

  res.redirect(result.redirectUrl);
});

const paymentCancel = catchAsync(async (req: Request, res: Response) => {
  const result = await paymentServices.paymentCancelService(
    req.body as Record<string, unknown>,
  );

  res.redirect(result.redirectUrl);
});

const paymentIpn = catchAsync(async (req: Request, res: Response) => {
  await paymentServices.paymentIpnService(req.body as Record<string, unknown>);

  res.status(httpStatus.OK).send("IPN received");
});

const approveReviewedPayment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await paymentServices.approveReviewedPaymentService(
      req.params["id"] as string,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Payment approved successfully",
      data: result,
    });
  },
);

const getPaymentById = catchAsync(async (req: Request, res: Response) => {
  const result = await paymentServices.getPaymentByIdService(
    req.params["id"] as string,
    req.user!,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment retrieved successfully",
    data: result,
  });
});

export const paymentControllers = {
  createPayment,
  paymentSuccess,
  paymentFailure,
  paymentCancel,
  paymentIpn,
  approveReviewedPayment,
  getPaymentById,
};