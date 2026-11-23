import { Router } from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { paymentControllers } from "./payment.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createPaymentSchema,
  paymentIdParamsSchema,
} from "./payment.validation";

const router = Router();

// Citizen creates a payment
router.post(
  "/create",
  auth(Role.CITIZEN),
  validateRequest({ body: createPaymentSchema }),
  paymentControllers.createPayment,
);

// SSLCommerz browser callbacks
router.post("/success", paymentControllers.paymentSuccess);
router.post("/failure", paymentControllers.paymentFailure);
router.post("/cancel", paymentControllers.paymentCancel);

// SSLCommerz server-to-server notification
router.post("/ipn", paymentControllers.paymentIpn);

// Admin approves a payment that was held for risk review
router.patch(
  "/:id/approve",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: paymentIdParamsSchema }),
  paymentControllers.approveReviewedPayment,
);

// Retrieve payment
router.get(
  "/:id",
  auth(Role.CITIZEN, Role.ADMIN, Role.MANAGER),
  validateRequest({ params: paymentIdParamsSchema }),
  paymentControllers.getPaymentById,
);

export const paymentRoutes = router;
