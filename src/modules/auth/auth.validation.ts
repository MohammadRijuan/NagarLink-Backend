import { z } from "zod";

const emailSchema = z.string().trim().toLowerCase().email();
const otpSchema = z.string().regex(/^\d{6}$/, "OTP must be 6 digits");
const passwordSchema = z.string().min(8).max(128);

export const registerUserSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    email: emailSchema,
    password: passwordSchema,
    phone: z.string().trim().min(6).max(20).optional(),
    division: z.string().trim().max(100).optional(),
    district: z.string().trim().max(100).optional(),
    address: z.string().trim().max(500).optional(),
    postalCode: z.string().trim().max(20).optional(),
  })
  .strict();

export const verifyUserEmailSchema = z
  .object({
    email: emailSchema,
    otp: otpSchema,
  })
  .strict();

export const loginUserSchema = z
  .object({
    email: emailSchema,
    password: z.string().min(1).max(128),
  })
  .strict();

export const forgotPasswordSchema = z
  .object({
    email: emailSchema,
  })
  .strict();

export const resetPasswordSchema = z
  .object({
    email: emailSchema,
    otp: otpSchema,
    newPassword: passwordSchema,
  })
  .strict();

export const googleLoginSchema = z
  .object({
    idToken: z.string().trim().min(1),
  })
  .strict();