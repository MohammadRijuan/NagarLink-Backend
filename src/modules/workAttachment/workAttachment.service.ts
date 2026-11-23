import httpStatus from "http-status";
import { AssignmentStatus, Role } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { cloudinary } from "../../lib/cloudinary";

import { RequestUser } from "../../middlewares/checkAuth";
import {
  ICreateWorkAttachment,
  IDeleteWorkAttachment,
  IGetWorkAttachmentById,
  IGetWorkAttachments,
} from "./workAttachment.interface";
import { AppError } from "../../utils/AppError";

// Upload file to Cloudinary
const uploadToCloudinary = async (file: Express.Multer.File) => {
  return new Promise<{
    secure_url: string;
    public_id: string;
    resource_type: string;
  }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "nagarlink/work-attachments",
        resource_type: "auto",
      },
      (error, result) => {
        if (error || !result) {
          return reject(error || new Error("Cloudinary upload failed"));
        }

        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
          resource_type: result.resource_type,
        });
      },
    );

    stream.end(file.buffer);
  });
};

// Check whether user is allowed to access the assignment
const checkAssignmentAccess = (
  assignment: { staffId: string; citizenId: string },
  user: RequestUser,
) => {
  const isParticipant =
    assignment.staffId === user.userId ||
    assignment.citizenId === user.userId;

  const isManagerOrAdmin =
    user.role === Role.MANAGER || user.role === Role.ADMIN;

  if (!isParticipant && !isManagerOrAdmin) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to access this attachment",
    );
  }
};

// 1. Create attachment
const createWorkAttachmentService = async (
  payload: ICreateWorkAttachment,
) => {
  const { assignmentId, file, user } = payload;

  if (!file) {
    throw new AppError(httpStatus.BAD_REQUEST, "Please upload a file");
  }

  const assignment = await prisma.assignment.findUnique({
    where: {
      id: assignmentId,
    },
  });

  if (!assignment) {
    throw new AppError(httpStatus.NOT_FOUND, "Assignment not found");
  }

  if (assignment.staffId !== user.userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "Only the assigned staff can upload attachments",
    );
  }

  if (assignment.status !== AssignmentStatus.ONGOING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Attachments can only be uploaded while the assignment is ongoing",
    );
  }

  const uploadedFile = await uploadToCloudinary(file);

  try {
    const result = await prisma.workAttachment.create({
      data: {
        assignmentId,
        fileUrl: uploadedFile.secure_url,
        fileName: file.originalname,
        fileType: file.mimetype,
        publicId: uploadedFile.public_id,
        resourceType: uploadedFile.resource_type,
      },
    });

    return result;
  } catch (error) {
    // Remove uploaded file if database creation fails
    await cloudinary.uploader.destroy(uploadedFile.public_id, {
      resource_type: uploadedFile.resource_type as
        | "image"
        | "video"
        | "raw",
    });

    throw error;
  }
};

// 2. Get all attachments of an assignment
const getAllWorkAttachmentsService = async (
  payload: IGetWorkAttachments,
) => {
  const { assignmentId, user } = payload;

  const assignment = await prisma.assignment.findUnique({
    where: {
      id: assignmentId,
    },
  });

  if (!assignment) {
    throw new AppError(httpStatus.NOT_FOUND, "Assignment not found");
  }

  checkAssignmentAccess(assignment, user);

  const result = await prisma.workAttachment.findMany({
    where: {
      assignmentId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};

// 3. Get attachment by ID
const getWorkAttachmentByIdService = async (
  payload: IGetWorkAttachmentById,
) => {
  const { attachmentId, user } = payload;

  const attachment = await prisma.workAttachment.findUnique({
    where: {
      id: attachmentId,
    },
    include: {
      assignment: true,
    },
  });

  if (!attachment) {
    throw new AppError(httpStatus.NOT_FOUND, "Attachment not found");
  }

  checkAssignmentAccess(attachment.assignment, user);

  return attachment;
};

// 4. Delete attachment
const deleteWorkAttachmentService = async (
  payload: IDeleteWorkAttachment,
) => {
  const { attachmentId, user } = payload;

  const attachment = await prisma.workAttachment.findUnique({
    where: {
      id: attachmentId,
    },
    include: {
      assignment: true,
    },
  });

  if (!attachment) {
    throw new AppError(httpStatus.NOT_FOUND, "Attachment not found");
  }

  const isStaffOwner = attachment.assignment.staffId === user.userId;
  const isManagerOrAdmin =
    user.role === Role.MANAGER || user.role === Role.ADMIN;

  if (!isStaffOwner && !isManagerOrAdmin) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to delete this attachment",
    );
  }

  if (
    isStaffOwner &&
    attachment.assignment.status !== AssignmentStatus.ONGOING
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You cannot delete attachments after submitting completion",
    );
  }

  // Delete file from Cloudinary
  await cloudinary.uploader.destroy(attachment.publicId, {
    resource_type: attachment.resourceType as "image" | "video" | "raw",
  });

  // Delete attachment record from database
  const result = await prisma.workAttachment.delete({
    where: {
      id: attachmentId,
    },
  });

  return result;
};

// Export all services in one object
export const workAttachmentServices = {
  createWorkAttachmentService,
  getAllWorkAttachmentsService,
  getWorkAttachmentByIdService,
  deleteWorkAttachmentService,
};