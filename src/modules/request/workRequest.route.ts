import express, { Router } from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { workRequestControllers } from "./workRequest.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createWorkRequestSchema,
  updateWorkRequestSchema,
  updateWorkRequestStatusSchema,
  workRequestIdParamsSchema,
} from "./workRequest.validation";

const router = Router();

// Citizen creates a work request
router.post(
  "/",
  auth(Role.CITIZEN),
  validateRequest({ body: createWorkRequestSchema }),
  workRequestControllers.createWorkRequest
);

// Citizen, Manager and Admin can view all work requests
router.get(
  "/",
  auth(Role.CITIZEN, Role.MANAGER, Role.ADMIN),
  workRequestControllers.getAllWorkRequests
);

// View a single work request
router.get(
  "/:id",
  auth(Role.CITIZEN, Role.MANAGER, Role.ADMIN),
  validateRequest({ params: workRequestIdParamsSchema }),
  workRequestControllers.getWorkRequestById
);

// Citizen updates their own work request
router.patch(
  "/:id",
  auth(Role.CITIZEN),
  validateRequest({
    params: workRequestIdParamsSchema,
    body: updateWorkRequestSchema,
  }),
  workRequestControllers.updateWorkRequest
);

// Manager/Admin updates work request status
router.patch(
  "/:id/status",
  auth(Role.MANAGER, Role.ADMIN),
  validateRequest({
    params: workRequestIdParamsSchema,
    body: updateWorkRequestStatusSchema,
  }),
  workRequestControllers.updateWorkRequestStatus
);

// Citizen deletes their own work request
router.delete(
  "/:id",
  auth(Role.CITIZEN),
  validateRequest({ params: workRequestIdParamsSchema }),
  workRequestControllers.deleteWorkRequest
);

export const workRequestRoutes = router;