import express from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { staffControllers } from "./staffManagement.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { staffIdParamsSchema } from "./staffManagement.validation";


const router = express.Router();

// Get all staff
router.get(
  "/",
  auth(Role.ADMIN, Role.MANAGER),
  staffControllers.getAllStaff,
);

// Get staff by ID
router.get(
  "/:id",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: staffIdParamsSchema }),
  staffControllers.getStaffById,
);

// Delete staff
router.delete(
  "/:id",
  auth(Role.ADMIN,Role.MANAGER),
  validateRequest({ params: staffIdParamsSchema }),
  staffControllers.deleteStaff,
);

export const staffRoutes = router;