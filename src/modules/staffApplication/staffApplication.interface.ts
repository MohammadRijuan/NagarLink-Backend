import { StaffApplicationStatus } from "../../../generated/prisma/enums";


// Create Staff Application
export interface ICreateStaffApplication {
  experience: number;
  experienceDetails: string;
  division: string;
  district: string;
  address: string;
  postalCode: string;
}
// Update Staff Application
export interface IUpdateStaffApplication {

  status: StaffApplicationStatus;
}