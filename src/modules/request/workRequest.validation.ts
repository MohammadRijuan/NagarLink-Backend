import { z } from "zod";

export const workRequestIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();

export const createWorkRequestSchema = z
  .object({
    title: z.string().trim().min(1).max(200),
    description: z.string().trim().min(1).max(10000),
    division: z.string().trim().min(1).max(100),
    city: z.string().trim().min(1).max(100),
    address: z.string().trim().min(1).max(500),
    postalCode: z.string().trim().min(1).max(20),
    phone: z.string().trim().min(6).max(20),
    departmentId: z.string().uuid(),
  })
  .strict();

export const updateWorkRequestSchema = z
  .object({
    title: z.string().trim().min(1).max(200).optional(),
    description: z.string().trim().min(1).max(10000).optional(),
    division: z.string().trim().min(1).max(100).optional(),
    city: z.string().trim().min(1).max(100).optional(),
    postalCode: z.string().trim().min(1).max(20).optional(),
    phone: z.string().trim().min(6).max(20).optional(),
  })
  .strict()
  .refine((value) => Object.keys(value).length > 0, {
    message: "At least one field must be provided",
  });

export const updateWorkRequestStatusSchema = z
  .object({
    status: z.enum([
      "PENDING",
      "REQUESTED",
      "ACCEPTED",
      "CITIZEN_ACCEPTED",
      "CITIZEN_DECLINED",
      "ADVANCE_PAID",
      "ASSIGNED",
      "COMPLETED",
      "REJECTED",
    ]),
    rejectionReason: z.string().trim().max(1000).optional(),
  })
  .strict();
