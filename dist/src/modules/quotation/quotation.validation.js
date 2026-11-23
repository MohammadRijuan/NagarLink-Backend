"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuotationStatusSchema = exports.selectQuotationSchema = exports.updateQuotationSchema = exports.createQuotationSchema = exports.quotationIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.quotationIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
exports.createQuotationSchema = zod_1.z
    .object({
    proposedFee: zod_1.z.coerce.number().finite().positive(),
    requestId: zod_1.z.string().uuid(),
})
    .strict();
exports.updateQuotationSchema = zod_1.z
    .object({
    proposedFee: zod_1.z.coerce.number().finite().positive().optional(),
    status: zod_1.z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
})
    .strict()
    .refine((value) => Object.keys(value).length > 0, {
    message: "At least one field must be provided",
});
exports.selectQuotationSchema = zod_1.z
    .object({
    quotationId: zod_1.z.string().uuid(),
})
    .strict();
exports.updateQuotationStatusSchema = zod_1.z
    .object({
    status: zod_1.z.enum(["PENDING", "APPROVED", "REJECTED"]),
})
    .strict();
//# sourceMappingURL=quotation.validation.js.map