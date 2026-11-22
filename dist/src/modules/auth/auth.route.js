"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const checkAuth_1 = require("../../middlewares/checkAuth");
const enums_1 = require("../../../generated/prisma/enums");
const router = (0, express_1.Router)();
router.post("/register", auth_controller_1.authControllers.registerUser);
router.post("/verify-email", auth_controller_1.authControllers.verifyUserEmail);
router.post("/login", auth_controller_1.authControllers.loginUser);
router.get("/me", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN, enums_1.Role.ADMIN, enums_1.Role.MANAGER, enums_1.Role.STAFF), auth_controller_1.authControllers.getMyProfile);
router.post("/refresh-token", auth_controller_1.authControllers.refreshToken);
router.post("/forgot-password", auth_controller_1.authControllers.forgotPassword);
router.post("/reset-password", auth_controller_1.authControllers.resetPassword);
router.post("/google", auth_controller_1.authControllers.googleLogin);
exports.authRoutes = router;
//# sourceMappingURL=auth.route.js.map