"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeedbackSchema = exports.staffIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.staffIdParamsSchema = zod_1.z
    .object({ staffId: zod_1.z.string().uuid() })
    .strict();
exports.createFeedbackSchema = zod_1.z
    .object({
    assignmentId: zod_1.z.string().uuid(),
    rating: zod_1.z.number().int().min(1).max(5),
    comment: zod_1.z.string().trim().max(2000).optional(),
})
    .strict();
//# sourceMappingURL=feedback.validation.js.map