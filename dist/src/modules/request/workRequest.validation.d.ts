import { z } from "zod";
export declare const workRequestIdParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strict>;
export declare const createWorkRequestSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    division: z.ZodString;
    city: z.ZodString;
    address: z.ZodString;
    postalCode: z.ZodString;
    phone: z.ZodString;
    departmentId: z.ZodString;
}, z.core.$strict>;
export declare const updateWorkRequestSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    division: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const updateWorkRequestStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        ACCEPTED: "ACCEPTED";
        ADVANCE_PAID: "ADVANCE_PAID";
        ASSIGNED: "ASSIGNED";
        CITIZEN_ACCEPTED: "CITIZEN_ACCEPTED";
        CITIZEN_DECLINED: "CITIZEN_DECLINED";
        COMPLETED: "COMPLETED";
        PENDING: "PENDING";
        REJECTED: "REJECTED";
        REQUESTED: "REQUESTED";
    }>;
    rejectionReason: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=workRequest.validation.d.ts.map