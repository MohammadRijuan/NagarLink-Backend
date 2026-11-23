import { z } from "zod";

export const assignmentIdParamsSchema = z
  .object({ assignmentId: z.string().uuid() })
  .strict();

export const attachmentIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();
