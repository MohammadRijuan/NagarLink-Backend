import { z } from "zod";
export declare const invitationIdParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strict>;
export declare const createStaffInvitationSchema: z.ZodObject<{
    requestId: z.ZodString;
    staffId: z.ZodString;
}, z.core.$strict>;
export declare const respondToInvitationSchema: z.ZodObject<{
    status: z.ZodEnum<{
        ACCEPTED: "ACCEPTED";
        REJECTED: "REJECTED";
    }>;
    responseNote: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=staffInvitation.validation.d.ts.map