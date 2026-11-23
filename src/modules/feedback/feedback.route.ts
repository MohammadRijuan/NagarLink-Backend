import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/checkAuth";
import { feedbackControllers } from "./feedback.controller";

const router = Router();

// Citizen submits feedback
router.post(
  "/",
  auth(Role.CITIZEN),
  feedbackControllers.createFeedback,
);

// Citizen views own feedback
router.get(
  "/my-feedback",
  auth(Role.CITIZEN),
  feedbackControllers.getMyFeedback,
);

// Staff, manager and admin view staff feedback
router.get(
  "/staff/:staffId",
  auth(Role.STAFF, Role.MANAGER, Role.ADMIN),
  feedbackControllers.getStaffFeedback,
);

// Manager and admin view all feedback
router.get(
  "/",
  auth(Role.MANAGER, Role.ADMIN),
  feedbackControllers.getAllFeedback,
);

export const feedbackRoutes = router;