import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/checkAuth";
import { categoryControllers } from "./category.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  categoryIdParamsSchema,
  createCategorySchema,
  departmentIdParamsSchema,
  updateCategorySchema,
} from "./category.validation";

const router = Router();

// Create a category
router.post(
  "/",
  auth(Role.ADMIN),
  validateRequest({ body: createCategorySchema }),
  categoryControllers.createCategory,
);

// Get all categories
router.get(
  "/",
  auth(Role.ADMIN, Role.MANAGER),
  categoryControllers.getAllCategories,
);

// Get categories by department
router.get(
  "/department/:departmentId",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: departmentIdParamsSchema }),
  categoryControllers.getCategoriesByDepartment,
);

// Get a single category
router.get(
  "/:id",
  auth(Role.ADMIN, Role.MANAGER),
  validateRequest({ params: categoryIdParamsSchema }),
  categoryControllers.getCategoryById,
);

// Update a category
router.patch(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({
    params: categoryIdParamsSchema,
    body: updateCategorySchema,
  }),
  categoryControllers.updateCategory,
);

// Delete a category
router.delete(
  "/:id",
  auth(Role.ADMIN),
  validateRequest({ params: categoryIdParamsSchema }),
  categoryControllers.deleteCategory,
);

export const categoryRoutes = router;
