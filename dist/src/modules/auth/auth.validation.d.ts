import { z } from "zod";
export declare const registerUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    division: z.ZodOptional<z.ZodString>;
    district: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const verifyUserEmailSchema: z.ZodObject<{
    email: z.ZodString;
    otp: z.ZodString;
}, z.core.$strict>;
export declare const loginUserSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strict>;
export declare const forgotPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, z.core.$strict>;
export declare const resetPasswordSchema: z.ZodObject<{
    email: z.ZodString;
    otp: z.ZodString;
    newPassword: z.ZodString;
}, z.core.$strict>;
export declare const googleLoginSchema: z.ZodObject<{
    idToken: z.ZodString;
}, z.core.$strict>;
//# sourceMappingURL=auth.validation.d.ts.map