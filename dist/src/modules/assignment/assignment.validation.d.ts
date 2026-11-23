import { z } from "zod";
export declare const assignmentIdParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strict>;
export declare const reviewAssignmentSchema: z.ZodObject<{
    status: z.ZodEnum<{
        COMPLETED: "COMPLETED";
        ONGOING: "ONGOING";
    }>;
}, z.core.$strict>;
//# sourceMappingURL=assignment.validation.d.ts.map