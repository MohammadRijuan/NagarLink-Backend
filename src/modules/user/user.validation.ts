import { z } from "zod";

export const userIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();

export const updateUserSchema = z
  .object({
    name: z.string().trim().min(1).max(100).optional(),
    phone: z.string().trim().min(6).max(20).optional(),
    role: z.enum(["ADMIN", "MANAGER", "STAFF", "CITIZEN"]).optional(),
    isActive: z.boolean().optional(),
    needPasswordChange: z.boolean().optional(),
  })
  .strict()
  .refine((value) => Object.keys(value).length > 0, {
    message: "At least one field must be provided",
  });
