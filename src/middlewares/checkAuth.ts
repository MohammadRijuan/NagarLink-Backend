import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";
import httpStatus from "http-status";
import { jwtUtils } from "../utils/jwt";
import config from "../config";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import { Role } from "../../generated/prisma/enums";
import { authorizeAuthenticatedUser } from "./authPolicy";

export interface RequestUser {
  email: string;
  name: string;
  userId: string;
  role: Role;
}

declare global {
  namespace Express {
    interface Request {
      user?: RequestUser;
    }
  }
}

export const auth = (...requiredRoles: Role[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken
      ? req.cookies.accessToken
      : req.headers.authorization?.startsWith("Bearer")
        ? req.headers.authorization?.split(" ")[1]
        : req.headers.authorization;

    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You are not logged in.... please login to access this resource",
      );
    }

    const verifiedToken = jwtUtils.verifyToken(token, config.jwt_access_token);

    if (!verifiedToken.success) {
      throw new AppError(httpStatus.UNAUTHORIZED, verifiedToken.error);
    }

    const { userId } = verifiedToken.data as JwtPayload;

    if (typeof userId !== "string" || userId.length === 0) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Invalid access token");
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        isDeleted: true,
      },
    });

    const authenticatedUser = authorizeAuthenticatedUser(
      user,
      requiredRoles,
    );

    req.user = authenticatedUser;

    next();
  });
};
