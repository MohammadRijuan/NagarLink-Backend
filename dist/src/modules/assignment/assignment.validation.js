"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewAssignmentSchema = exports.assignmentIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.assignmentIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
exports.reviewAssignmentSchema = zod_1.z
    .object({
    status: zod_1.z.enum(["COMPLETED", "ONGOING"]),
})
    .strict();
//# sourceMappingURL=assignment.validation.js.map