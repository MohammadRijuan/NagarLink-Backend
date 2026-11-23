"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workAttachmentRoutes = void 0;
const express_1 = require("express");
const enums_1 = require("../../../generated/prisma/enums");
const workAttachment_controller_1 = require("./workAttachment.controller");
const checkAuth_1 = require("../../middlewares/checkAuth");
const multer_1 = require("../../lib/multer");
const validateRequest_1 = require("../../middlewares/validateRequest");
const workAttachment_validation_1 = require("./workAttachment.validation");
const router = (0, express_1.Router)();
// Staff uploads an attachment
router.post("/assignments/:assignmentId", (0, checkAuth_1.auth)(enums_1.Role.STAFF), (0, validateRequest_1.validateRequest)({ params: workAttachment_validation_1.assignmentIdParamsSchema }), multer_1.upload.single("file"), workAttachment_controller_1.workAttachmentControllers.createWorkAttachment);
// Assignment participants and managers can view attachments
router.get("/assignments/:assignmentId", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN, enums_1.Role.STAFF, enums_1.Role.MANAGER, enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ params: workAttachment_validation_1.assignmentIdParamsSchema }), workAttachment_controller_1.workAttachmentControllers.getAllWorkAttachments);
// Get one attachment
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.CITIZEN, enums_1.Role.STAFF, enums_1.Role.MANAGER, enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ params: workAttachment_validation_1.attachmentIdParamsSchema }), workAttachment_controller_1.workAttachmentControllers.getWorkAttachmentById);
// Staff owner, manager or admin can delete
router.delete("/:id", (0, checkAuth_1.auth)(enums_1.Role.STAFF, enums_1.Role.MANAGER, enums_1.Role.ADMIN), (0, validateRequest_1.validateRequest)({ params: workAttachment_validation_1.attachmentIdParamsSchema }), workAttachment_controller_1.workAttachmentControllers.deleteWorkAttachment);
exports.workAttachmentRoutes = router;
//# sourceMappingURL=workAttachment.route.js.map