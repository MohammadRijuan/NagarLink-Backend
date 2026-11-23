import { z } from "zod";

export const staffApplicationIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();

export const createStaffApplicationSchema = z
  .object({
    experience: z.coerce.number().int().min(0).max(80),
    experienceDetails: z.string().trim().min(1).max(5000),
    division: z.string().trim().min(1).max(100),
    district: z.string().trim().min(1).max(100),
    address: z.string().trim().min(1).max(500),
    postalCode: z.string().trim().min(1).max(20),
  })
  .strict();

export const updateStaffApplicationSchema = z
  .object({
    status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
  })
  .strict();
