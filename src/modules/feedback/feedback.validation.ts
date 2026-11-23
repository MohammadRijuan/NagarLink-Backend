import { z } from "zod";

export const staffIdParamsSchema = z
  .object({ staffId: z.string().uuid() })
  .strict();

export const createFeedbackSchema = z
  .object({
    assignmentId: z.string().uuid(),
    rating: z.number().int().min(1).max(5),
    comment: z.string().trim().max(2000).optional(),
  })
  .strict();
