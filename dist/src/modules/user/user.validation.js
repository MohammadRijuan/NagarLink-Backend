"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.userIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.userIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
exports.updateUserSchema = zod_1.z
    .object({
    name: zod_1.z.string().trim().min(1).max(100).optional(),
    phone: zod_1.z.string().trim().min(6).max(20).optional(),
    role: zod_1.z.enum(["ADMIN", "MANAGER", "STAFF", "CITIZEN"]).optional(),
    isActive: zod_1.z.boolean().optional(),
    needPasswordChange: zod_1.z.boolean().optional(),
})
    .strict()
    .refine((value) => Object.keys(value).length > 0, {
    message: "At least one field must be provided",
});
//# sourceMappingURL=user.validation.js.map