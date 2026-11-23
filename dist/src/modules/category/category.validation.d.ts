import { z } from "zod";
export declare const categoryIdParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strict>;
export declare const departmentIdParamsSchema: z.ZodObject<{
    departmentId: z.ZodString;
}, z.core.$strict>;
export declare const createCategorySchema: z.ZodObject<{
    name: z.ZodString;
    departmentId: z.ZodString;
}, z.core.$strict>;
export declare const updateCategorySchema: z.ZodObject<{
    name: z.ZodString;
    departmentId: z.ZodString;
}, z.core.$strict>;
//# sourceMappingURL=category.validation.d.ts.map