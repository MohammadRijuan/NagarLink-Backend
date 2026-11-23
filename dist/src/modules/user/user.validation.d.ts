import { z } from "zod";
export declare const userIdParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strict>;
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        ADMIN: "ADMIN";
        CITIZEN: "CITIZEN";
        MANAGER: "MANAGER";
        STAFF: "STAFF";
    }>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    needPasswordChange: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=user.validation.d.ts.map