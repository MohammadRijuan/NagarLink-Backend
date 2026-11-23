"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDepartmentSchema = exports.createDepartmentSchema = exports.departmentIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.departmentIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
exports.createDepartmentSchema = zod_1.z
    .object({
    name: zod_1.z.string().trim().min(1).max(100),
})
    .strict();
exports.updateDepartmentSchema = exports.createDepartmentSchema;
//# sourceMappingURL=department.validation.js.map