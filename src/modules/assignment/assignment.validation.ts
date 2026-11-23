import { z } from "zod";

export const assignmentIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();

export const reviewAssignmentSchema = z
  .object({
    status: z.enum(["COMPLETED", "ONGOING"]),
  })
  .strict();
