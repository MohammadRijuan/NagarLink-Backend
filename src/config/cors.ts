import cors = require("cors");
import type { NextFunction, Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import { AppError } from "../utils/AppError";

export const parseFrontendOrigins = (
  frontendUrl: string | undefined,
  additionalOrigins: string | undefined,
): string[] => {
  if (!frontendUrl?.trim()) {
    throw new Error("FRONTEND_URL must be configured for credentialed CORS.");
  }

  const configuredOrigins = [
    frontendUrl,
    ...(additionalOrigins ?? "").split(","),
  ]
    .map((origin) => origin.trim())
    .filter(Boolean);

  const origins = new Set<string>();

  for (const value of configuredOrigins) {
    let url: URL;
    try {
      url = new URL(value);
    } catch {
      throw new Error(`Invalid frontend origin configured for CORS: ${value}`);
    }

    if (
      (url.protocol !== "http:" && url.protocol !== "https:") ||
      url.pathname !== "/" ||
      url.search ||
      url.hash
    ) {
      throw new Error(`Invalid frontend origin configured for CORS: ${value}`);
    }

    origins.add(url.origin);
  }

  return [...origins];
};

export const createCorsMiddleware = (
  allowedOrigins: readonly string[],
): RequestHandler =>
  cors({
    origin: (origin, callback) => {
      callback(null, Boolean(origin && allowedOrigins.includes(origin)));
    },
    credentials: true,
  });

export const enforceAllowedOrigins = (
  allowedOrigins: readonly string[],
): RequestHandler =>
  (req: Request, _res: Response, next: NextFunction) => {
    const origin = req.get("origin");
    const isMutation = ["POST", "PUT", "PATCH", "DELETE"].includes(req.method);

    if (isMutation && origin && !allowedOrigins.includes(origin)) {
      return next(
        new AppError(httpStatus.FORBIDDEN, "Request origin is not allowed."),
      );
    }

    next();
  };
