import { z } from "zod";
export declare const staffIdParamsSchema: z.ZodObject<{
    staffId: z.ZodString;
}, z.core.$strict>;
export declare const staffCategoryParamsSchema: z.ZodObject<{
    staffId: z.ZodString;
    categoryId: z.ZodString;
}, z.core.$strict>;
export declare const assignCategoriesSchema: z.ZodObject<{
    categoryIds: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=staffCategory.validation.d.ts.map