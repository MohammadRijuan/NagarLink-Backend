import { z } from "zod";
export declare const quotationIdParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strict>;
export declare const createQuotationSchema: z.ZodObject<{
    proposedFee: z.ZodCoercedNumber<unknown>;
    requestId: z.ZodString;
}, z.core.$strict>;
export declare const updateQuotationSchema: z.ZodObject<{
    proposedFee: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        APPROVED: "APPROVED";
        PENDING: "PENDING";
        REJECTED: "REJECTED";
    }>>;
}, z.core.$strict>;
export declare const selectQuotationSchema: z.ZodObject<{
    quotationId: z.ZodString;
}, z.core.$strict>;
export declare const updateQuotationStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        APPROVED: "APPROVED";
        PENDING: "PENDING";
        REJECTED: "REJECTED";
    }>;
}, z.core.$strict>;
//# sourceMappingURL=quotation.validation.d.ts.map