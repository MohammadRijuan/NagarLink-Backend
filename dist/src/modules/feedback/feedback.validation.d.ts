import { z } from "zod";
export declare const staffIdParamsSchema: z.ZodObject<{
    staffId: z.ZodString;
}, z.core.$strict>;
export declare const createFeedbackSchema: z.ZodObject<{
    assignmentId: z.ZodString;
    rating: z.ZodNumber;
    comment: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=feedback.validation.d.ts.map