import express, { Router } from "express";
import { auth } from "../../middlewares/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { staffInvitationControllers } from "./staffInvitation.controller";


const router = Router();

// Manager sends invitation to staff
router.post(
  "/",
  auth(Role.MANAGER, Role.ADMIN),
  staffInvitationControllers.createStaffInvitation
);

// Manager/Admin views all invitations
router.get(
  "/",
  auth(Role.MANAGER, Role.ADMIN),
  staffInvitationControllers.getAllStaffInvitations
);

// Staff views their own invitations
router.get(
  "/my-invitations",
  auth(Role.STAFF),
  staffInvitationControllers.getMyInvitations
);

// View invitation details
router.get(
  "/:id",
  auth(Role.MANAGER, Role.ADMIN, Role.STAFF),
  staffInvitationControllers.getStaffInvitationById
);

// Staff accepts or rejects invitation
router.patch(
  "/:id/respond",
  auth(Role.STAFF),
  staffInvitationControllers.respondToInvitation
);

// Manager/Admin deletes invitation
router.delete(
  "/:id",
  auth(Role.MANAGER, Role.ADMIN),
  staffInvitationControllers.deleteStaffInvitation
);

// router.patch(
//   "/:id/select-quotation",
//   auth(Role.CITIZEN),
//   workRequestControllers.selectQuotation,
// );

export const staffInvitationRoutes = router;