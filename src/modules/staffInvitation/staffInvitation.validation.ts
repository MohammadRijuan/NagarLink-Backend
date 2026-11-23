import { z } from "zod";

export const invitationIdParamsSchema = z
  .object({ id: z.string().uuid() })
  .strict();

export const createStaffInvitationSchema = z
  .object({
    requestId: z.string().uuid(),
    staffId: z.string().uuid(),
  })
  .strict();

export const respondToInvitationSchema = z
  .object({
    status: z.enum(["ACCEPTED", "REJECTED"]),
    responseNote: z.string().trim().max(1000).optional(),
  })
  .strict();
