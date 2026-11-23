import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/checkAuth";
import { feedbackControllers } from "./feedback.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createFeedbackSchema,
  staffIdParamsSchema,
} from "./feedback.validation";

const router = Router();

// Citizen submits feedback
router.post(
  "/",
  auth(Role.CITIZEN),
  validateRequest({ body: createFeedbackSchema }),
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
  validateRequest({ params: staffIdParamsSchema }),
  feedbackControllers.getStaffFeedback,
);

// Manager and admin view all feedback
router.get(
  "/",
  auth(Role.MANAGER, Role.ADMIN),
  feedbackControllers.getAllFeedback,
);

export const feedbackRoutes = router;