import { z } from "zod";

export const paymentIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();

export const createPaymentSchema = z
  .object({
    requestId: z.string().uuid(),
  })
  .strict();
