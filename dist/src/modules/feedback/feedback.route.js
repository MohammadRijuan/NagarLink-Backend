"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRoutes = void 0;
const express_1 = require("express");
const enums_1 = require("../../../generated/prisma/enums");
const checkAuth_1 = require("../../middlewares/checkAuth");
const feedback_controller_1 = require("./feedback.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const feedback_validation_1 = require("./feedback.validation");
const router = (0, express_1.Router)();
// Citizen submits feedback
router.post("/", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN), (0, validateRequest_1.validateRequest)({ body: feedback_validation_1.createFeedbackSchema }), feedback_controller_1.feedbackControllers.createFeedback);
// Citizen views own feedback
router.get("/my-feedback", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN), feedback_controller_1.feedbackControllers.getMyFeedback);
// Staff, manager and admin view staff feedback
router.get("/staff/:staffId", (0, checkAuth_1.auth)(enums_1.Role.STAFF, enums_1.Role.MANAGER, enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ params: feedback_validation_1.staffIdParamsSchema }), feedback_controller_1.feedbackControllers.getStaffFeedback);
// Manager and admin view all feedback
router.get("/", (0, checkAuth_1.auth)(enums_1.Role.MANAGER, enums_1.Role.ADMIN), feedback_controller_1.feedbackControllers.getAllFeedback);
exports.feedbackRoutes = router;
//# sourceMappingURL=feedback.route.js.map