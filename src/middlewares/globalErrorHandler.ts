import { NextFunction, Request, Response } from "express";
import config from "../config";
import httpStatus from "http-status";
import { Prisma } from "../../generated/prisma/client";
import { AppError } from "../utils/AppError";

export const globalHandleError = async (
  err: any,
  _req: Request, // _req → Request parameter intentionally unused.
  res: Response,
  _next: NextFunction, //_next → NextFunction parameter intentionally unused. we can write normal..  But your linter might show warnings:
) => {
  if (config.node_env === "development") {
    console.log("Error from global error handler", err);
  }

  let statusCode: number = httpStatus.INTERNAL_SERVER_ERROR;
  let errorMessage = err.message || "Internal server error";
  const errorName = err.name || "Internal Server error";

  if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = httpStatus.BAD_REQUEST;
    errorMessage = "You have provided incorrect field type or missing fields";
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      statusCode = httpStatus.BAD_REQUEST;
      errorMessage = "Duplicate Key Error";
    } else if (err.code === "P2023") {
      statusCode = httpStatus.BAD_REQUEST;
      errorMessage = "foreign Key Error";
    } else if (err.code === "P2025") {
      statusCode = httpStatus.BAD_REQUEST;
      errorMessage =
        "An operation failed because it depends on one or more records that were required but not found.";
    }
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    if (err.errorCode === "P1000") {
      statusCode = httpStatus.UNAUTHORIZED;
      errorMessage = "Authentication error... please check your credentials";
    } else if (err.errorCode === "P1001") {
      statusCode = httpStatus.BAD_REQUEST;
      errorMessage = "Can't reach database server";
    }
  } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    errorMessage = "Error occurred during query execution";
  } else if (err instanceof AppError) {
    errorMessage = err.message;
    statusCode = err.statusCode;
  } else if (err instanceof Error) {
    errorMessage = err.message;
  }

  res.status(statusCode).json({
    success: false,
    statusCode: statusCode || httpStatus.INTERNAL_SERVER_ERROR,
    name:
      config.node_env === "development" ? errorName : "Internal Server Error",
    message:
      config.node_env === "development"
        ? errorMessage
        : "Internal Server Error",
    error: config.node_env === "development" ? err : undefined,
    stack: config.node_env === "development" ? err.stack : undefined,
  });
};
