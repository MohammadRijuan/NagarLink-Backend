"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const enums_1 = require("../../../generated/prisma/enums");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
// Get all users
router.get("/", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), user_controller_1.userControllers.getAllUsers);
// Get all staff
router.get("/all-staffs", (0, checkAuth_1.auth)(enums_1.Role.ADMIN, enums_1.Role.MANAGER), user_controller_1.userControllers.getAllStaffs);
// Get user by ID
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ params: user_validation_1.userIdParamsSchema }), user_controller_1.userControllers.getUserById);
// Update user
router.patch("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ params: user_validation_1.userIdParamsSchema, body: user_validation_1.updateUserSchema }), user_controller_1.userControllers.updateUserById);
// Delete user
router.delete("/:id", (0, checkAuth_1.auth)(enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ params: user_validation_1.userIdParamsSchema }), user_controller_1.userControllers.deleteUserById);
exports.userRoutes = router;
//# sourceMappingURL=user.route.js.map