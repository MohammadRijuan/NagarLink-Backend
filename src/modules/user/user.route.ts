import { Router } from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { userControllers } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { updateUserSchema, userIdParamsSchema } from "./user.validation";

const router = Router();

// Get all users
router.get("/", auth(Role.ADMIN), userControllers.getAllUsers);

// Get all staff
router.get(
  "/all-staffs",
  auth(Role.ADMIN, Role.MANAGER),
  userControllers.getAllStaffs,
);

// Get user by ID
router.get(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: userIdParamsSchema }),
  userControllers.getUserById,
);

// Update user
router.patch(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: userIdParamsSchema, body: updateUserSchema }),
  userControllers.updateUserById,
);

// Delete user
router.delete(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: userIdParamsSchema }),
  userControllers.deleteUserById,
);

export const userRoutes = router;
