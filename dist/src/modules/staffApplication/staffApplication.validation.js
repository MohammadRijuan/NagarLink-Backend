"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStaffApplicationSchema = exports.createStaffApplicationSchema = exports.staffApplicationIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.staffApplicationIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
exports.createStaffApplicationSchema = zod_1.z
    .object({
    experience: zod_1.z.coerce.number().int().min(0).max(80),
    experienceDetails: zod_1.z.string().trim().min(1).max(5000),
    division: zod_1.z.string().trim().min(1).max(100),
    district: zod_1.z.string().trim().min(1).max(100),
    address: zod_1.z.string().trim().min(1).max(500),
    postalCode: zod_1.z.string().trim().min(1).max(20),
})
    .strict();
exports.updateStaffApplicationSchema = zod_1.z
    .object({
    status: zod_1.z.enum(["PENDING", "APPROVED", "REJECTED"]),
})
    .strict();
//# sourceMappingURL=staffApplication.validation.js.map