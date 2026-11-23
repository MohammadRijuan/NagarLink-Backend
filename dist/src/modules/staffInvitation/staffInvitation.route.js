"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffInvitationRoutes = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const enums_1 = require("../../../generated/prisma/enums");
const staffInvitation_controller_1 = require("./staffInvitation.controller");
const router = (0, express_1.Router)();
// Manager sends invitation to staff
router.post("/", (0, checkAuth_1.auth)(enums_1.Role.MANAGER, enums_1.Role.ADMIN), staffInvitation_controller_1.staffInvitationControllers.createStaffInvitation);
// Manager/Admin views all invitations
router.get("/", (0, checkAuth_1.auth)(enums_1.Role.MANAGER, enums_1.Role.ADMIN), staffInvitation_controller_1.staffInvitationControllers.getAllStaffInvitations);
// Staff views their own invitations
router.get("/my-invitations", (0, checkAuth_1.auth)(enums_1.Role.STAFF), staffInvitation_controller_1.staffInvitationControllers.getMyInvitations);
// View invitation details
router.get("/:id", (0, checkAuth_1.auth)(enums_1.Role.MANAGER, enums_1.Role.ADMIN, enums_1.Role.STAFF), staffInvitation_controller_1.staffInvitationControllers.getStaffInvitationById);
// Staff accepts or rejects invitation
router.patch("/:id/respond", (0, checkAuth_1.auth)(enums_1.Role.STAFF), staffInvitation_controller_1.staffInvitationControllers.respondToInvitation);
// Manager/Admin deletes invitation
router.delete("/:id", (0, checkAuth_1.auth)(enums_1.Role.MANAGER, enums_1.Role.ADMIN), staffInvitation_controller_1.staffInvitationControllers.deleteStaffInvitation);
// router.patch(
//   "/:id/select-quotation",
//   auth(Role.CITIZEN),
//   workRequestControllers.selectQuotation,
// );
exports.staffInvitationRoutes = router;
//# sourceMappingURL=staffInvitation.route.js.map