import httpStatus from "http-status";
import { Role } from "../../generated/prisma/enums";
import { AppError } from "../utils/AppError";
import type { RequestUser } from "./checkAuth";

type AuthenticatedUserRecord = {
  id: string;
  email: string;
  name: string;
  role: Role;
  isActive: boolean;
  isDeleted: boolean;
};

export const authorizeAuthenticatedUser = (
  user: AuthenticatedUserRecord | null,
  requiredRoles: Role[],
): RequestUser => {
  if (!user) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "User not found. Please log in again.",
    );
  }

  if (!user.isActive || user.isDeleted) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "Your account is inactive or deleted.",
    );
  }

  if (requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You do not have permission to access this resource.",
    );
  }

  return {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};
