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
  })
  .strict()
  .refine((data) => data.proposedFee !== undefined, {
    message: "Proposed fee is required",
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
