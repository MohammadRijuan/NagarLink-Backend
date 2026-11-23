"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentRoutes = void 0;
const express_1 = require("express");
const enums_1 = require("../../../generated/prisma/enums");
const checkAuth_1 = require("../../middlewares/checkAuth");
const assignment_controller_1 = require("./assignment.controller");
const router = (0, express_1.Router)();
router.get("/request/:requestId/contact", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN, enums_1.Role.STAFF), assignment_controller_1.assignmentControllers.getAssignmentContacts);
exports.assignmentRoutes = router;
//# sourceMappingURL=assignment.route.js.map