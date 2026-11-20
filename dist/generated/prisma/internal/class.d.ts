import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Assignments
  * const assignments = await prisma.assignment.findMany()
  * ```
  */
    get assignment(): Prisma.AssignmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.workAttachment`: Exposes CRUD operations for the **WorkAttachment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more WorkAttachments
      * const workAttachments = await prisma.workAttachment.findMany()
      * ```
      */
    get workAttachment(): Prisma.WorkAttachmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.category`: Exposes CRUD operations for the **Category** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Categories
      * const categories = await prisma.category.findMany()
      * ```
      */
    get category(): Prisma.CategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.department`: Exposes CRUD operations for the **Department** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Departments
      * const departments = await prisma.department.findMany()
      * ```
      */
    get department(): Prisma.DepartmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Feedbacks
      * const feedbacks = await prisma.feedback.findMany()
      * ```
      */
    get feedback(): Prisma.FeedbackDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Payments
      * const payments = await prisma.payment.findMany()
      * ```
      */
    get payment(): Prisma.PaymentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.quotation`: Exposes CRUD operations for the **Quotation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Quotations
      * const quotations = await prisma.quotation.findMany()
      * ```
      */
    get quotation(): Prisma.QuotationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.staffApplication`: Exposes CRUD operations for the **StaffApplication** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StaffApplications
      * const staffApplications = await prisma.staffApplication.findMany()
      * ```
      */
    get staffApplication(): Prisma.StaffApplicationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.staffCategory`: Exposes CRUD operations for the **StaffCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StaffCategories
      * const staffCategories = await prisma.staffCategory.findMany()
      * ```
      */
    get staffCategory(): Prisma.StaffCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.staffInvitation`: Exposes CRUD operations for the **StaffInvitation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StaffInvitations
      * const staffInvitations = await prisma.staffInvitation.findMany()
      * ```
      */
    get staffInvitation(): Prisma.StaffInvitationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.staffLocation`: Exposes CRUD operations for the **StaffLocation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StaffLocations
      * const staffLocations = await prisma.staffLocation.findMany()
      * ```
      */
    get staffLocation(): Prisma.StaffLocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.workRequest`: Exposes CRUD operations for the **WorkRequest** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more WorkRequests
      * const workRequests = await prisma.workRequest.findMany()
      * ```
      */
    get workRequest(): Prisma.WorkRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map