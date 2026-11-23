"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondToInvitationSchema = exports.createStaffInvitationSchema = exports.invitationIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.invitationIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
exports.createStaffInvitationSchema = zod_1.z
    .object({
    requestId: zod_1.z.string().uuid(),
    staffId: zod_1.z.string().uuid(),
})
    .strict();
exports.respondToInvitationSchema = zod_1.z
    .object({
    status: zod_1.z.enum(["ACCEPTED", "REJECTED"]),
    responseNote: zod_1.z.string().trim().max(1000).optional(),
})
    .strict();
//# sourceMappingURL=staffInvitation.validation.js.map