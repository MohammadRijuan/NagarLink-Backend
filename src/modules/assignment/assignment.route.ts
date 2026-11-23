
import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/checkAuth";
import { assignmentControllers } from "./assignment.controller";

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
  assignmentControllers.getAssignmentById,
);

// Assigned Staff submits completion
router.patch(
  "/:id/submit-completion",
  auth(Role.STAFF),
  assignmentControllers.submitAssignmentCompletion,
);

// Manager/Admin approves or requests correction
router.patch(
  "/:id/review",
  auth(Role.MANAGER, Role.ADMIN),
  assignmentControllers.reviewAssignmentCompletion,
);

export const assignmentRoutes = router;
