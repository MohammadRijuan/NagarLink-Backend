import { z } from "zod";

export const categoryIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();

export const departmentIdParamsSchema = z
  .object({ departmentId: z.string().uuid() })
  .strict();

export const createCategorySchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    departmentId: z.string().uuid(),
  })
  .strict();

export const updateCategorySchema = createCategorySchema;
