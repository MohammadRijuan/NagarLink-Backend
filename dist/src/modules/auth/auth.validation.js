"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleLoginSchema = exports.resetPasswordSchema = exports.forgotPasswordSchema = exports.loginUserSchema = exports.verifyUserEmailSchema = exports.registerUserSchema = void 0;
const zod_1 = require("zod");
const emailSchema = zod_1.z.string().trim().toLowerCase().email();
const otpSchema = zod_1.z.string().regex(/^\d{6}$/, "OTP must be 6 digits");
const passwordSchema = zod_1.z.string().min(8).max(128);
exports.registerUserSchema = zod_1.z
    .object({
    name: zod_1.z.string().trim().min(1).max(100),
    email: emailSchema,
    password: passwordSchema,
    phone: zod_1.z.string().trim().min(6).max(20).optional(),
    division: zod_1.z.string().trim().max(100).optional(),
    district: zod_1.z.string().trim().max(100).optional(),
    address: zod_1.z.string().trim().max(500).optional(),
    postalCode: zod_1.z.string().trim().max(20).optional(),
})
    .strict();
exports.verifyUserEmailSchema = zod_1.z
    .object({
    email: emailSchema,
    otp: otpSchema,
})
    .strict();
exports.loginUserSchema = zod_1.z
    .object({
    email: emailSchema,
    password: zod_1.z.string().min(1).max(128),
})
    .strict();
exports.forgotPasswordSchema = zod_1.z
    .object({
    email: emailSchema,
})
    .strict();
exports.resetPasswordSchema = zod_1.z
    .object({
    email: emailSchema,
    otp: otpSchema,
    newPassword: passwordSchema,
})
    .strict();
exports.googleLoginSchema = zod_1.z
    .object({
    idToken: zod_1.z.string().trim().min(1),
})
    .strict();
//# sourceMappingURL=auth.validation.js.map