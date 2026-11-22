import { Router } from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { userControllers } from "./user.controller";

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
router.get("/:id", auth(Role.ADMIN), userControllers.getUserById);

// Update user
router.patch("/:id", auth(Role.ADMIN), userControllers.updateUserById);

// Delete user
router.delete("/:id", auth(Role.ADMIN), userControllers.deleteUserById);

export const userRoutes = router;
