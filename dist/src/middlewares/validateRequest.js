"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../utils/AppError");
const catchAsync_1 = require("../utils/catchAsync");
const validateRequest = (schemas) => (0, catchAsync_1.catchAsync)((req, _res, next) => {
    for (const part of ["params", "body"]) {
        const schema = schemas[part];
        if (!schema) {
            continue;
        }
        const value = part === "body" ? req.body ?? {} : req.params;
        const result = schema.safeParse(value);
        if (!result.success) {
            throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, result.error.issues[0]?.message ?? "Invalid request");
        }
        if (part === "body") {
            req.body = result.data;
        }
        else if (typeof result.data === "object" && result.data !== null) {
            Object.assign(req.params, result.data);
        }
    }
    next();
});
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateRequest.js.map