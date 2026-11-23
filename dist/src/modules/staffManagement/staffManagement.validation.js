"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffIdParamsSchema = void 0;
const zod_1 = require("zod");
exports.staffIdParamsSchema = zod_1.z
    .object({ id: zod_1.z.string().uuid() })
    .strict();
//# sourceMappingURL=staffManagement.validation.js.map