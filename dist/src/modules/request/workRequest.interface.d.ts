import { WorkStatus } from "../../../generated/prisma/enums";
export interface ICreateWorkRequest {
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    departmentId: string;
}
export interface IUpdateWorkRequest {
    title?: string;
    description?: string;
    division?: string;
    city?: string;
    postalCode?: string;
    phone?: string;
}
export interface IUpdateWorkRequestStatus {
    status: WorkStatus;
    rejectionReason?: string;
}
//# sourceMappingURL=workRequest.interface.d.ts.map