import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { workAttachmentControllers } from "./workAttachment.controller";
import { auth } from "../../middlewares/checkAuth";
import { upload } from "../../lib/multer";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  assignmentIdParamsSchema,
  attachmentIdParamsSchema,
} from "./workAttachment.validation";

const router = Router();

// Staff uploads an attachment
router.post(
  "/assignments/:assignmentId",
  auth(Role.STAFF),
  validateRequest({ params: assignmentIdParamsSchema }),
  upload.single("file"),
  workAttachmentControllers.createWorkAttachment,
);

// Assignment participants and managers can view attachments
router.get(
  "/assignments/:assignmentId",
  auth(Role.CITIZEN, Role.STAFF, Role.MANAGER, Role.ADMIN),
  validateRequest({ params: assignmentIdParamsSchema }),
  workAttachmentControllers.getAllWorkAttachments,
);

// Get one attachment
router.get(
  "/:id",
  auth(Role.CITIZEN, Role.STAFF, Role.MANAGER, Role.ADMIN),
  validateRequest({ params: attachmentIdParamsSchema }),
  workAttachmentControllers.getWorkAttachmentById,
);

// Staff owner, manager or admin can delete
router.delete(
  "/:id",
  auth(Role.STAFF, Role.MANAGER, Role.ADMIN),
  validateRequest({ params: attachmentIdParamsSchema }),
  workAttachmentControllers.deleteWorkAttachment,
);

export const workAttachmentRoutes = router;