"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = require("express");
const enums_1 = require("../../../generated/prisma/enums");
const checkAuth_1 = require("../../middlewares/checkAuth");
const category_controller_1 = require("./category.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const category_validation_1 = require("./category.validation");
const router = (0, express_1.Router)();
// Create a category
router.post("/", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ body: category_validation_1.createCategorySchema }), category_controller_1.categoryControllers.createCategory);
// Get all categories
router.get("/", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), category_controller_1.categoryControllers.getAllCategories);
// Get categories by department
router.get("/department/:departmentId", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), (0, validateRequest_1.validateRequest)({ params: category_validation_1.departmentIdParamsSchema }), category_controller_1.categoryControllers.getCategoriesByDepartment);
// Get a single category
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), (0, validateRequest_1.validateRequest)({ params: category_validation_1.categoryIdParamsSchema }), category_controller_1.categoryControllers.getCategoryById);
// Update a category
router.patch("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({
    params: category_validation_1.categoryIdParamsSchema,
    body: category_validation_1.updateCategorySchema,
}), category_controller_1.categoryControllers.updateCategory);
// Delete a category
router.delete("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ params: category_validation_1.categoryIdParamsSchema }), category_controller_1.categoryControllers.deleteCategory);
exports.categoryRoutes = router;
//# sourceMappingURL=category.route.js.map