import { Router } from "express";
import { authControllers } from "./auth.controller";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  forgotPasswordSchema,
  googleLoginSchema,
  loginUserSchema,
  registerUserSchema,
  resetPasswordSchema,
  verifyUserEmailSchema,
} from "./auth.validation";

const router = Router();

router.post(
  "/register",
  validateRequest({ body: registerUserSchema }),
  authControllers.registerUser,
);

router.post(
  "/verify-email",
  validateRequest({ body: verifyUserEmailSchema }),
  authControllers.verifyUserEmail,
);

router.post(
  "/login",
  validateRequest({ body: loginUserSchema }),
  authControllers.loginUser,
);

router.post("/google", authControllers.googleLogin);

router.get(
  "/me",
  auth(Role.CITIZEN, Role.ADMIN, Role.MANAGER, Role.STAFF),
  authControllers.getMyProfile,
);

router.post("/refresh-token", authControllers.refreshToken);

router.post(
  "/forgot-password",
  validateRequest({ body: forgotPasswordSchema }),
  authControllers.forgotPassword,
);

router.post(
  "/reset-password",
  validateRequest({ body: resetPasswordSchema }),
  authControllers.resetPassword,
);

router.post(
  "/google",
  validateRequest({ body: googleLoginSchema }),
  authControllers.googleLogin,
);

router.post(
  "/logout",
  authControllers.logout,
);

export const authRoutes = router;
