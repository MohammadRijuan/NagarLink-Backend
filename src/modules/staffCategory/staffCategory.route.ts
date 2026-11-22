import express from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { staffCategoryControllers } from "./staffCategory.controller";


const router = express.Router();

// Assign categories to staff
router.post(
  "/:staffId/categories",
  auth(Role.ADMIN),
  staffCategoryControllers.assignCategoriesToStaff,
);

// Get categories assigned to a staff member
router.get(
  "/:staffId/categories",
  auth(Role.ADMIN, Role.MANAGER),
  staffCategoryControllers.getStaffCategories,
);

// Remove a category assignment
router.delete(
  "/:staffId/categories/:categoryId",
  auth(Role.ADMIN),
  staffCategoryControllers.removeStaffCategory,
);

export const staffCategoryRoutes = router;