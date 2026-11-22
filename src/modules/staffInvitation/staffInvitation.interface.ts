import { InvitationStatus } from "../../../generated/prisma/enums";

export interface ICreateStaffInvitation {
  requestId: string;
  staffId: string;
}

export interface IRespondToInvitation {
  status: InvitationStatus;
  responseNote?: string;
}

export interface ISelectQuotation {
  quotationId: string;
}