import { StaffApplicationStatus } from "../../../generated/prisma/enums";
export interface ICreateStaffApplication {
    experience: number;
    experienceDetails: string;
    division: string;
    district: string;
    address: string;
    postalCode: string;
}
export interface IUpdateStaffApplication {
    status: StaffApplicationStatus;
}
//# sourceMappingURL=staffApplication.interface.d.ts.map