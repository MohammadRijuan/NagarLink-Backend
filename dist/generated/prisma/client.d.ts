import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Assignments
 * const assignments = await prisma.assignment.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Assignment
 *
 */
export type Assignment = Prisma.AssignmentModel;
/**
 * Model WorkAttachment
 *
 */
export type WorkAttachment = Prisma.WorkAttachmentModel;
/**
 * Model Category
 *
 */
export type Category = Prisma.CategoryModel;
/**
 * Model Department
 *
 */
export type Department = Prisma.DepartmentModel;
/**
 * Model Feedback
 *
 */
export type Feedback = Prisma.FeedbackModel;
/**
 * Model Payment
 *
 */
export type Payment = Prisma.PaymentModel;
/**
 * Model Quotation
 *
 */
export type Quotation = Prisma.QuotationModel;
/**
 * Model StaffApplication
 *
 */
export type StaffApplication = Prisma.StaffApplicationModel;
/**
 * Model StaffCategory
 *
 */
export type StaffCategory = Prisma.StaffCategoryModel;
/**
 * Model StaffInvitation
 *
 */
export type StaffInvitation = Prisma.StaffInvitationModel;
/**
 * Model StaffLocation
 *
 */
export type StaffLocation = Prisma.StaffLocationModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model WorkRequest
 *
 */
export type WorkRequest = Prisma.WorkRequestModel;
//# sourceMappingURL=client.d.ts.map