import { z } from "zod";

export const staffIdParamsSchema = z
  .object({ staffId: z.string().uuid() })
  .strict();

export const staffCategoryParamsSchema = z
  .object({
    staffId: z.string().uuid(),
    categoryId: z.string().uuid(),
  })
  .strict();

export const assignCategoriesSchema = z
  .object({
    categoryIds: z
      .array(z.string().uuid())
      .min(1)
      .refine((ids) => new Set(ids).size === ids.length, {
        message: "Category IDs must be unique",
      }),
  })
  .strict();
