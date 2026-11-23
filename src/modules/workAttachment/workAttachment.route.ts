import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { workAttachmentControllers } from "./workAttachment.controller";
import { auth } from "../../middlewares/checkAuth";
import { upload } from "../../lib/multer";

const router = Router();

// Staff uploads an attachment
router.post(
  "/assignments/:assignmentId",
  auth(Role.STAFF),
  upload.single("file"),
  workAttachmentControllers.createWorkAttachment,
);

// Assignment participants and managers can view attachments
router.get(
  "/assignments/:assignmentId",
  auth(Role.CITIZEN, Role.STAFF, Role.MANAGER, Role.ADMIN),
  workAttachmentControllers.getAllWorkAttachments,
);

// Get one attachment
router.get(
  "/:id",
  auth(Role.CITIZEN, Role.STAFF, Role.MANAGER, Role.ADMIN),
  workAttachmentControllers.getWorkAttachmentById,
);

// Staff owner, manager or admin can delete
router.delete(
  "/:id",
  auth(Role.STAFF, Role.MANAGER, Role.ADMIN),
  workAttachmentControllers.deleteWorkAttachment,
);

export const workAttachmentRoutes = router;