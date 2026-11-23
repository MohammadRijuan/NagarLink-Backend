
import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/checkAuth";
import { assignmentControllers } from "./assignment.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  assignmentIdParamsSchema,
  reviewAssignmentSchema,
} from "./assignment.validation";

const router = Router();

// Citizen, Staff, Manager, Admin
router.get(
  "/",
  auth(Role.CITIZEN, Role.STAFF, Role.MANAGER, Role.ADMIN),
  assignmentControllers.getMyAssignments,
);

// Citizen, assigned Staff, Manager, Admin
router.get(
  "/:id",
  auth(Role.CITIZEN, Role.STAFF, Role.MANAGER, Role.ADMIN),
  validateRequest({ params: assignmentIdParamsSchema }),
  assignmentControllers.getAssignmentById,
);

// Assigned Staff submits completion
router.patch(
  "/:id/submit-completion",
  auth(Role.STAFF),
  validateRequest({ params: assignmentIdParamsSchema }),
  assignmentControllers.submitAssignmentCompletion,
);

// Manager/Admin approves or requests correction
router.patch(
  "/:id/review",
  auth(Role.MANAGER, Role.ADMIN),
  validateRequest({
    params: assignmentIdParamsSchema,
    body: reviewAssignmentSchema,
  }),
  assignmentControllers.reviewAssignmentCompletion,
);

export const assignmentRoutes = router;
