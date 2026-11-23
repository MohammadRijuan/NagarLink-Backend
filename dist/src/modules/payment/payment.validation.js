"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentSchema = exports.paymentIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.paymentIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
exports.createPaymentSchema = zod_1.z
    .object({
    requestId: zod_1.z.string().uuid(),
})
    .strict();
//# sourceMappingURL=payment.validation.js.map