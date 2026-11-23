import express from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { staffApplicationControllers } from "./staffApplication.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createStaffApplicationSchema,
  staffApplicationIdParamsSchema,
  updateStaffApplicationSchema,
} from "./staffApplication.validation";


const router = express.Router();

// Apply to become staff
router.post(
  "/",
  auth(Role.CITIZEN),
  validateRequest({ body: createStaffApplicationSchema }),
  staffApplicationControllers.createStaffApplication
);

// Get all applications
router.get(
  "/",
  auth(Role.ADMIN, Role.MANAGER),
  staffApplicationControllers.getAllStaffApplications
);

// Get single application
router.get(
  "/:id",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: staffApplicationIdParamsSchema }),
  staffApplicationControllers.getStaffApplicationById
);

// Update application (e.g. approve/reject)
router.patch(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({
    params: staffApplicationIdParamsSchema,
    body: updateStaffApplicationSchema,
  }),
  staffApplicationControllers.updateStaffApplication
);

// Delete application
router.delete(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: staffApplicationIdParamsSchema }),
  staffApplicationControllers.deleteStaffApplication
);

export const staffApplicationRoutes = router;