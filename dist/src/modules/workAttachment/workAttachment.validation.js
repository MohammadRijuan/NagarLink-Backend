"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachmentIdParamsSchema = exports.assignmentIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.assignmentIdParamsSchema = zod_1.z
    .object({ assignmentId: zod_1.z.string().uuid() })
    .strict();
exports.attachmentIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
//# sourceMappingURL=workAttachment.validation.js.map