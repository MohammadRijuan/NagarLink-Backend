import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/checkAuth";
import { categoryControllers } from "./category.controller";

const router = Router();

// Create a category
router.post("/", auth(Role.ADMIN), categoryControllers.createCategory);

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
  categoryControllers.getCategoriesByDepartment,
);

// Get a single category
router.get(
  "/:id",
  auth(Role.ADMIN, Role.MANAGER),
  categoryControllers.getCategoryById,
);

// Update a category
router.patch("/:id", auth(Role.ADMIN), categoryControllers.updateCategory);

// Delete a category
router.delete("/:id", auth(Role.ADMIN), categoryControllers.deleteCategory);

export const categoryRoutes = router;
