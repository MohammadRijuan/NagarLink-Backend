import { z } from "zod";
export declare const staffApplicationIdParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strict>;
export declare const createStaffApplicationSchema: z.ZodObject<{
    experience: z.ZodCoercedNumber<unknown>;
    experienceDetails: z.ZodString;
    division: z.ZodString;
    district: z.ZodString;
    address: z.ZodString;
    postalCode: z.ZodString;
}, z.core.$strict>;
export declare const updateStaffApplicationSchema: z.ZodObject<{
    status: z.ZodEnum<{
        APPROVED: "APPROVED";
        PENDING: "PENDING";
        REJECTED: "REJECTED";
    }>;
}, z.core.$strict>;
//# sourceMappingURL=staffApplication.validation.d.ts.map