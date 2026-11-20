import { Router } from "express";
import { authControllers } from "./auth.controller";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post("/register", authControllers.registerUser);
router.post("/verify-email", authControllers.verifyUserEmail);
router.post("/login", authControllers.loginUser);
router.get(
  "/me",
  auth(Role.CITIZEN, Role.ADMIN, Role.MANAGER, Role.STAFF),
  authControllers.getMyProfile,
);
router.post("/refresh-token", authControllers.refreshToken);
router.post("/forgot-password", authControllers.forgotPassword);
router.post("/reset-password", authControllers.resetPassword);
router.post("/google", authControllers.googleLogin);

export const authRoutes = router;
