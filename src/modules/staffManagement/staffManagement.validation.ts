import { z } from "zod";

export const staffIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();
