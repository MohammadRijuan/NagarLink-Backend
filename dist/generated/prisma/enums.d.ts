export declare const Role: {
    readonly ADMIN: 'ADMIN';
    readonly MANAGER: 'MANAGER';
    readonly STAFF: 'STAFF';
    readonly CITIZEN: 'CITIZEN';
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const AuthProvider: {
    readonly GOOGLE: 'GOOGLE';
    readonly CREDENTIAL: 'CREDENTIAL';
};
export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];
export declare const StaffApplicationStatus: {
    readonly PENDING: 'PENDING';
    readonly APPROVED: 'APPROVED';
    readonly REJECTED: 'REJECTED';
};
export type StaffApplicationStatus = (typeof StaffApplicationStatus)[keyof typeof StaffApplicationStatus];
export declare const WorkStatus: {
    readonly PENDING: 'PENDING';
    readonly REQUESTED: 'REQUESTED';
    readonly ACCEPTED: 'ACCEPTED';
    readonly CITIZEN_ACCEPTED: 'CITIZEN_ACCEPTED';
    readonly CITIZEN_DECLINED: 'CITIZEN_DECLINED';
    readonly ADVANCE_PAID: 'ADVANCE_PAID';
    readonly ASSIGNED: 'ASSIGNED';
    readonly COMPLETED: 'COMPLETED';
    readonly REJECTED: 'REJECTED';
};
export type WorkStatus = (typeof WorkStatus)[keyof typeof WorkStatus];
export declare const QuotationStatus: {
    readonly PENDING: 'PENDING';
    readonly APPROVED: 'APPROVED';
    readonly REJECTED: 'REJECTED';
};
export type QuotationStatus = (typeof QuotationStatus)[keyof typeof QuotationStatus];
export declare const AssignmentStatus: {
    readonly ONGOING: 'ONGOING';
    readonly COMPLETION_SUBMITTED: 'COMPLETION_SUBMITTED';
    readonly COMPLETED: 'COMPLETED';
    readonly CANCELLED: 'CANCELLED';
};
export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus];
export declare const InvitationStatus: {
    readonly REQUESTED: 'REQUESTED';
    readonly ACCEPTED: 'ACCEPTED';
    readonly REJECTED: 'REJECTED';
};
export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus];
export declare const PaymentStatus: {
    readonly PENDING: 'PENDING';
    readonly PAID: 'PAID';
    readonly FAILED: 'FAILED';
    readonly REFUNDED: 'REFUNDED';
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
//# sourceMappingURL=enums.d.ts.map