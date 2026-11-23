import { Router } from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { paymentControllers } from "./payment.controller";

const router = Router();

// Citizen creates a payment
router.post("/create", auth(Role.CITIZEN), paymentControllers.createPayment);

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
  paymentControllers.approveReviewedPayment,
);

// Retrieve payment
router.get(
  "/:id",
  auth(Role.CITIZEN, Role.ADMIN, Role.MANAGER),
  paymentControllers.getPaymentById,
);

export const paymentRoutes = router;
