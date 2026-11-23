import { z } from "zod";

export const quotationIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();

export const createQuotationSchema = z
  .object({
    proposedFee: z.coerce.number().finite().positive(),
    requestId: z.string().uuid(),
  })
  .strict();

export const updateQuotationSchema = z
  .object({
    proposedFee: z.coerce.number().finite().positive().optional(),
    status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
  })
  .strict()
  .refine((value) => Object.keys(value).length > 0, {
    message: "At least one field must be provided",
  });

export const selectQuotationSchema = z
  .object({
    quotationId: z.string().uuid(),
  })
  .strict();

export const updateQuotationStatusSchema = z
  .object({
    status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
  })
  .strict();
