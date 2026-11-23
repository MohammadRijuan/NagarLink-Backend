import { RequestUser } from "../../middlewares/checkAuth";

export interface ICreateWorkAttachment {
  assignmentId: string;
  file: Express.Multer.File;
  user: RequestUser;
}

export interface IGetWorkAttachments {
  assignmentId: string;
  user: RequestUser;
}

export interface IGetWorkAttachmentById {
  attachmentId: string;
  user: RequestUser;
}

export interface IDeleteWorkAttachment {
  attachmentId: string;
  user: RequestUser;
}