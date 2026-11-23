"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWorkRequestStatusSchema = exports.updateWorkRequestSchema = exports.createWorkRequestSchema = exports.workRequestIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.workRequestIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
exports.createWorkRequestSchema = zod_1.z
    .object({
    title: zod_1.z.string().trim().min(1).max(200),
    description: zod_1.z.string().trim().min(1).max(10000),
    division: zod_1.z.string().trim().min(1).max(100),
    city: zod_1.z.string().trim().min(1).max(100),
    address: zod_1.z.string().trim().min(1).max(500),
    postalCode: zod_1.z.string().trim().min(1).max(20),
    phone: zod_1.z.string().trim().min(6).max(20),
    departmentId: zod_1.z.string().uuid(),
})
    .strict();
exports.updateWorkRequestSchema = zod_1.z
    .object({
    title: zod_1.z.string().trim().min(1).max(200).optional(),
    description: zod_1.z.string().trim().min(1).max(10000).optional(),
    division: zod_1.z.string().trim().min(1).max(100).optional(),
    city: zod_1.z.string().trim().min(1).max(100).optional(),
    postalCode: zod_1.z.string().trim().min(1).max(20).optional(),
    phone: zod_1.z.string().trim().min(6).max(20).optional(),
})
    .strict()
    .refine((value) => Object.keys(value).length > 0, {
    message: "At least one field must be provided",
});
exports.updateWorkRequestStatusSchema = zod_1.z
    .object({
    status: zod_1.z.enum([
        "PENDING",
        "REQUESTED",
        "ACCEPTED",
        "CITIZEN_ACCEPTED",
        "CITIZEN_DECLINED",
        "ADVANCE_PAID",
        "ASSIGNED",
        "COMPLETED",
        "REJECTED",
    ]),
    rejectionReason: zod_1.z.string().trim().max(1000).optional(),
})
    .strict();
//# sourceMappingURL=workRequest.validation.js.map