import { z } from "zod";

export const departmentIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();

export const createDepartmentSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
  })
  .strict();

export const updateDepartmentSchema = createDepartmentSchema;
