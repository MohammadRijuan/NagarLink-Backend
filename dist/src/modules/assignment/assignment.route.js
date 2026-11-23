"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentRoutes = void 0;
const express_1 = require("express");
const enums_1 = require("../../../generated/prisma/enums");
const checkAuth_1 = require("../../middlewares/checkAuth");
const assignment_controller_1 = require("./assignment.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const assignment_validation_1 = require("./assignment.validation");
const router = (0, express_1.Router)();
// Citizen, Staff, Manager, Admin
router.get("/", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN, enums_1.Role.STAFF, enums_1.Role.MANAGER, enums_1.Role.ADMIN), assignment_controller_1.assignmentControllers.getMyAssignments);
// Citizen, assigned Staff, Manager, Admin
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN, enums_1.Role.STAFF, enums_1.Role.MANAGER, enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ params: assignment_validation_1.assignmentIdParamsSchema }), assignment_controller_1.assignmentControllers.getAssignmentById);
// Assigned Staff submits completion
router.patch("/:id/submit-completion", (0, checkAuth_1.auth)(enums_1.Role.STAFF), (0, validateRequest_1.validateRequest)({ params: assignment_validation_1.assignmentIdParamsSchema }), assignment_controller_1.assignmentControllers.submitAssignmentCompletion);
// Manager/Admin approves or requests correction
router.patch("/:id/review", (0, checkAuth_1.auth)(enums_1.Role.MANAGER, enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({
    params: assignment_validation_1.assignmentIdParamsSchema,
    body: assignment_validation_1.reviewAssignmentSchema,
}), assignment_controller_1.assignmentControllers.reviewAssignmentCompletion);
exports.assignmentRoutes = router;
//# sourceMappingURL=assignment.route.js.map