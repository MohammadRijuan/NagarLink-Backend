import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import type { ZodType } from "zod";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";

type RequestSchemas = {
  body?: ZodType;
  params?: ZodType;
};

export const validateRequest = (schemas: RequestSchemas) =>
  catchAsync((req: Request, _res: Response, next: NextFunction) => {
    for (const part of ["params", "body"] as const) {
      const schema = schemas[part];
      if (!schema) {
        continue;
      }

      const value = part === "body" ? req.body ?? {} : req.params;
      const result = schema.safeParse(value);

      if (!result.success) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          result.error.issues[0]?.message ?? "Invalid request",
        );
      }

      if (part === "body") {
        req.body = result.data;
      } else if (typeof result.data === "object" && result.data !== null) {
        Object.assign(req.params, result.data);
      }
    }

    next();
  });