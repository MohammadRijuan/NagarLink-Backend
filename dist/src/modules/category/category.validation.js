"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategorySchema = exports.createCategorySchema = exports.departmentIdParamsSchema = exports.categoryIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.categoryIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
exports.departmentIdParamsSchema = zod_1.z
    .object({ departmentId: zod_1.z.string().uuid() })
    .strict();
exports.createCategorySchema = zod_1.z
    .object({
    name: zod_1.z.string().trim().min(1).max(100),
    departmentId: zod_1.z.string().uuid(),
})
    .strict();
exports.updateCategorySchema = exports.createCategorySchema;
//# sourceMappingURL=category.validation.js.map