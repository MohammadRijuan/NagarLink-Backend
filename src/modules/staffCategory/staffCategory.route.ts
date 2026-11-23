import express from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { staffCategoryControllers } from "./staffCategory.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  assignCategoriesSchema,
  staffCategoryParamsSchema,
  staffIdParamsSchema,
} from "./staffCategory.validation";


const router = express.Router();

// Assign categories to staff
router.post(
  "/:staffId/categories",
  auth(Role.ADMIN),
  validateRequest({
    params: staffIdParamsSchema,
    body: assignCategoriesSchema,
  }),
  staffCategoryControllers.assignCategoriesToStaff,
);

// Get categories assigned to a staff member
router.get(
  "/:staffId/categories",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: staffIdParamsSchema }),
  staffCategoryControllers.getStaffCategories,
);

// Remove a category assignment
router.delete(
  "/:staffId/categories/:categoryId",
  auth(Role.ADMIN),
  validateRequest({ params: staffCategoryParamsSchema }),
  staffCategoryControllers.removeStaffCategory,
);

export const staffCategoryRoutes = router;