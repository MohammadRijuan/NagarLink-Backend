"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignCategoriesSchema = exports.staffCategoryParamsSchema = exports.staffIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.staffIdParamsSchema = zod_1.z
    .object({ staffId: zod_1.z.string().uuid() })
    .strict();
exports.staffCategoryParamsSchema = zod_1.z
    .object({
    staffId: zod_1.z.string().uuid(),
    categoryId: zod_1.z.string().uuid(),
})
    .strict();
exports.assignCategoriesSchema = zod_1.z
    .object({
    categoryIds: zod_1.z
        .array(zod_1.z.string().uuid())
        .min(1)
        .refine((ids) => new Set(ids).size === ids.length, {
        message: "Category IDs must be unique",
    }),
})
    .strict();
//# sourceMappingURL=staffCategory.validation.js.map