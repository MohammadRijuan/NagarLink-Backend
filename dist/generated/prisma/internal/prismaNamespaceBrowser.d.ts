import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Assignment: 'Assignment';
    readonly WorkAttachment: 'WorkAttachment';
    readonly Category: 'Category';
    readonly Department: 'Department';
    readonly Feedback: 'Feedback';
    readonly Payment: 'Payment';
    readonly Quotation: 'Quotation';
    readonly StaffApplication: 'StaffApplication';
    readonly StaffCategory: 'StaffCategory';
    readonly StaffInvitation: 'StaffInvitation';
    readonly StaffLocation: 'StaffLocation';
    readonly User: 'User';
    readonly WorkRequest: 'WorkRequest';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AssignmentScalarFieldEnum: {
    readonly id: 'id';
    readonly status: 'status';
    readonly staffId: 'staffId';
    readonly citizenId: 'citizenId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum];
export declare const WorkAttachmentScalarFieldEnum: {
    readonly id: 'id';
    readonly assignmentId: 'assignmentId';
    readonly fileUrl: 'fileUrl';
    readonly fileType: 'fileType';
    readonly fileName: 'fileName';
    readonly createdAt: 'createdAt';
};
export type WorkAttachmentScalarFieldEnum = (typeof WorkAttachmentScalarFieldEnum)[keyof typeof WorkAttachmentScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly departmentId: 'departmentId';
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const DepartmentScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
};
export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];
export declare const FeedbackScalarFieldEnum: {
    readonly id: 'id';
    readonly rating: 'rating';
    readonly comment: 'comment';
    readonly assignmentId: 'assignmentId';
    readonly citizenId: 'citizenId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: 'id';
    readonly status: 'status';
    readonly amount: 'amount';
    readonly currency: 'currency';
    readonly paymentGateway: 'paymentGateway';
    readonly merchantInvoiceNumber: 'merchantInvoiceNumber';
    readonly bkashPaymentId: 'bkashPaymentId';
    readonly bkashTrxId: 'bkashTrxId';
    readonly payerReference: 'payerReference';
    readonly paidAt: 'paidAt';
    readonly gatewayResponse: 'gatewayResponse';
    readonly refundTrxId: 'refundTrxId';
    readonly refundAmount: 'refundAmount';
    readonly refundReason: 'refundReason';
    readonly refundedAt: 'refundedAt';
    readonly requestId: 'requestId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const QuotationScalarFieldEnum: {
    readonly id: 'id';
    readonly proposedFee: 'proposedFee';
    readonly status: 'status';
    readonly requestId: 'requestId';
    readonly staffId: 'staffId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type QuotationScalarFieldEnum = (typeof QuotationScalarFieldEnum)[keyof typeof QuotationScalarFieldEnum];
export declare const StaffApplicationScalarFieldEnum: {
    readonly id: 'id';
    readonly experience: 'experience';
    readonly status: 'status';
    readonly applicantId: 'applicantId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type StaffApplicationScalarFieldEnum = (typeof StaffApplicationScalarFieldEnum)[keyof typeof StaffApplicationScalarFieldEnum];
export declare const StaffCategoryScalarFieldEnum: {
    readonly id: 'id';
    readonly staffId: 'staffId';
    readonly categoryId: 'categoryId';
};
export type StaffCategoryScalarFieldEnum = (typeof StaffCategoryScalarFieldEnum)[keyof typeof StaffCategoryScalarFieldEnum];
export declare const StaffInvitationScalarFieldEnum: {
    readonly id: 'id';
    readonly requestId: 'requestId';
    readonly staffId: 'staffId';
    readonly status: 'status';
    readonly responseNote: 'responseNote';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type StaffInvitationScalarFieldEnum = (typeof StaffInvitationScalarFieldEnum)[keyof typeof StaffInvitationScalarFieldEnum];
export declare const StaffLocationScalarFieldEnum: {
    readonly id: 'id';
    readonly division: 'division';
    readonly address: 'address';
    readonly staffId: 'staffId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type StaffLocationScalarFieldEnum = (typeof StaffLocationScalarFieldEnum)[keyof typeof StaffLocationScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly email: 'email';
    readonly password: 'password';
    readonly needPasswordChange: 'needPasswordChange';
    readonly emailVerified: 'emailVerified';
    readonly googleId: 'googleId';
    readonly authProvider: 'authProvider';
    readonly phone: 'phone';
    readonly role: 'role';
    readonly isActive: 'isActive';
    readonly isDeleted: 'isDeleted';
    readonly deletedAt: 'deletedAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const WorkRequestScalarFieldEnum: {
    readonly id: 'id';
    readonly title: 'title';
    readonly description: 'description';
    readonly division: 'division';
    readonly city: 'city';
    readonly postalCode: 'postalCode';
    readonly phone: 'phone';
    readonly approvedFee: 'approvedFee';
    readonly status: 'status';
    readonly rejectionReason: 'rejectionReason';
    readonly citizenId: 'citizenId';
    readonly selectedQuotationId: 'selectedQuotationId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type WorkRequestScalarFieldEnum = (typeof WorkRequestScalarFieldEnum)[keyof typeof WorkRequestScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map