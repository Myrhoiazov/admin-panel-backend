
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Procedure
 * 
 */
export type Procedure = $Result.DefaultSelection<Prisma.$ProcedurePayload>
/**
 * Model Preparetions
 * 
 */
export type Preparetions = $Result.DefaultSelection<Prisma.$PreparetionsPayload>
/**
 * Model InjectionZone
 * 
 */
export type InjectionZone = $Result.DefaultSelection<Prisma.$InjectionZonePayload>
/**
 * Model Contraindication
 * 
 */
export type Contraindication = $Result.DefaultSelection<Prisma.$ContraindicationPayload>
/**
 * Model Rehabilitation
 * 
 */
export type Rehabilitation = $Result.DefaultSelection<Prisma.$RehabilitationPayload>
/**
 * Model Result
 * 
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>
/**
 * Model ProcedurePrice
 * 
 */
export type ProcedurePrice = $Result.DefaultSelection<Prisma.$ProcedurePricePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model ClientStatus
 * 
 */
export type ClientStatus = $Result.DefaultSelection<Prisma.$ClientStatusPayload>
/**
 * Model VisitHistory
 * 
 */
export type VisitHistory = $Result.DefaultSelection<Prisma.$VisitHistoryPayload>
/**
 * Model Appointment
 * Таблица «Сеанс / запись»
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Notification
 * Отправленные напоминания (email/SMS/WhatsApp)
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const LoyaltyLevel: {
  BRONZE: 'BRONZE',
  SILVER: 'SILVER',
  GOLD: 'GOLD',
  PLATINUM: 'PLATINUM'
};

export type LoyaltyLevel = (typeof LoyaltyLevel)[keyof typeof LoyaltyLevel]


export const NotificationChannel: {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  WHATSAPP: 'WHATSAPP'
};

export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel]


export const NotificationStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  ERROR: 'ERROR'
};

export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus]


export const RecurringFreq: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type RecurringFreq = (typeof RecurringFreq)[keyof typeof RecurringFreq]


export const TransactionType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const PaymentMethod: {
  CASH: 'CASH',
  CARD: 'CARD',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const ExpenseCategory: {
  MERZ: 'MERZ',
  TOTIS: 'TOTIS',
  EMET: 'EMET',
  COSMETICS: 'COSMETICS',
  COSMOLOOK: 'COSMOLOOK',
  PHARMACY: 'PHARMACY',
  OTHER: 'OTHER'
};

export type ExpenseCategory = (typeof ExpenseCategory)[keyof typeof ExpenseCategory]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type LoyaltyLevel = $Enums.LoyaltyLevel

export const LoyaltyLevel: typeof $Enums.LoyaltyLevel

export type NotificationChannel = $Enums.NotificationChannel

export const NotificationChannel: typeof $Enums.NotificationChannel

export type NotificationStatus = $Enums.NotificationStatus

export const NotificationStatus: typeof $Enums.NotificationStatus

export type RecurringFreq = $Enums.RecurringFreq

export const RecurringFreq: typeof $Enums.RecurringFreq

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type ExpenseCategory = $Enums.ExpenseCategory

export const ExpenseCategory: typeof $Enums.ExpenseCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procedure`: Exposes CRUD operations for the **Procedure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Procedures
    * const procedures = await prisma.procedure.findMany()
    * ```
    */
  get procedure(): Prisma.ProcedureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preparetions`: Exposes CRUD operations for the **Preparetions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preparetions
    * const preparetions = await prisma.preparetions.findMany()
    * ```
    */
  get preparetions(): Prisma.PreparetionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.injectionZone`: Exposes CRUD operations for the **InjectionZone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InjectionZones
    * const injectionZones = await prisma.injectionZone.findMany()
    * ```
    */
  get injectionZone(): Prisma.InjectionZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contraindication`: Exposes CRUD operations for the **Contraindication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contraindications
    * const contraindications = await prisma.contraindication.findMany()
    * ```
    */
  get contraindication(): Prisma.ContraindicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rehabilitation`: Exposes CRUD operations for the **Rehabilitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rehabilitations
    * const rehabilitations = await prisma.rehabilitation.findMany()
    * ```
    */
  get rehabilitation(): Prisma.RehabilitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procedurePrice`: Exposes CRUD operations for the **ProcedurePrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcedurePrices
    * const procedurePrices = await prisma.procedurePrice.findMany()
    * ```
    */
  get procedurePrice(): Prisma.ProcedurePriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientStatus`: Exposes CRUD operations for the **ClientStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientStatuses
    * const clientStatuses = await prisma.clientStatus.findMany()
    * ```
    */
  get clientStatus(): Prisma.ClientStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitHistory`: Exposes CRUD operations for the **VisitHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitHistories
    * const visitHistories = await prisma.visitHistory.findMany()
    * ```
    */
  get visitHistory(): Prisma.VisitHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Procedure: 'Procedure',
    Preparetions: 'Preparetions',
    InjectionZone: 'InjectionZone',
    Contraindication: 'Contraindication',
    Rehabilitation: 'Rehabilitation',
    Result: 'Result',
    ProcedurePrice: 'ProcedurePrice',
    Client: 'Client',
    ClientStatus: 'ClientStatus',
    VisitHistory: 'VisitHistory',
    Appointment: 'Appointment',
    Notification: 'Notification',
    Comment: 'Comment',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "procedure" | "preparetions" | "injectionZone" | "contraindication" | "rehabilitation" | "result" | "procedurePrice" | "client" | "clientStatus" | "visitHistory" | "appointment" | "notification" | "comment" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Procedure: {
        payload: Prisma.$ProcedurePayload<ExtArgs>
        fields: Prisma.ProcedureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcedureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcedureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          findFirst: {
            args: Prisma.ProcedureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcedureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          findMany: {
            args: Prisma.ProcedureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>[]
          }
          create: {
            args: Prisma.ProcedureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          createMany: {
            args: Prisma.ProcedureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProcedureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          update: {
            args: Prisma.ProcedureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          deleteMany: {
            args: Prisma.ProcedureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcedureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProcedureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          aggregate: {
            args: Prisma.ProcedureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcedure>
          }
          groupBy: {
            args: Prisma.ProcedureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcedureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcedureCountArgs<ExtArgs>
            result: $Utils.Optional<ProcedureCountAggregateOutputType> | number
          }
        }
      }
      Preparetions: {
        payload: Prisma.$PreparetionsPayload<ExtArgs>
        fields: Prisma.PreparetionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreparetionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparetionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreparetionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparetionsPayload>
          }
          findFirst: {
            args: Prisma.PreparetionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparetionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreparetionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparetionsPayload>
          }
          findMany: {
            args: Prisma.PreparetionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparetionsPayload>[]
          }
          create: {
            args: Prisma.PreparetionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparetionsPayload>
          }
          createMany: {
            args: Prisma.PreparetionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PreparetionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparetionsPayload>
          }
          update: {
            args: Prisma.PreparetionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparetionsPayload>
          }
          deleteMany: {
            args: Prisma.PreparetionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreparetionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PreparetionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparetionsPayload>
          }
          aggregate: {
            args: Prisma.PreparetionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreparetions>
          }
          groupBy: {
            args: Prisma.PreparetionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreparetionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreparetionsCountArgs<ExtArgs>
            result: $Utils.Optional<PreparetionsCountAggregateOutputType> | number
          }
        }
      }
      InjectionZone: {
        payload: Prisma.$InjectionZonePayload<ExtArgs>
        fields: Prisma.InjectionZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InjectionZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InjectionZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InjectionZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InjectionZonePayload>
          }
          findFirst: {
            args: Prisma.InjectionZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InjectionZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InjectionZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InjectionZonePayload>
          }
          findMany: {
            args: Prisma.InjectionZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InjectionZonePayload>[]
          }
          create: {
            args: Prisma.InjectionZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InjectionZonePayload>
          }
          createMany: {
            args: Prisma.InjectionZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InjectionZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InjectionZonePayload>
          }
          update: {
            args: Prisma.InjectionZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InjectionZonePayload>
          }
          deleteMany: {
            args: Prisma.InjectionZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InjectionZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InjectionZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InjectionZonePayload>
          }
          aggregate: {
            args: Prisma.InjectionZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInjectionZone>
          }
          groupBy: {
            args: Prisma.InjectionZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<InjectionZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.InjectionZoneCountArgs<ExtArgs>
            result: $Utils.Optional<InjectionZoneCountAggregateOutputType> | number
          }
        }
      }
      Contraindication: {
        payload: Prisma.$ContraindicationPayload<ExtArgs>
        fields: Prisma.ContraindicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContraindicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContraindicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContraindicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContraindicationPayload>
          }
          findFirst: {
            args: Prisma.ContraindicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContraindicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContraindicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContraindicationPayload>
          }
          findMany: {
            args: Prisma.ContraindicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContraindicationPayload>[]
          }
          create: {
            args: Prisma.ContraindicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContraindicationPayload>
          }
          createMany: {
            args: Prisma.ContraindicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContraindicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContraindicationPayload>
          }
          update: {
            args: Prisma.ContraindicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContraindicationPayload>
          }
          deleteMany: {
            args: Prisma.ContraindicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContraindicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContraindicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContraindicationPayload>
          }
          aggregate: {
            args: Prisma.ContraindicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContraindication>
          }
          groupBy: {
            args: Prisma.ContraindicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContraindicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContraindicationCountArgs<ExtArgs>
            result: $Utils.Optional<ContraindicationCountAggregateOutputType> | number
          }
        }
      }
      Rehabilitation: {
        payload: Prisma.$RehabilitationPayload<ExtArgs>
        fields: Prisma.RehabilitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RehabilitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabilitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RehabilitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabilitationPayload>
          }
          findFirst: {
            args: Prisma.RehabilitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabilitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RehabilitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabilitationPayload>
          }
          findMany: {
            args: Prisma.RehabilitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabilitationPayload>[]
          }
          create: {
            args: Prisma.RehabilitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabilitationPayload>
          }
          createMany: {
            args: Prisma.RehabilitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RehabilitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabilitationPayload>
          }
          update: {
            args: Prisma.RehabilitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabilitationPayload>
          }
          deleteMany: {
            args: Prisma.RehabilitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RehabilitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RehabilitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RehabilitationPayload>
          }
          aggregate: {
            args: Prisma.RehabilitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRehabilitation>
          }
          groupBy: {
            args: Prisma.RehabilitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RehabilitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RehabilitationCountArgs<ExtArgs>
            result: $Utils.Optional<RehabilitationCountAggregateOutputType> | number
          }
        }
      }
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
          }
        }
      }
      ProcedurePrice: {
        payload: Prisma.$ProcedurePricePayload<ExtArgs>
        fields: Prisma.ProcedurePriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcedurePriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcedurePriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePricePayload>
          }
          findFirst: {
            args: Prisma.ProcedurePriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcedurePriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePricePayload>
          }
          findMany: {
            args: Prisma.ProcedurePriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePricePayload>[]
          }
          create: {
            args: Prisma.ProcedurePriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePricePayload>
          }
          createMany: {
            args: Prisma.ProcedurePriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProcedurePriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePricePayload>
          }
          update: {
            args: Prisma.ProcedurePriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePricePayload>
          }
          deleteMany: {
            args: Prisma.ProcedurePriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcedurePriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProcedurePriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePricePayload>
          }
          aggregate: {
            args: Prisma.ProcedurePriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcedurePrice>
          }
          groupBy: {
            args: Prisma.ProcedurePriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcedurePriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcedurePriceCountArgs<ExtArgs>
            result: $Utils.Optional<ProcedurePriceCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      ClientStatus: {
        payload: Prisma.$ClientStatusPayload<ExtArgs>
        fields: Prisma.ClientStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientStatusPayload>
          }
          findFirst: {
            args: Prisma.ClientStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientStatusPayload>
          }
          findMany: {
            args: Prisma.ClientStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientStatusPayload>[]
          }
          create: {
            args: Prisma.ClientStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientStatusPayload>
          }
          createMany: {
            args: Prisma.ClientStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientStatusPayload>
          }
          update: {
            args: Prisma.ClientStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientStatusPayload>
          }
          deleteMany: {
            args: Prisma.ClientStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientStatusPayload>
          }
          aggregate: {
            args: Prisma.ClientStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientStatus>
          }
          groupBy: {
            args: Prisma.ClientStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientStatusCountArgs<ExtArgs>
            result: $Utils.Optional<ClientStatusCountAggregateOutputType> | number
          }
        }
      }
      VisitHistory: {
        payload: Prisma.$VisitHistoryPayload<ExtArgs>
        fields: Prisma.VisitHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitHistoryPayload>
          }
          findFirst: {
            args: Prisma.VisitHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitHistoryPayload>
          }
          findMany: {
            args: Prisma.VisitHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitHistoryPayload>[]
          }
          create: {
            args: Prisma.VisitHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitHistoryPayload>
          }
          createMany: {
            args: Prisma.VisitHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VisitHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitHistoryPayload>
          }
          update: {
            args: Prisma.VisitHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitHistoryPayload>
          }
          deleteMany: {
            args: Prisma.VisitHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VisitHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitHistoryPayload>
          }
          aggregate: {
            args: Prisma.VisitHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitHistory>
          }
          groupBy: {
            args: Prisma.VisitHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<VisitHistoryCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    procedure?: ProcedureOmit
    preparetions?: PreparetionsOmit
    injectionZone?: InjectionZoneOmit
    contraindication?: ContraindicationOmit
    rehabilitation?: RehabilitationOmit
    result?: ResultOmit
    procedurePrice?: ProcedurePriceOmit
    client?: ClientOmit
    clientStatus?: ClientStatusOmit
    visitHistory?: VisitHistoryOmit
    appointment?: AppointmentOmit
    notification?: NotificationOmit
    comment?: CommentOmit
    transaction?: TransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    comments: number
    sessions: number
    appoinments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    appoinments?: boolean | UserCountOutputTypeCountAppoinmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppoinmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type ProcedureCountOutputType
   */

  export type ProcedureCountOutputType = {
    appoiment: number
    contraindications: number
    injectionZones: number
    preparations: number
    prices: number
    rehabilitations: number
    results: number
  }

  export type ProcedureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appoiment?: boolean | ProcedureCountOutputTypeCountAppoimentArgs
    contraindications?: boolean | ProcedureCountOutputTypeCountContraindicationsArgs
    injectionZones?: boolean | ProcedureCountOutputTypeCountInjectionZonesArgs
    preparations?: boolean | ProcedureCountOutputTypeCountPreparationsArgs
    prices?: boolean | ProcedureCountOutputTypeCountPricesArgs
    rehabilitations?: boolean | ProcedureCountOutputTypeCountRehabilitationsArgs
    results?: boolean | ProcedureCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureCountOutputType
     */
    select?: ProcedureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeCountAppoimentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeCountContraindicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContraindicationWhereInput
  }

  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeCountInjectionZonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InjectionZoneWhereInput
  }

  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeCountPreparationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreparetionsWhereInput
  }

  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedurePriceWhereInput
  }

  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeCountRehabilitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabilitationWhereInput
  }

  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    appoinments: number
    statuses: number
    comments: number
    visitHistory: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appoinments?: boolean | ClientCountOutputTypeCountAppoinmentsArgs
    statuses?: boolean | ClientCountOutputTypeCountStatusesArgs
    comments?: boolean | ClientCountOutputTypeCountCommentsArgs
    visitHistory?: boolean | ClientCountOutputTypeCountVisitHistoryArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAppoinmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientStatusWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountVisitHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitHistoryWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    reminders: number
    comments: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminders?: boolean | AppointmentCountOutputTypeCountRemindersArgs
    comments?: boolean | AppointmentCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    salt: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    salt: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    salt: number
    role: number
    isActive: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    salt?: true
    role?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    salt?: true
    role?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    salt?: true
    role?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string | null
    lastName: string | null
    email: string
    password: string
    salt: string | null
    role: $Enums.UserRole
    isActive: boolean
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    role?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments?: boolean | User$commentsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    appoinments?: boolean | User$appoinmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    role?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "salt" | "role" | "isActive" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | User$commentsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    appoinments?: boolean | User$appoinmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      appoinments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string | null
      lastName: string | null
      email: string
      password: string
      salt: string | null
      role: $Enums.UserRole
      isActive: boolean
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appoinments<T extends User$appoinmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appoinmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.appoinments
   */
  export type User$appoinmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    refreshToken: string | null
    ipAddress: string | null
    userAgent: string | null
    isRevoked: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    refreshToken: string | null
    ipAddress: string | null
    userAgent: string | null
    isRevoked: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    refreshToken: number
    ipAddress: number
    userAgent: number
    isRevoked: number
    createdAt: number
    expiresAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    ipAddress?: true
    userAgent?: true
    isRevoked?: true
    createdAt?: true
    expiresAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    ipAddress?: true
    userAgent?: true
    isRevoked?: true
    createdAt?: true
    expiresAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    ipAddress?: true
    userAgent?: true
    isRevoked?: true
    createdAt?: true
    expiresAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    userId: number
    refreshToken: string
    ipAddress: string | null
    userAgent: string | null
    isRevoked: boolean
    createdAt: Date
    expiresAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "refreshToken" | "ipAddress" | "userAgent" | "isRevoked" | "createdAt" | "expiresAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      refreshToken: string
      ipAddress: string | null
      userAgent: string | null
      isRevoked: boolean
      createdAt: Date
      expiresAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly refreshToken: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly isRevoked: FieldRef<"Session", 'Boolean'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Procedure
   */

  export type AggregateProcedure = {
    _count: ProcedureCountAggregateOutputType | null
    _avg: ProcedureAvgAggregateOutputType | null
    _sum: ProcedureSumAggregateOutputType | null
    _min: ProcedureMinAggregateOutputType | null
    _max: ProcedureMaxAggregateOutputType | null
  }

  export type ProcedureAvgAggregateOutputType = {
    id: number | null
  }

  export type ProcedureSumAggregateOutputType = {
    id: number | null
  }

  export type ProcedureMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcedureMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcedureCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProcedureAvgAggregateInputType = {
    id?: true
  }

  export type ProcedureSumAggregateInputType = {
    id?: true
  }

  export type ProcedureMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcedureMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcedureCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProcedureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedure to aggregate.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Procedures
    **/
    _count?: true | ProcedureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcedureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcedureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcedureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcedureMaxAggregateInputType
  }

  export type GetProcedureAggregateType<T extends ProcedureAggregateArgs> = {
        [P in keyof T & keyof AggregateProcedure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcedure[P]>
      : GetScalarType<T[P], AggregateProcedure[P]>
  }




  export type ProcedureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedureWhereInput
    orderBy?: ProcedureOrderByWithAggregationInput | ProcedureOrderByWithAggregationInput[]
    by: ProcedureScalarFieldEnum[] | ProcedureScalarFieldEnum
    having?: ProcedureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcedureCountAggregateInputType | true
    _avg?: ProcedureAvgAggregateInputType
    _sum?: ProcedureSumAggregateInputType
    _min?: ProcedureMinAggregateInputType
    _max?: ProcedureMaxAggregateInputType
  }

  export type ProcedureGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProcedureCountAggregateOutputType | null
    _avg: ProcedureAvgAggregateOutputType | null
    _sum: ProcedureSumAggregateOutputType | null
    _min: ProcedureMinAggregateOutputType | null
    _max: ProcedureMaxAggregateOutputType | null
  }

  type GetProcedureGroupByPayload<T extends ProcedureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcedureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcedureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcedureGroupByOutputType[P]>
            : GetScalarType<T[P], ProcedureGroupByOutputType[P]>
        }
      >
    >


  export type ProcedureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appoiment?: boolean | Procedure$appoimentArgs<ExtArgs>
    contraindications?: boolean | Procedure$contraindicationsArgs<ExtArgs>
    injectionZones?: boolean | Procedure$injectionZonesArgs<ExtArgs>
    preparations?: boolean | Procedure$preparationsArgs<ExtArgs>
    prices?: boolean | Procedure$pricesArgs<ExtArgs>
    rehabilitations?: boolean | Procedure$rehabilitationsArgs<ExtArgs>
    results?: boolean | Procedure$resultsArgs<ExtArgs>
    _count?: boolean | ProcedureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedure"]>



  export type ProcedureSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProcedureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["procedure"]>
  export type ProcedureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appoiment?: boolean | Procedure$appoimentArgs<ExtArgs>
    contraindications?: boolean | Procedure$contraindicationsArgs<ExtArgs>
    injectionZones?: boolean | Procedure$injectionZonesArgs<ExtArgs>
    preparations?: boolean | Procedure$preparationsArgs<ExtArgs>
    prices?: boolean | Procedure$pricesArgs<ExtArgs>
    rehabilitations?: boolean | Procedure$rehabilitationsArgs<ExtArgs>
    results?: boolean | Procedure$resultsArgs<ExtArgs>
    _count?: boolean | ProcedureCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProcedurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Procedure"
    objects: {
      appoiment: Prisma.$AppointmentPayload<ExtArgs>[]
      contraindications: Prisma.$ContraindicationPayload<ExtArgs>[]
      injectionZones: Prisma.$InjectionZonePayload<ExtArgs>[]
      preparations: Prisma.$PreparetionsPayload<ExtArgs>[]
      prices: Prisma.$ProcedurePricePayload<ExtArgs>[]
      rehabilitations: Prisma.$RehabilitationPayload<ExtArgs>[]
      results: Prisma.$ResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["procedure"]>
    composites: {}
  }

  type ProcedureGetPayload<S extends boolean | null | undefined | ProcedureDefaultArgs> = $Result.GetResult<Prisma.$ProcedurePayload, S>

  type ProcedureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcedureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcedureCountAggregateInputType | true
    }

  export interface ProcedureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Procedure'], meta: { name: 'Procedure' } }
    /**
     * Find zero or one Procedure that matches the filter.
     * @param {ProcedureFindUniqueArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcedureFindUniqueArgs>(args: SelectSubset<T, ProcedureFindUniqueArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Procedure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcedureFindUniqueOrThrowArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcedureFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcedureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procedure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureFindFirstArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcedureFindFirstArgs>(args?: SelectSubset<T, ProcedureFindFirstArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procedure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureFindFirstOrThrowArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcedureFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcedureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Procedures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Procedures
     * const procedures = await prisma.procedure.findMany()
     * 
     * // Get first 10 Procedures
     * const procedures = await prisma.procedure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procedureWithIdOnly = await prisma.procedure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcedureFindManyArgs>(args?: SelectSubset<T, ProcedureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Procedure.
     * @param {ProcedureCreateArgs} args - Arguments to create a Procedure.
     * @example
     * // Create one Procedure
     * const Procedure = await prisma.procedure.create({
     *   data: {
     *     // ... data to create a Procedure
     *   }
     * })
     * 
     */
    create<T extends ProcedureCreateArgs>(args: SelectSubset<T, ProcedureCreateArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Procedures.
     * @param {ProcedureCreateManyArgs} args - Arguments to create many Procedures.
     * @example
     * // Create many Procedures
     * const procedure = await prisma.procedure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcedureCreateManyArgs>(args?: SelectSubset<T, ProcedureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Procedure.
     * @param {ProcedureDeleteArgs} args - Arguments to delete one Procedure.
     * @example
     * // Delete one Procedure
     * const Procedure = await prisma.procedure.delete({
     *   where: {
     *     // ... filter to delete one Procedure
     *   }
     * })
     * 
     */
    delete<T extends ProcedureDeleteArgs>(args: SelectSubset<T, ProcedureDeleteArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Procedure.
     * @param {ProcedureUpdateArgs} args - Arguments to update one Procedure.
     * @example
     * // Update one Procedure
     * const procedure = await prisma.procedure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcedureUpdateArgs>(args: SelectSubset<T, ProcedureUpdateArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Procedures.
     * @param {ProcedureDeleteManyArgs} args - Arguments to filter Procedures to delete.
     * @example
     * // Delete a few Procedures
     * const { count } = await prisma.procedure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcedureDeleteManyArgs>(args?: SelectSubset<T, ProcedureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Procedures
     * const procedure = await prisma.procedure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcedureUpdateManyArgs>(args: SelectSubset<T, ProcedureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Procedure.
     * @param {ProcedureUpsertArgs} args - Arguments to update or create a Procedure.
     * @example
     * // Update or create a Procedure
     * const procedure = await prisma.procedure.upsert({
     *   create: {
     *     // ... data to create a Procedure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Procedure we want to update
     *   }
     * })
     */
    upsert<T extends ProcedureUpsertArgs>(args: SelectSubset<T, ProcedureUpsertArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureCountArgs} args - Arguments to filter Procedures to count.
     * @example
     * // Count the number of Procedures
     * const count = await prisma.procedure.count({
     *   where: {
     *     // ... the filter for the Procedures we want to count
     *   }
     * })
    **/
    count<T extends ProcedureCountArgs>(
      args?: Subset<T, ProcedureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcedureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Procedure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcedureAggregateArgs>(args: Subset<T, ProcedureAggregateArgs>): Prisma.PrismaPromise<GetProcedureAggregateType<T>>

    /**
     * Group by Procedure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcedureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcedureGroupByArgs['orderBy'] }
        : { orderBy?: ProcedureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcedureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcedureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Procedure model
   */
  readonly fields: ProcedureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Procedure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcedureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appoiment<T extends Procedure$appoimentArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$appoimentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contraindications<T extends Procedure$contraindicationsArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$contraindicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContraindicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    injectionZones<T extends Procedure$injectionZonesArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$injectionZonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InjectionZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preparations<T extends Procedure$preparationsArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$preparationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreparetionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prices<T extends Procedure$pricesArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedurePricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rehabilitations<T extends Procedure$rehabilitationsArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$rehabilitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabilitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends Procedure$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Procedure model
   */
  interface ProcedureFieldRefs {
    readonly id: FieldRef<"Procedure", 'Int'>
    readonly name: FieldRef<"Procedure", 'String'>
    readonly description: FieldRef<"Procedure", 'String'>
    readonly image: FieldRef<"Procedure", 'String'>
    readonly createdAt: FieldRef<"Procedure", 'DateTime'>
    readonly updatedAt: FieldRef<"Procedure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Procedure findUnique
   */
  export type ProcedureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure findUniqueOrThrow
   */
  export type ProcedureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure findFirst
   */
  export type ProcedureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedures.
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedures.
     */
    distinct?: ProcedureScalarFieldEnum | ProcedureScalarFieldEnum[]
  }

  /**
   * Procedure findFirstOrThrow
   */
  export type ProcedureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedures.
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedures.
     */
    distinct?: ProcedureScalarFieldEnum | ProcedureScalarFieldEnum[]
  }

  /**
   * Procedure findMany
   */
  export type ProcedureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Procedures.
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    distinct?: ProcedureScalarFieldEnum | ProcedureScalarFieldEnum[]
  }

  /**
   * Procedure create
   */
  export type ProcedureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * The data needed to create a Procedure.
     */
    data: XOR<ProcedureCreateInput, ProcedureUncheckedCreateInput>
  }

  /**
   * Procedure createMany
   */
  export type ProcedureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Procedures.
     */
    data: ProcedureCreateManyInput | ProcedureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Procedure update
   */
  export type ProcedureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * The data needed to update a Procedure.
     */
    data: XOR<ProcedureUpdateInput, ProcedureUncheckedUpdateInput>
    /**
     * Choose, which Procedure to update.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure updateMany
   */
  export type ProcedureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Procedures.
     */
    data: XOR<ProcedureUpdateManyMutationInput, ProcedureUncheckedUpdateManyInput>
    /**
     * Filter which Procedures to update
     */
    where?: ProcedureWhereInput
    /**
     * Limit how many Procedures to update.
     */
    limit?: number
  }

  /**
   * Procedure upsert
   */
  export type ProcedureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * The filter to search for the Procedure to update in case it exists.
     */
    where: ProcedureWhereUniqueInput
    /**
     * In case the Procedure found by the `where` argument doesn't exist, create a new Procedure with this data.
     */
    create: XOR<ProcedureCreateInput, ProcedureUncheckedCreateInput>
    /**
     * In case the Procedure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcedureUpdateInput, ProcedureUncheckedUpdateInput>
  }

  /**
   * Procedure delete
   */
  export type ProcedureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter which Procedure to delete.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure deleteMany
   */
  export type ProcedureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedures to delete
     */
    where?: ProcedureWhereInput
    /**
     * Limit how many Procedures to delete.
     */
    limit?: number
  }

  /**
   * Procedure.appoiment
   */
  export type Procedure$appoimentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Procedure.contraindications
   */
  export type Procedure$contraindicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
    where?: ContraindicationWhereInput
    orderBy?: ContraindicationOrderByWithRelationInput | ContraindicationOrderByWithRelationInput[]
    cursor?: ContraindicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContraindicationScalarFieldEnum | ContraindicationScalarFieldEnum[]
  }

  /**
   * Procedure.injectionZones
   */
  export type Procedure$injectionZonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
    where?: InjectionZoneWhereInput
    orderBy?: InjectionZoneOrderByWithRelationInput | InjectionZoneOrderByWithRelationInput[]
    cursor?: InjectionZoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InjectionZoneScalarFieldEnum | InjectionZoneScalarFieldEnum[]
  }

  /**
   * Procedure.preparations
   */
  export type Procedure$preparationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
    where?: PreparetionsWhereInput
    orderBy?: PreparetionsOrderByWithRelationInput | PreparetionsOrderByWithRelationInput[]
    cursor?: PreparetionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreparetionsScalarFieldEnum | PreparetionsScalarFieldEnum[]
  }

  /**
   * Procedure.prices
   */
  export type Procedure$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
    where?: ProcedurePriceWhereInput
    orderBy?: ProcedurePriceOrderByWithRelationInput | ProcedurePriceOrderByWithRelationInput[]
    cursor?: ProcedurePriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcedurePriceScalarFieldEnum | ProcedurePriceScalarFieldEnum[]
  }

  /**
   * Procedure.rehabilitations
   */
  export type Procedure$rehabilitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
    where?: RehabilitationWhereInput
    orderBy?: RehabilitationOrderByWithRelationInput | RehabilitationOrderByWithRelationInput[]
    cursor?: RehabilitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RehabilitationScalarFieldEnum | RehabilitationScalarFieldEnum[]
  }

  /**
   * Procedure.results
   */
  export type Procedure$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Procedure without action
   */
  export type ProcedureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
  }


  /**
   * Model Preparetions
   */

  export type AggregatePreparetions = {
    _count: PreparetionsCountAggregateOutputType | null
    _avg: PreparetionsAvgAggregateOutputType | null
    _sum: PreparetionsSumAggregateOutputType | null
    _min: PreparetionsMinAggregateOutputType | null
    _max: PreparetionsMaxAggregateOutputType | null
  }

  export type PreparetionsAvgAggregateOutputType = {
    procedureId: number | null
  }

  export type PreparetionsSumAggregateOutputType = {
    procedureId: number | null
  }

  export type PreparetionsMinAggregateOutputType = {
    id: string | null
    procedureId: number | null
    text: string | null
  }

  export type PreparetionsMaxAggregateOutputType = {
    id: string | null
    procedureId: number | null
    text: string | null
  }

  export type PreparetionsCountAggregateOutputType = {
    id: number
    procedureId: number
    text: number
    _all: number
  }


  export type PreparetionsAvgAggregateInputType = {
    procedureId?: true
  }

  export type PreparetionsSumAggregateInputType = {
    procedureId?: true
  }

  export type PreparetionsMinAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
  }

  export type PreparetionsMaxAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
  }

  export type PreparetionsCountAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
    _all?: true
  }

  export type PreparetionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preparetions to aggregate.
     */
    where?: PreparetionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preparetions to fetch.
     */
    orderBy?: PreparetionsOrderByWithRelationInput | PreparetionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreparetionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preparetions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preparetions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preparetions
    **/
    _count?: true | PreparetionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreparetionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreparetionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreparetionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreparetionsMaxAggregateInputType
  }

  export type GetPreparetionsAggregateType<T extends PreparetionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePreparetions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreparetions[P]>
      : GetScalarType<T[P], AggregatePreparetions[P]>
  }




  export type PreparetionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreparetionsWhereInput
    orderBy?: PreparetionsOrderByWithAggregationInput | PreparetionsOrderByWithAggregationInput[]
    by: PreparetionsScalarFieldEnum[] | PreparetionsScalarFieldEnum
    having?: PreparetionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreparetionsCountAggregateInputType | true
    _avg?: PreparetionsAvgAggregateInputType
    _sum?: PreparetionsSumAggregateInputType
    _min?: PreparetionsMinAggregateInputType
    _max?: PreparetionsMaxAggregateInputType
  }

  export type PreparetionsGroupByOutputType = {
    id: string
    procedureId: number
    text: string
    _count: PreparetionsCountAggregateOutputType | null
    _avg: PreparetionsAvgAggregateOutputType | null
    _sum: PreparetionsSumAggregateOutputType | null
    _min: PreparetionsMinAggregateOutputType | null
    _max: PreparetionsMaxAggregateOutputType | null
  }

  type GetPreparetionsGroupByPayload<T extends PreparetionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreparetionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreparetionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreparetionsGroupByOutputType[P]>
            : GetScalarType<T[P], PreparetionsGroupByOutputType[P]>
        }
      >
    >


  export type PreparetionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procedureId?: boolean
    text?: boolean
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preparetions"]>



  export type PreparetionsSelectScalar = {
    id?: boolean
    procedureId?: boolean
    text?: boolean
  }

  export type PreparetionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "procedureId" | "text", ExtArgs["result"]["preparetions"]>
  export type PreparetionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }

  export type $PreparetionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preparetions"
    objects: {
      procedure: Prisma.$ProcedurePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      procedureId: number
      text: string
    }, ExtArgs["result"]["preparetions"]>
    composites: {}
  }

  type PreparetionsGetPayload<S extends boolean | null | undefined | PreparetionsDefaultArgs> = $Result.GetResult<Prisma.$PreparetionsPayload, S>

  type PreparetionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreparetionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreparetionsCountAggregateInputType | true
    }

  export interface PreparetionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preparetions'], meta: { name: 'Preparetions' } }
    /**
     * Find zero or one Preparetions that matches the filter.
     * @param {PreparetionsFindUniqueArgs} args - Arguments to find a Preparetions
     * @example
     * // Get one Preparetions
     * const preparetions = await prisma.preparetions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreparetionsFindUniqueArgs>(args: SelectSubset<T, PreparetionsFindUniqueArgs<ExtArgs>>): Prisma__PreparetionsClient<$Result.GetResult<Prisma.$PreparetionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preparetions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreparetionsFindUniqueOrThrowArgs} args - Arguments to find a Preparetions
     * @example
     * // Get one Preparetions
     * const preparetions = await prisma.preparetions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreparetionsFindUniqueOrThrowArgs>(args: SelectSubset<T, PreparetionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreparetionsClient<$Result.GetResult<Prisma.$PreparetionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preparetions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparetionsFindFirstArgs} args - Arguments to find a Preparetions
     * @example
     * // Get one Preparetions
     * const preparetions = await prisma.preparetions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreparetionsFindFirstArgs>(args?: SelectSubset<T, PreparetionsFindFirstArgs<ExtArgs>>): Prisma__PreparetionsClient<$Result.GetResult<Prisma.$PreparetionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preparetions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparetionsFindFirstOrThrowArgs} args - Arguments to find a Preparetions
     * @example
     * // Get one Preparetions
     * const preparetions = await prisma.preparetions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreparetionsFindFirstOrThrowArgs>(args?: SelectSubset<T, PreparetionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreparetionsClient<$Result.GetResult<Prisma.$PreparetionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preparetions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparetionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preparetions
     * const preparetions = await prisma.preparetions.findMany()
     * 
     * // Get first 10 Preparetions
     * const preparetions = await prisma.preparetions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preparetionsWithIdOnly = await prisma.preparetions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreparetionsFindManyArgs>(args?: SelectSubset<T, PreparetionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreparetionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preparetions.
     * @param {PreparetionsCreateArgs} args - Arguments to create a Preparetions.
     * @example
     * // Create one Preparetions
     * const Preparetions = await prisma.preparetions.create({
     *   data: {
     *     // ... data to create a Preparetions
     *   }
     * })
     * 
     */
    create<T extends PreparetionsCreateArgs>(args: SelectSubset<T, PreparetionsCreateArgs<ExtArgs>>): Prisma__PreparetionsClient<$Result.GetResult<Prisma.$PreparetionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preparetions.
     * @param {PreparetionsCreateManyArgs} args - Arguments to create many Preparetions.
     * @example
     * // Create many Preparetions
     * const preparetions = await prisma.preparetions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreparetionsCreateManyArgs>(args?: SelectSubset<T, PreparetionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Preparetions.
     * @param {PreparetionsDeleteArgs} args - Arguments to delete one Preparetions.
     * @example
     * // Delete one Preparetions
     * const Preparetions = await prisma.preparetions.delete({
     *   where: {
     *     // ... filter to delete one Preparetions
     *   }
     * })
     * 
     */
    delete<T extends PreparetionsDeleteArgs>(args: SelectSubset<T, PreparetionsDeleteArgs<ExtArgs>>): Prisma__PreparetionsClient<$Result.GetResult<Prisma.$PreparetionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preparetions.
     * @param {PreparetionsUpdateArgs} args - Arguments to update one Preparetions.
     * @example
     * // Update one Preparetions
     * const preparetions = await prisma.preparetions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreparetionsUpdateArgs>(args: SelectSubset<T, PreparetionsUpdateArgs<ExtArgs>>): Prisma__PreparetionsClient<$Result.GetResult<Prisma.$PreparetionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preparetions.
     * @param {PreparetionsDeleteManyArgs} args - Arguments to filter Preparetions to delete.
     * @example
     * // Delete a few Preparetions
     * const { count } = await prisma.preparetions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreparetionsDeleteManyArgs>(args?: SelectSubset<T, PreparetionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preparetions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparetionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preparetions
     * const preparetions = await prisma.preparetions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreparetionsUpdateManyArgs>(args: SelectSubset<T, PreparetionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Preparetions.
     * @param {PreparetionsUpsertArgs} args - Arguments to update or create a Preparetions.
     * @example
     * // Update or create a Preparetions
     * const preparetions = await prisma.preparetions.upsert({
     *   create: {
     *     // ... data to create a Preparetions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preparetions we want to update
     *   }
     * })
     */
    upsert<T extends PreparetionsUpsertArgs>(args: SelectSubset<T, PreparetionsUpsertArgs<ExtArgs>>): Prisma__PreparetionsClient<$Result.GetResult<Prisma.$PreparetionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preparetions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparetionsCountArgs} args - Arguments to filter Preparetions to count.
     * @example
     * // Count the number of Preparetions
     * const count = await prisma.preparetions.count({
     *   where: {
     *     // ... the filter for the Preparetions we want to count
     *   }
     * })
    **/
    count<T extends PreparetionsCountArgs>(
      args?: Subset<T, PreparetionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreparetionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preparetions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparetionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreparetionsAggregateArgs>(args: Subset<T, PreparetionsAggregateArgs>): Prisma.PrismaPromise<GetPreparetionsAggregateType<T>>

    /**
     * Group by Preparetions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparetionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreparetionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreparetionsGroupByArgs['orderBy'] }
        : { orderBy?: PreparetionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreparetionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreparetionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preparetions model
   */
  readonly fields: PreparetionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preparetions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreparetionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedure<T extends ProcedureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcedureDefaultArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Preparetions model
   */
  interface PreparetionsFieldRefs {
    readonly id: FieldRef<"Preparetions", 'String'>
    readonly procedureId: FieldRef<"Preparetions", 'Int'>
    readonly text: FieldRef<"Preparetions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Preparetions findUnique
   */
  export type PreparetionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
    /**
     * Filter, which Preparetions to fetch.
     */
    where: PreparetionsWhereUniqueInput
  }

  /**
   * Preparetions findUniqueOrThrow
   */
  export type PreparetionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
    /**
     * Filter, which Preparetions to fetch.
     */
    where: PreparetionsWhereUniqueInput
  }

  /**
   * Preparetions findFirst
   */
  export type PreparetionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
    /**
     * Filter, which Preparetions to fetch.
     */
    where?: PreparetionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preparetions to fetch.
     */
    orderBy?: PreparetionsOrderByWithRelationInput | PreparetionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preparetions.
     */
    cursor?: PreparetionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preparetions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preparetions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preparetions.
     */
    distinct?: PreparetionsScalarFieldEnum | PreparetionsScalarFieldEnum[]
  }

  /**
   * Preparetions findFirstOrThrow
   */
  export type PreparetionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
    /**
     * Filter, which Preparetions to fetch.
     */
    where?: PreparetionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preparetions to fetch.
     */
    orderBy?: PreparetionsOrderByWithRelationInput | PreparetionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preparetions.
     */
    cursor?: PreparetionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preparetions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preparetions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preparetions.
     */
    distinct?: PreparetionsScalarFieldEnum | PreparetionsScalarFieldEnum[]
  }

  /**
   * Preparetions findMany
   */
  export type PreparetionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
    /**
     * Filter, which Preparetions to fetch.
     */
    where?: PreparetionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preparetions to fetch.
     */
    orderBy?: PreparetionsOrderByWithRelationInput | PreparetionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preparetions.
     */
    cursor?: PreparetionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preparetions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preparetions.
     */
    skip?: number
    distinct?: PreparetionsScalarFieldEnum | PreparetionsScalarFieldEnum[]
  }

  /**
   * Preparetions create
   */
  export type PreparetionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Preparetions.
     */
    data: XOR<PreparetionsCreateInput, PreparetionsUncheckedCreateInput>
  }

  /**
   * Preparetions createMany
   */
  export type PreparetionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preparetions.
     */
    data: PreparetionsCreateManyInput | PreparetionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preparetions update
   */
  export type PreparetionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Preparetions.
     */
    data: XOR<PreparetionsUpdateInput, PreparetionsUncheckedUpdateInput>
    /**
     * Choose, which Preparetions to update.
     */
    where: PreparetionsWhereUniqueInput
  }

  /**
   * Preparetions updateMany
   */
  export type PreparetionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preparetions.
     */
    data: XOR<PreparetionsUpdateManyMutationInput, PreparetionsUncheckedUpdateManyInput>
    /**
     * Filter which Preparetions to update
     */
    where?: PreparetionsWhereInput
    /**
     * Limit how many Preparetions to update.
     */
    limit?: number
  }

  /**
   * Preparetions upsert
   */
  export type PreparetionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Preparetions to update in case it exists.
     */
    where: PreparetionsWhereUniqueInput
    /**
     * In case the Preparetions found by the `where` argument doesn't exist, create a new Preparetions with this data.
     */
    create: XOR<PreparetionsCreateInput, PreparetionsUncheckedCreateInput>
    /**
     * In case the Preparetions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreparetionsUpdateInput, PreparetionsUncheckedUpdateInput>
  }

  /**
   * Preparetions delete
   */
  export type PreparetionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
    /**
     * Filter which Preparetions to delete.
     */
    where: PreparetionsWhereUniqueInput
  }

  /**
   * Preparetions deleteMany
   */
  export type PreparetionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preparetions to delete
     */
    where?: PreparetionsWhereInput
    /**
     * Limit how many Preparetions to delete.
     */
    limit?: number
  }

  /**
   * Preparetions without action
   */
  export type PreparetionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preparetions
     */
    select?: PreparetionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preparetions
     */
    omit?: PreparetionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparetionsInclude<ExtArgs> | null
  }


  /**
   * Model InjectionZone
   */

  export type AggregateInjectionZone = {
    _count: InjectionZoneCountAggregateOutputType | null
    _avg: InjectionZoneAvgAggregateOutputType | null
    _sum: InjectionZoneSumAggregateOutputType | null
    _min: InjectionZoneMinAggregateOutputType | null
    _max: InjectionZoneMaxAggregateOutputType | null
  }

  export type InjectionZoneAvgAggregateOutputType = {
    procedureId: number | null
  }

  export type InjectionZoneSumAggregateOutputType = {
    procedureId: number | null
  }

  export type InjectionZoneMinAggregateOutputType = {
    id: string | null
    procedureId: number | null
    text: string | null
  }

  export type InjectionZoneMaxAggregateOutputType = {
    id: string | null
    procedureId: number | null
    text: string | null
  }

  export type InjectionZoneCountAggregateOutputType = {
    id: number
    procedureId: number
    text: number
    _all: number
  }


  export type InjectionZoneAvgAggregateInputType = {
    procedureId?: true
  }

  export type InjectionZoneSumAggregateInputType = {
    procedureId?: true
  }

  export type InjectionZoneMinAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
  }

  export type InjectionZoneMaxAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
  }

  export type InjectionZoneCountAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
    _all?: true
  }

  export type InjectionZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InjectionZone to aggregate.
     */
    where?: InjectionZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InjectionZones to fetch.
     */
    orderBy?: InjectionZoneOrderByWithRelationInput | InjectionZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InjectionZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InjectionZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InjectionZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InjectionZones
    **/
    _count?: true | InjectionZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InjectionZoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InjectionZoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InjectionZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InjectionZoneMaxAggregateInputType
  }

  export type GetInjectionZoneAggregateType<T extends InjectionZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateInjectionZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInjectionZone[P]>
      : GetScalarType<T[P], AggregateInjectionZone[P]>
  }




  export type InjectionZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InjectionZoneWhereInput
    orderBy?: InjectionZoneOrderByWithAggregationInput | InjectionZoneOrderByWithAggregationInput[]
    by: InjectionZoneScalarFieldEnum[] | InjectionZoneScalarFieldEnum
    having?: InjectionZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InjectionZoneCountAggregateInputType | true
    _avg?: InjectionZoneAvgAggregateInputType
    _sum?: InjectionZoneSumAggregateInputType
    _min?: InjectionZoneMinAggregateInputType
    _max?: InjectionZoneMaxAggregateInputType
  }

  export type InjectionZoneGroupByOutputType = {
    id: string
    procedureId: number
    text: string
    _count: InjectionZoneCountAggregateOutputType | null
    _avg: InjectionZoneAvgAggregateOutputType | null
    _sum: InjectionZoneSumAggregateOutputType | null
    _min: InjectionZoneMinAggregateOutputType | null
    _max: InjectionZoneMaxAggregateOutputType | null
  }

  type GetInjectionZoneGroupByPayload<T extends InjectionZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InjectionZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InjectionZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InjectionZoneGroupByOutputType[P]>
            : GetScalarType<T[P], InjectionZoneGroupByOutputType[P]>
        }
      >
    >


  export type InjectionZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procedureId?: boolean
    text?: boolean
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["injectionZone"]>



  export type InjectionZoneSelectScalar = {
    id?: boolean
    procedureId?: boolean
    text?: boolean
  }

  export type InjectionZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "procedureId" | "text", ExtArgs["result"]["injectionZone"]>
  export type InjectionZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }

  export type $InjectionZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InjectionZone"
    objects: {
      procedure: Prisma.$ProcedurePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      procedureId: number
      text: string
    }, ExtArgs["result"]["injectionZone"]>
    composites: {}
  }

  type InjectionZoneGetPayload<S extends boolean | null | undefined | InjectionZoneDefaultArgs> = $Result.GetResult<Prisma.$InjectionZonePayload, S>

  type InjectionZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InjectionZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InjectionZoneCountAggregateInputType | true
    }

  export interface InjectionZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InjectionZone'], meta: { name: 'InjectionZone' } }
    /**
     * Find zero or one InjectionZone that matches the filter.
     * @param {InjectionZoneFindUniqueArgs} args - Arguments to find a InjectionZone
     * @example
     * // Get one InjectionZone
     * const injectionZone = await prisma.injectionZone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InjectionZoneFindUniqueArgs>(args: SelectSubset<T, InjectionZoneFindUniqueArgs<ExtArgs>>): Prisma__InjectionZoneClient<$Result.GetResult<Prisma.$InjectionZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InjectionZone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InjectionZoneFindUniqueOrThrowArgs} args - Arguments to find a InjectionZone
     * @example
     * // Get one InjectionZone
     * const injectionZone = await prisma.injectionZone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InjectionZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, InjectionZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InjectionZoneClient<$Result.GetResult<Prisma.$InjectionZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InjectionZone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjectionZoneFindFirstArgs} args - Arguments to find a InjectionZone
     * @example
     * // Get one InjectionZone
     * const injectionZone = await prisma.injectionZone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InjectionZoneFindFirstArgs>(args?: SelectSubset<T, InjectionZoneFindFirstArgs<ExtArgs>>): Prisma__InjectionZoneClient<$Result.GetResult<Prisma.$InjectionZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InjectionZone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjectionZoneFindFirstOrThrowArgs} args - Arguments to find a InjectionZone
     * @example
     * // Get one InjectionZone
     * const injectionZone = await prisma.injectionZone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InjectionZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, InjectionZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__InjectionZoneClient<$Result.GetResult<Prisma.$InjectionZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InjectionZones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjectionZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InjectionZones
     * const injectionZones = await prisma.injectionZone.findMany()
     * 
     * // Get first 10 InjectionZones
     * const injectionZones = await prisma.injectionZone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const injectionZoneWithIdOnly = await prisma.injectionZone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InjectionZoneFindManyArgs>(args?: SelectSubset<T, InjectionZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InjectionZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InjectionZone.
     * @param {InjectionZoneCreateArgs} args - Arguments to create a InjectionZone.
     * @example
     * // Create one InjectionZone
     * const InjectionZone = await prisma.injectionZone.create({
     *   data: {
     *     // ... data to create a InjectionZone
     *   }
     * })
     * 
     */
    create<T extends InjectionZoneCreateArgs>(args: SelectSubset<T, InjectionZoneCreateArgs<ExtArgs>>): Prisma__InjectionZoneClient<$Result.GetResult<Prisma.$InjectionZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InjectionZones.
     * @param {InjectionZoneCreateManyArgs} args - Arguments to create many InjectionZones.
     * @example
     * // Create many InjectionZones
     * const injectionZone = await prisma.injectionZone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InjectionZoneCreateManyArgs>(args?: SelectSubset<T, InjectionZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InjectionZone.
     * @param {InjectionZoneDeleteArgs} args - Arguments to delete one InjectionZone.
     * @example
     * // Delete one InjectionZone
     * const InjectionZone = await prisma.injectionZone.delete({
     *   where: {
     *     // ... filter to delete one InjectionZone
     *   }
     * })
     * 
     */
    delete<T extends InjectionZoneDeleteArgs>(args: SelectSubset<T, InjectionZoneDeleteArgs<ExtArgs>>): Prisma__InjectionZoneClient<$Result.GetResult<Prisma.$InjectionZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InjectionZone.
     * @param {InjectionZoneUpdateArgs} args - Arguments to update one InjectionZone.
     * @example
     * // Update one InjectionZone
     * const injectionZone = await prisma.injectionZone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InjectionZoneUpdateArgs>(args: SelectSubset<T, InjectionZoneUpdateArgs<ExtArgs>>): Prisma__InjectionZoneClient<$Result.GetResult<Prisma.$InjectionZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InjectionZones.
     * @param {InjectionZoneDeleteManyArgs} args - Arguments to filter InjectionZones to delete.
     * @example
     * // Delete a few InjectionZones
     * const { count } = await prisma.injectionZone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InjectionZoneDeleteManyArgs>(args?: SelectSubset<T, InjectionZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InjectionZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjectionZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InjectionZones
     * const injectionZone = await prisma.injectionZone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InjectionZoneUpdateManyArgs>(args: SelectSubset<T, InjectionZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InjectionZone.
     * @param {InjectionZoneUpsertArgs} args - Arguments to update or create a InjectionZone.
     * @example
     * // Update or create a InjectionZone
     * const injectionZone = await prisma.injectionZone.upsert({
     *   create: {
     *     // ... data to create a InjectionZone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InjectionZone we want to update
     *   }
     * })
     */
    upsert<T extends InjectionZoneUpsertArgs>(args: SelectSubset<T, InjectionZoneUpsertArgs<ExtArgs>>): Prisma__InjectionZoneClient<$Result.GetResult<Prisma.$InjectionZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InjectionZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjectionZoneCountArgs} args - Arguments to filter InjectionZones to count.
     * @example
     * // Count the number of InjectionZones
     * const count = await prisma.injectionZone.count({
     *   where: {
     *     // ... the filter for the InjectionZones we want to count
     *   }
     * })
    **/
    count<T extends InjectionZoneCountArgs>(
      args?: Subset<T, InjectionZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InjectionZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InjectionZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjectionZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InjectionZoneAggregateArgs>(args: Subset<T, InjectionZoneAggregateArgs>): Prisma.PrismaPromise<GetInjectionZoneAggregateType<T>>

    /**
     * Group by InjectionZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InjectionZoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InjectionZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InjectionZoneGroupByArgs['orderBy'] }
        : { orderBy?: InjectionZoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InjectionZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInjectionZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InjectionZone model
   */
  readonly fields: InjectionZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InjectionZone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InjectionZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedure<T extends ProcedureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcedureDefaultArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InjectionZone model
   */
  interface InjectionZoneFieldRefs {
    readonly id: FieldRef<"InjectionZone", 'String'>
    readonly procedureId: FieldRef<"InjectionZone", 'Int'>
    readonly text: FieldRef<"InjectionZone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InjectionZone findUnique
   */
  export type InjectionZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
    /**
     * Filter, which InjectionZone to fetch.
     */
    where: InjectionZoneWhereUniqueInput
  }

  /**
   * InjectionZone findUniqueOrThrow
   */
  export type InjectionZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
    /**
     * Filter, which InjectionZone to fetch.
     */
    where: InjectionZoneWhereUniqueInput
  }

  /**
   * InjectionZone findFirst
   */
  export type InjectionZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
    /**
     * Filter, which InjectionZone to fetch.
     */
    where?: InjectionZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InjectionZones to fetch.
     */
    orderBy?: InjectionZoneOrderByWithRelationInput | InjectionZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InjectionZones.
     */
    cursor?: InjectionZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InjectionZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InjectionZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InjectionZones.
     */
    distinct?: InjectionZoneScalarFieldEnum | InjectionZoneScalarFieldEnum[]
  }

  /**
   * InjectionZone findFirstOrThrow
   */
  export type InjectionZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
    /**
     * Filter, which InjectionZone to fetch.
     */
    where?: InjectionZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InjectionZones to fetch.
     */
    orderBy?: InjectionZoneOrderByWithRelationInput | InjectionZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InjectionZones.
     */
    cursor?: InjectionZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InjectionZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InjectionZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InjectionZones.
     */
    distinct?: InjectionZoneScalarFieldEnum | InjectionZoneScalarFieldEnum[]
  }

  /**
   * InjectionZone findMany
   */
  export type InjectionZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
    /**
     * Filter, which InjectionZones to fetch.
     */
    where?: InjectionZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InjectionZones to fetch.
     */
    orderBy?: InjectionZoneOrderByWithRelationInput | InjectionZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InjectionZones.
     */
    cursor?: InjectionZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InjectionZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InjectionZones.
     */
    skip?: number
    distinct?: InjectionZoneScalarFieldEnum | InjectionZoneScalarFieldEnum[]
  }

  /**
   * InjectionZone create
   */
  export type InjectionZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a InjectionZone.
     */
    data: XOR<InjectionZoneCreateInput, InjectionZoneUncheckedCreateInput>
  }

  /**
   * InjectionZone createMany
   */
  export type InjectionZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InjectionZones.
     */
    data: InjectionZoneCreateManyInput | InjectionZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InjectionZone update
   */
  export type InjectionZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a InjectionZone.
     */
    data: XOR<InjectionZoneUpdateInput, InjectionZoneUncheckedUpdateInput>
    /**
     * Choose, which InjectionZone to update.
     */
    where: InjectionZoneWhereUniqueInput
  }

  /**
   * InjectionZone updateMany
   */
  export type InjectionZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InjectionZones.
     */
    data: XOR<InjectionZoneUpdateManyMutationInput, InjectionZoneUncheckedUpdateManyInput>
    /**
     * Filter which InjectionZones to update
     */
    where?: InjectionZoneWhereInput
    /**
     * Limit how many InjectionZones to update.
     */
    limit?: number
  }

  /**
   * InjectionZone upsert
   */
  export type InjectionZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the InjectionZone to update in case it exists.
     */
    where: InjectionZoneWhereUniqueInput
    /**
     * In case the InjectionZone found by the `where` argument doesn't exist, create a new InjectionZone with this data.
     */
    create: XOR<InjectionZoneCreateInput, InjectionZoneUncheckedCreateInput>
    /**
     * In case the InjectionZone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InjectionZoneUpdateInput, InjectionZoneUncheckedUpdateInput>
  }

  /**
   * InjectionZone delete
   */
  export type InjectionZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
    /**
     * Filter which InjectionZone to delete.
     */
    where: InjectionZoneWhereUniqueInput
  }

  /**
   * InjectionZone deleteMany
   */
  export type InjectionZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InjectionZones to delete
     */
    where?: InjectionZoneWhereInput
    /**
     * Limit how many InjectionZones to delete.
     */
    limit?: number
  }

  /**
   * InjectionZone without action
   */
  export type InjectionZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InjectionZone
     */
    select?: InjectionZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InjectionZone
     */
    omit?: InjectionZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InjectionZoneInclude<ExtArgs> | null
  }


  /**
   * Model Contraindication
   */

  export type AggregateContraindication = {
    _count: ContraindicationCountAggregateOutputType | null
    _avg: ContraindicationAvgAggregateOutputType | null
    _sum: ContraindicationSumAggregateOutputType | null
    _min: ContraindicationMinAggregateOutputType | null
    _max: ContraindicationMaxAggregateOutputType | null
  }

  export type ContraindicationAvgAggregateOutputType = {
    procedureId: number | null
  }

  export type ContraindicationSumAggregateOutputType = {
    procedureId: number | null
  }

  export type ContraindicationMinAggregateOutputType = {
    id: string | null
    procedureId: number | null
    text: string | null
  }

  export type ContraindicationMaxAggregateOutputType = {
    id: string | null
    procedureId: number | null
    text: string | null
  }

  export type ContraindicationCountAggregateOutputType = {
    id: number
    procedureId: number
    text: number
    _all: number
  }


  export type ContraindicationAvgAggregateInputType = {
    procedureId?: true
  }

  export type ContraindicationSumAggregateInputType = {
    procedureId?: true
  }

  export type ContraindicationMinAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
  }

  export type ContraindicationMaxAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
  }

  export type ContraindicationCountAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
    _all?: true
  }

  export type ContraindicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contraindication to aggregate.
     */
    where?: ContraindicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contraindications to fetch.
     */
    orderBy?: ContraindicationOrderByWithRelationInput | ContraindicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContraindicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contraindications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contraindications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contraindications
    **/
    _count?: true | ContraindicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContraindicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContraindicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContraindicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContraindicationMaxAggregateInputType
  }

  export type GetContraindicationAggregateType<T extends ContraindicationAggregateArgs> = {
        [P in keyof T & keyof AggregateContraindication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContraindication[P]>
      : GetScalarType<T[P], AggregateContraindication[P]>
  }




  export type ContraindicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContraindicationWhereInput
    orderBy?: ContraindicationOrderByWithAggregationInput | ContraindicationOrderByWithAggregationInput[]
    by: ContraindicationScalarFieldEnum[] | ContraindicationScalarFieldEnum
    having?: ContraindicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContraindicationCountAggregateInputType | true
    _avg?: ContraindicationAvgAggregateInputType
    _sum?: ContraindicationSumAggregateInputType
    _min?: ContraindicationMinAggregateInputType
    _max?: ContraindicationMaxAggregateInputType
  }

  export type ContraindicationGroupByOutputType = {
    id: string
    procedureId: number
    text: string
    _count: ContraindicationCountAggregateOutputType | null
    _avg: ContraindicationAvgAggregateOutputType | null
    _sum: ContraindicationSumAggregateOutputType | null
    _min: ContraindicationMinAggregateOutputType | null
    _max: ContraindicationMaxAggregateOutputType | null
  }

  type GetContraindicationGroupByPayload<T extends ContraindicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContraindicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContraindicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContraindicationGroupByOutputType[P]>
            : GetScalarType<T[P], ContraindicationGroupByOutputType[P]>
        }
      >
    >


  export type ContraindicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procedureId?: boolean
    text?: boolean
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contraindication"]>



  export type ContraindicationSelectScalar = {
    id?: boolean
    procedureId?: boolean
    text?: boolean
  }

  export type ContraindicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "procedureId" | "text", ExtArgs["result"]["contraindication"]>
  export type ContraindicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }

  export type $ContraindicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contraindication"
    objects: {
      procedure: Prisma.$ProcedurePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      procedureId: number
      text: string
    }, ExtArgs["result"]["contraindication"]>
    composites: {}
  }

  type ContraindicationGetPayload<S extends boolean | null | undefined | ContraindicationDefaultArgs> = $Result.GetResult<Prisma.$ContraindicationPayload, S>

  type ContraindicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContraindicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContraindicationCountAggregateInputType | true
    }

  export interface ContraindicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contraindication'], meta: { name: 'Contraindication' } }
    /**
     * Find zero or one Contraindication that matches the filter.
     * @param {ContraindicationFindUniqueArgs} args - Arguments to find a Contraindication
     * @example
     * // Get one Contraindication
     * const contraindication = await prisma.contraindication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContraindicationFindUniqueArgs>(args: SelectSubset<T, ContraindicationFindUniqueArgs<ExtArgs>>): Prisma__ContraindicationClient<$Result.GetResult<Prisma.$ContraindicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contraindication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContraindicationFindUniqueOrThrowArgs} args - Arguments to find a Contraindication
     * @example
     * // Get one Contraindication
     * const contraindication = await prisma.contraindication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContraindicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ContraindicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContraindicationClient<$Result.GetResult<Prisma.$ContraindicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contraindication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContraindicationFindFirstArgs} args - Arguments to find a Contraindication
     * @example
     * // Get one Contraindication
     * const contraindication = await prisma.contraindication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContraindicationFindFirstArgs>(args?: SelectSubset<T, ContraindicationFindFirstArgs<ExtArgs>>): Prisma__ContraindicationClient<$Result.GetResult<Prisma.$ContraindicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contraindication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContraindicationFindFirstOrThrowArgs} args - Arguments to find a Contraindication
     * @example
     * // Get one Contraindication
     * const contraindication = await prisma.contraindication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContraindicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ContraindicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContraindicationClient<$Result.GetResult<Prisma.$ContraindicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contraindications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContraindicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contraindications
     * const contraindications = await prisma.contraindication.findMany()
     * 
     * // Get first 10 Contraindications
     * const contraindications = await prisma.contraindication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contraindicationWithIdOnly = await prisma.contraindication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContraindicationFindManyArgs>(args?: SelectSubset<T, ContraindicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContraindicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contraindication.
     * @param {ContraindicationCreateArgs} args - Arguments to create a Contraindication.
     * @example
     * // Create one Contraindication
     * const Contraindication = await prisma.contraindication.create({
     *   data: {
     *     // ... data to create a Contraindication
     *   }
     * })
     * 
     */
    create<T extends ContraindicationCreateArgs>(args: SelectSubset<T, ContraindicationCreateArgs<ExtArgs>>): Prisma__ContraindicationClient<$Result.GetResult<Prisma.$ContraindicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contraindications.
     * @param {ContraindicationCreateManyArgs} args - Arguments to create many Contraindications.
     * @example
     * // Create many Contraindications
     * const contraindication = await prisma.contraindication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContraindicationCreateManyArgs>(args?: SelectSubset<T, ContraindicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contraindication.
     * @param {ContraindicationDeleteArgs} args - Arguments to delete one Contraindication.
     * @example
     * // Delete one Contraindication
     * const Contraindication = await prisma.contraindication.delete({
     *   where: {
     *     // ... filter to delete one Contraindication
     *   }
     * })
     * 
     */
    delete<T extends ContraindicationDeleteArgs>(args: SelectSubset<T, ContraindicationDeleteArgs<ExtArgs>>): Prisma__ContraindicationClient<$Result.GetResult<Prisma.$ContraindicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contraindication.
     * @param {ContraindicationUpdateArgs} args - Arguments to update one Contraindication.
     * @example
     * // Update one Contraindication
     * const contraindication = await prisma.contraindication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContraindicationUpdateArgs>(args: SelectSubset<T, ContraindicationUpdateArgs<ExtArgs>>): Prisma__ContraindicationClient<$Result.GetResult<Prisma.$ContraindicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contraindications.
     * @param {ContraindicationDeleteManyArgs} args - Arguments to filter Contraindications to delete.
     * @example
     * // Delete a few Contraindications
     * const { count } = await prisma.contraindication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContraindicationDeleteManyArgs>(args?: SelectSubset<T, ContraindicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contraindications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContraindicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contraindications
     * const contraindication = await prisma.contraindication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContraindicationUpdateManyArgs>(args: SelectSubset<T, ContraindicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contraindication.
     * @param {ContraindicationUpsertArgs} args - Arguments to update or create a Contraindication.
     * @example
     * // Update or create a Contraindication
     * const contraindication = await prisma.contraindication.upsert({
     *   create: {
     *     // ... data to create a Contraindication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contraindication we want to update
     *   }
     * })
     */
    upsert<T extends ContraindicationUpsertArgs>(args: SelectSubset<T, ContraindicationUpsertArgs<ExtArgs>>): Prisma__ContraindicationClient<$Result.GetResult<Prisma.$ContraindicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contraindications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContraindicationCountArgs} args - Arguments to filter Contraindications to count.
     * @example
     * // Count the number of Contraindications
     * const count = await prisma.contraindication.count({
     *   where: {
     *     // ... the filter for the Contraindications we want to count
     *   }
     * })
    **/
    count<T extends ContraindicationCountArgs>(
      args?: Subset<T, ContraindicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContraindicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contraindication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContraindicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContraindicationAggregateArgs>(args: Subset<T, ContraindicationAggregateArgs>): Prisma.PrismaPromise<GetContraindicationAggregateType<T>>

    /**
     * Group by Contraindication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContraindicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContraindicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContraindicationGroupByArgs['orderBy'] }
        : { orderBy?: ContraindicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContraindicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContraindicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contraindication model
   */
  readonly fields: ContraindicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contraindication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContraindicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedure<T extends ProcedureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcedureDefaultArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contraindication model
   */
  interface ContraindicationFieldRefs {
    readonly id: FieldRef<"Contraindication", 'String'>
    readonly procedureId: FieldRef<"Contraindication", 'Int'>
    readonly text: FieldRef<"Contraindication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contraindication findUnique
   */
  export type ContraindicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
    /**
     * Filter, which Contraindication to fetch.
     */
    where: ContraindicationWhereUniqueInput
  }

  /**
   * Contraindication findUniqueOrThrow
   */
  export type ContraindicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
    /**
     * Filter, which Contraindication to fetch.
     */
    where: ContraindicationWhereUniqueInput
  }

  /**
   * Contraindication findFirst
   */
  export type ContraindicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
    /**
     * Filter, which Contraindication to fetch.
     */
    where?: ContraindicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contraindications to fetch.
     */
    orderBy?: ContraindicationOrderByWithRelationInput | ContraindicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contraindications.
     */
    cursor?: ContraindicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contraindications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contraindications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contraindications.
     */
    distinct?: ContraindicationScalarFieldEnum | ContraindicationScalarFieldEnum[]
  }

  /**
   * Contraindication findFirstOrThrow
   */
  export type ContraindicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
    /**
     * Filter, which Contraindication to fetch.
     */
    where?: ContraindicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contraindications to fetch.
     */
    orderBy?: ContraindicationOrderByWithRelationInput | ContraindicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contraindications.
     */
    cursor?: ContraindicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contraindications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contraindications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contraindications.
     */
    distinct?: ContraindicationScalarFieldEnum | ContraindicationScalarFieldEnum[]
  }

  /**
   * Contraindication findMany
   */
  export type ContraindicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
    /**
     * Filter, which Contraindications to fetch.
     */
    where?: ContraindicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contraindications to fetch.
     */
    orderBy?: ContraindicationOrderByWithRelationInput | ContraindicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contraindications.
     */
    cursor?: ContraindicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contraindications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contraindications.
     */
    skip?: number
    distinct?: ContraindicationScalarFieldEnum | ContraindicationScalarFieldEnum[]
  }

  /**
   * Contraindication create
   */
  export type ContraindicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Contraindication.
     */
    data: XOR<ContraindicationCreateInput, ContraindicationUncheckedCreateInput>
  }

  /**
   * Contraindication createMany
   */
  export type ContraindicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contraindications.
     */
    data: ContraindicationCreateManyInput | ContraindicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contraindication update
   */
  export type ContraindicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Contraindication.
     */
    data: XOR<ContraindicationUpdateInput, ContraindicationUncheckedUpdateInput>
    /**
     * Choose, which Contraindication to update.
     */
    where: ContraindicationWhereUniqueInput
  }

  /**
   * Contraindication updateMany
   */
  export type ContraindicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contraindications.
     */
    data: XOR<ContraindicationUpdateManyMutationInput, ContraindicationUncheckedUpdateManyInput>
    /**
     * Filter which Contraindications to update
     */
    where?: ContraindicationWhereInput
    /**
     * Limit how many Contraindications to update.
     */
    limit?: number
  }

  /**
   * Contraindication upsert
   */
  export type ContraindicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Contraindication to update in case it exists.
     */
    where: ContraindicationWhereUniqueInput
    /**
     * In case the Contraindication found by the `where` argument doesn't exist, create a new Contraindication with this data.
     */
    create: XOR<ContraindicationCreateInput, ContraindicationUncheckedCreateInput>
    /**
     * In case the Contraindication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContraindicationUpdateInput, ContraindicationUncheckedUpdateInput>
  }

  /**
   * Contraindication delete
   */
  export type ContraindicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
    /**
     * Filter which Contraindication to delete.
     */
    where: ContraindicationWhereUniqueInput
  }

  /**
   * Contraindication deleteMany
   */
  export type ContraindicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contraindications to delete
     */
    where?: ContraindicationWhereInput
    /**
     * Limit how many Contraindications to delete.
     */
    limit?: number
  }

  /**
   * Contraindication without action
   */
  export type ContraindicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contraindication
     */
    select?: ContraindicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contraindication
     */
    omit?: ContraindicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContraindicationInclude<ExtArgs> | null
  }


  /**
   * Model Rehabilitation
   */

  export type AggregateRehabilitation = {
    _count: RehabilitationCountAggregateOutputType | null
    _avg: RehabilitationAvgAggregateOutputType | null
    _sum: RehabilitationSumAggregateOutputType | null
    _min: RehabilitationMinAggregateOutputType | null
    _max: RehabilitationMaxAggregateOutputType | null
  }

  export type RehabilitationAvgAggregateOutputType = {
    procedureId: number | null
  }

  export type RehabilitationSumAggregateOutputType = {
    procedureId: number | null
  }

  export type RehabilitationMinAggregateOutputType = {
    id: string | null
    procedureId: number | null
    text: string | null
  }

  export type RehabilitationMaxAggregateOutputType = {
    id: string | null
    procedureId: number | null
    text: string | null
  }

  export type RehabilitationCountAggregateOutputType = {
    id: number
    procedureId: number
    text: number
    _all: number
  }


  export type RehabilitationAvgAggregateInputType = {
    procedureId?: true
  }

  export type RehabilitationSumAggregateInputType = {
    procedureId?: true
  }

  export type RehabilitationMinAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
  }

  export type RehabilitationMaxAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
  }

  export type RehabilitationCountAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
    _all?: true
  }

  export type RehabilitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rehabilitation to aggregate.
     */
    where?: RehabilitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehabilitations to fetch.
     */
    orderBy?: RehabilitationOrderByWithRelationInput | RehabilitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RehabilitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehabilitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehabilitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rehabilitations
    **/
    _count?: true | RehabilitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RehabilitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RehabilitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RehabilitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RehabilitationMaxAggregateInputType
  }

  export type GetRehabilitationAggregateType<T extends RehabilitationAggregateArgs> = {
        [P in keyof T & keyof AggregateRehabilitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRehabilitation[P]>
      : GetScalarType<T[P], AggregateRehabilitation[P]>
  }




  export type RehabilitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RehabilitationWhereInput
    orderBy?: RehabilitationOrderByWithAggregationInput | RehabilitationOrderByWithAggregationInput[]
    by: RehabilitationScalarFieldEnum[] | RehabilitationScalarFieldEnum
    having?: RehabilitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RehabilitationCountAggregateInputType | true
    _avg?: RehabilitationAvgAggregateInputType
    _sum?: RehabilitationSumAggregateInputType
    _min?: RehabilitationMinAggregateInputType
    _max?: RehabilitationMaxAggregateInputType
  }

  export type RehabilitationGroupByOutputType = {
    id: string
    procedureId: number
    text: string
    _count: RehabilitationCountAggregateOutputType | null
    _avg: RehabilitationAvgAggregateOutputType | null
    _sum: RehabilitationSumAggregateOutputType | null
    _min: RehabilitationMinAggregateOutputType | null
    _max: RehabilitationMaxAggregateOutputType | null
  }

  type GetRehabilitationGroupByPayload<T extends RehabilitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RehabilitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RehabilitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RehabilitationGroupByOutputType[P]>
            : GetScalarType<T[P], RehabilitationGroupByOutputType[P]>
        }
      >
    >


  export type RehabilitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procedureId?: boolean
    text?: boolean
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rehabilitation"]>



  export type RehabilitationSelectScalar = {
    id?: boolean
    procedureId?: boolean
    text?: boolean
  }

  export type RehabilitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "procedureId" | "text", ExtArgs["result"]["rehabilitation"]>
  export type RehabilitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }

  export type $RehabilitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rehabilitation"
    objects: {
      procedure: Prisma.$ProcedurePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      procedureId: number
      text: string
    }, ExtArgs["result"]["rehabilitation"]>
    composites: {}
  }

  type RehabilitationGetPayload<S extends boolean | null | undefined | RehabilitationDefaultArgs> = $Result.GetResult<Prisma.$RehabilitationPayload, S>

  type RehabilitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RehabilitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RehabilitationCountAggregateInputType | true
    }

  export interface RehabilitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rehabilitation'], meta: { name: 'Rehabilitation' } }
    /**
     * Find zero or one Rehabilitation that matches the filter.
     * @param {RehabilitationFindUniqueArgs} args - Arguments to find a Rehabilitation
     * @example
     * // Get one Rehabilitation
     * const rehabilitation = await prisma.rehabilitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RehabilitationFindUniqueArgs>(args: SelectSubset<T, RehabilitationFindUniqueArgs<ExtArgs>>): Prisma__RehabilitationClient<$Result.GetResult<Prisma.$RehabilitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rehabilitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RehabilitationFindUniqueOrThrowArgs} args - Arguments to find a Rehabilitation
     * @example
     * // Get one Rehabilitation
     * const rehabilitation = await prisma.rehabilitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RehabilitationFindUniqueOrThrowArgs>(args: SelectSubset<T, RehabilitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RehabilitationClient<$Result.GetResult<Prisma.$RehabilitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rehabilitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabilitationFindFirstArgs} args - Arguments to find a Rehabilitation
     * @example
     * // Get one Rehabilitation
     * const rehabilitation = await prisma.rehabilitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RehabilitationFindFirstArgs>(args?: SelectSubset<T, RehabilitationFindFirstArgs<ExtArgs>>): Prisma__RehabilitationClient<$Result.GetResult<Prisma.$RehabilitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rehabilitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabilitationFindFirstOrThrowArgs} args - Arguments to find a Rehabilitation
     * @example
     * // Get one Rehabilitation
     * const rehabilitation = await prisma.rehabilitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RehabilitationFindFirstOrThrowArgs>(args?: SelectSubset<T, RehabilitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RehabilitationClient<$Result.GetResult<Prisma.$RehabilitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rehabilitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabilitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rehabilitations
     * const rehabilitations = await prisma.rehabilitation.findMany()
     * 
     * // Get first 10 Rehabilitations
     * const rehabilitations = await prisma.rehabilitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rehabilitationWithIdOnly = await prisma.rehabilitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RehabilitationFindManyArgs>(args?: SelectSubset<T, RehabilitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RehabilitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rehabilitation.
     * @param {RehabilitationCreateArgs} args - Arguments to create a Rehabilitation.
     * @example
     * // Create one Rehabilitation
     * const Rehabilitation = await prisma.rehabilitation.create({
     *   data: {
     *     // ... data to create a Rehabilitation
     *   }
     * })
     * 
     */
    create<T extends RehabilitationCreateArgs>(args: SelectSubset<T, RehabilitationCreateArgs<ExtArgs>>): Prisma__RehabilitationClient<$Result.GetResult<Prisma.$RehabilitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rehabilitations.
     * @param {RehabilitationCreateManyArgs} args - Arguments to create many Rehabilitations.
     * @example
     * // Create many Rehabilitations
     * const rehabilitation = await prisma.rehabilitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RehabilitationCreateManyArgs>(args?: SelectSubset<T, RehabilitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rehabilitation.
     * @param {RehabilitationDeleteArgs} args - Arguments to delete one Rehabilitation.
     * @example
     * // Delete one Rehabilitation
     * const Rehabilitation = await prisma.rehabilitation.delete({
     *   where: {
     *     // ... filter to delete one Rehabilitation
     *   }
     * })
     * 
     */
    delete<T extends RehabilitationDeleteArgs>(args: SelectSubset<T, RehabilitationDeleteArgs<ExtArgs>>): Prisma__RehabilitationClient<$Result.GetResult<Prisma.$RehabilitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rehabilitation.
     * @param {RehabilitationUpdateArgs} args - Arguments to update one Rehabilitation.
     * @example
     * // Update one Rehabilitation
     * const rehabilitation = await prisma.rehabilitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RehabilitationUpdateArgs>(args: SelectSubset<T, RehabilitationUpdateArgs<ExtArgs>>): Prisma__RehabilitationClient<$Result.GetResult<Prisma.$RehabilitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rehabilitations.
     * @param {RehabilitationDeleteManyArgs} args - Arguments to filter Rehabilitations to delete.
     * @example
     * // Delete a few Rehabilitations
     * const { count } = await prisma.rehabilitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RehabilitationDeleteManyArgs>(args?: SelectSubset<T, RehabilitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rehabilitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabilitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rehabilitations
     * const rehabilitation = await prisma.rehabilitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RehabilitationUpdateManyArgs>(args: SelectSubset<T, RehabilitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rehabilitation.
     * @param {RehabilitationUpsertArgs} args - Arguments to update or create a Rehabilitation.
     * @example
     * // Update or create a Rehabilitation
     * const rehabilitation = await prisma.rehabilitation.upsert({
     *   create: {
     *     // ... data to create a Rehabilitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rehabilitation we want to update
     *   }
     * })
     */
    upsert<T extends RehabilitationUpsertArgs>(args: SelectSubset<T, RehabilitationUpsertArgs<ExtArgs>>): Prisma__RehabilitationClient<$Result.GetResult<Prisma.$RehabilitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rehabilitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabilitationCountArgs} args - Arguments to filter Rehabilitations to count.
     * @example
     * // Count the number of Rehabilitations
     * const count = await prisma.rehabilitation.count({
     *   where: {
     *     // ... the filter for the Rehabilitations we want to count
     *   }
     * })
    **/
    count<T extends RehabilitationCountArgs>(
      args?: Subset<T, RehabilitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RehabilitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rehabilitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabilitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RehabilitationAggregateArgs>(args: Subset<T, RehabilitationAggregateArgs>): Prisma.PrismaPromise<GetRehabilitationAggregateType<T>>

    /**
     * Group by Rehabilitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RehabilitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RehabilitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RehabilitationGroupByArgs['orderBy'] }
        : { orderBy?: RehabilitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RehabilitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRehabilitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rehabilitation model
   */
  readonly fields: RehabilitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rehabilitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RehabilitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedure<T extends ProcedureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcedureDefaultArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rehabilitation model
   */
  interface RehabilitationFieldRefs {
    readonly id: FieldRef<"Rehabilitation", 'String'>
    readonly procedureId: FieldRef<"Rehabilitation", 'Int'>
    readonly text: FieldRef<"Rehabilitation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rehabilitation findUnique
   */
  export type RehabilitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
    /**
     * Filter, which Rehabilitation to fetch.
     */
    where: RehabilitationWhereUniqueInput
  }

  /**
   * Rehabilitation findUniqueOrThrow
   */
  export type RehabilitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
    /**
     * Filter, which Rehabilitation to fetch.
     */
    where: RehabilitationWhereUniqueInput
  }

  /**
   * Rehabilitation findFirst
   */
  export type RehabilitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
    /**
     * Filter, which Rehabilitation to fetch.
     */
    where?: RehabilitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehabilitations to fetch.
     */
    orderBy?: RehabilitationOrderByWithRelationInput | RehabilitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rehabilitations.
     */
    cursor?: RehabilitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehabilitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehabilitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rehabilitations.
     */
    distinct?: RehabilitationScalarFieldEnum | RehabilitationScalarFieldEnum[]
  }

  /**
   * Rehabilitation findFirstOrThrow
   */
  export type RehabilitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
    /**
     * Filter, which Rehabilitation to fetch.
     */
    where?: RehabilitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehabilitations to fetch.
     */
    orderBy?: RehabilitationOrderByWithRelationInput | RehabilitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rehabilitations.
     */
    cursor?: RehabilitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehabilitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehabilitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rehabilitations.
     */
    distinct?: RehabilitationScalarFieldEnum | RehabilitationScalarFieldEnum[]
  }

  /**
   * Rehabilitation findMany
   */
  export type RehabilitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
    /**
     * Filter, which Rehabilitations to fetch.
     */
    where?: RehabilitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rehabilitations to fetch.
     */
    orderBy?: RehabilitationOrderByWithRelationInput | RehabilitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rehabilitations.
     */
    cursor?: RehabilitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rehabilitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rehabilitations.
     */
    skip?: number
    distinct?: RehabilitationScalarFieldEnum | RehabilitationScalarFieldEnum[]
  }

  /**
   * Rehabilitation create
   */
  export type RehabilitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Rehabilitation.
     */
    data: XOR<RehabilitationCreateInput, RehabilitationUncheckedCreateInput>
  }

  /**
   * Rehabilitation createMany
   */
  export type RehabilitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rehabilitations.
     */
    data: RehabilitationCreateManyInput | RehabilitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rehabilitation update
   */
  export type RehabilitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Rehabilitation.
     */
    data: XOR<RehabilitationUpdateInput, RehabilitationUncheckedUpdateInput>
    /**
     * Choose, which Rehabilitation to update.
     */
    where: RehabilitationWhereUniqueInput
  }

  /**
   * Rehabilitation updateMany
   */
  export type RehabilitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rehabilitations.
     */
    data: XOR<RehabilitationUpdateManyMutationInput, RehabilitationUncheckedUpdateManyInput>
    /**
     * Filter which Rehabilitations to update
     */
    where?: RehabilitationWhereInput
    /**
     * Limit how many Rehabilitations to update.
     */
    limit?: number
  }

  /**
   * Rehabilitation upsert
   */
  export type RehabilitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Rehabilitation to update in case it exists.
     */
    where: RehabilitationWhereUniqueInput
    /**
     * In case the Rehabilitation found by the `where` argument doesn't exist, create a new Rehabilitation with this data.
     */
    create: XOR<RehabilitationCreateInput, RehabilitationUncheckedCreateInput>
    /**
     * In case the Rehabilitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RehabilitationUpdateInput, RehabilitationUncheckedUpdateInput>
  }

  /**
   * Rehabilitation delete
   */
  export type RehabilitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
    /**
     * Filter which Rehabilitation to delete.
     */
    where: RehabilitationWhereUniqueInput
  }

  /**
   * Rehabilitation deleteMany
   */
  export type RehabilitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rehabilitations to delete
     */
    where?: RehabilitationWhereInput
    /**
     * Limit how many Rehabilitations to delete.
     */
    limit?: number
  }

  /**
   * Rehabilitation without action
   */
  export type RehabilitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rehabilitation
     */
    select?: RehabilitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rehabilitation
     */
    omit?: RehabilitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RehabilitationInclude<ExtArgs> | null
  }


  /**
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    procedureId: number | null
  }

  export type ResultSumAggregateOutputType = {
    procedureId: number | null
  }

  export type ResultMinAggregateOutputType = {
    id: string | null
    procedureId: number | null
    text: string | null
  }

  export type ResultMaxAggregateOutputType = {
    id: string | null
    procedureId: number | null
    text: string | null
  }

  export type ResultCountAggregateOutputType = {
    id: number
    procedureId: number
    text: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    procedureId?: true
  }

  export type ResultSumAggregateInputType = {
    procedureId?: true
  }

  export type ResultMinAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
  }

  export type ResultMaxAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
  }

  export type ResultCountAggregateInputType = {
    id?: true
    procedureId?: true
    text?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    id: string
    procedureId: number
    text: string
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procedureId?: boolean
    text?: boolean
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>



  export type ResultSelectScalar = {
    id?: boolean
    procedureId?: boolean
    text?: boolean
  }

  export type ResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "procedureId" | "text", ExtArgs["result"]["result"]>
  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      procedure: Prisma.$ProcedurePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      procedureId: number
      text: string
    }, ExtArgs["result"]["result"]>
    composites: {}
  }

  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultFindUniqueArgs>(args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Result that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultFindFirstArgs>(args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultWithIdOnly = await prisma.result.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultFindManyArgs>(args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
     */
    create<T extends ResultCreateArgs>(args: SelectSubset<T, ResultCreateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {ResultCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultCreateManyArgs>(args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
     */
    delete<T extends ResultDeleteArgs>(args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultUpdateArgs>(args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultDeleteManyArgs>(args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultUpdateManyArgs>(args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
     */
    upsert<T extends ResultUpsertArgs>(args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedure<T extends ProcedureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcedureDefaultArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Result model
   */
  interface ResultFieldRefs {
    readonly id: FieldRef<"Result", 'String'>
    readonly procedureId: FieldRef<"Result", 'Int'>
    readonly text: FieldRef<"Result", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }

  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
  }

  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }

  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to delete.
     */
    limit?: number
  }

  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
  }


  /**
   * Model ProcedurePrice
   */

  export type AggregateProcedurePrice = {
    _count: ProcedurePriceCountAggregateOutputType | null
    _avg: ProcedurePriceAvgAggregateOutputType | null
    _sum: ProcedurePriceSumAggregateOutputType | null
    _min: ProcedurePriceMinAggregateOutputType | null
    _max: ProcedurePriceMaxAggregateOutputType | null
  }

  export type ProcedurePriceAvgAggregateOutputType = {
    procedureId: number | null
    price: Decimal | null
  }

  export type ProcedurePriceSumAggregateOutputType = {
    procedureId: number | null
    price: Decimal | null
  }

  export type ProcedurePriceMinAggregateOutputType = {
    id: string | null
    procedureId: number | null
    zone: string | null
    price: Decimal | null
  }

  export type ProcedurePriceMaxAggregateOutputType = {
    id: string | null
    procedureId: number | null
    zone: string | null
    price: Decimal | null
  }

  export type ProcedurePriceCountAggregateOutputType = {
    id: number
    procedureId: number
    zone: number
    price: number
    _all: number
  }


  export type ProcedurePriceAvgAggregateInputType = {
    procedureId?: true
    price?: true
  }

  export type ProcedurePriceSumAggregateInputType = {
    procedureId?: true
    price?: true
  }

  export type ProcedurePriceMinAggregateInputType = {
    id?: true
    procedureId?: true
    zone?: true
    price?: true
  }

  export type ProcedurePriceMaxAggregateInputType = {
    id?: true
    procedureId?: true
    zone?: true
    price?: true
  }

  export type ProcedurePriceCountAggregateInputType = {
    id?: true
    procedureId?: true
    zone?: true
    price?: true
    _all?: true
  }

  export type ProcedurePriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcedurePrice to aggregate.
     */
    where?: ProcedurePriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcedurePrices to fetch.
     */
    orderBy?: ProcedurePriceOrderByWithRelationInput | ProcedurePriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcedurePriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcedurePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcedurePrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcedurePrices
    **/
    _count?: true | ProcedurePriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcedurePriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcedurePriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcedurePriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcedurePriceMaxAggregateInputType
  }

  export type GetProcedurePriceAggregateType<T extends ProcedurePriceAggregateArgs> = {
        [P in keyof T & keyof AggregateProcedurePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcedurePrice[P]>
      : GetScalarType<T[P], AggregateProcedurePrice[P]>
  }




  export type ProcedurePriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedurePriceWhereInput
    orderBy?: ProcedurePriceOrderByWithAggregationInput | ProcedurePriceOrderByWithAggregationInput[]
    by: ProcedurePriceScalarFieldEnum[] | ProcedurePriceScalarFieldEnum
    having?: ProcedurePriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcedurePriceCountAggregateInputType | true
    _avg?: ProcedurePriceAvgAggregateInputType
    _sum?: ProcedurePriceSumAggregateInputType
    _min?: ProcedurePriceMinAggregateInputType
    _max?: ProcedurePriceMaxAggregateInputType
  }

  export type ProcedurePriceGroupByOutputType = {
    id: string
    procedureId: number
    zone: string
    price: Decimal
    _count: ProcedurePriceCountAggregateOutputType | null
    _avg: ProcedurePriceAvgAggregateOutputType | null
    _sum: ProcedurePriceSumAggregateOutputType | null
    _min: ProcedurePriceMinAggregateOutputType | null
    _max: ProcedurePriceMaxAggregateOutputType | null
  }

  type GetProcedurePriceGroupByPayload<T extends ProcedurePriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcedurePriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcedurePriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcedurePriceGroupByOutputType[P]>
            : GetScalarType<T[P], ProcedurePriceGroupByOutputType[P]>
        }
      >
    >


  export type ProcedurePriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procedureId?: boolean
    zone?: boolean
    price?: boolean
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedurePrice"]>



  export type ProcedurePriceSelectScalar = {
    id?: boolean
    procedureId?: boolean
    zone?: boolean
    price?: boolean
  }

  export type ProcedurePriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "procedureId" | "zone" | "price", ExtArgs["result"]["procedurePrice"]>
  export type ProcedurePriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }

  export type $ProcedurePricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcedurePrice"
    objects: {
      procedure: Prisma.$ProcedurePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      procedureId: number
      zone: string
      price: Prisma.Decimal
    }, ExtArgs["result"]["procedurePrice"]>
    composites: {}
  }

  type ProcedurePriceGetPayload<S extends boolean | null | undefined | ProcedurePriceDefaultArgs> = $Result.GetResult<Prisma.$ProcedurePricePayload, S>

  type ProcedurePriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcedurePriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcedurePriceCountAggregateInputType | true
    }

  export interface ProcedurePriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcedurePrice'], meta: { name: 'ProcedurePrice' } }
    /**
     * Find zero or one ProcedurePrice that matches the filter.
     * @param {ProcedurePriceFindUniqueArgs} args - Arguments to find a ProcedurePrice
     * @example
     * // Get one ProcedurePrice
     * const procedurePrice = await prisma.procedurePrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcedurePriceFindUniqueArgs>(args: SelectSubset<T, ProcedurePriceFindUniqueArgs<ExtArgs>>): Prisma__ProcedurePriceClient<$Result.GetResult<Prisma.$ProcedurePricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcedurePrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcedurePriceFindUniqueOrThrowArgs} args - Arguments to find a ProcedurePrice
     * @example
     * // Get one ProcedurePrice
     * const procedurePrice = await prisma.procedurePrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcedurePriceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcedurePriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcedurePriceClient<$Result.GetResult<Prisma.$ProcedurePricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcedurePrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedurePriceFindFirstArgs} args - Arguments to find a ProcedurePrice
     * @example
     * // Get one ProcedurePrice
     * const procedurePrice = await prisma.procedurePrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcedurePriceFindFirstArgs>(args?: SelectSubset<T, ProcedurePriceFindFirstArgs<ExtArgs>>): Prisma__ProcedurePriceClient<$Result.GetResult<Prisma.$ProcedurePricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcedurePrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedurePriceFindFirstOrThrowArgs} args - Arguments to find a ProcedurePrice
     * @example
     * // Get one ProcedurePrice
     * const procedurePrice = await prisma.procedurePrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcedurePriceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcedurePriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcedurePriceClient<$Result.GetResult<Prisma.$ProcedurePricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcedurePrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedurePriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcedurePrices
     * const procedurePrices = await prisma.procedurePrice.findMany()
     * 
     * // Get first 10 ProcedurePrices
     * const procedurePrices = await prisma.procedurePrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procedurePriceWithIdOnly = await prisma.procedurePrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcedurePriceFindManyArgs>(args?: SelectSubset<T, ProcedurePriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedurePricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcedurePrice.
     * @param {ProcedurePriceCreateArgs} args - Arguments to create a ProcedurePrice.
     * @example
     * // Create one ProcedurePrice
     * const ProcedurePrice = await prisma.procedurePrice.create({
     *   data: {
     *     // ... data to create a ProcedurePrice
     *   }
     * })
     * 
     */
    create<T extends ProcedurePriceCreateArgs>(args: SelectSubset<T, ProcedurePriceCreateArgs<ExtArgs>>): Prisma__ProcedurePriceClient<$Result.GetResult<Prisma.$ProcedurePricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcedurePrices.
     * @param {ProcedurePriceCreateManyArgs} args - Arguments to create many ProcedurePrices.
     * @example
     * // Create many ProcedurePrices
     * const procedurePrice = await prisma.procedurePrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcedurePriceCreateManyArgs>(args?: SelectSubset<T, ProcedurePriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProcedurePrice.
     * @param {ProcedurePriceDeleteArgs} args - Arguments to delete one ProcedurePrice.
     * @example
     * // Delete one ProcedurePrice
     * const ProcedurePrice = await prisma.procedurePrice.delete({
     *   where: {
     *     // ... filter to delete one ProcedurePrice
     *   }
     * })
     * 
     */
    delete<T extends ProcedurePriceDeleteArgs>(args: SelectSubset<T, ProcedurePriceDeleteArgs<ExtArgs>>): Prisma__ProcedurePriceClient<$Result.GetResult<Prisma.$ProcedurePricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcedurePrice.
     * @param {ProcedurePriceUpdateArgs} args - Arguments to update one ProcedurePrice.
     * @example
     * // Update one ProcedurePrice
     * const procedurePrice = await prisma.procedurePrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcedurePriceUpdateArgs>(args: SelectSubset<T, ProcedurePriceUpdateArgs<ExtArgs>>): Prisma__ProcedurePriceClient<$Result.GetResult<Prisma.$ProcedurePricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcedurePrices.
     * @param {ProcedurePriceDeleteManyArgs} args - Arguments to filter ProcedurePrices to delete.
     * @example
     * // Delete a few ProcedurePrices
     * const { count } = await prisma.procedurePrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcedurePriceDeleteManyArgs>(args?: SelectSubset<T, ProcedurePriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcedurePrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedurePriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcedurePrices
     * const procedurePrice = await prisma.procedurePrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcedurePriceUpdateManyArgs>(args: SelectSubset<T, ProcedurePriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProcedurePrice.
     * @param {ProcedurePriceUpsertArgs} args - Arguments to update or create a ProcedurePrice.
     * @example
     * // Update or create a ProcedurePrice
     * const procedurePrice = await prisma.procedurePrice.upsert({
     *   create: {
     *     // ... data to create a ProcedurePrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcedurePrice we want to update
     *   }
     * })
     */
    upsert<T extends ProcedurePriceUpsertArgs>(args: SelectSubset<T, ProcedurePriceUpsertArgs<ExtArgs>>): Prisma__ProcedurePriceClient<$Result.GetResult<Prisma.$ProcedurePricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcedurePrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedurePriceCountArgs} args - Arguments to filter ProcedurePrices to count.
     * @example
     * // Count the number of ProcedurePrices
     * const count = await prisma.procedurePrice.count({
     *   where: {
     *     // ... the filter for the ProcedurePrices we want to count
     *   }
     * })
    **/
    count<T extends ProcedurePriceCountArgs>(
      args?: Subset<T, ProcedurePriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcedurePriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcedurePrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedurePriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcedurePriceAggregateArgs>(args: Subset<T, ProcedurePriceAggregateArgs>): Prisma.PrismaPromise<GetProcedurePriceAggregateType<T>>

    /**
     * Group by ProcedurePrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedurePriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcedurePriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcedurePriceGroupByArgs['orderBy'] }
        : { orderBy?: ProcedurePriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcedurePriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcedurePriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcedurePrice model
   */
  readonly fields: ProcedurePriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcedurePrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcedurePriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedure<T extends ProcedureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcedureDefaultArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProcedurePrice model
   */
  interface ProcedurePriceFieldRefs {
    readonly id: FieldRef<"ProcedurePrice", 'String'>
    readonly procedureId: FieldRef<"ProcedurePrice", 'Int'>
    readonly zone: FieldRef<"ProcedurePrice", 'String'>
    readonly price: FieldRef<"ProcedurePrice", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ProcedurePrice findUnique
   */
  export type ProcedurePriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
    /**
     * Filter, which ProcedurePrice to fetch.
     */
    where: ProcedurePriceWhereUniqueInput
  }

  /**
   * ProcedurePrice findUniqueOrThrow
   */
  export type ProcedurePriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
    /**
     * Filter, which ProcedurePrice to fetch.
     */
    where: ProcedurePriceWhereUniqueInput
  }

  /**
   * ProcedurePrice findFirst
   */
  export type ProcedurePriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
    /**
     * Filter, which ProcedurePrice to fetch.
     */
    where?: ProcedurePriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcedurePrices to fetch.
     */
    orderBy?: ProcedurePriceOrderByWithRelationInput | ProcedurePriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcedurePrices.
     */
    cursor?: ProcedurePriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcedurePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcedurePrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcedurePrices.
     */
    distinct?: ProcedurePriceScalarFieldEnum | ProcedurePriceScalarFieldEnum[]
  }

  /**
   * ProcedurePrice findFirstOrThrow
   */
  export type ProcedurePriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
    /**
     * Filter, which ProcedurePrice to fetch.
     */
    where?: ProcedurePriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcedurePrices to fetch.
     */
    orderBy?: ProcedurePriceOrderByWithRelationInput | ProcedurePriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcedurePrices.
     */
    cursor?: ProcedurePriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcedurePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcedurePrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcedurePrices.
     */
    distinct?: ProcedurePriceScalarFieldEnum | ProcedurePriceScalarFieldEnum[]
  }

  /**
   * ProcedurePrice findMany
   */
  export type ProcedurePriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
    /**
     * Filter, which ProcedurePrices to fetch.
     */
    where?: ProcedurePriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcedurePrices to fetch.
     */
    orderBy?: ProcedurePriceOrderByWithRelationInput | ProcedurePriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcedurePrices.
     */
    cursor?: ProcedurePriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcedurePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcedurePrices.
     */
    skip?: number
    distinct?: ProcedurePriceScalarFieldEnum | ProcedurePriceScalarFieldEnum[]
  }

  /**
   * ProcedurePrice create
   */
  export type ProcedurePriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcedurePrice.
     */
    data: XOR<ProcedurePriceCreateInput, ProcedurePriceUncheckedCreateInput>
  }

  /**
   * ProcedurePrice createMany
   */
  export type ProcedurePriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcedurePrices.
     */
    data: ProcedurePriceCreateManyInput | ProcedurePriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcedurePrice update
   */
  export type ProcedurePriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcedurePrice.
     */
    data: XOR<ProcedurePriceUpdateInput, ProcedurePriceUncheckedUpdateInput>
    /**
     * Choose, which ProcedurePrice to update.
     */
    where: ProcedurePriceWhereUniqueInput
  }

  /**
   * ProcedurePrice updateMany
   */
  export type ProcedurePriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcedurePrices.
     */
    data: XOR<ProcedurePriceUpdateManyMutationInput, ProcedurePriceUncheckedUpdateManyInput>
    /**
     * Filter which ProcedurePrices to update
     */
    where?: ProcedurePriceWhereInput
    /**
     * Limit how many ProcedurePrices to update.
     */
    limit?: number
  }

  /**
   * ProcedurePrice upsert
   */
  export type ProcedurePriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcedurePrice to update in case it exists.
     */
    where: ProcedurePriceWhereUniqueInput
    /**
     * In case the ProcedurePrice found by the `where` argument doesn't exist, create a new ProcedurePrice with this data.
     */
    create: XOR<ProcedurePriceCreateInput, ProcedurePriceUncheckedCreateInput>
    /**
     * In case the ProcedurePrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcedurePriceUpdateInput, ProcedurePriceUncheckedUpdateInput>
  }

  /**
   * ProcedurePrice delete
   */
  export type ProcedurePriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
    /**
     * Filter which ProcedurePrice to delete.
     */
    where: ProcedurePriceWhereUniqueInput
  }

  /**
   * ProcedurePrice deleteMany
   */
  export type ProcedurePriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcedurePrices to delete
     */
    where?: ProcedurePriceWhereInput
    /**
     * Limit how many ProcedurePrices to delete.
     */
    limit?: number
  }

  /**
   * ProcedurePrice without action
   */
  export type ProcedurePriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedurePrice
     */
    select?: ProcedurePriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedurePrice
     */
    omit?: ProcedurePriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedurePriceInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    birthday: string | null
    phoneNumber: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
    expiresAt: Date | null
    anamnesis: string | null
    social: string | null
    description: string | null
    image_3d: boolean | null
    document: boolean | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    birthday: string | null
    phoneNumber: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
    expiresAt: Date | null
    anamnesis: string | null
    social: string | null
    description: string | null
    image_3d: boolean | null
    document: boolean | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    birthday: number
    phoneNumber: number
    email: number
    image: number
    createdAt: number
    expiresAt: number
    anamnesis: number
    social: number
    description: number
    image_3d: number
    document: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthday?: true
    phoneNumber?: true
    email?: true
    image?: true
    createdAt?: true
    expiresAt?: true
    anamnesis?: true
    social?: true
    description?: true
    image_3d?: true
    document?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthday?: true
    phoneNumber?: true
    email?: true
    image?: true
    createdAt?: true
    expiresAt?: true
    anamnesis?: true
    social?: true
    description?: true
    image_3d?: true
    document?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthday?: true
    phoneNumber?: true
    email?: true
    image?: true
    createdAt?: true
    expiresAt?: true
    anamnesis?: true
    social?: true
    description?: true
    image_3d?: true
    document?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    firstName: string | null
    lastName: string | null
    birthday: string | null
    phoneNumber: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
    expiresAt: Date | null
    anamnesis: string | null
    social: string | null
    description: string | null
    image_3d: boolean
    document: boolean
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    anamnesis?: boolean
    social?: boolean
    description?: boolean
    image_3d?: boolean
    document?: boolean
    appoinments?: boolean | Client$appoinmentsArgs<ExtArgs>
    statuses?: boolean | Client$statusesArgs<ExtArgs>
    comments?: boolean | Client$commentsArgs<ExtArgs>
    visitHistory?: boolean | Client$visitHistoryArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>



  export type ClientSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    anamnesis?: boolean
    social?: boolean
    description?: boolean
    image_3d?: boolean
    document?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "birthday" | "phoneNumber" | "email" | "image" | "createdAt" | "expiresAt" | "anamnesis" | "social" | "description" | "image_3d" | "document", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appoinments?: boolean | Client$appoinmentsArgs<ExtArgs>
    statuses?: boolean | Client$statusesArgs<ExtArgs>
    comments?: boolean | Client$commentsArgs<ExtArgs>
    visitHistory?: boolean | Client$visitHistoryArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      appoinments: Prisma.$AppointmentPayload<ExtArgs>[]
      statuses: Prisma.$ClientStatusPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      visitHistory: Prisma.$VisitHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string | null
      lastName: string | null
      birthday: string | null
      phoneNumber: string | null
      email: string | null
      image: string | null
      createdAt: Date | null
      expiresAt: Date | null
      anamnesis: string | null
      social: string | null
      description: string | null
      image_3d: boolean
      document: boolean
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appoinments<T extends Client$appoinmentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$appoinmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statuses<T extends Client$statusesArgs<ExtArgs> = {}>(args?: Subset<T, Client$statusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Client$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visitHistory<T extends Client$visitHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Client$visitHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly firstName: FieldRef<"Client", 'String'>
    readonly lastName: FieldRef<"Client", 'String'>
    readonly birthday: FieldRef<"Client", 'String'>
    readonly phoneNumber: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly image: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly expiresAt: FieldRef<"Client", 'DateTime'>
    readonly anamnesis: FieldRef<"Client", 'String'>
    readonly social: FieldRef<"Client", 'String'>
    readonly description: FieldRef<"Client", 'String'>
    readonly image_3d: FieldRef<"Client", 'Boolean'>
    readonly document: FieldRef<"Client", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data?: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.appoinments
   */
  export type Client$appoinmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Client.statuses
   */
  export type Client$statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
    where?: ClientStatusWhereInput
    orderBy?: ClientStatusOrderByWithRelationInput | ClientStatusOrderByWithRelationInput[]
    cursor?: ClientStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientStatusScalarFieldEnum | ClientStatusScalarFieldEnum[]
  }

  /**
   * Client.comments
   */
  export type Client$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Client.visitHistory
   */
  export type Client$visitHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
    where?: VisitHistoryWhereInput
    orderBy?: VisitHistoryOrderByWithRelationInput | VisitHistoryOrderByWithRelationInput[]
    cursor?: VisitHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitHistoryScalarFieldEnum | VisitHistoryScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model ClientStatus
   */

  export type AggregateClientStatus = {
    _count: ClientStatusCountAggregateOutputType | null
    _avg: ClientStatusAvgAggregateOutputType | null
    _sum: ClientStatusSumAggregateOutputType | null
    _min: ClientStatusMinAggregateOutputType | null
    _max: ClientStatusMaxAggregateOutputType | null
  }

  export type ClientStatusAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type ClientStatusSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type ClientStatusMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    loyaltyLevel: $Enums.LoyaltyLevel | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientStatusMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    loyaltyLevel: $Enums.LoyaltyLevel | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientStatusCountAggregateOutputType = {
    id: number
    clientId: number
    loyaltyLevel: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientStatusAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type ClientStatusSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type ClientStatusMinAggregateInputType = {
    id?: true
    clientId?: true
    loyaltyLevel?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientStatusMaxAggregateInputType = {
    id?: true
    clientId?: true
    loyaltyLevel?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientStatusCountAggregateInputType = {
    id?: true
    clientId?: true
    loyaltyLevel?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientStatus to aggregate.
     */
    where?: ClientStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientStatuses to fetch.
     */
    orderBy?: ClientStatusOrderByWithRelationInput | ClientStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientStatuses
    **/
    _count?: true | ClientStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientStatusMaxAggregateInputType
  }

  export type GetClientStatusAggregateType<T extends ClientStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateClientStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientStatus[P]>
      : GetScalarType<T[P], AggregateClientStatus[P]>
  }




  export type ClientStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientStatusWhereInput
    orderBy?: ClientStatusOrderByWithAggregationInput | ClientStatusOrderByWithAggregationInput[]
    by: ClientStatusScalarFieldEnum[] | ClientStatusScalarFieldEnum
    having?: ClientStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientStatusCountAggregateInputType | true
    _avg?: ClientStatusAvgAggregateInputType
    _sum?: ClientStatusSumAggregateInputType
    _min?: ClientStatusMinAggregateInputType
    _max?: ClientStatusMaxAggregateInputType
  }

  export type ClientStatusGroupByOutputType = {
    id: number
    clientId: number
    loyaltyLevel: $Enums.LoyaltyLevel | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientStatusCountAggregateOutputType | null
    _avg: ClientStatusAvgAggregateOutputType | null
    _sum: ClientStatusSumAggregateOutputType | null
    _min: ClientStatusMinAggregateOutputType | null
    _max: ClientStatusMaxAggregateOutputType | null
  }

  type GetClientStatusGroupByPayload<T extends ClientStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientStatusGroupByOutputType[P]>
            : GetScalarType<T[P], ClientStatusGroupByOutputType[P]>
        }
      >
    >


  export type ClientStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    loyaltyLevel?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientStatus"]>



  export type ClientStatusSelectScalar = {
    id?: boolean
    clientId?: boolean
    loyaltyLevel?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "loyaltyLevel" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["clientStatus"]>
  export type ClientStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ClientStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientStatus"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      loyaltyLevel: $Enums.LoyaltyLevel | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clientStatus"]>
    composites: {}
  }

  type ClientStatusGetPayload<S extends boolean | null | undefined | ClientStatusDefaultArgs> = $Result.GetResult<Prisma.$ClientStatusPayload, S>

  type ClientStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientStatusCountAggregateInputType | true
    }

  export interface ClientStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientStatus'], meta: { name: 'ClientStatus' } }
    /**
     * Find zero or one ClientStatus that matches the filter.
     * @param {ClientStatusFindUniqueArgs} args - Arguments to find a ClientStatus
     * @example
     * // Get one ClientStatus
     * const clientStatus = await prisma.clientStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientStatusFindUniqueArgs>(args: SelectSubset<T, ClientStatusFindUniqueArgs<ExtArgs>>): Prisma__ClientStatusClient<$Result.GetResult<Prisma.$ClientStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientStatusFindUniqueOrThrowArgs} args - Arguments to find a ClientStatus
     * @example
     * // Get one ClientStatus
     * const clientStatus = await prisma.clientStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientStatusClient<$Result.GetResult<Prisma.$ClientStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientStatusFindFirstArgs} args - Arguments to find a ClientStatus
     * @example
     * // Get one ClientStatus
     * const clientStatus = await prisma.clientStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientStatusFindFirstArgs>(args?: SelectSubset<T, ClientStatusFindFirstArgs<ExtArgs>>): Prisma__ClientStatusClient<$Result.GetResult<Prisma.$ClientStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientStatusFindFirstOrThrowArgs} args - Arguments to find a ClientStatus
     * @example
     * // Get one ClientStatus
     * const clientStatus = await prisma.clientStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientStatusClient<$Result.GetResult<Prisma.$ClientStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientStatuses
     * const clientStatuses = await prisma.clientStatus.findMany()
     * 
     * // Get first 10 ClientStatuses
     * const clientStatuses = await prisma.clientStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientStatusWithIdOnly = await prisma.clientStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientStatusFindManyArgs>(args?: SelectSubset<T, ClientStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientStatus.
     * @param {ClientStatusCreateArgs} args - Arguments to create a ClientStatus.
     * @example
     * // Create one ClientStatus
     * const ClientStatus = await prisma.clientStatus.create({
     *   data: {
     *     // ... data to create a ClientStatus
     *   }
     * })
     * 
     */
    create<T extends ClientStatusCreateArgs>(args: SelectSubset<T, ClientStatusCreateArgs<ExtArgs>>): Prisma__ClientStatusClient<$Result.GetResult<Prisma.$ClientStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientStatuses.
     * @param {ClientStatusCreateManyArgs} args - Arguments to create many ClientStatuses.
     * @example
     * // Create many ClientStatuses
     * const clientStatus = await prisma.clientStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientStatusCreateManyArgs>(args?: SelectSubset<T, ClientStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClientStatus.
     * @param {ClientStatusDeleteArgs} args - Arguments to delete one ClientStatus.
     * @example
     * // Delete one ClientStatus
     * const ClientStatus = await prisma.clientStatus.delete({
     *   where: {
     *     // ... filter to delete one ClientStatus
     *   }
     * })
     * 
     */
    delete<T extends ClientStatusDeleteArgs>(args: SelectSubset<T, ClientStatusDeleteArgs<ExtArgs>>): Prisma__ClientStatusClient<$Result.GetResult<Prisma.$ClientStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientStatus.
     * @param {ClientStatusUpdateArgs} args - Arguments to update one ClientStatus.
     * @example
     * // Update one ClientStatus
     * const clientStatus = await prisma.clientStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientStatusUpdateArgs>(args: SelectSubset<T, ClientStatusUpdateArgs<ExtArgs>>): Prisma__ClientStatusClient<$Result.GetResult<Prisma.$ClientStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientStatuses.
     * @param {ClientStatusDeleteManyArgs} args - Arguments to filter ClientStatuses to delete.
     * @example
     * // Delete a few ClientStatuses
     * const { count } = await prisma.clientStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientStatusDeleteManyArgs>(args?: SelectSubset<T, ClientStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientStatuses
     * const clientStatus = await prisma.clientStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientStatusUpdateManyArgs>(args: SelectSubset<T, ClientStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientStatus.
     * @param {ClientStatusUpsertArgs} args - Arguments to update or create a ClientStatus.
     * @example
     * // Update or create a ClientStatus
     * const clientStatus = await prisma.clientStatus.upsert({
     *   create: {
     *     // ... data to create a ClientStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientStatus we want to update
     *   }
     * })
     */
    upsert<T extends ClientStatusUpsertArgs>(args: SelectSubset<T, ClientStatusUpsertArgs<ExtArgs>>): Prisma__ClientStatusClient<$Result.GetResult<Prisma.$ClientStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientStatusCountArgs} args - Arguments to filter ClientStatuses to count.
     * @example
     * // Count the number of ClientStatuses
     * const count = await prisma.clientStatus.count({
     *   where: {
     *     // ... the filter for the ClientStatuses we want to count
     *   }
     * })
    **/
    count<T extends ClientStatusCountArgs>(
      args?: Subset<T, ClientStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientStatusAggregateArgs>(args: Subset<T, ClientStatusAggregateArgs>): Prisma.PrismaPromise<GetClientStatusAggregateType<T>>

    /**
     * Group by ClientStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientStatusGroupByArgs['orderBy'] }
        : { orderBy?: ClientStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientStatus model
   */
  readonly fields: ClientStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientStatus model
   */
  interface ClientStatusFieldRefs {
    readonly id: FieldRef<"ClientStatus", 'Int'>
    readonly clientId: FieldRef<"ClientStatus", 'Int'>
    readonly loyaltyLevel: FieldRef<"ClientStatus", 'LoyaltyLevel'>
    readonly notes: FieldRef<"ClientStatus", 'String'>
    readonly createdAt: FieldRef<"ClientStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"ClientStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientStatus findUnique
   */
  export type ClientStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
    /**
     * Filter, which ClientStatus to fetch.
     */
    where: ClientStatusWhereUniqueInput
  }

  /**
   * ClientStatus findUniqueOrThrow
   */
  export type ClientStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
    /**
     * Filter, which ClientStatus to fetch.
     */
    where: ClientStatusWhereUniqueInput
  }

  /**
   * ClientStatus findFirst
   */
  export type ClientStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
    /**
     * Filter, which ClientStatus to fetch.
     */
    where?: ClientStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientStatuses to fetch.
     */
    orderBy?: ClientStatusOrderByWithRelationInput | ClientStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientStatuses.
     */
    cursor?: ClientStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientStatuses.
     */
    distinct?: ClientStatusScalarFieldEnum | ClientStatusScalarFieldEnum[]
  }

  /**
   * ClientStatus findFirstOrThrow
   */
  export type ClientStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
    /**
     * Filter, which ClientStatus to fetch.
     */
    where?: ClientStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientStatuses to fetch.
     */
    orderBy?: ClientStatusOrderByWithRelationInput | ClientStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientStatuses.
     */
    cursor?: ClientStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientStatuses.
     */
    distinct?: ClientStatusScalarFieldEnum | ClientStatusScalarFieldEnum[]
  }

  /**
   * ClientStatus findMany
   */
  export type ClientStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
    /**
     * Filter, which ClientStatuses to fetch.
     */
    where?: ClientStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientStatuses to fetch.
     */
    orderBy?: ClientStatusOrderByWithRelationInput | ClientStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientStatuses.
     */
    cursor?: ClientStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientStatuses.
     */
    skip?: number
    distinct?: ClientStatusScalarFieldEnum | ClientStatusScalarFieldEnum[]
  }

  /**
   * ClientStatus create
   */
  export type ClientStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientStatus.
     */
    data: XOR<ClientStatusCreateInput, ClientStatusUncheckedCreateInput>
  }

  /**
   * ClientStatus createMany
   */
  export type ClientStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientStatuses.
     */
    data: ClientStatusCreateManyInput | ClientStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientStatus update
   */
  export type ClientStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientStatus.
     */
    data: XOR<ClientStatusUpdateInput, ClientStatusUncheckedUpdateInput>
    /**
     * Choose, which ClientStatus to update.
     */
    where: ClientStatusWhereUniqueInput
  }

  /**
   * ClientStatus updateMany
   */
  export type ClientStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientStatuses.
     */
    data: XOR<ClientStatusUpdateManyMutationInput, ClientStatusUncheckedUpdateManyInput>
    /**
     * Filter which ClientStatuses to update
     */
    where?: ClientStatusWhereInput
    /**
     * Limit how many ClientStatuses to update.
     */
    limit?: number
  }

  /**
   * ClientStatus upsert
   */
  export type ClientStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientStatus to update in case it exists.
     */
    where: ClientStatusWhereUniqueInput
    /**
     * In case the ClientStatus found by the `where` argument doesn't exist, create a new ClientStatus with this data.
     */
    create: XOR<ClientStatusCreateInput, ClientStatusUncheckedCreateInput>
    /**
     * In case the ClientStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientStatusUpdateInput, ClientStatusUncheckedUpdateInput>
  }

  /**
   * ClientStatus delete
   */
  export type ClientStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
    /**
     * Filter which ClientStatus to delete.
     */
    where: ClientStatusWhereUniqueInput
  }

  /**
   * ClientStatus deleteMany
   */
  export type ClientStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientStatuses to delete
     */
    where?: ClientStatusWhereInput
    /**
     * Limit how many ClientStatuses to delete.
     */
    limit?: number
  }

  /**
   * ClientStatus without action
   */
  export type ClientStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientStatus
     */
    select?: ClientStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientStatus
     */
    omit?: ClientStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientStatusInclude<ExtArgs> | null
  }


  /**
   * Model VisitHistory
   */

  export type AggregateVisitHistory = {
    _count: VisitHistoryCountAggregateOutputType | null
    _avg: VisitHistoryAvgAggregateOutputType | null
    _sum: VisitHistorySumAggregateOutputType | null
    _min: VisitHistoryMinAggregateOutputType | null
    _max: VisitHistoryMaxAggregateOutputType | null
  }

  export type VisitHistoryAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    cost: number | null
  }

  export type VisitHistorySumAggregateOutputType = {
    id: number | null
    clientId: number | null
    cost: number | null
  }

  export type VisitHistoryMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    procedureName: string | null
    doctorName: string | null
    cost: number | null
    wasSuccessful: boolean | null
    clientFeedback: string | null
    isComplaint: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitHistoryMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    procedureName: string | null
    doctorName: string | null
    cost: number | null
    wasSuccessful: boolean | null
    clientFeedback: string | null
    isComplaint: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitHistoryCountAggregateOutputType = {
    id: number
    clientId: number
    procedureName: number
    doctorName: number
    cost: number
    wasSuccessful: number
    clientFeedback: number
    isComplaint: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisitHistoryAvgAggregateInputType = {
    id?: true
    clientId?: true
    cost?: true
  }

  export type VisitHistorySumAggregateInputType = {
    id?: true
    clientId?: true
    cost?: true
  }

  export type VisitHistoryMinAggregateInputType = {
    id?: true
    clientId?: true
    procedureName?: true
    doctorName?: true
    cost?: true
    wasSuccessful?: true
    clientFeedback?: true
    isComplaint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitHistoryMaxAggregateInputType = {
    id?: true
    clientId?: true
    procedureName?: true
    doctorName?: true
    cost?: true
    wasSuccessful?: true
    clientFeedback?: true
    isComplaint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitHistoryCountAggregateInputType = {
    id?: true
    clientId?: true
    procedureName?: true
    doctorName?: true
    cost?: true
    wasSuccessful?: true
    clientFeedback?: true
    isComplaint?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisitHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitHistory to aggregate.
     */
    where?: VisitHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitHistories to fetch.
     */
    orderBy?: VisitHistoryOrderByWithRelationInput | VisitHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitHistories
    **/
    _count?: true | VisitHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitHistoryMaxAggregateInputType
  }

  export type GetVisitHistoryAggregateType<T extends VisitHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitHistory[P]>
      : GetScalarType<T[P], AggregateVisitHistory[P]>
  }




  export type VisitHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitHistoryWhereInput
    orderBy?: VisitHistoryOrderByWithAggregationInput | VisitHistoryOrderByWithAggregationInput[]
    by: VisitHistoryScalarFieldEnum[] | VisitHistoryScalarFieldEnum
    having?: VisitHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitHistoryCountAggregateInputType | true
    _avg?: VisitHistoryAvgAggregateInputType
    _sum?: VisitHistorySumAggregateInputType
    _min?: VisitHistoryMinAggregateInputType
    _max?: VisitHistoryMaxAggregateInputType
  }

  export type VisitHistoryGroupByOutputType = {
    id: number
    clientId: number
    procedureName: string
    doctorName: string | null
    cost: number
    wasSuccessful: boolean
    clientFeedback: string | null
    isComplaint: boolean
    createdAt: Date
    updatedAt: Date
    _count: VisitHistoryCountAggregateOutputType | null
    _avg: VisitHistoryAvgAggregateOutputType | null
    _sum: VisitHistorySumAggregateOutputType | null
    _min: VisitHistoryMinAggregateOutputType | null
    _max: VisitHistoryMaxAggregateOutputType | null
  }

  type GetVisitHistoryGroupByPayload<T extends VisitHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], VisitHistoryGroupByOutputType[P]>
        }
      >
    >


  export type VisitHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    procedureName?: boolean
    doctorName?: boolean
    cost?: boolean
    wasSuccessful?: boolean
    clientFeedback?: boolean
    isComplaint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitHistory"]>



  export type VisitHistorySelectScalar = {
    id?: boolean
    clientId?: boolean
    procedureName?: boolean
    doctorName?: boolean
    cost?: boolean
    wasSuccessful?: boolean
    clientFeedback?: boolean
    isComplaint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisitHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "procedureName" | "doctorName" | "cost" | "wasSuccessful" | "clientFeedback" | "isComplaint" | "createdAt" | "updatedAt", ExtArgs["result"]["visitHistory"]>
  export type VisitHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $VisitHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitHistory"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      procedureName: string
      doctorName: string | null
      cost: number
      wasSuccessful: boolean
      clientFeedback: string | null
      isComplaint: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visitHistory"]>
    composites: {}
  }

  type VisitHistoryGetPayload<S extends boolean | null | undefined | VisitHistoryDefaultArgs> = $Result.GetResult<Prisma.$VisitHistoryPayload, S>

  type VisitHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitHistoryCountAggregateInputType | true
    }

  export interface VisitHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitHistory'], meta: { name: 'VisitHistory' } }
    /**
     * Find zero or one VisitHistory that matches the filter.
     * @param {VisitHistoryFindUniqueArgs} args - Arguments to find a VisitHistory
     * @example
     * // Get one VisitHistory
     * const visitHistory = await prisma.visitHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitHistoryFindUniqueArgs>(args: SelectSubset<T, VisitHistoryFindUniqueArgs<ExtArgs>>): Prisma__VisitHistoryClient<$Result.GetResult<Prisma.$VisitHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitHistoryFindUniqueOrThrowArgs} args - Arguments to find a VisitHistory
     * @example
     * // Get one VisitHistory
     * const visitHistory = await prisma.visitHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitHistoryClient<$Result.GetResult<Prisma.$VisitHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitHistoryFindFirstArgs} args - Arguments to find a VisitHistory
     * @example
     * // Get one VisitHistory
     * const visitHistory = await prisma.visitHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitHistoryFindFirstArgs>(args?: SelectSubset<T, VisitHistoryFindFirstArgs<ExtArgs>>): Prisma__VisitHistoryClient<$Result.GetResult<Prisma.$VisitHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitHistoryFindFirstOrThrowArgs} args - Arguments to find a VisitHistory
     * @example
     * // Get one VisitHistory
     * const visitHistory = await prisma.visitHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitHistoryClient<$Result.GetResult<Prisma.$VisitHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitHistories
     * const visitHistories = await prisma.visitHistory.findMany()
     * 
     * // Get first 10 VisitHistories
     * const visitHistories = await prisma.visitHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitHistoryWithIdOnly = await prisma.visitHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitHistoryFindManyArgs>(args?: SelectSubset<T, VisitHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitHistory.
     * @param {VisitHistoryCreateArgs} args - Arguments to create a VisitHistory.
     * @example
     * // Create one VisitHistory
     * const VisitHistory = await prisma.visitHistory.create({
     *   data: {
     *     // ... data to create a VisitHistory
     *   }
     * })
     * 
     */
    create<T extends VisitHistoryCreateArgs>(args: SelectSubset<T, VisitHistoryCreateArgs<ExtArgs>>): Prisma__VisitHistoryClient<$Result.GetResult<Prisma.$VisitHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitHistories.
     * @param {VisitHistoryCreateManyArgs} args - Arguments to create many VisitHistories.
     * @example
     * // Create many VisitHistories
     * const visitHistory = await prisma.visitHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitHistoryCreateManyArgs>(args?: SelectSubset<T, VisitHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VisitHistory.
     * @param {VisitHistoryDeleteArgs} args - Arguments to delete one VisitHistory.
     * @example
     * // Delete one VisitHistory
     * const VisitHistory = await prisma.visitHistory.delete({
     *   where: {
     *     // ... filter to delete one VisitHistory
     *   }
     * })
     * 
     */
    delete<T extends VisitHistoryDeleteArgs>(args: SelectSubset<T, VisitHistoryDeleteArgs<ExtArgs>>): Prisma__VisitHistoryClient<$Result.GetResult<Prisma.$VisitHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitHistory.
     * @param {VisitHistoryUpdateArgs} args - Arguments to update one VisitHistory.
     * @example
     * // Update one VisitHistory
     * const visitHistory = await prisma.visitHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitHistoryUpdateArgs>(args: SelectSubset<T, VisitHistoryUpdateArgs<ExtArgs>>): Prisma__VisitHistoryClient<$Result.GetResult<Prisma.$VisitHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitHistories.
     * @param {VisitHistoryDeleteManyArgs} args - Arguments to filter VisitHistories to delete.
     * @example
     * // Delete a few VisitHistories
     * const { count } = await prisma.visitHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitHistoryDeleteManyArgs>(args?: SelectSubset<T, VisitHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitHistories
     * const visitHistory = await prisma.visitHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitHistoryUpdateManyArgs>(args: SelectSubset<T, VisitHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VisitHistory.
     * @param {VisitHistoryUpsertArgs} args - Arguments to update or create a VisitHistory.
     * @example
     * // Update or create a VisitHistory
     * const visitHistory = await prisma.visitHistory.upsert({
     *   create: {
     *     // ... data to create a VisitHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitHistory we want to update
     *   }
     * })
     */
    upsert<T extends VisitHistoryUpsertArgs>(args: SelectSubset<T, VisitHistoryUpsertArgs<ExtArgs>>): Prisma__VisitHistoryClient<$Result.GetResult<Prisma.$VisitHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisitHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitHistoryCountArgs} args - Arguments to filter VisitHistories to count.
     * @example
     * // Count the number of VisitHistories
     * const count = await prisma.visitHistory.count({
     *   where: {
     *     // ... the filter for the VisitHistories we want to count
     *   }
     * })
    **/
    count<T extends VisitHistoryCountArgs>(
      args?: Subset<T, VisitHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitHistoryAggregateArgs>(args: Subset<T, VisitHistoryAggregateArgs>): Prisma.PrismaPromise<GetVisitHistoryAggregateType<T>>

    /**
     * Group by VisitHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitHistoryGroupByArgs['orderBy'] }
        : { orderBy?: VisitHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitHistory model
   */
  readonly fields: VisitHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VisitHistory model
   */
  interface VisitHistoryFieldRefs {
    readonly id: FieldRef<"VisitHistory", 'Int'>
    readonly clientId: FieldRef<"VisitHistory", 'Int'>
    readonly procedureName: FieldRef<"VisitHistory", 'String'>
    readonly doctorName: FieldRef<"VisitHistory", 'String'>
    readonly cost: FieldRef<"VisitHistory", 'Float'>
    readonly wasSuccessful: FieldRef<"VisitHistory", 'Boolean'>
    readonly clientFeedback: FieldRef<"VisitHistory", 'String'>
    readonly isComplaint: FieldRef<"VisitHistory", 'Boolean'>
    readonly createdAt: FieldRef<"VisitHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"VisitHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VisitHistory findUnique
   */
  export type VisitHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
    /**
     * Filter, which VisitHistory to fetch.
     */
    where: VisitHistoryWhereUniqueInput
  }

  /**
   * VisitHistory findUniqueOrThrow
   */
  export type VisitHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
    /**
     * Filter, which VisitHistory to fetch.
     */
    where: VisitHistoryWhereUniqueInput
  }

  /**
   * VisitHistory findFirst
   */
  export type VisitHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
    /**
     * Filter, which VisitHistory to fetch.
     */
    where?: VisitHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitHistories to fetch.
     */
    orderBy?: VisitHistoryOrderByWithRelationInput | VisitHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitHistories.
     */
    cursor?: VisitHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitHistories.
     */
    distinct?: VisitHistoryScalarFieldEnum | VisitHistoryScalarFieldEnum[]
  }

  /**
   * VisitHistory findFirstOrThrow
   */
  export type VisitHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
    /**
     * Filter, which VisitHistory to fetch.
     */
    where?: VisitHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitHistories to fetch.
     */
    orderBy?: VisitHistoryOrderByWithRelationInput | VisitHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitHistories.
     */
    cursor?: VisitHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitHistories.
     */
    distinct?: VisitHistoryScalarFieldEnum | VisitHistoryScalarFieldEnum[]
  }

  /**
   * VisitHistory findMany
   */
  export type VisitHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
    /**
     * Filter, which VisitHistories to fetch.
     */
    where?: VisitHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitHistories to fetch.
     */
    orderBy?: VisitHistoryOrderByWithRelationInput | VisitHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitHistories.
     */
    cursor?: VisitHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitHistories.
     */
    skip?: number
    distinct?: VisitHistoryScalarFieldEnum | VisitHistoryScalarFieldEnum[]
  }

  /**
   * VisitHistory create
   */
  export type VisitHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a VisitHistory.
     */
    data: XOR<VisitHistoryCreateInput, VisitHistoryUncheckedCreateInput>
  }

  /**
   * VisitHistory createMany
   */
  export type VisitHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitHistories.
     */
    data: VisitHistoryCreateManyInput | VisitHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitHistory update
   */
  export type VisitHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a VisitHistory.
     */
    data: XOR<VisitHistoryUpdateInput, VisitHistoryUncheckedUpdateInput>
    /**
     * Choose, which VisitHistory to update.
     */
    where: VisitHistoryWhereUniqueInput
  }

  /**
   * VisitHistory updateMany
   */
  export type VisitHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitHistories.
     */
    data: XOR<VisitHistoryUpdateManyMutationInput, VisitHistoryUncheckedUpdateManyInput>
    /**
     * Filter which VisitHistories to update
     */
    where?: VisitHistoryWhereInput
    /**
     * Limit how many VisitHistories to update.
     */
    limit?: number
  }

  /**
   * VisitHistory upsert
   */
  export type VisitHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the VisitHistory to update in case it exists.
     */
    where: VisitHistoryWhereUniqueInput
    /**
     * In case the VisitHistory found by the `where` argument doesn't exist, create a new VisitHistory with this data.
     */
    create: XOR<VisitHistoryCreateInput, VisitHistoryUncheckedCreateInput>
    /**
     * In case the VisitHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitHistoryUpdateInput, VisitHistoryUncheckedUpdateInput>
  }

  /**
   * VisitHistory delete
   */
  export type VisitHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
    /**
     * Filter which VisitHistory to delete.
     */
    where: VisitHistoryWhereUniqueInput
  }

  /**
   * VisitHistory deleteMany
   */
  export type VisitHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitHistories to delete
     */
    where?: VisitHistoryWhereInput
    /**
     * Limit how many VisitHistories to delete.
     */
    limit?: number
  }

  /**
   * VisitHistory without action
   */
  export type VisitHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitHistory
     */
    select?: VisitHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitHistory
     */
    omit?: VisitHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    procedureId: number | null
    doctorId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    procedureId: number | null
    doctorId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    procedureId: number | null
    doctorId: number | null
    image: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    procedureId: number | null
    doctorId: number | null
    image: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    clientId: number
    procedureId: number
    doctorId: number
    image: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    clientId?: true
    procedureId?: true
    doctorId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    clientId?: true
    procedureId?: true
    doctorId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    clientId?: true
    procedureId?: true
    doctorId?: true
    image?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    clientId?: true
    procedureId?: true
    doctorId?: true
    image?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    clientId?: true
    procedureId?: true
    doctorId?: true
    image?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    clientId: number
    procedureId: number
    doctorId: number
    image: string | null
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    procedureId?: boolean
    doctorId?: boolean
    image?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    reminders?: boolean | Appointment$remindersArgs<ExtArgs>
    comments?: boolean | Appointment$commentsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>



  export type AppointmentSelectScalar = {
    id?: boolean
    clientId?: boolean
    procedureId?: boolean
    doctorId?: boolean
    image?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "procedureId" | "doctorId" | "image" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    reminders?: boolean | Appointment$remindersArgs<ExtArgs>
    comments?: boolean | Appointment$commentsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      procedure: Prisma.$ProcedurePayload<ExtArgs>
      doctor: Prisma.$UserPayload<ExtArgs>
      reminders: Prisma.$NotificationPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      procedureId: number
      doctorId: number
      image: string | null
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    procedure<T extends ProcedureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcedureDefaultArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reminders<T extends Appointment$remindersArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Appointment$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly clientId: FieldRef<"Appointment", 'Int'>
    readonly procedureId: FieldRef<"Appointment", 'Int'>
    readonly doctorId: FieldRef<"Appointment", 'Int'>
    readonly image: FieldRef<"Appointment", 'String'>
    readonly note: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.reminders
   */
  export type Appointment$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Appointment.comments
   */
  export type Appointment$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    appointmentId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    appointmentId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    appointmentId: number | null
    channel: $Enums.NotificationChannel | null
    sentAt: Date | null
    status: $Enums.NotificationStatus | null
    errorText: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    appointmentId: number | null
    channel: $Enums.NotificationChannel | null
    sentAt: Date | null
    status: $Enums.NotificationStatus | null
    errorText: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    appointmentId: number
    channel: number
    sentAt: number
    status: number
    errorText: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    appointmentId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    appointmentId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    appointmentId?: true
    channel?: true
    sentAt?: true
    status?: true
    errorText?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    channel?: true
    sentAt?: true
    status?: true
    errorText?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    appointmentId?: true
    channel?: true
    sentAt?: true
    status?: true
    errorText?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    appointmentId: number
    channel: $Enums.NotificationChannel
    sentAt: Date | null
    status: $Enums.NotificationStatus
    errorText: string | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    channel?: boolean
    sentAt?: boolean
    status?: boolean
    errorText?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    channel?: boolean
    sentAt?: boolean
    status?: boolean
    errorText?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "channel" | "sentAt" | "status" | "errorText" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      appointmentId: number
      channel: $Enums.NotificationChannel
      sentAt: Date | null
      status: $Enums.NotificationStatus
      errorText: string | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly appointmentId: FieldRef<"Notification", 'Int'>
    readonly channel: FieldRef<"Notification", 'NotificationChannel'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly status: FieldRef<"Notification", 'NotificationStatus'>
    readonly errorText: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    appointmentId: number | null
    userId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    appointmentId: number | null
    userId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    text: string | null
    clientId: number | null
    appointmentId: number | null
    createdAt: Date | null
    userId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    text: string | null
    clientId: number | null
    appointmentId: number | null
    createdAt: Date | null
    userId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    clientId: number
    appointmentId: number
    createdAt: number
    userId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    clientId?: true
    appointmentId?: true
    userId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    clientId?: true
    appointmentId?: true
    userId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
    clientId?: true
    appointmentId?: true
    createdAt?: true
    userId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
    clientId?: true
    appointmentId?: true
    createdAt?: true
    userId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    clientId?: true
    appointmentId?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    text: string
    clientId: number | null
    appointmentId: number | null
    createdAt: Date
    userId: number | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    clientId?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    userId?: boolean
    appointment?: boolean | Comment$appointmentArgs<ExtArgs>
    client?: boolean | Comment$clientArgs<ExtArgs>
    author?: boolean | Comment$authorArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    text?: boolean
    clientId?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "clientId" | "appointmentId" | "createdAt" | "userId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Comment$appointmentArgs<ExtArgs>
    client?: boolean | Comment$clientArgs<ExtArgs>
    author?: boolean | Comment$authorArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      clientId: number | null
      appointmentId: number | null
      createdAt: Date
      userId: number | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends Comment$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    client<T extends Comment$clientArgs<ExtArgs> = {}>(args?: Subset<T, Comment$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends Comment$authorArgs<ExtArgs> = {}>(args?: Subset<T, Comment$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly clientId: FieldRef<"Comment", 'Int'>
    readonly appointmentId: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly userId: FieldRef<"Comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.appointment
   */
  export type Comment$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * Comment.client
   */
  export type Comment$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Comment.author
   */
  export type Comment$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    amount: number | null
    category: $Enums.ExpenseCategory | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentMethod: $Enums.PaymentMethod | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    amount: number | null
    category: $Enums.ExpenseCategory | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentMethod: $Enums.PaymentMethod | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    type: number
    amount: number
    category: number
    description: number
    date: number
    createdAt: number
    updatedAt: number
    paymentMethod: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    category?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    paymentMethod?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    category?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    paymentMethod?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    category?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    paymentMethod?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    type: $Enums.TransactionType
    amount: number
    category: $Enums.ExpenseCategory
    description: string | null
    date: Date
    createdAt: Date
    updatedAt: Date
    paymentMethod: $Enums.PaymentMethod
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    category?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentMethod?: boolean
  }, ExtArgs["result"]["transaction"]>



  export type TransactionSelectScalar = {
    id?: boolean
    type?: boolean
    amount?: boolean
    category?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentMethod?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "amount" | "category" | "description" | "date" | "createdAt" | "updatedAt" | "paymentMethod", ExtArgs["result"]["transaction"]>

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.TransactionType
      amount: number
      category: $Enums.ExpenseCategory
      description: string | null
      date: Date
      createdAt: Date
      updatedAt: Date
      paymentMethod: $Enums.PaymentMethod
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly category: FieldRef<"Transaction", 'ExpenseCategory'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly paymentMethod: FieldRef<"Transaction", 'PaymentMethod'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    salt: 'salt',
    role: 'role',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshToken: 'refreshToken',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    isRevoked: 'isRevoked',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ProcedureScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProcedureScalarFieldEnum = (typeof ProcedureScalarFieldEnum)[keyof typeof ProcedureScalarFieldEnum]


  export const PreparetionsScalarFieldEnum: {
    id: 'id',
    procedureId: 'procedureId',
    text: 'text'
  };

  export type PreparetionsScalarFieldEnum = (typeof PreparetionsScalarFieldEnum)[keyof typeof PreparetionsScalarFieldEnum]


  export const InjectionZoneScalarFieldEnum: {
    id: 'id',
    procedureId: 'procedureId',
    text: 'text'
  };

  export type InjectionZoneScalarFieldEnum = (typeof InjectionZoneScalarFieldEnum)[keyof typeof InjectionZoneScalarFieldEnum]


  export const ContraindicationScalarFieldEnum: {
    id: 'id',
    procedureId: 'procedureId',
    text: 'text'
  };

  export type ContraindicationScalarFieldEnum = (typeof ContraindicationScalarFieldEnum)[keyof typeof ContraindicationScalarFieldEnum]


  export const RehabilitationScalarFieldEnum: {
    id: 'id',
    procedureId: 'procedureId',
    text: 'text'
  };

  export type RehabilitationScalarFieldEnum = (typeof RehabilitationScalarFieldEnum)[keyof typeof RehabilitationScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    id: 'id',
    procedureId: 'procedureId',
    text: 'text'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const ProcedurePriceScalarFieldEnum: {
    id: 'id',
    procedureId: 'procedureId',
    zone: 'zone',
    price: 'price'
  };

  export type ProcedurePriceScalarFieldEnum = (typeof ProcedurePriceScalarFieldEnum)[keyof typeof ProcedurePriceScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    birthday: 'birthday',
    phoneNumber: 'phoneNumber',
    email: 'email',
    image: 'image',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    anamnesis: 'anamnesis',
    social: 'social',
    description: 'description',
    image_3d: 'image_3d',
    document: 'document'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ClientStatusScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    loyaltyLevel: 'loyaltyLevel',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientStatusScalarFieldEnum = (typeof ClientStatusScalarFieldEnum)[keyof typeof ClientStatusScalarFieldEnum]


  export const VisitHistoryScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    procedureName: 'procedureName',
    doctorName: 'doctorName',
    cost: 'cost',
    wasSuccessful: 'wasSuccessful',
    clientFeedback: 'clientFeedback',
    isComplaint: 'isComplaint',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisitHistoryScalarFieldEnum = (typeof VisitHistoryScalarFieldEnum)[keyof typeof VisitHistoryScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    procedureId: 'procedureId',
    doctorId: 'doctorId',
    image: 'image',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    channel: 'channel',
    sentAt: 'sentAt',
    status: 'status',
    errorText: 'errorText',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    clientId: 'clientId',
    appointmentId: 'appointmentId',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    amount: 'amount',
    category: 'category',
    description: 'description',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    paymentMethod: 'paymentMethod'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    salt: 'salt'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    refreshToken: 'refreshToken',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const ProcedureOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    image: 'image'
  };

  export type ProcedureOrderByRelevanceFieldEnum = (typeof ProcedureOrderByRelevanceFieldEnum)[keyof typeof ProcedureOrderByRelevanceFieldEnum]


  export const PreparetionsOrderByRelevanceFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type PreparetionsOrderByRelevanceFieldEnum = (typeof PreparetionsOrderByRelevanceFieldEnum)[keyof typeof PreparetionsOrderByRelevanceFieldEnum]


  export const InjectionZoneOrderByRelevanceFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type InjectionZoneOrderByRelevanceFieldEnum = (typeof InjectionZoneOrderByRelevanceFieldEnum)[keyof typeof InjectionZoneOrderByRelevanceFieldEnum]


  export const ContraindicationOrderByRelevanceFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type ContraindicationOrderByRelevanceFieldEnum = (typeof ContraindicationOrderByRelevanceFieldEnum)[keyof typeof ContraindicationOrderByRelevanceFieldEnum]


  export const RehabilitationOrderByRelevanceFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type RehabilitationOrderByRelevanceFieldEnum = (typeof RehabilitationOrderByRelevanceFieldEnum)[keyof typeof RehabilitationOrderByRelevanceFieldEnum]


  export const ResultOrderByRelevanceFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type ResultOrderByRelevanceFieldEnum = (typeof ResultOrderByRelevanceFieldEnum)[keyof typeof ResultOrderByRelevanceFieldEnum]


  export const ProcedurePriceOrderByRelevanceFieldEnum: {
    id: 'id',
    zone: 'zone'
  };

  export type ProcedurePriceOrderByRelevanceFieldEnum = (typeof ProcedurePriceOrderByRelevanceFieldEnum)[keyof typeof ProcedurePriceOrderByRelevanceFieldEnum]


  export const ClientOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    birthday: 'birthday',
    phoneNumber: 'phoneNumber',
    email: 'email',
    image: 'image',
    anamnesis: 'anamnesis',
    social: 'social',
    description: 'description'
  };

  export type ClientOrderByRelevanceFieldEnum = (typeof ClientOrderByRelevanceFieldEnum)[keyof typeof ClientOrderByRelevanceFieldEnum]


  export const ClientStatusOrderByRelevanceFieldEnum: {
    notes: 'notes'
  };

  export type ClientStatusOrderByRelevanceFieldEnum = (typeof ClientStatusOrderByRelevanceFieldEnum)[keyof typeof ClientStatusOrderByRelevanceFieldEnum]


  export const VisitHistoryOrderByRelevanceFieldEnum: {
    procedureName: 'procedureName',
    doctorName: 'doctorName',
    clientFeedback: 'clientFeedback'
  };

  export type VisitHistoryOrderByRelevanceFieldEnum = (typeof VisitHistoryOrderByRelevanceFieldEnum)[keyof typeof VisitHistoryOrderByRelevanceFieldEnum]


  export const AppointmentOrderByRelevanceFieldEnum: {
    image: 'image',
    note: 'note'
  };

  export type AppointmentOrderByRelevanceFieldEnum = (typeof AppointmentOrderByRelevanceFieldEnum)[keyof typeof AppointmentOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    errorText: 'errorText'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    text: 'text'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const TransactionOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type TransactionOrderByRelevanceFieldEnum = (typeof TransactionOrderByRelevanceFieldEnum)[keyof typeof TransactionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'LoyaltyLevel'
   */
  export type EnumLoyaltyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoyaltyLevel'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'NotificationChannel'
   */
  export type EnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel'>
    


  /**
   * Reference to a field of type 'NotificationStatus'
   */
  export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'ExpenseCategory'
   */
  export type EnumExpenseCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseCategory'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    comments?: CommentListRelationFilter
    sessions?: SessionListRelationFilter
    appoinments?: AppointmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    appoinments?: AppointmentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    salt?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    comments?: CommentListRelationFilter
    sessions?: SessionListRelationFilter
    appoinments?: AppointmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    salt?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    userId?: IntFilter<"Session"> | number
    refreshToken?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    isRevoked?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    refreshToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    isRevoked?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "refreshToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    userId?: IntWithAggregatesFilter<"Session"> | number
    refreshToken?: StringWithAggregatesFilter<"Session"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    isRevoked?: BoolWithAggregatesFilter<"Session"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type ProcedureWhereInput = {
    AND?: ProcedureWhereInput | ProcedureWhereInput[]
    OR?: ProcedureWhereInput[]
    NOT?: ProcedureWhereInput | ProcedureWhereInput[]
    id?: IntFilter<"Procedure"> | number
    name?: StringNullableFilter<"Procedure"> | string | null
    description?: StringNullableFilter<"Procedure"> | string | null
    image?: StringNullableFilter<"Procedure"> | string | null
    createdAt?: DateTimeFilter<"Procedure"> | Date | string
    updatedAt?: DateTimeFilter<"Procedure"> | Date | string
    appoiment?: AppointmentListRelationFilter
    contraindications?: ContraindicationListRelationFilter
    injectionZones?: InjectionZoneListRelationFilter
    preparations?: PreparetionsListRelationFilter
    prices?: ProcedurePriceListRelationFilter
    rehabilitations?: RehabilitationListRelationFilter
    results?: ResultListRelationFilter
  }

  export type ProcedureOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appoiment?: AppointmentOrderByRelationAggregateInput
    contraindications?: ContraindicationOrderByRelationAggregateInput
    injectionZones?: InjectionZoneOrderByRelationAggregateInput
    preparations?: PreparetionsOrderByRelationAggregateInput
    prices?: ProcedurePriceOrderByRelationAggregateInput
    rehabilitations?: RehabilitationOrderByRelationAggregateInput
    results?: ResultOrderByRelationAggregateInput
    _relevance?: ProcedureOrderByRelevanceInput
  }

  export type ProcedureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProcedureWhereInput | ProcedureWhereInput[]
    OR?: ProcedureWhereInput[]
    NOT?: ProcedureWhereInput | ProcedureWhereInput[]
    name?: StringNullableFilter<"Procedure"> | string | null
    description?: StringNullableFilter<"Procedure"> | string | null
    image?: StringNullableFilter<"Procedure"> | string | null
    createdAt?: DateTimeFilter<"Procedure"> | Date | string
    updatedAt?: DateTimeFilter<"Procedure"> | Date | string
    appoiment?: AppointmentListRelationFilter
    contraindications?: ContraindicationListRelationFilter
    injectionZones?: InjectionZoneListRelationFilter
    preparations?: PreparetionsListRelationFilter
    prices?: ProcedurePriceListRelationFilter
    rehabilitations?: RehabilitationListRelationFilter
    results?: ResultListRelationFilter
  }, "id">

  export type ProcedureOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProcedureCountOrderByAggregateInput
    _avg?: ProcedureAvgOrderByAggregateInput
    _max?: ProcedureMaxOrderByAggregateInput
    _min?: ProcedureMinOrderByAggregateInput
    _sum?: ProcedureSumOrderByAggregateInput
  }

  export type ProcedureScalarWhereWithAggregatesInput = {
    AND?: ProcedureScalarWhereWithAggregatesInput | ProcedureScalarWhereWithAggregatesInput[]
    OR?: ProcedureScalarWhereWithAggregatesInput[]
    NOT?: ProcedureScalarWhereWithAggregatesInput | ProcedureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Procedure"> | number
    name?: StringNullableWithAggregatesFilter<"Procedure"> | string | null
    description?: StringNullableWithAggregatesFilter<"Procedure"> | string | null
    image?: StringNullableWithAggregatesFilter<"Procedure"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Procedure"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Procedure"> | Date | string
  }

  export type PreparetionsWhereInput = {
    AND?: PreparetionsWhereInput | PreparetionsWhereInput[]
    OR?: PreparetionsWhereInput[]
    NOT?: PreparetionsWhereInput | PreparetionsWhereInput[]
    id?: StringFilter<"Preparetions"> | string
    procedureId?: IntFilter<"Preparetions"> | number
    text?: StringFilter<"Preparetions"> | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }

  export type PreparetionsOrderByWithRelationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
    procedure?: ProcedureOrderByWithRelationInput
    _relevance?: PreparetionsOrderByRelevanceInput
  }

  export type PreparetionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PreparetionsWhereInput | PreparetionsWhereInput[]
    OR?: PreparetionsWhereInput[]
    NOT?: PreparetionsWhereInput | PreparetionsWhereInput[]
    procedureId?: IntFilter<"Preparetions"> | number
    text?: StringFilter<"Preparetions"> | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }, "id">

  export type PreparetionsOrderByWithAggregationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
    _count?: PreparetionsCountOrderByAggregateInput
    _avg?: PreparetionsAvgOrderByAggregateInput
    _max?: PreparetionsMaxOrderByAggregateInput
    _min?: PreparetionsMinOrderByAggregateInput
    _sum?: PreparetionsSumOrderByAggregateInput
  }

  export type PreparetionsScalarWhereWithAggregatesInput = {
    AND?: PreparetionsScalarWhereWithAggregatesInput | PreparetionsScalarWhereWithAggregatesInput[]
    OR?: PreparetionsScalarWhereWithAggregatesInput[]
    NOT?: PreparetionsScalarWhereWithAggregatesInput | PreparetionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Preparetions"> | string
    procedureId?: IntWithAggregatesFilter<"Preparetions"> | number
    text?: StringWithAggregatesFilter<"Preparetions"> | string
  }

  export type InjectionZoneWhereInput = {
    AND?: InjectionZoneWhereInput | InjectionZoneWhereInput[]
    OR?: InjectionZoneWhereInput[]
    NOT?: InjectionZoneWhereInput | InjectionZoneWhereInput[]
    id?: StringFilter<"InjectionZone"> | string
    procedureId?: IntFilter<"InjectionZone"> | number
    text?: StringFilter<"InjectionZone"> | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }

  export type InjectionZoneOrderByWithRelationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
    procedure?: ProcedureOrderByWithRelationInput
    _relevance?: InjectionZoneOrderByRelevanceInput
  }

  export type InjectionZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InjectionZoneWhereInput | InjectionZoneWhereInput[]
    OR?: InjectionZoneWhereInput[]
    NOT?: InjectionZoneWhereInput | InjectionZoneWhereInput[]
    procedureId?: IntFilter<"InjectionZone"> | number
    text?: StringFilter<"InjectionZone"> | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }, "id">

  export type InjectionZoneOrderByWithAggregationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
    _count?: InjectionZoneCountOrderByAggregateInput
    _avg?: InjectionZoneAvgOrderByAggregateInput
    _max?: InjectionZoneMaxOrderByAggregateInput
    _min?: InjectionZoneMinOrderByAggregateInput
    _sum?: InjectionZoneSumOrderByAggregateInput
  }

  export type InjectionZoneScalarWhereWithAggregatesInput = {
    AND?: InjectionZoneScalarWhereWithAggregatesInput | InjectionZoneScalarWhereWithAggregatesInput[]
    OR?: InjectionZoneScalarWhereWithAggregatesInput[]
    NOT?: InjectionZoneScalarWhereWithAggregatesInput | InjectionZoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InjectionZone"> | string
    procedureId?: IntWithAggregatesFilter<"InjectionZone"> | number
    text?: StringWithAggregatesFilter<"InjectionZone"> | string
  }

  export type ContraindicationWhereInput = {
    AND?: ContraindicationWhereInput | ContraindicationWhereInput[]
    OR?: ContraindicationWhereInput[]
    NOT?: ContraindicationWhereInput | ContraindicationWhereInput[]
    id?: StringFilter<"Contraindication"> | string
    procedureId?: IntFilter<"Contraindication"> | number
    text?: StringFilter<"Contraindication"> | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }

  export type ContraindicationOrderByWithRelationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
    procedure?: ProcedureOrderByWithRelationInput
    _relevance?: ContraindicationOrderByRelevanceInput
  }

  export type ContraindicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContraindicationWhereInput | ContraindicationWhereInput[]
    OR?: ContraindicationWhereInput[]
    NOT?: ContraindicationWhereInput | ContraindicationWhereInput[]
    procedureId?: IntFilter<"Contraindication"> | number
    text?: StringFilter<"Contraindication"> | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }, "id">

  export type ContraindicationOrderByWithAggregationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
    _count?: ContraindicationCountOrderByAggregateInput
    _avg?: ContraindicationAvgOrderByAggregateInput
    _max?: ContraindicationMaxOrderByAggregateInput
    _min?: ContraindicationMinOrderByAggregateInput
    _sum?: ContraindicationSumOrderByAggregateInput
  }

  export type ContraindicationScalarWhereWithAggregatesInput = {
    AND?: ContraindicationScalarWhereWithAggregatesInput | ContraindicationScalarWhereWithAggregatesInput[]
    OR?: ContraindicationScalarWhereWithAggregatesInput[]
    NOT?: ContraindicationScalarWhereWithAggregatesInput | ContraindicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contraindication"> | string
    procedureId?: IntWithAggregatesFilter<"Contraindication"> | number
    text?: StringWithAggregatesFilter<"Contraindication"> | string
  }

  export type RehabilitationWhereInput = {
    AND?: RehabilitationWhereInput | RehabilitationWhereInput[]
    OR?: RehabilitationWhereInput[]
    NOT?: RehabilitationWhereInput | RehabilitationWhereInput[]
    id?: StringFilter<"Rehabilitation"> | string
    procedureId?: IntFilter<"Rehabilitation"> | number
    text?: StringFilter<"Rehabilitation"> | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }

  export type RehabilitationOrderByWithRelationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
    procedure?: ProcedureOrderByWithRelationInput
    _relevance?: RehabilitationOrderByRelevanceInput
  }

  export type RehabilitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RehabilitationWhereInput | RehabilitationWhereInput[]
    OR?: RehabilitationWhereInput[]
    NOT?: RehabilitationWhereInput | RehabilitationWhereInput[]
    procedureId?: IntFilter<"Rehabilitation"> | number
    text?: StringFilter<"Rehabilitation"> | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }, "id">

  export type RehabilitationOrderByWithAggregationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
    _count?: RehabilitationCountOrderByAggregateInput
    _avg?: RehabilitationAvgOrderByAggregateInput
    _max?: RehabilitationMaxOrderByAggregateInput
    _min?: RehabilitationMinOrderByAggregateInput
    _sum?: RehabilitationSumOrderByAggregateInput
  }

  export type RehabilitationScalarWhereWithAggregatesInput = {
    AND?: RehabilitationScalarWhereWithAggregatesInput | RehabilitationScalarWhereWithAggregatesInput[]
    OR?: RehabilitationScalarWhereWithAggregatesInput[]
    NOT?: RehabilitationScalarWhereWithAggregatesInput | RehabilitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rehabilitation"> | string
    procedureId?: IntWithAggregatesFilter<"Rehabilitation"> | number
    text?: StringWithAggregatesFilter<"Rehabilitation"> | string
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    id?: StringFilter<"Result"> | string
    procedureId?: IntFilter<"Result"> | number
    text?: StringFilter<"Result"> | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }

  export type ResultOrderByWithRelationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
    procedure?: ProcedureOrderByWithRelationInput
    _relevance?: ResultOrderByRelevanceInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    procedureId?: IntFilter<"Result"> | number
    text?: StringFilter<"Result"> | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }, "id">

  export type ResultOrderByWithAggregationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Result"> | string
    procedureId?: IntWithAggregatesFilter<"Result"> | number
    text?: StringWithAggregatesFilter<"Result"> | string
  }

  export type ProcedurePriceWhereInput = {
    AND?: ProcedurePriceWhereInput | ProcedurePriceWhereInput[]
    OR?: ProcedurePriceWhereInput[]
    NOT?: ProcedurePriceWhereInput | ProcedurePriceWhereInput[]
    id?: StringFilter<"ProcedurePrice"> | string
    procedureId?: IntFilter<"ProcedurePrice"> | number
    zone?: StringFilter<"ProcedurePrice"> | string
    price?: DecimalFilter<"ProcedurePrice"> | Decimal | DecimalJsLike | number | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }

  export type ProcedurePriceOrderByWithRelationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    zone?: SortOrder
    price?: SortOrder
    procedure?: ProcedureOrderByWithRelationInput
    _relevance?: ProcedurePriceOrderByRelevanceInput
  }

  export type ProcedurePriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcedurePriceWhereInput | ProcedurePriceWhereInput[]
    OR?: ProcedurePriceWhereInput[]
    NOT?: ProcedurePriceWhereInput | ProcedurePriceWhereInput[]
    procedureId?: IntFilter<"ProcedurePrice"> | number
    zone?: StringFilter<"ProcedurePrice"> | string
    price?: DecimalFilter<"ProcedurePrice"> | Decimal | DecimalJsLike | number | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }, "id">

  export type ProcedurePriceOrderByWithAggregationInput = {
    id?: SortOrder
    procedureId?: SortOrder
    zone?: SortOrder
    price?: SortOrder
    _count?: ProcedurePriceCountOrderByAggregateInput
    _avg?: ProcedurePriceAvgOrderByAggregateInput
    _max?: ProcedurePriceMaxOrderByAggregateInput
    _min?: ProcedurePriceMinOrderByAggregateInput
    _sum?: ProcedurePriceSumOrderByAggregateInput
  }

  export type ProcedurePriceScalarWhereWithAggregatesInput = {
    AND?: ProcedurePriceScalarWhereWithAggregatesInput | ProcedurePriceScalarWhereWithAggregatesInput[]
    OR?: ProcedurePriceScalarWhereWithAggregatesInput[]
    NOT?: ProcedurePriceScalarWhereWithAggregatesInput | ProcedurePriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProcedurePrice"> | string
    procedureId?: IntWithAggregatesFilter<"ProcedurePrice"> | number
    zone?: StringWithAggregatesFilter<"ProcedurePrice"> | string
    price?: DecimalWithAggregatesFilter<"ProcedurePrice"> | Decimal | DecimalJsLike | number | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    firstName?: StringNullableFilter<"Client"> | string | null
    lastName?: StringNullableFilter<"Client"> | string | null
    birthday?: StringNullableFilter<"Client"> | string | null
    phoneNumber?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    image?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    anamnesis?: StringNullableFilter<"Client"> | string | null
    social?: StringNullableFilter<"Client"> | string | null
    description?: StringNullableFilter<"Client"> | string | null
    image_3d?: BoolFilter<"Client"> | boolean
    document?: BoolFilter<"Client"> | boolean
    appoinments?: AppointmentListRelationFilter
    statuses?: ClientStatusListRelationFilter
    comments?: CommentListRelationFilter
    visitHistory?: VisitHistoryListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    anamnesis?: SortOrderInput | SortOrder
    social?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_3d?: SortOrder
    document?: SortOrder
    appoinments?: AppointmentOrderByRelationAggregateInput
    statuses?: ClientStatusOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    visitHistory?: VisitHistoryOrderByRelationAggregateInput
    _relevance?: ClientOrderByRelevanceInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    firstName?: StringNullableFilter<"Client"> | string | null
    lastName?: StringNullableFilter<"Client"> | string | null
    birthday?: StringNullableFilter<"Client"> | string | null
    phoneNumber?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    image?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    anamnesis?: StringNullableFilter<"Client"> | string | null
    social?: StringNullableFilter<"Client"> | string | null
    description?: StringNullableFilter<"Client"> | string | null
    image_3d?: BoolFilter<"Client"> | boolean
    document?: BoolFilter<"Client"> | boolean
    appoinments?: AppointmentListRelationFilter
    statuses?: ClientStatusListRelationFilter
    comments?: CommentListRelationFilter
    visitHistory?: VisitHistoryListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    anamnesis?: SortOrderInput | SortOrder
    social?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_3d?: SortOrder
    document?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    firstName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    birthday?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Client"> | string | null
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    image?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
    anamnesis?: StringNullableWithAggregatesFilter<"Client"> | string | null
    social?: StringNullableWithAggregatesFilter<"Client"> | string | null
    description?: StringNullableWithAggregatesFilter<"Client"> | string | null
    image_3d?: BoolWithAggregatesFilter<"Client"> | boolean
    document?: BoolWithAggregatesFilter<"Client"> | boolean
  }

  export type ClientStatusWhereInput = {
    AND?: ClientStatusWhereInput | ClientStatusWhereInput[]
    OR?: ClientStatusWhereInput[]
    NOT?: ClientStatusWhereInput | ClientStatusWhereInput[]
    id?: IntFilter<"ClientStatus"> | number
    clientId?: IntFilter<"ClientStatus"> | number
    loyaltyLevel?: EnumLoyaltyLevelNullableFilter<"ClientStatus"> | $Enums.LoyaltyLevel | null
    notes?: StringNullableFilter<"ClientStatus"> | string | null
    createdAt?: DateTimeFilter<"ClientStatus"> | Date | string
    updatedAt?: DateTimeFilter<"ClientStatus"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type ClientStatusOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    loyaltyLevel?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    _relevance?: ClientStatusOrderByRelevanceInput
  }

  export type ClientStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientStatusWhereInput | ClientStatusWhereInput[]
    OR?: ClientStatusWhereInput[]
    NOT?: ClientStatusWhereInput | ClientStatusWhereInput[]
    clientId?: IntFilter<"ClientStatus"> | number
    loyaltyLevel?: EnumLoyaltyLevelNullableFilter<"ClientStatus"> | $Enums.LoyaltyLevel | null
    notes?: StringNullableFilter<"ClientStatus"> | string | null
    createdAt?: DateTimeFilter<"ClientStatus"> | Date | string
    updatedAt?: DateTimeFilter<"ClientStatus"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type ClientStatusOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    loyaltyLevel?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientStatusCountOrderByAggregateInput
    _avg?: ClientStatusAvgOrderByAggregateInput
    _max?: ClientStatusMaxOrderByAggregateInput
    _min?: ClientStatusMinOrderByAggregateInput
    _sum?: ClientStatusSumOrderByAggregateInput
  }

  export type ClientStatusScalarWhereWithAggregatesInput = {
    AND?: ClientStatusScalarWhereWithAggregatesInput | ClientStatusScalarWhereWithAggregatesInput[]
    OR?: ClientStatusScalarWhereWithAggregatesInput[]
    NOT?: ClientStatusScalarWhereWithAggregatesInput | ClientStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClientStatus"> | number
    clientId?: IntWithAggregatesFilter<"ClientStatus"> | number
    loyaltyLevel?: EnumLoyaltyLevelNullableWithAggregatesFilter<"ClientStatus"> | $Enums.LoyaltyLevel | null
    notes?: StringNullableWithAggregatesFilter<"ClientStatus"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ClientStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClientStatus"> | Date | string
  }

  export type VisitHistoryWhereInput = {
    AND?: VisitHistoryWhereInput | VisitHistoryWhereInput[]
    OR?: VisitHistoryWhereInput[]
    NOT?: VisitHistoryWhereInput | VisitHistoryWhereInput[]
    id?: IntFilter<"VisitHistory"> | number
    clientId?: IntFilter<"VisitHistory"> | number
    procedureName?: StringFilter<"VisitHistory"> | string
    doctorName?: StringNullableFilter<"VisitHistory"> | string | null
    cost?: FloatFilter<"VisitHistory"> | number
    wasSuccessful?: BoolFilter<"VisitHistory"> | boolean
    clientFeedback?: StringNullableFilter<"VisitHistory"> | string | null
    isComplaint?: BoolFilter<"VisitHistory"> | boolean
    createdAt?: DateTimeFilter<"VisitHistory"> | Date | string
    updatedAt?: DateTimeFilter<"VisitHistory"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type VisitHistoryOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureName?: SortOrder
    doctorName?: SortOrderInput | SortOrder
    cost?: SortOrder
    wasSuccessful?: SortOrder
    clientFeedback?: SortOrderInput | SortOrder
    isComplaint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    _relevance?: VisitHistoryOrderByRelevanceInput
  }

  export type VisitHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitHistoryWhereInput | VisitHistoryWhereInput[]
    OR?: VisitHistoryWhereInput[]
    NOT?: VisitHistoryWhereInput | VisitHistoryWhereInput[]
    clientId?: IntFilter<"VisitHistory"> | number
    procedureName?: StringFilter<"VisitHistory"> | string
    doctorName?: StringNullableFilter<"VisitHistory"> | string | null
    cost?: FloatFilter<"VisitHistory"> | number
    wasSuccessful?: BoolFilter<"VisitHistory"> | boolean
    clientFeedback?: StringNullableFilter<"VisitHistory"> | string | null
    isComplaint?: BoolFilter<"VisitHistory"> | boolean
    createdAt?: DateTimeFilter<"VisitHistory"> | Date | string
    updatedAt?: DateTimeFilter<"VisitHistory"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type VisitHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureName?: SortOrder
    doctorName?: SortOrderInput | SortOrder
    cost?: SortOrder
    wasSuccessful?: SortOrder
    clientFeedback?: SortOrderInput | SortOrder
    isComplaint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisitHistoryCountOrderByAggregateInput
    _avg?: VisitHistoryAvgOrderByAggregateInput
    _max?: VisitHistoryMaxOrderByAggregateInput
    _min?: VisitHistoryMinOrderByAggregateInput
    _sum?: VisitHistorySumOrderByAggregateInput
  }

  export type VisitHistoryScalarWhereWithAggregatesInput = {
    AND?: VisitHistoryScalarWhereWithAggregatesInput | VisitHistoryScalarWhereWithAggregatesInput[]
    OR?: VisitHistoryScalarWhereWithAggregatesInput[]
    NOT?: VisitHistoryScalarWhereWithAggregatesInput | VisitHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VisitHistory"> | number
    clientId?: IntWithAggregatesFilter<"VisitHistory"> | number
    procedureName?: StringWithAggregatesFilter<"VisitHistory"> | string
    doctorName?: StringNullableWithAggregatesFilter<"VisitHistory"> | string | null
    cost?: FloatWithAggregatesFilter<"VisitHistory"> | number
    wasSuccessful?: BoolWithAggregatesFilter<"VisitHistory"> | boolean
    clientFeedback?: StringNullableWithAggregatesFilter<"VisitHistory"> | string | null
    isComplaint?: BoolWithAggregatesFilter<"VisitHistory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VisitHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VisitHistory"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    clientId?: IntFilter<"Appointment"> | number
    procedureId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    image?: StringNullableFilter<"Appointment"> | string | null
    note?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    reminders?: NotificationListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureId?: SortOrder
    doctorId?: SortOrder
    image?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    procedure?: ProcedureOrderByWithRelationInput
    doctor?: UserOrderByWithRelationInput
    reminders?: NotificationOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    _relevance?: AppointmentOrderByRelevanceInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    clientId?: IntFilter<"Appointment"> | number
    procedureId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    image?: StringNullableFilter<"Appointment"> | string | null
    note?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    reminders?: NotificationListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureId?: SortOrder
    doctorId?: SortOrder
    image?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    clientId?: IntWithAggregatesFilter<"Appointment"> | number
    procedureId?: IntWithAggregatesFilter<"Appointment"> | number
    doctorId?: IntWithAggregatesFilter<"Appointment"> | number
    image?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    note?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    appointmentId?: IntFilter<"Notification"> | number
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    errorText?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    channel?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    status?: SortOrder
    errorText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    appointmentId?: IntFilter<"Notification"> | number
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    errorText?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    channel?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    status?: SortOrder
    errorText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    appointmentId?: IntWithAggregatesFilter<"Notification"> | number
    channel?: EnumNotificationChannelWithAggregatesFilter<"Notification"> | $Enums.NotificationChannel
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    status?: EnumNotificationStatusWithAggregatesFilter<"Notification"> | $Enums.NotificationStatus
    errorText?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    clientId?: IntNullableFilter<"Comment"> | number | null
    appointmentId?: IntNullableFilter<"Comment"> | number | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: IntNullableFilter<"Comment"> | number | null
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    clientId?: SortOrderInput | SortOrder
    appointmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    text?: StringFilter<"Comment"> | string
    clientId?: IntNullableFilter<"Comment"> | number | null
    appointmentId?: IntNullableFilter<"Comment"> | number | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: IntNullableFilter<"Comment"> | number | null
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    clientId?: SortOrderInput | SortOrder
    appointmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    text?: StringWithAggregatesFilter<"Comment"> | string
    clientId?: IntNullableWithAggregatesFilter<"Comment"> | number | null
    appointmentId?: IntNullableWithAggregatesFilter<"Comment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Comment"> | number | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    category?: EnumExpenseCategoryFilter<"Transaction"> | $Enums.ExpenseCategory
    description?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"Transaction"> | $Enums.PaymentMethod
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentMethod?: SortOrder
    _relevance?: TransactionOrderByRelevanceInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    category?: EnumExpenseCategoryFilter<"Transaction"> | $Enums.ExpenseCategory
    description?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"Transaction"> | $Enums.PaymentMethod
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentMethod?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    category?: EnumExpenseCategoryWithAggregatesFilter<"Transaction"> | $Enums.ExpenseCategory
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Transaction"> | $Enums.PaymentMethod
  }

  export type UserCreateInput = {
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    salt?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    appoinments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    salt?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    appoinments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    appoinments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    appoinments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    salt?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    refreshToken: string
    ipAddress?: string | null
    userAgent?: string | null
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    userId: number
    refreshToken: string
    ipAddress?: string | null
    userAgent?: string | null
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: number
    userId: number
    refreshToken: string
    ipAddress?: string | null
    userAgent?: string | null
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureCreateInput = {
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationCreateNestedManyWithoutProcedureInput
    results?: ResultCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateInput = {
    id?: number
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentUncheckedCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationUncheckedCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneUncheckedCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsUncheckedCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceUncheckedCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationUncheckedCreateNestedManyWithoutProcedureInput
    results?: ResultUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUpdateManyWithoutProcedureNestedInput
    results?: ResultUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUncheckedUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUncheckedUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUncheckedUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUncheckedUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUncheckedUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUncheckedUpdateManyWithoutProcedureNestedInput
    results?: ResultUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureCreateManyInput = {
    id?: number
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreparetionsCreateInput = {
    id?: string
    text: string
    procedure: ProcedureCreateNestedOneWithoutPreparationsInput
  }

  export type PreparetionsUncheckedCreateInput = {
    id?: string
    procedureId: number
    text: string
  }

  export type PreparetionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    procedure?: ProcedureUpdateOneRequiredWithoutPreparationsNestedInput
  }

  export type PreparetionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PreparetionsCreateManyInput = {
    id?: string
    procedureId: number
    text: string
  }

  export type PreparetionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PreparetionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type InjectionZoneCreateInput = {
    id?: string
    text: string
    procedure: ProcedureCreateNestedOneWithoutInjectionZonesInput
  }

  export type InjectionZoneUncheckedCreateInput = {
    id?: string
    procedureId: number
    text: string
  }

  export type InjectionZoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    procedure?: ProcedureUpdateOneRequiredWithoutInjectionZonesNestedInput
  }

  export type InjectionZoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type InjectionZoneCreateManyInput = {
    id?: string
    procedureId: number
    text: string
  }

  export type InjectionZoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type InjectionZoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ContraindicationCreateInput = {
    id?: string
    text: string
    procedure: ProcedureCreateNestedOneWithoutContraindicationsInput
  }

  export type ContraindicationUncheckedCreateInput = {
    id?: string
    procedureId: number
    text: string
  }

  export type ContraindicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    procedure?: ProcedureUpdateOneRequiredWithoutContraindicationsNestedInput
  }

  export type ContraindicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ContraindicationCreateManyInput = {
    id?: string
    procedureId: number
    text: string
  }

  export type ContraindicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ContraindicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type RehabilitationCreateInput = {
    id?: string
    text: string
    procedure: ProcedureCreateNestedOneWithoutRehabilitationsInput
  }

  export type RehabilitationUncheckedCreateInput = {
    id?: string
    procedureId: number
    text: string
  }

  export type RehabilitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    procedure?: ProcedureUpdateOneRequiredWithoutRehabilitationsNestedInput
  }

  export type RehabilitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type RehabilitationCreateManyInput = {
    id?: string
    procedureId: number
    text: string
  }

  export type RehabilitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type RehabilitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ResultCreateInput = {
    id?: string
    text: string
    procedure: ProcedureCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateInput = {
    id?: string
    procedureId: number
    text: string
  }

  export type ResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    procedure?: ProcedureUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ResultCreateManyInput = {
    id?: string
    procedureId: number
    text: string
  }

  export type ResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ProcedurePriceCreateInput = {
    id?: string
    zone: string
    price: Decimal | DecimalJsLike | number | string
    procedure: ProcedureCreateNestedOneWithoutPricesInput
  }

  export type ProcedurePriceUncheckedCreateInput = {
    id?: string
    procedureId: number
    zone: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type ProcedurePriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    procedure?: ProcedureUpdateOneRequiredWithoutPricesNestedInput
  }

  export type ProcedurePriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProcedurePriceCreateManyInput = {
    id?: string
    procedureId: number
    zone: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type ProcedurePriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProcedurePriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedureId?: IntFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ClientCreateInput = {
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
    appoinments?: AppointmentCreateNestedManyWithoutClientInput
    statuses?: ClientStatusCreateNestedManyWithoutClientInput
    comments?: CommentCreateNestedManyWithoutClientInput
    visitHistory?: VisitHistoryCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
    appoinments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    statuses?: ClientStatusUncheckedCreateNestedManyWithoutClientInput
    comments?: CommentUncheckedCreateNestedManyWithoutClientInput
    visitHistory?: VisitHistoryUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
    appoinments?: AppointmentUpdateManyWithoutClientNestedInput
    statuses?: ClientStatusUpdateManyWithoutClientNestedInput
    comments?: CommentUpdateManyWithoutClientNestedInput
    visitHistory?: VisitHistoryUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
    appoinments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    statuses?: ClientStatusUncheckedUpdateManyWithoutClientNestedInput
    comments?: CommentUncheckedUpdateManyWithoutClientNestedInput
    visitHistory?: VisitHistoryUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
  }

  export type ClientUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientStatusCreateInput = {
    loyaltyLevel?: $Enums.LoyaltyLevel | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutStatusesInput
  }

  export type ClientStatusUncheckedCreateInput = {
    id?: number
    clientId: number
    loyaltyLevel?: $Enums.LoyaltyLevel | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientStatusUpdateInput = {
    loyaltyLevel?: NullableEnumLoyaltyLevelFieldUpdateOperationsInput | $Enums.LoyaltyLevel | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutStatusesNestedInput
  }

  export type ClientStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    loyaltyLevel?: NullableEnumLoyaltyLevelFieldUpdateOperationsInput | $Enums.LoyaltyLevel | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientStatusCreateManyInput = {
    id?: number
    clientId: number
    loyaltyLevel?: $Enums.LoyaltyLevel | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientStatusUpdateManyMutationInput = {
    loyaltyLevel?: NullableEnumLoyaltyLevelFieldUpdateOperationsInput | $Enums.LoyaltyLevel | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    loyaltyLevel?: NullableEnumLoyaltyLevelFieldUpdateOperationsInput | $Enums.LoyaltyLevel | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitHistoryCreateInput = {
    procedureName: string
    doctorName?: string | null
    cost: number
    wasSuccessful?: boolean
    clientFeedback?: string | null
    isComplaint?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutVisitHistoryInput
  }

  export type VisitHistoryUncheckedCreateInput = {
    id?: number
    clientId: number
    procedureName: string
    doctorName?: string | null
    cost: number
    wasSuccessful?: boolean
    clientFeedback?: string | null
    isComplaint?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitHistoryUpdateInput = {
    procedureName?: StringFieldUpdateOperationsInput | string
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    wasSuccessful?: BoolFieldUpdateOperationsInput | boolean
    clientFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    isComplaint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutVisitHistoryNestedInput
  }

  export type VisitHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    procedureName?: StringFieldUpdateOperationsInput | string
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    wasSuccessful?: BoolFieldUpdateOperationsInput | boolean
    clientFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    isComplaint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitHistoryCreateManyInput = {
    id?: number
    clientId: number
    procedureName: string
    doctorName?: string | null
    cost: number
    wasSuccessful?: boolean
    clientFeedback?: string | null
    isComplaint?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitHistoryUpdateManyMutationInput = {
    procedureName?: StringFieldUpdateOperationsInput | string
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    wasSuccessful?: BoolFieldUpdateOperationsInput | boolean
    clientFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    isComplaint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    procedureName?: StringFieldUpdateOperationsInput | string
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    wasSuccessful?: BoolFieldUpdateOperationsInput | boolean
    clientFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    isComplaint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAppoinmentsInput
    procedure: ProcedureCreateNestedOneWithoutAppoimentInput
    doctor?: UserCreateNestedOneWithoutAppoinmentsInput
    reminders?: NotificationCreateNestedManyWithoutAppointmentInput
    comments?: CommentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    clientId: number
    procedureId: number
    doctorId?: number
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminders?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAppoinmentsNestedInput
    procedure?: ProcedureUpdateOneRequiredWithoutAppoimentNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppoinmentsNestedInput
    reminders?: NotificationUpdateManyWithoutAppointmentNestedInput
    comments?: CommentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    procedureId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: number
    clientId: number
    procedureId: number
    doctorId?: number
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    procedureId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    channel: $Enums.NotificationChannel
    sentAt?: Date | string | null
    status?: $Enums.NotificationStatus
    errorText?: string | null
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutRemindersInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    appointmentId: number
    channel: $Enums.NotificationChannel
    sentAt?: Date | string | null
    status?: $Enums.NotificationStatus
    errorText?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointmentId?: IntFieldUpdateOperationsInput | number
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    appointmentId: number
    channel: $Enums.NotificationChannel
    sentAt?: Date | string | null
    status?: $Enums.NotificationStatus
    errorText?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointmentId?: IntFieldUpdateOperationsInput | number
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    text: string
    createdAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutCommentsInput
    client?: ClientCreateNestedOneWithoutCommentsInput
    author?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    text: string
    clientId?: number | null
    appointmentId?: number | null
    createdAt?: Date | string
    userId?: number | null
  }

  export type CommentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutCommentsNestedInput
    client?: ClientUpdateOneWithoutCommentsNestedInput
    author?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentCreateManyInput = {
    id?: number
    text: string
    clientId?: number | null
    appointmentId?: number | null
    createdAt?: Date | string
    userId?: number | null
  }

  export type CommentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionCreateInput = {
    type: $Enums.TransactionType
    amount: number
    category: $Enums.ExpenseCategory
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentMethod?: $Enums.PaymentMethod
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    type: $Enums.TransactionType
    amount: number
    category: $Enums.ExpenseCategory
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentMethod?: $Enums.PaymentMethod
  }

  export type TransactionUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type TransactionCreateManyInput = {
    id?: number
    type: $Enums.TransactionType
    amount: number
    category: $Enums.ExpenseCategory
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentMethod?: $Enums.PaymentMethod
  }

  export type TransactionUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContraindicationListRelationFilter = {
    every?: ContraindicationWhereInput
    some?: ContraindicationWhereInput
    none?: ContraindicationWhereInput
  }

  export type InjectionZoneListRelationFilter = {
    every?: InjectionZoneWhereInput
    some?: InjectionZoneWhereInput
    none?: InjectionZoneWhereInput
  }

  export type PreparetionsListRelationFilter = {
    every?: PreparetionsWhereInput
    some?: PreparetionsWhereInput
    none?: PreparetionsWhereInput
  }

  export type ProcedurePriceListRelationFilter = {
    every?: ProcedurePriceWhereInput
    some?: ProcedurePriceWhereInput
    none?: ProcedurePriceWhereInput
  }

  export type RehabilitationListRelationFilter = {
    every?: RehabilitationWhereInput
    some?: RehabilitationWhereInput
    none?: RehabilitationWhereInput
  }

  export type ResultListRelationFilter = {
    every?: ResultWhereInput
    some?: ResultWhereInput
    none?: ResultWhereInput
  }

  export type ContraindicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InjectionZoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PreparetionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcedurePriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RehabilitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcedureOrderByRelevanceInput = {
    fields: ProcedureOrderByRelevanceFieldEnum | ProcedureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProcedureCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcedureAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProcedureMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcedureMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcedureSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProcedureScalarRelationFilter = {
    is?: ProcedureWhereInput
    isNot?: ProcedureWhereInput
  }

  export type PreparetionsOrderByRelevanceInput = {
    fields: PreparetionsOrderByRelevanceFieldEnum | PreparetionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PreparetionsCountOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type PreparetionsAvgOrderByAggregateInput = {
    procedureId?: SortOrder
  }

  export type PreparetionsMaxOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type PreparetionsMinOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type PreparetionsSumOrderByAggregateInput = {
    procedureId?: SortOrder
  }

  export type InjectionZoneOrderByRelevanceInput = {
    fields: InjectionZoneOrderByRelevanceFieldEnum | InjectionZoneOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InjectionZoneCountOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type InjectionZoneAvgOrderByAggregateInput = {
    procedureId?: SortOrder
  }

  export type InjectionZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type InjectionZoneMinOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type InjectionZoneSumOrderByAggregateInput = {
    procedureId?: SortOrder
  }

  export type ContraindicationOrderByRelevanceInput = {
    fields: ContraindicationOrderByRelevanceFieldEnum | ContraindicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContraindicationCountOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type ContraindicationAvgOrderByAggregateInput = {
    procedureId?: SortOrder
  }

  export type ContraindicationMaxOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type ContraindicationMinOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type ContraindicationSumOrderByAggregateInput = {
    procedureId?: SortOrder
  }

  export type RehabilitationOrderByRelevanceInput = {
    fields: RehabilitationOrderByRelevanceFieldEnum | RehabilitationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RehabilitationCountOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type RehabilitationAvgOrderByAggregateInput = {
    procedureId?: SortOrder
  }

  export type RehabilitationMaxOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type RehabilitationMinOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type RehabilitationSumOrderByAggregateInput = {
    procedureId?: SortOrder
  }

  export type ResultOrderByRelevanceInput = {
    fields: ResultOrderByRelevanceFieldEnum | ResultOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ResultCountOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    procedureId?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    text?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    procedureId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProcedurePriceOrderByRelevanceInput = {
    fields: ProcedurePriceOrderByRelevanceFieldEnum | ProcedurePriceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProcedurePriceCountOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    zone?: SortOrder
    price?: SortOrder
  }

  export type ProcedurePriceAvgOrderByAggregateInput = {
    procedureId?: SortOrder
    price?: SortOrder
  }

  export type ProcedurePriceMaxOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    zone?: SortOrder
    price?: SortOrder
  }

  export type ProcedurePriceMinOrderByAggregateInput = {
    id?: SortOrder
    procedureId?: SortOrder
    zone?: SortOrder
    price?: SortOrder
  }

  export type ProcedurePriceSumOrderByAggregateInput = {
    procedureId?: SortOrder
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ClientStatusListRelationFilter = {
    every?: ClientStatusWhereInput
    some?: ClientStatusWhereInput
    none?: ClientStatusWhereInput
  }

  export type VisitHistoryListRelationFilter = {
    every?: VisitHistoryWhereInput
    some?: VisitHistoryWhereInput
    none?: VisitHistoryWhereInput
  }

  export type ClientStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelevanceInput = {
    fields: ClientOrderByRelevanceFieldEnum | ClientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    anamnesis?: SortOrder
    social?: SortOrder
    description?: SortOrder
    image_3d?: SortOrder
    document?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    anamnesis?: SortOrder
    social?: SortOrder
    description?: SortOrder
    image_3d?: SortOrder
    document?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    anamnesis?: SortOrder
    social?: SortOrder
    description?: SortOrder
    image_3d?: SortOrder
    document?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumLoyaltyLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LoyaltyLevel | EnumLoyaltyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.LoyaltyLevel[] | null
    notIn?: $Enums.LoyaltyLevel[] | null
    not?: NestedEnumLoyaltyLevelNullableFilter<$PrismaModel> | $Enums.LoyaltyLevel | null
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ClientStatusOrderByRelevanceInput = {
    fields: ClientStatusOrderByRelevanceFieldEnum | ClientStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientStatusCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    loyaltyLevel?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type ClientStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    loyaltyLevel?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientStatusMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    loyaltyLevel?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientStatusSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type EnumLoyaltyLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoyaltyLevel | EnumLoyaltyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.LoyaltyLevel[] | null
    notIn?: $Enums.LoyaltyLevel[] | null
    not?: NestedEnumLoyaltyLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.LoyaltyLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLoyaltyLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumLoyaltyLevelNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VisitHistoryOrderByRelevanceInput = {
    fields: VisitHistoryOrderByRelevanceFieldEnum | VisitHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VisitHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureName?: SortOrder
    doctorName?: SortOrder
    cost?: SortOrder
    wasSuccessful?: SortOrder
    clientFeedback?: SortOrder
    isComplaint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    cost?: SortOrder
  }

  export type VisitHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureName?: SortOrder
    doctorName?: SortOrder
    cost?: SortOrder
    wasSuccessful?: SortOrder
    clientFeedback?: SortOrder
    isComplaint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureName?: SortOrder
    doctorName?: SortOrder
    cost?: SortOrder
    wasSuccessful?: SortOrder
    clientFeedback?: SortOrder
    isComplaint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitHistorySumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    cost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelevanceInput = {
    fields: AppointmentOrderByRelevanceFieldEnum | AppointmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureId?: SortOrder
    doctorId?: SortOrder
    image?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureId?: SortOrder
    doctorId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureId?: SortOrder
    doctorId?: SortOrder
    image?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureId?: SortOrder
    doctorId?: SortOrder
    image?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    procedureId?: SortOrder
    doctorId?: SortOrder
  }

  export type EnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[]
    notIn?: $Enums.NotificationChannel[]
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }

  export type EnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    channel?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    errorText?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    channel?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    errorText?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    channel?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    errorText?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
  }

  export type EnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[]
    notIn?: $Enums.NotificationChannel[]
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }

  export type EnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AppointmentNullableScalarRelationFilter = {
    is?: AppointmentWhereInput | null
    isNot?: AppointmentWhereInput | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    clientId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    appointmentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    clientId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    clientId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    appointmentId?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumExpenseCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[]
    notIn?: $Enums.ExpenseCategory[]
    not?: NestedEnumExpenseCategoryFilter<$PrismaModel> | $Enums.ExpenseCategory
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type TransactionOrderByRelevanceInput = {
    fields: TransactionOrderByRelevanceFieldEnum | TransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentMethod?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentMethod?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentMethod?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumExpenseCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[]
    notIn?: $Enums.ExpenseCategory[]
    not?: NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseCategoryFilter<$PrismaModel>
    _max?: NestedEnumExpenseCategoryFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AppointmentCreateNestedManyWithoutProcedureInput = {
    create?: XOR<AppointmentCreateWithoutProcedureInput, AppointmentUncheckedCreateWithoutProcedureInput> | AppointmentCreateWithoutProcedureInput[] | AppointmentUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProcedureInput | AppointmentCreateOrConnectWithoutProcedureInput[]
    createMany?: AppointmentCreateManyProcedureInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ContraindicationCreateNestedManyWithoutProcedureInput = {
    create?: XOR<ContraindicationCreateWithoutProcedureInput, ContraindicationUncheckedCreateWithoutProcedureInput> | ContraindicationCreateWithoutProcedureInput[] | ContraindicationUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ContraindicationCreateOrConnectWithoutProcedureInput | ContraindicationCreateOrConnectWithoutProcedureInput[]
    createMany?: ContraindicationCreateManyProcedureInputEnvelope
    connect?: ContraindicationWhereUniqueInput | ContraindicationWhereUniqueInput[]
  }

  export type InjectionZoneCreateNestedManyWithoutProcedureInput = {
    create?: XOR<InjectionZoneCreateWithoutProcedureInput, InjectionZoneUncheckedCreateWithoutProcedureInput> | InjectionZoneCreateWithoutProcedureInput[] | InjectionZoneUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: InjectionZoneCreateOrConnectWithoutProcedureInput | InjectionZoneCreateOrConnectWithoutProcedureInput[]
    createMany?: InjectionZoneCreateManyProcedureInputEnvelope
    connect?: InjectionZoneWhereUniqueInput | InjectionZoneWhereUniqueInput[]
  }

  export type PreparetionsCreateNestedManyWithoutProcedureInput = {
    create?: XOR<PreparetionsCreateWithoutProcedureInput, PreparetionsUncheckedCreateWithoutProcedureInput> | PreparetionsCreateWithoutProcedureInput[] | PreparetionsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: PreparetionsCreateOrConnectWithoutProcedureInput | PreparetionsCreateOrConnectWithoutProcedureInput[]
    createMany?: PreparetionsCreateManyProcedureInputEnvelope
    connect?: PreparetionsWhereUniqueInput | PreparetionsWhereUniqueInput[]
  }

  export type ProcedurePriceCreateNestedManyWithoutProcedureInput = {
    create?: XOR<ProcedurePriceCreateWithoutProcedureInput, ProcedurePriceUncheckedCreateWithoutProcedureInput> | ProcedurePriceCreateWithoutProcedureInput[] | ProcedurePriceUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ProcedurePriceCreateOrConnectWithoutProcedureInput | ProcedurePriceCreateOrConnectWithoutProcedureInput[]
    createMany?: ProcedurePriceCreateManyProcedureInputEnvelope
    connect?: ProcedurePriceWhereUniqueInput | ProcedurePriceWhereUniqueInput[]
  }

  export type RehabilitationCreateNestedManyWithoutProcedureInput = {
    create?: XOR<RehabilitationCreateWithoutProcedureInput, RehabilitationUncheckedCreateWithoutProcedureInput> | RehabilitationCreateWithoutProcedureInput[] | RehabilitationUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: RehabilitationCreateOrConnectWithoutProcedureInput | RehabilitationCreateOrConnectWithoutProcedureInput[]
    createMany?: RehabilitationCreateManyProcedureInputEnvelope
    connect?: RehabilitationWhereUniqueInput | RehabilitationWhereUniqueInput[]
  }

  export type ResultCreateNestedManyWithoutProcedureInput = {
    create?: XOR<ResultCreateWithoutProcedureInput, ResultUncheckedCreateWithoutProcedureInput> | ResultCreateWithoutProcedureInput[] | ResultUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutProcedureInput | ResultCreateOrConnectWithoutProcedureInput[]
    createMany?: ResultCreateManyProcedureInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<AppointmentCreateWithoutProcedureInput, AppointmentUncheckedCreateWithoutProcedureInput> | AppointmentCreateWithoutProcedureInput[] | AppointmentUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProcedureInput | AppointmentCreateOrConnectWithoutProcedureInput[]
    createMany?: AppointmentCreateManyProcedureInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ContraindicationUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<ContraindicationCreateWithoutProcedureInput, ContraindicationUncheckedCreateWithoutProcedureInput> | ContraindicationCreateWithoutProcedureInput[] | ContraindicationUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ContraindicationCreateOrConnectWithoutProcedureInput | ContraindicationCreateOrConnectWithoutProcedureInput[]
    createMany?: ContraindicationCreateManyProcedureInputEnvelope
    connect?: ContraindicationWhereUniqueInput | ContraindicationWhereUniqueInput[]
  }

  export type InjectionZoneUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<InjectionZoneCreateWithoutProcedureInput, InjectionZoneUncheckedCreateWithoutProcedureInput> | InjectionZoneCreateWithoutProcedureInput[] | InjectionZoneUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: InjectionZoneCreateOrConnectWithoutProcedureInput | InjectionZoneCreateOrConnectWithoutProcedureInput[]
    createMany?: InjectionZoneCreateManyProcedureInputEnvelope
    connect?: InjectionZoneWhereUniqueInput | InjectionZoneWhereUniqueInput[]
  }

  export type PreparetionsUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<PreparetionsCreateWithoutProcedureInput, PreparetionsUncheckedCreateWithoutProcedureInput> | PreparetionsCreateWithoutProcedureInput[] | PreparetionsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: PreparetionsCreateOrConnectWithoutProcedureInput | PreparetionsCreateOrConnectWithoutProcedureInput[]
    createMany?: PreparetionsCreateManyProcedureInputEnvelope
    connect?: PreparetionsWhereUniqueInput | PreparetionsWhereUniqueInput[]
  }

  export type ProcedurePriceUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<ProcedurePriceCreateWithoutProcedureInput, ProcedurePriceUncheckedCreateWithoutProcedureInput> | ProcedurePriceCreateWithoutProcedureInput[] | ProcedurePriceUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ProcedurePriceCreateOrConnectWithoutProcedureInput | ProcedurePriceCreateOrConnectWithoutProcedureInput[]
    createMany?: ProcedurePriceCreateManyProcedureInputEnvelope
    connect?: ProcedurePriceWhereUniqueInput | ProcedurePriceWhereUniqueInput[]
  }

  export type RehabilitationUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<RehabilitationCreateWithoutProcedureInput, RehabilitationUncheckedCreateWithoutProcedureInput> | RehabilitationCreateWithoutProcedureInput[] | RehabilitationUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: RehabilitationCreateOrConnectWithoutProcedureInput | RehabilitationCreateOrConnectWithoutProcedureInput[]
    createMany?: RehabilitationCreateManyProcedureInputEnvelope
    connect?: RehabilitationWhereUniqueInput | RehabilitationWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<ResultCreateWithoutProcedureInput, ResultUncheckedCreateWithoutProcedureInput> | ResultCreateWithoutProcedureInput[] | ResultUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutProcedureInput | ResultCreateOrConnectWithoutProcedureInput[]
    createMany?: ResultCreateManyProcedureInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<AppointmentCreateWithoutProcedureInput, AppointmentUncheckedCreateWithoutProcedureInput> | AppointmentCreateWithoutProcedureInput[] | AppointmentUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProcedureInput | AppointmentCreateOrConnectWithoutProcedureInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProcedureInput | AppointmentUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: AppointmentCreateManyProcedureInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProcedureInput | AppointmentUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProcedureInput | AppointmentUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ContraindicationUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<ContraindicationCreateWithoutProcedureInput, ContraindicationUncheckedCreateWithoutProcedureInput> | ContraindicationCreateWithoutProcedureInput[] | ContraindicationUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ContraindicationCreateOrConnectWithoutProcedureInput | ContraindicationCreateOrConnectWithoutProcedureInput[]
    upsert?: ContraindicationUpsertWithWhereUniqueWithoutProcedureInput | ContraindicationUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: ContraindicationCreateManyProcedureInputEnvelope
    set?: ContraindicationWhereUniqueInput | ContraindicationWhereUniqueInput[]
    disconnect?: ContraindicationWhereUniqueInput | ContraindicationWhereUniqueInput[]
    delete?: ContraindicationWhereUniqueInput | ContraindicationWhereUniqueInput[]
    connect?: ContraindicationWhereUniqueInput | ContraindicationWhereUniqueInput[]
    update?: ContraindicationUpdateWithWhereUniqueWithoutProcedureInput | ContraindicationUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: ContraindicationUpdateManyWithWhereWithoutProcedureInput | ContraindicationUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: ContraindicationScalarWhereInput | ContraindicationScalarWhereInput[]
  }

  export type InjectionZoneUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<InjectionZoneCreateWithoutProcedureInput, InjectionZoneUncheckedCreateWithoutProcedureInput> | InjectionZoneCreateWithoutProcedureInput[] | InjectionZoneUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: InjectionZoneCreateOrConnectWithoutProcedureInput | InjectionZoneCreateOrConnectWithoutProcedureInput[]
    upsert?: InjectionZoneUpsertWithWhereUniqueWithoutProcedureInput | InjectionZoneUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: InjectionZoneCreateManyProcedureInputEnvelope
    set?: InjectionZoneWhereUniqueInput | InjectionZoneWhereUniqueInput[]
    disconnect?: InjectionZoneWhereUniqueInput | InjectionZoneWhereUniqueInput[]
    delete?: InjectionZoneWhereUniqueInput | InjectionZoneWhereUniqueInput[]
    connect?: InjectionZoneWhereUniqueInput | InjectionZoneWhereUniqueInput[]
    update?: InjectionZoneUpdateWithWhereUniqueWithoutProcedureInput | InjectionZoneUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: InjectionZoneUpdateManyWithWhereWithoutProcedureInput | InjectionZoneUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: InjectionZoneScalarWhereInput | InjectionZoneScalarWhereInput[]
  }

  export type PreparetionsUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<PreparetionsCreateWithoutProcedureInput, PreparetionsUncheckedCreateWithoutProcedureInput> | PreparetionsCreateWithoutProcedureInput[] | PreparetionsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: PreparetionsCreateOrConnectWithoutProcedureInput | PreparetionsCreateOrConnectWithoutProcedureInput[]
    upsert?: PreparetionsUpsertWithWhereUniqueWithoutProcedureInput | PreparetionsUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: PreparetionsCreateManyProcedureInputEnvelope
    set?: PreparetionsWhereUniqueInput | PreparetionsWhereUniqueInput[]
    disconnect?: PreparetionsWhereUniqueInput | PreparetionsWhereUniqueInput[]
    delete?: PreparetionsWhereUniqueInput | PreparetionsWhereUniqueInput[]
    connect?: PreparetionsWhereUniqueInput | PreparetionsWhereUniqueInput[]
    update?: PreparetionsUpdateWithWhereUniqueWithoutProcedureInput | PreparetionsUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: PreparetionsUpdateManyWithWhereWithoutProcedureInput | PreparetionsUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: PreparetionsScalarWhereInput | PreparetionsScalarWhereInput[]
  }

  export type ProcedurePriceUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<ProcedurePriceCreateWithoutProcedureInput, ProcedurePriceUncheckedCreateWithoutProcedureInput> | ProcedurePriceCreateWithoutProcedureInput[] | ProcedurePriceUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ProcedurePriceCreateOrConnectWithoutProcedureInput | ProcedurePriceCreateOrConnectWithoutProcedureInput[]
    upsert?: ProcedurePriceUpsertWithWhereUniqueWithoutProcedureInput | ProcedurePriceUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: ProcedurePriceCreateManyProcedureInputEnvelope
    set?: ProcedurePriceWhereUniqueInput | ProcedurePriceWhereUniqueInput[]
    disconnect?: ProcedurePriceWhereUniqueInput | ProcedurePriceWhereUniqueInput[]
    delete?: ProcedurePriceWhereUniqueInput | ProcedurePriceWhereUniqueInput[]
    connect?: ProcedurePriceWhereUniqueInput | ProcedurePriceWhereUniqueInput[]
    update?: ProcedurePriceUpdateWithWhereUniqueWithoutProcedureInput | ProcedurePriceUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: ProcedurePriceUpdateManyWithWhereWithoutProcedureInput | ProcedurePriceUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: ProcedurePriceScalarWhereInput | ProcedurePriceScalarWhereInput[]
  }

  export type RehabilitationUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<RehabilitationCreateWithoutProcedureInput, RehabilitationUncheckedCreateWithoutProcedureInput> | RehabilitationCreateWithoutProcedureInput[] | RehabilitationUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: RehabilitationCreateOrConnectWithoutProcedureInput | RehabilitationCreateOrConnectWithoutProcedureInput[]
    upsert?: RehabilitationUpsertWithWhereUniqueWithoutProcedureInput | RehabilitationUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: RehabilitationCreateManyProcedureInputEnvelope
    set?: RehabilitationWhereUniqueInput | RehabilitationWhereUniqueInput[]
    disconnect?: RehabilitationWhereUniqueInput | RehabilitationWhereUniqueInput[]
    delete?: RehabilitationWhereUniqueInput | RehabilitationWhereUniqueInput[]
    connect?: RehabilitationWhereUniqueInput | RehabilitationWhereUniqueInput[]
    update?: RehabilitationUpdateWithWhereUniqueWithoutProcedureInput | RehabilitationUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: RehabilitationUpdateManyWithWhereWithoutProcedureInput | RehabilitationUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: RehabilitationScalarWhereInput | RehabilitationScalarWhereInput[]
  }

  export type ResultUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<ResultCreateWithoutProcedureInput, ResultUncheckedCreateWithoutProcedureInput> | ResultCreateWithoutProcedureInput[] | ResultUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutProcedureInput | ResultCreateOrConnectWithoutProcedureInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutProcedureInput | ResultUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: ResultCreateManyProcedureInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutProcedureInput | ResultUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutProcedureInput | ResultUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<AppointmentCreateWithoutProcedureInput, AppointmentUncheckedCreateWithoutProcedureInput> | AppointmentCreateWithoutProcedureInput[] | AppointmentUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProcedureInput | AppointmentCreateOrConnectWithoutProcedureInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProcedureInput | AppointmentUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: AppointmentCreateManyProcedureInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProcedureInput | AppointmentUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProcedureInput | AppointmentUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ContraindicationUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<ContraindicationCreateWithoutProcedureInput, ContraindicationUncheckedCreateWithoutProcedureInput> | ContraindicationCreateWithoutProcedureInput[] | ContraindicationUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ContraindicationCreateOrConnectWithoutProcedureInput | ContraindicationCreateOrConnectWithoutProcedureInput[]
    upsert?: ContraindicationUpsertWithWhereUniqueWithoutProcedureInput | ContraindicationUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: ContraindicationCreateManyProcedureInputEnvelope
    set?: ContraindicationWhereUniqueInput | ContraindicationWhereUniqueInput[]
    disconnect?: ContraindicationWhereUniqueInput | ContraindicationWhereUniqueInput[]
    delete?: ContraindicationWhereUniqueInput | ContraindicationWhereUniqueInput[]
    connect?: ContraindicationWhereUniqueInput | ContraindicationWhereUniqueInput[]
    update?: ContraindicationUpdateWithWhereUniqueWithoutProcedureInput | ContraindicationUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: ContraindicationUpdateManyWithWhereWithoutProcedureInput | ContraindicationUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: ContraindicationScalarWhereInput | ContraindicationScalarWhereInput[]
  }

  export type InjectionZoneUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<InjectionZoneCreateWithoutProcedureInput, InjectionZoneUncheckedCreateWithoutProcedureInput> | InjectionZoneCreateWithoutProcedureInput[] | InjectionZoneUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: InjectionZoneCreateOrConnectWithoutProcedureInput | InjectionZoneCreateOrConnectWithoutProcedureInput[]
    upsert?: InjectionZoneUpsertWithWhereUniqueWithoutProcedureInput | InjectionZoneUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: InjectionZoneCreateManyProcedureInputEnvelope
    set?: InjectionZoneWhereUniqueInput | InjectionZoneWhereUniqueInput[]
    disconnect?: InjectionZoneWhereUniqueInput | InjectionZoneWhereUniqueInput[]
    delete?: InjectionZoneWhereUniqueInput | InjectionZoneWhereUniqueInput[]
    connect?: InjectionZoneWhereUniqueInput | InjectionZoneWhereUniqueInput[]
    update?: InjectionZoneUpdateWithWhereUniqueWithoutProcedureInput | InjectionZoneUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: InjectionZoneUpdateManyWithWhereWithoutProcedureInput | InjectionZoneUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: InjectionZoneScalarWhereInput | InjectionZoneScalarWhereInput[]
  }

  export type PreparetionsUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<PreparetionsCreateWithoutProcedureInput, PreparetionsUncheckedCreateWithoutProcedureInput> | PreparetionsCreateWithoutProcedureInput[] | PreparetionsUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: PreparetionsCreateOrConnectWithoutProcedureInput | PreparetionsCreateOrConnectWithoutProcedureInput[]
    upsert?: PreparetionsUpsertWithWhereUniqueWithoutProcedureInput | PreparetionsUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: PreparetionsCreateManyProcedureInputEnvelope
    set?: PreparetionsWhereUniqueInput | PreparetionsWhereUniqueInput[]
    disconnect?: PreparetionsWhereUniqueInput | PreparetionsWhereUniqueInput[]
    delete?: PreparetionsWhereUniqueInput | PreparetionsWhereUniqueInput[]
    connect?: PreparetionsWhereUniqueInput | PreparetionsWhereUniqueInput[]
    update?: PreparetionsUpdateWithWhereUniqueWithoutProcedureInput | PreparetionsUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: PreparetionsUpdateManyWithWhereWithoutProcedureInput | PreparetionsUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: PreparetionsScalarWhereInput | PreparetionsScalarWhereInput[]
  }

  export type ProcedurePriceUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<ProcedurePriceCreateWithoutProcedureInput, ProcedurePriceUncheckedCreateWithoutProcedureInput> | ProcedurePriceCreateWithoutProcedureInput[] | ProcedurePriceUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ProcedurePriceCreateOrConnectWithoutProcedureInput | ProcedurePriceCreateOrConnectWithoutProcedureInput[]
    upsert?: ProcedurePriceUpsertWithWhereUniqueWithoutProcedureInput | ProcedurePriceUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: ProcedurePriceCreateManyProcedureInputEnvelope
    set?: ProcedurePriceWhereUniqueInput | ProcedurePriceWhereUniqueInput[]
    disconnect?: ProcedurePriceWhereUniqueInput | ProcedurePriceWhereUniqueInput[]
    delete?: ProcedurePriceWhereUniqueInput | ProcedurePriceWhereUniqueInput[]
    connect?: ProcedurePriceWhereUniqueInput | ProcedurePriceWhereUniqueInput[]
    update?: ProcedurePriceUpdateWithWhereUniqueWithoutProcedureInput | ProcedurePriceUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: ProcedurePriceUpdateManyWithWhereWithoutProcedureInput | ProcedurePriceUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: ProcedurePriceScalarWhereInput | ProcedurePriceScalarWhereInput[]
  }

  export type RehabilitationUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<RehabilitationCreateWithoutProcedureInput, RehabilitationUncheckedCreateWithoutProcedureInput> | RehabilitationCreateWithoutProcedureInput[] | RehabilitationUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: RehabilitationCreateOrConnectWithoutProcedureInput | RehabilitationCreateOrConnectWithoutProcedureInput[]
    upsert?: RehabilitationUpsertWithWhereUniqueWithoutProcedureInput | RehabilitationUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: RehabilitationCreateManyProcedureInputEnvelope
    set?: RehabilitationWhereUniqueInput | RehabilitationWhereUniqueInput[]
    disconnect?: RehabilitationWhereUniqueInput | RehabilitationWhereUniqueInput[]
    delete?: RehabilitationWhereUniqueInput | RehabilitationWhereUniqueInput[]
    connect?: RehabilitationWhereUniqueInput | RehabilitationWhereUniqueInput[]
    update?: RehabilitationUpdateWithWhereUniqueWithoutProcedureInput | RehabilitationUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: RehabilitationUpdateManyWithWhereWithoutProcedureInput | RehabilitationUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: RehabilitationScalarWhereInput | RehabilitationScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<ResultCreateWithoutProcedureInput, ResultUncheckedCreateWithoutProcedureInput> | ResultCreateWithoutProcedureInput[] | ResultUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutProcedureInput | ResultCreateOrConnectWithoutProcedureInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutProcedureInput | ResultUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: ResultCreateManyProcedureInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutProcedureInput | ResultUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutProcedureInput | ResultUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type ProcedureCreateNestedOneWithoutPreparationsInput = {
    create?: XOR<ProcedureCreateWithoutPreparationsInput, ProcedureUncheckedCreateWithoutPreparationsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutPreparationsInput
    connect?: ProcedureWhereUniqueInput
  }

  export type ProcedureUpdateOneRequiredWithoutPreparationsNestedInput = {
    create?: XOR<ProcedureCreateWithoutPreparationsInput, ProcedureUncheckedCreateWithoutPreparationsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutPreparationsInput
    upsert?: ProcedureUpsertWithoutPreparationsInput
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutPreparationsInput, ProcedureUpdateWithoutPreparationsInput>, ProcedureUncheckedUpdateWithoutPreparationsInput>
  }

  export type ProcedureCreateNestedOneWithoutInjectionZonesInput = {
    create?: XOR<ProcedureCreateWithoutInjectionZonesInput, ProcedureUncheckedCreateWithoutInjectionZonesInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutInjectionZonesInput
    connect?: ProcedureWhereUniqueInput
  }

  export type ProcedureUpdateOneRequiredWithoutInjectionZonesNestedInput = {
    create?: XOR<ProcedureCreateWithoutInjectionZonesInput, ProcedureUncheckedCreateWithoutInjectionZonesInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutInjectionZonesInput
    upsert?: ProcedureUpsertWithoutInjectionZonesInput
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutInjectionZonesInput, ProcedureUpdateWithoutInjectionZonesInput>, ProcedureUncheckedUpdateWithoutInjectionZonesInput>
  }

  export type ProcedureCreateNestedOneWithoutContraindicationsInput = {
    create?: XOR<ProcedureCreateWithoutContraindicationsInput, ProcedureUncheckedCreateWithoutContraindicationsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutContraindicationsInput
    connect?: ProcedureWhereUniqueInput
  }

  export type ProcedureUpdateOneRequiredWithoutContraindicationsNestedInput = {
    create?: XOR<ProcedureCreateWithoutContraindicationsInput, ProcedureUncheckedCreateWithoutContraindicationsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutContraindicationsInput
    upsert?: ProcedureUpsertWithoutContraindicationsInput
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutContraindicationsInput, ProcedureUpdateWithoutContraindicationsInput>, ProcedureUncheckedUpdateWithoutContraindicationsInput>
  }

  export type ProcedureCreateNestedOneWithoutRehabilitationsInput = {
    create?: XOR<ProcedureCreateWithoutRehabilitationsInput, ProcedureUncheckedCreateWithoutRehabilitationsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutRehabilitationsInput
    connect?: ProcedureWhereUniqueInput
  }

  export type ProcedureUpdateOneRequiredWithoutRehabilitationsNestedInput = {
    create?: XOR<ProcedureCreateWithoutRehabilitationsInput, ProcedureUncheckedCreateWithoutRehabilitationsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutRehabilitationsInput
    upsert?: ProcedureUpsertWithoutRehabilitationsInput
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutRehabilitationsInput, ProcedureUpdateWithoutRehabilitationsInput>, ProcedureUncheckedUpdateWithoutRehabilitationsInput>
  }

  export type ProcedureCreateNestedOneWithoutResultsInput = {
    create?: XOR<ProcedureCreateWithoutResultsInput, ProcedureUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutResultsInput
    connect?: ProcedureWhereUniqueInput
  }

  export type ProcedureUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<ProcedureCreateWithoutResultsInput, ProcedureUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutResultsInput
    upsert?: ProcedureUpsertWithoutResultsInput
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutResultsInput, ProcedureUpdateWithoutResultsInput>, ProcedureUncheckedUpdateWithoutResultsInput>
  }

  export type ProcedureCreateNestedOneWithoutPricesInput = {
    create?: XOR<ProcedureCreateWithoutPricesInput, ProcedureUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutPricesInput
    connect?: ProcedureWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProcedureUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<ProcedureCreateWithoutPricesInput, ProcedureUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutPricesInput
    upsert?: ProcedureUpsertWithoutPricesInput
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutPricesInput, ProcedureUpdateWithoutPricesInput>, ProcedureUncheckedUpdateWithoutPricesInput>
  }

  export type AppointmentCreateNestedManyWithoutClientInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ClientStatusCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientStatusCreateWithoutClientInput, ClientStatusUncheckedCreateWithoutClientInput> | ClientStatusCreateWithoutClientInput[] | ClientStatusUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientStatusCreateOrConnectWithoutClientInput | ClientStatusCreateOrConnectWithoutClientInput[]
    createMany?: ClientStatusCreateManyClientInputEnvelope
    connect?: ClientStatusWhereUniqueInput | ClientStatusWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutClientInput = {
    create?: XOR<CommentCreateWithoutClientInput, CommentUncheckedCreateWithoutClientInput> | CommentCreateWithoutClientInput[] | CommentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutClientInput | CommentCreateOrConnectWithoutClientInput[]
    createMany?: CommentCreateManyClientInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VisitHistoryCreateNestedManyWithoutClientInput = {
    create?: XOR<VisitHistoryCreateWithoutClientInput, VisitHistoryUncheckedCreateWithoutClientInput> | VisitHistoryCreateWithoutClientInput[] | VisitHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: VisitHistoryCreateOrConnectWithoutClientInput | VisitHistoryCreateOrConnectWithoutClientInput[]
    createMany?: VisitHistoryCreateManyClientInputEnvelope
    connect?: VisitHistoryWhereUniqueInput | VisitHistoryWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ClientStatusUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientStatusCreateWithoutClientInput, ClientStatusUncheckedCreateWithoutClientInput> | ClientStatusCreateWithoutClientInput[] | ClientStatusUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientStatusCreateOrConnectWithoutClientInput | ClientStatusCreateOrConnectWithoutClientInput[]
    createMany?: ClientStatusCreateManyClientInputEnvelope
    connect?: ClientStatusWhereUniqueInput | ClientStatusWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CommentCreateWithoutClientInput, CommentUncheckedCreateWithoutClientInput> | CommentCreateWithoutClientInput[] | CommentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutClientInput | CommentCreateOrConnectWithoutClientInput[]
    createMany?: CommentCreateManyClientInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VisitHistoryUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<VisitHistoryCreateWithoutClientInput, VisitHistoryUncheckedCreateWithoutClientInput> | VisitHistoryCreateWithoutClientInput[] | VisitHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: VisitHistoryCreateOrConnectWithoutClientInput | VisitHistoryCreateOrConnectWithoutClientInput[]
    createMany?: VisitHistoryCreateManyClientInputEnvelope
    connect?: VisitHistoryWhereUniqueInput | VisitHistoryWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClientInput | AppointmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClientInput | AppointmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClientInput | AppointmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ClientStatusUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientStatusCreateWithoutClientInput, ClientStatusUncheckedCreateWithoutClientInput> | ClientStatusCreateWithoutClientInput[] | ClientStatusUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientStatusCreateOrConnectWithoutClientInput | ClientStatusCreateOrConnectWithoutClientInput[]
    upsert?: ClientStatusUpsertWithWhereUniqueWithoutClientInput | ClientStatusUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientStatusCreateManyClientInputEnvelope
    set?: ClientStatusWhereUniqueInput | ClientStatusWhereUniqueInput[]
    disconnect?: ClientStatusWhereUniqueInput | ClientStatusWhereUniqueInput[]
    delete?: ClientStatusWhereUniqueInput | ClientStatusWhereUniqueInput[]
    connect?: ClientStatusWhereUniqueInput | ClientStatusWhereUniqueInput[]
    update?: ClientStatusUpdateWithWhereUniqueWithoutClientInput | ClientStatusUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientStatusUpdateManyWithWhereWithoutClientInput | ClientStatusUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientStatusScalarWhereInput | ClientStatusScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommentCreateWithoutClientInput, CommentUncheckedCreateWithoutClientInput> | CommentCreateWithoutClientInput[] | CommentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutClientInput | CommentCreateOrConnectWithoutClientInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutClientInput | CommentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommentCreateManyClientInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutClientInput | CommentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutClientInput | CommentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VisitHistoryUpdateManyWithoutClientNestedInput = {
    create?: XOR<VisitHistoryCreateWithoutClientInput, VisitHistoryUncheckedCreateWithoutClientInput> | VisitHistoryCreateWithoutClientInput[] | VisitHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: VisitHistoryCreateOrConnectWithoutClientInput | VisitHistoryCreateOrConnectWithoutClientInput[]
    upsert?: VisitHistoryUpsertWithWhereUniqueWithoutClientInput | VisitHistoryUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: VisitHistoryCreateManyClientInputEnvelope
    set?: VisitHistoryWhereUniqueInput | VisitHistoryWhereUniqueInput[]
    disconnect?: VisitHistoryWhereUniqueInput | VisitHistoryWhereUniqueInput[]
    delete?: VisitHistoryWhereUniqueInput | VisitHistoryWhereUniqueInput[]
    connect?: VisitHistoryWhereUniqueInput | VisitHistoryWhereUniqueInput[]
    update?: VisitHistoryUpdateWithWhereUniqueWithoutClientInput | VisitHistoryUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: VisitHistoryUpdateManyWithWhereWithoutClientInput | VisitHistoryUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: VisitHistoryScalarWhereInput | VisitHistoryScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClientInput | AppointmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClientInput | AppointmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClientInput | AppointmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ClientStatusUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientStatusCreateWithoutClientInput, ClientStatusUncheckedCreateWithoutClientInput> | ClientStatusCreateWithoutClientInput[] | ClientStatusUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientStatusCreateOrConnectWithoutClientInput | ClientStatusCreateOrConnectWithoutClientInput[]
    upsert?: ClientStatusUpsertWithWhereUniqueWithoutClientInput | ClientStatusUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientStatusCreateManyClientInputEnvelope
    set?: ClientStatusWhereUniqueInput | ClientStatusWhereUniqueInput[]
    disconnect?: ClientStatusWhereUniqueInput | ClientStatusWhereUniqueInput[]
    delete?: ClientStatusWhereUniqueInput | ClientStatusWhereUniqueInput[]
    connect?: ClientStatusWhereUniqueInput | ClientStatusWhereUniqueInput[]
    update?: ClientStatusUpdateWithWhereUniqueWithoutClientInput | ClientStatusUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientStatusUpdateManyWithWhereWithoutClientInput | ClientStatusUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientStatusScalarWhereInput | ClientStatusScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommentCreateWithoutClientInput, CommentUncheckedCreateWithoutClientInput> | CommentCreateWithoutClientInput[] | CommentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutClientInput | CommentCreateOrConnectWithoutClientInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutClientInput | CommentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommentCreateManyClientInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutClientInput | CommentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutClientInput | CommentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VisitHistoryUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<VisitHistoryCreateWithoutClientInput, VisitHistoryUncheckedCreateWithoutClientInput> | VisitHistoryCreateWithoutClientInput[] | VisitHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: VisitHistoryCreateOrConnectWithoutClientInput | VisitHistoryCreateOrConnectWithoutClientInput[]
    upsert?: VisitHistoryUpsertWithWhereUniqueWithoutClientInput | VisitHistoryUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: VisitHistoryCreateManyClientInputEnvelope
    set?: VisitHistoryWhereUniqueInput | VisitHistoryWhereUniqueInput[]
    disconnect?: VisitHistoryWhereUniqueInput | VisitHistoryWhereUniqueInput[]
    delete?: VisitHistoryWhereUniqueInput | VisitHistoryWhereUniqueInput[]
    connect?: VisitHistoryWhereUniqueInput | VisitHistoryWhereUniqueInput[]
    update?: VisitHistoryUpdateWithWhereUniqueWithoutClientInput | VisitHistoryUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: VisitHistoryUpdateManyWithWhereWithoutClientInput | VisitHistoryUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: VisitHistoryScalarWhereInput | VisitHistoryScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutStatusesInput = {
    create?: XOR<ClientCreateWithoutStatusesInput, ClientUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutStatusesInput
    connect?: ClientWhereUniqueInput
  }

  export type NullableEnumLoyaltyLevelFieldUpdateOperationsInput = {
    set?: $Enums.LoyaltyLevel | null
  }

  export type ClientUpdateOneRequiredWithoutStatusesNestedInput = {
    create?: XOR<ClientCreateWithoutStatusesInput, ClientUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutStatusesInput
    upsert?: ClientUpsertWithoutStatusesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutStatusesInput, ClientUpdateWithoutStatusesInput>, ClientUncheckedUpdateWithoutStatusesInput>
  }

  export type ClientCreateNestedOneWithoutVisitHistoryInput = {
    create?: XOR<ClientCreateWithoutVisitHistoryInput, ClientUncheckedCreateWithoutVisitHistoryInput>
    connectOrCreate?: ClientCreateOrConnectWithoutVisitHistoryInput
    connect?: ClientWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneRequiredWithoutVisitHistoryNestedInput = {
    create?: XOR<ClientCreateWithoutVisitHistoryInput, ClientUncheckedCreateWithoutVisitHistoryInput>
    connectOrCreate?: ClientCreateOrConnectWithoutVisitHistoryInput
    upsert?: ClientUpsertWithoutVisitHistoryInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutVisitHistoryInput, ClientUpdateWithoutVisitHistoryInput>, ClientUncheckedUpdateWithoutVisitHistoryInput>
  }

  export type ClientCreateNestedOneWithoutAppoinmentsInput = {
    create?: XOR<ClientCreateWithoutAppoinmentsInput, ClientUncheckedCreateWithoutAppoinmentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAppoinmentsInput
    connect?: ClientWhereUniqueInput
  }

  export type ProcedureCreateNestedOneWithoutAppoimentInput = {
    create?: XOR<ProcedureCreateWithoutAppoimentInput, ProcedureUncheckedCreateWithoutAppoimentInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutAppoimentInput
    connect?: ProcedureWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppoinmentsInput = {
    create?: XOR<UserCreateWithoutAppoinmentsInput, UserUncheckedCreateWithoutAppoinmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppoinmentsInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<CommentCreateWithoutAppointmentInput, CommentUncheckedCreateWithoutAppointmentInput> | CommentCreateWithoutAppointmentInput[] | CommentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAppointmentInput | CommentCreateOrConnectWithoutAppointmentInput[]
    createMany?: CommentCreateManyAppointmentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<CommentCreateWithoutAppointmentInput, CommentUncheckedCreateWithoutAppointmentInput> | CommentCreateWithoutAppointmentInput[] | CommentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAppointmentInput | CommentCreateOrConnectWithoutAppointmentInput[]
    createMany?: CommentCreateManyAppointmentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutAppoinmentsNestedInput = {
    create?: XOR<ClientCreateWithoutAppoinmentsInput, ClientUncheckedCreateWithoutAppoinmentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAppoinmentsInput
    upsert?: ClientUpsertWithoutAppoinmentsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAppoinmentsInput, ClientUpdateWithoutAppoinmentsInput>, ClientUncheckedUpdateWithoutAppoinmentsInput>
  }

  export type ProcedureUpdateOneRequiredWithoutAppoimentNestedInput = {
    create?: XOR<ProcedureCreateWithoutAppoimentInput, ProcedureUncheckedCreateWithoutAppoimentInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutAppoimentInput
    upsert?: ProcedureUpsertWithoutAppoimentInput
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutAppoimentInput, ProcedureUpdateWithoutAppoimentInput>, ProcedureUncheckedUpdateWithoutAppoimentInput>
  }

  export type UserUpdateOneRequiredWithoutAppoinmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppoinmentsInput, UserUncheckedCreateWithoutAppoinmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppoinmentsInput
    upsert?: UserUpsertWithoutAppoinmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppoinmentsInput, UserUpdateWithoutAppoinmentsInput>, UserUncheckedUpdateWithoutAppoinmentsInput>
  }

  export type NotificationUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAppointmentInput | NotificationUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAppointmentInput | NotificationUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAppointmentInput | NotificationUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<CommentCreateWithoutAppointmentInput, CommentUncheckedCreateWithoutAppointmentInput> | CommentCreateWithoutAppointmentInput[] | CommentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAppointmentInput | CommentCreateOrConnectWithoutAppointmentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAppointmentInput | CommentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: CommentCreateManyAppointmentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAppointmentInput | CommentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAppointmentInput | CommentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAppointmentInput | NotificationUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAppointmentInput | NotificationUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAppointmentInput | NotificationUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<CommentCreateWithoutAppointmentInput, CommentUncheckedCreateWithoutAppointmentInput> | CommentCreateWithoutAppointmentInput[] | CommentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAppointmentInput | CommentCreateOrConnectWithoutAppointmentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAppointmentInput | CommentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: CommentCreateManyAppointmentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAppointmentInput | CommentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAppointmentInput | CommentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AppointmentCreateNestedOneWithoutRemindersInput = {
    create?: XOR<AppointmentCreateWithoutRemindersInput, AppointmentUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutRemindersInput
    connect?: AppointmentWhereUniqueInput
  }

  export type EnumNotificationChannelFieldUpdateOperationsInput = {
    set?: $Enums.NotificationChannel
  }

  export type EnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus
  }

  export type AppointmentUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<AppointmentCreateWithoutRemindersInput, AppointmentUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutRemindersInput
    upsert?: AppointmentUpsertWithoutRemindersInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutRemindersInput, AppointmentUpdateWithoutRemindersInput>, AppointmentUncheckedUpdateWithoutRemindersInput>
  }

  export type AppointmentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<AppointmentCreateWithoutCommentsInput, AppointmentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutCommentsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ClientCreateWithoutCommentsInput, ClientUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCommentsInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<AppointmentCreateWithoutCommentsInput, AppointmentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutCommentsInput
    upsert?: AppointmentUpsertWithoutCommentsInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutCommentsInput, AppointmentUpdateWithoutCommentsInput>, AppointmentUncheckedUpdateWithoutCommentsInput>
  }

  export type ClientUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<ClientCreateWithoutCommentsInput, ClientUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCommentsInput
    upsert?: ClientUpsertWithoutCommentsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutCommentsInput, ClientUpdateWithoutCommentsInput>, ClientUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumExpenseCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseCategory
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumLoyaltyLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LoyaltyLevel | EnumLoyaltyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.LoyaltyLevel[] | null
    notIn?: $Enums.LoyaltyLevel[] | null
    not?: NestedEnumLoyaltyLevelNullableFilter<$PrismaModel> | $Enums.LoyaltyLevel | null
  }

  export type NestedEnumLoyaltyLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoyaltyLevel | EnumLoyaltyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.LoyaltyLevel[] | null
    notIn?: $Enums.LoyaltyLevel[] | null
    not?: NestedEnumLoyaltyLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.LoyaltyLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLoyaltyLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumLoyaltyLevelNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[]
    notIn?: $Enums.NotificationChannel[]
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }

  export type NestedEnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[]
    notIn?: $Enums.NotificationChannel[]
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }

  export type NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumExpenseCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[]
    notIn?: $Enums.ExpenseCategory[]
    not?: NestedEnumExpenseCategoryFilter<$PrismaModel> | $Enums.ExpenseCategory
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[]
    notIn?: $Enums.ExpenseCategory[]
    not?: NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseCategoryFilter<$PrismaModel>
    _max?: NestedEnumExpenseCategoryFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type CommentCreateWithoutAuthorInput = {
    text: string
    createdAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutCommentsInput
    client?: ClientCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: number
    text: string
    clientId?: number | null
    appointmentId?: number | null
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    refreshToken: string
    ipAddress?: string | null
    userAgent?: string | null
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: number
    refreshToken: string
    ipAddress?: string | null
    userAgent?: string | null
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutDoctorInput = {
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAppoinmentsInput
    procedure: ProcedureCreateNestedOneWithoutAppoimentInput
    reminders?: NotificationCreateNestedManyWithoutAppointmentInput
    comments?: CommentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: number
    clientId: number
    procedureId: number
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminders?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    clientId?: IntNullableFilter<"Comment"> | number | null
    appointmentId?: IntNullableFilter<"Comment"> | number | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: IntNullableFilter<"Comment"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: IntFilter<"Session"> | number
    userId?: IntFilter<"Session"> | number
    refreshToken?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    isRevoked?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    clientId?: IntFilter<"Appointment"> | number
    procedureId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    image?: StringNullableFilter<"Appointment"> | string | null
    note?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    salt?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutAuthorInput
    appoinments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    salt?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    appoinments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    appoinments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    appoinments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type AppointmentCreateWithoutProcedureInput = {
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAppoinmentsInput
    doctor?: UserCreateNestedOneWithoutAppoinmentsInput
    reminders?: NotificationCreateNestedManyWithoutAppointmentInput
    comments?: CommentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutProcedureInput = {
    id?: number
    clientId: number
    doctorId?: number
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminders?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutProcedureInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutProcedureInput, AppointmentUncheckedCreateWithoutProcedureInput>
  }

  export type AppointmentCreateManyProcedureInputEnvelope = {
    data: AppointmentCreateManyProcedureInput | AppointmentCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type ContraindicationCreateWithoutProcedureInput = {
    id?: string
    text: string
  }

  export type ContraindicationUncheckedCreateWithoutProcedureInput = {
    id?: string
    text: string
  }

  export type ContraindicationCreateOrConnectWithoutProcedureInput = {
    where: ContraindicationWhereUniqueInput
    create: XOR<ContraindicationCreateWithoutProcedureInput, ContraindicationUncheckedCreateWithoutProcedureInput>
  }

  export type ContraindicationCreateManyProcedureInputEnvelope = {
    data: ContraindicationCreateManyProcedureInput | ContraindicationCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type InjectionZoneCreateWithoutProcedureInput = {
    id?: string
    text: string
  }

  export type InjectionZoneUncheckedCreateWithoutProcedureInput = {
    id?: string
    text: string
  }

  export type InjectionZoneCreateOrConnectWithoutProcedureInput = {
    where: InjectionZoneWhereUniqueInput
    create: XOR<InjectionZoneCreateWithoutProcedureInput, InjectionZoneUncheckedCreateWithoutProcedureInput>
  }

  export type InjectionZoneCreateManyProcedureInputEnvelope = {
    data: InjectionZoneCreateManyProcedureInput | InjectionZoneCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type PreparetionsCreateWithoutProcedureInput = {
    id?: string
    text: string
  }

  export type PreparetionsUncheckedCreateWithoutProcedureInput = {
    id?: string
    text: string
  }

  export type PreparetionsCreateOrConnectWithoutProcedureInput = {
    where: PreparetionsWhereUniqueInput
    create: XOR<PreparetionsCreateWithoutProcedureInput, PreparetionsUncheckedCreateWithoutProcedureInput>
  }

  export type PreparetionsCreateManyProcedureInputEnvelope = {
    data: PreparetionsCreateManyProcedureInput | PreparetionsCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type ProcedurePriceCreateWithoutProcedureInput = {
    id?: string
    zone: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type ProcedurePriceUncheckedCreateWithoutProcedureInput = {
    id?: string
    zone: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type ProcedurePriceCreateOrConnectWithoutProcedureInput = {
    where: ProcedurePriceWhereUniqueInput
    create: XOR<ProcedurePriceCreateWithoutProcedureInput, ProcedurePriceUncheckedCreateWithoutProcedureInput>
  }

  export type ProcedurePriceCreateManyProcedureInputEnvelope = {
    data: ProcedurePriceCreateManyProcedureInput | ProcedurePriceCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type RehabilitationCreateWithoutProcedureInput = {
    id?: string
    text: string
  }

  export type RehabilitationUncheckedCreateWithoutProcedureInput = {
    id?: string
    text: string
  }

  export type RehabilitationCreateOrConnectWithoutProcedureInput = {
    where: RehabilitationWhereUniqueInput
    create: XOR<RehabilitationCreateWithoutProcedureInput, RehabilitationUncheckedCreateWithoutProcedureInput>
  }

  export type RehabilitationCreateManyProcedureInputEnvelope = {
    data: RehabilitationCreateManyProcedureInput | RehabilitationCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type ResultCreateWithoutProcedureInput = {
    id?: string
    text: string
  }

  export type ResultUncheckedCreateWithoutProcedureInput = {
    id?: string
    text: string
  }

  export type ResultCreateOrConnectWithoutProcedureInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutProcedureInput, ResultUncheckedCreateWithoutProcedureInput>
  }

  export type ResultCreateManyProcedureInputEnvelope = {
    data: ResultCreateManyProcedureInput | ResultCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutProcedureInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutProcedureInput, AppointmentUncheckedUpdateWithoutProcedureInput>
    create: XOR<AppointmentCreateWithoutProcedureInput, AppointmentUncheckedCreateWithoutProcedureInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutProcedureInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutProcedureInput, AppointmentUncheckedUpdateWithoutProcedureInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutProcedureInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutProcedureInput>
  }

  export type ContraindicationUpsertWithWhereUniqueWithoutProcedureInput = {
    where: ContraindicationWhereUniqueInput
    update: XOR<ContraindicationUpdateWithoutProcedureInput, ContraindicationUncheckedUpdateWithoutProcedureInput>
    create: XOR<ContraindicationCreateWithoutProcedureInput, ContraindicationUncheckedCreateWithoutProcedureInput>
  }

  export type ContraindicationUpdateWithWhereUniqueWithoutProcedureInput = {
    where: ContraindicationWhereUniqueInput
    data: XOR<ContraindicationUpdateWithoutProcedureInput, ContraindicationUncheckedUpdateWithoutProcedureInput>
  }

  export type ContraindicationUpdateManyWithWhereWithoutProcedureInput = {
    where: ContraindicationScalarWhereInput
    data: XOR<ContraindicationUpdateManyMutationInput, ContraindicationUncheckedUpdateManyWithoutProcedureInput>
  }

  export type ContraindicationScalarWhereInput = {
    AND?: ContraindicationScalarWhereInput | ContraindicationScalarWhereInput[]
    OR?: ContraindicationScalarWhereInput[]
    NOT?: ContraindicationScalarWhereInput | ContraindicationScalarWhereInput[]
    id?: StringFilter<"Contraindication"> | string
    procedureId?: IntFilter<"Contraindication"> | number
    text?: StringFilter<"Contraindication"> | string
  }

  export type InjectionZoneUpsertWithWhereUniqueWithoutProcedureInput = {
    where: InjectionZoneWhereUniqueInput
    update: XOR<InjectionZoneUpdateWithoutProcedureInput, InjectionZoneUncheckedUpdateWithoutProcedureInput>
    create: XOR<InjectionZoneCreateWithoutProcedureInput, InjectionZoneUncheckedCreateWithoutProcedureInput>
  }

  export type InjectionZoneUpdateWithWhereUniqueWithoutProcedureInput = {
    where: InjectionZoneWhereUniqueInput
    data: XOR<InjectionZoneUpdateWithoutProcedureInput, InjectionZoneUncheckedUpdateWithoutProcedureInput>
  }

  export type InjectionZoneUpdateManyWithWhereWithoutProcedureInput = {
    where: InjectionZoneScalarWhereInput
    data: XOR<InjectionZoneUpdateManyMutationInput, InjectionZoneUncheckedUpdateManyWithoutProcedureInput>
  }

  export type InjectionZoneScalarWhereInput = {
    AND?: InjectionZoneScalarWhereInput | InjectionZoneScalarWhereInput[]
    OR?: InjectionZoneScalarWhereInput[]
    NOT?: InjectionZoneScalarWhereInput | InjectionZoneScalarWhereInput[]
    id?: StringFilter<"InjectionZone"> | string
    procedureId?: IntFilter<"InjectionZone"> | number
    text?: StringFilter<"InjectionZone"> | string
  }

  export type PreparetionsUpsertWithWhereUniqueWithoutProcedureInput = {
    where: PreparetionsWhereUniqueInput
    update: XOR<PreparetionsUpdateWithoutProcedureInput, PreparetionsUncheckedUpdateWithoutProcedureInput>
    create: XOR<PreparetionsCreateWithoutProcedureInput, PreparetionsUncheckedCreateWithoutProcedureInput>
  }

  export type PreparetionsUpdateWithWhereUniqueWithoutProcedureInput = {
    where: PreparetionsWhereUniqueInput
    data: XOR<PreparetionsUpdateWithoutProcedureInput, PreparetionsUncheckedUpdateWithoutProcedureInput>
  }

  export type PreparetionsUpdateManyWithWhereWithoutProcedureInput = {
    where: PreparetionsScalarWhereInput
    data: XOR<PreparetionsUpdateManyMutationInput, PreparetionsUncheckedUpdateManyWithoutProcedureInput>
  }

  export type PreparetionsScalarWhereInput = {
    AND?: PreparetionsScalarWhereInput | PreparetionsScalarWhereInput[]
    OR?: PreparetionsScalarWhereInput[]
    NOT?: PreparetionsScalarWhereInput | PreparetionsScalarWhereInput[]
    id?: StringFilter<"Preparetions"> | string
    procedureId?: IntFilter<"Preparetions"> | number
    text?: StringFilter<"Preparetions"> | string
  }

  export type ProcedurePriceUpsertWithWhereUniqueWithoutProcedureInput = {
    where: ProcedurePriceWhereUniqueInput
    update: XOR<ProcedurePriceUpdateWithoutProcedureInput, ProcedurePriceUncheckedUpdateWithoutProcedureInput>
    create: XOR<ProcedurePriceCreateWithoutProcedureInput, ProcedurePriceUncheckedCreateWithoutProcedureInput>
  }

  export type ProcedurePriceUpdateWithWhereUniqueWithoutProcedureInput = {
    where: ProcedurePriceWhereUniqueInput
    data: XOR<ProcedurePriceUpdateWithoutProcedureInput, ProcedurePriceUncheckedUpdateWithoutProcedureInput>
  }

  export type ProcedurePriceUpdateManyWithWhereWithoutProcedureInput = {
    where: ProcedurePriceScalarWhereInput
    data: XOR<ProcedurePriceUpdateManyMutationInput, ProcedurePriceUncheckedUpdateManyWithoutProcedureInput>
  }

  export type ProcedurePriceScalarWhereInput = {
    AND?: ProcedurePriceScalarWhereInput | ProcedurePriceScalarWhereInput[]
    OR?: ProcedurePriceScalarWhereInput[]
    NOT?: ProcedurePriceScalarWhereInput | ProcedurePriceScalarWhereInput[]
    id?: StringFilter<"ProcedurePrice"> | string
    procedureId?: IntFilter<"ProcedurePrice"> | number
    zone?: StringFilter<"ProcedurePrice"> | string
    price?: DecimalFilter<"ProcedurePrice"> | Decimal | DecimalJsLike | number | string
  }

  export type RehabilitationUpsertWithWhereUniqueWithoutProcedureInput = {
    where: RehabilitationWhereUniqueInput
    update: XOR<RehabilitationUpdateWithoutProcedureInput, RehabilitationUncheckedUpdateWithoutProcedureInput>
    create: XOR<RehabilitationCreateWithoutProcedureInput, RehabilitationUncheckedCreateWithoutProcedureInput>
  }

  export type RehabilitationUpdateWithWhereUniqueWithoutProcedureInput = {
    where: RehabilitationWhereUniqueInput
    data: XOR<RehabilitationUpdateWithoutProcedureInput, RehabilitationUncheckedUpdateWithoutProcedureInput>
  }

  export type RehabilitationUpdateManyWithWhereWithoutProcedureInput = {
    where: RehabilitationScalarWhereInput
    data: XOR<RehabilitationUpdateManyMutationInput, RehabilitationUncheckedUpdateManyWithoutProcedureInput>
  }

  export type RehabilitationScalarWhereInput = {
    AND?: RehabilitationScalarWhereInput | RehabilitationScalarWhereInput[]
    OR?: RehabilitationScalarWhereInput[]
    NOT?: RehabilitationScalarWhereInput | RehabilitationScalarWhereInput[]
    id?: StringFilter<"Rehabilitation"> | string
    procedureId?: IntFilter<"Rehabilitation"> | number
    text?: StringFilter<"Rehabilitation"> | string
  }

  export type ResultUpsertWithWhereUniqueWithoutProcedureInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutProcedureInput, ResultUncheckedUpdateWithoutProcedureInput>
    create: XOR<ResultCreateWithoutProcedureInput, ResultUncheckedCreateWithoutProcedureInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutProcedureInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutProcedureInput, ResultUncheckedUpdateWithoutProcedureInput>
  }

  export type ResultUpdateManyWithWhereWithoutProcedureInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutProcedureInput>
  }

  export type ResultScalarWhereInput = {
    AND?: ResultScalarWhereInput | ResultScalarWhereInput[]
    OR?: ResultScalarWhereInput[]
    NOT?: ResultScalarWhereInput | ResultScalarWhereInput[]
    id?: StringFilter<"Result"> | string
    procedureId?: IntFilter<"Result"> | number
    text?: StringFilter<"Result"> | string
  }

  export type ProcedureCreateWithoutPreparationsInput = {
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationCreateNestedManyWithoutProcedureInput
    results?: ResultCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutPreparationsInput = {
    id?: number
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentUncheckedCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationUncheckedCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneUncheckedCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceUncheckedCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationUncheckedCreateNestedManyWithoutProcedureInput
    results?: ResultUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutPreparationsInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutPreparationsInput, ProcedureUncheckedCreateWithoutPreparationsInput>
  }

  export type ProcedureUpsertWithoutPreparationsInput = {
    update: XOR<ProcedureUpdateWithoutPreparationsInput, ProcedureUncheckedUpdateWithoutPreparationsInput>
    create: XOR<ProcedureCreateWithoutPreparationsInput, ProcedureUncheckedCreateWithoutPreparationsInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutPreparationsInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutPreparationsInput, ProcedureUncheckedUpdateWithoutPreparationsInput>
  }

  export type ProcedureUpdateWithoutPreparationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUpdateManyWithoutProcedureNestedInput
    results?: ResultUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutPreparationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUncheckedUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUncheckedUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUncheckedUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUncheckedUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUncheckedUpdateManyWithoutProcedureNestedInput
    results?: ResultUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureCreateWithoutInjectionZonesInput = {
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationCreateNestedManyWithoutProcedureInput
    results?: ResultCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutInjectionZonesInput = {
    id?: number
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentUncheckedCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationUncheckedCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsUncheckedCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceUncheckedCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationUncheckedCreateNestedManyWithoutProcedureInput
    results?: ResultUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutInjectionZonesInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutInjectionZonesInput, ProcedureUncheckedCreateWithoutInjectionZonesInput>
  }

  export type ProcedureUpsertWithoutInjectionZonesInput = {
    update: XOR<ProcedureUpdateWithoutInjectionZonesInput, ProcedureUncheckedUpdateWithoutInjectionZonesInput>
    create: XOR<ProcedureCreateWithoutInjectionZonesInput, ProcedureUncheckedCreateWithoutInjectionZonesInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutInjectionZonesInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutInjectionZonesInput, ProcedureUncheckedUpdateWithoutInjectionZonesInput>
  }

  export type ProcedureUpdateWithoutInjectionZonesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUpdateManyWithoutProcedureNestedInput
    results?: ResultUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutInjectionZonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUncheckedUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUncheckedUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUncheckedUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUncheckedUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUncheckedUpdateManyWithoutProcedureNestedInput
    results?: ResultUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureCreateWithoutContraindicationsInput = {
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationCreateNestedManyWithoutProcedureInput
    results?: ResultCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutContraindicationsInput = {
    id?: number
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentUncheckedCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneUncheckedCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsUncheckedCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceUncheckedCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationUncheckedCreateNestedManyWithoutProcedureInput
    results?: ResultUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutContraindicationsInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutContraindicationsInput, ProcedureUncheckedCreateWithoutContraindicationsInput>
  }

  export type ProcedureUpsertWithoutContraindicationsInput = {
    update: XOR<ProcedureUpdateWithoutContraindicationsInput, ProcedureUncheckedUpdateWithoutContraindicationsInput>
    create: XOR<ProcedureCreateWithoutContraindicationsInput, ProcedureUncheckedCreateWithoutContraindicationsInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutContraindicationsInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutContraindicationsInput, ProcedureUncheckedUpdateWithoutContraindicationsInput>
  }

  export type ProcedureUpdateWithoutContraindicationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUpdateManyWithoutProcedureNestedInput
    results?: ResultUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutContraindicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUncheckedUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUncheckedUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUncheckedUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUncheckedUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUncheckedUpdateManyWithoutProcedureNestedInput
    results?: ResultUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureCreateWithoutRehabilitationsInput = {
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceCreateNestedManyWithoutProcedureInput
    results?: ResultCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutRehabilitationsInput = {
    id?: number
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentUncheckedCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationUncheckedCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneUncheckedCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsUncheckedCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceUncheckedCreateNestedManyWithoutProcedureInput
    results?: ResultUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutRehabilitationsInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutRehabilitationsInput, ProcedureUncheckedCreateWithoutRehabilitationsInput>
  }

  export type ProcedureUpsertWithoutRehabilitationsInput = {
    update: XOR<ProcedureUpdateWithoutRehabilitationsInput, ProcedureUncheckedUpdateWithoutRehabilitationsInput>
    create: XOR<ProcedureCreateWithoutRehabilitationsInput, ProcedureUncheckedCreateWithoutRehabilitationsInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutRehabilitationsInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutRehabilitationsInput, ProcedureUncheckedUpdateWithoutRehabilitationsInput>
  }

  export type ProcedureUpdateWithoutRehabilitationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUpdateManyWithoutProcedureNestedInput
    results?: ResultUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutRehabilitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUncheckedUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUncheckedUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUncheckedUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUncheckedUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUncheckedUpdateManyWithoutProcedureNestedInput
    results?: ResultUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureCreateWithoutResultsInput = {
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutResultsInput = {
    id?: number
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentUncheckedCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationUncheckedCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneUncheckedCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsUncheckedCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceUncheckedCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutResultsInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutResultsInput, ProcedureUncheckedCreateWithoutResultsInput>
  }

  export type ProcedureUpsertWithoutResultsInput = {
    update: XOR<ProcedureUpdateWithoutResultsInput, ProcedureUncheckedUpdateWithoutResultsInput>
    create: XOR<ProcedureCreateWithoutResultsInput, ProcedureUncheckedCreateWithoutResultsInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutResultsInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutResultsInput, ProcedureUncheckedUpdateWithoutResultsInput>
  }

  export type ProcedureUpdateWithoutResultsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUncheckedUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUncheckedUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUncheckedUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUncheckedUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUncheckedUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureCreateWithoutPricesInput = {
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationCreateNestedManyWithoutProcedureInput
    results?: ResultCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutPricesInput = {
    id?: number
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appoiment?: AppointmentUncheckedCreateNestedManyWithoutProcedureInput
    contraindications?: ContraindicationUncheckedCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneUncheckedCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsUncheckedCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationUncheckedCreateNestedManyWithoutProcedureInput
    results?: ResultUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutPricesInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutPricesInput, ProcedureUncheckedCreateWithoutPricesInput>
  }

  export type ProcedureUpsertWithoutPricesInput = {
    update: XOR<ProcedureUpdateWithoutPricesInput, ProcedureUncheckedUpdateWithoutPricesInput>
    create: XOR<ProcedureCreateWithoutPricesInput, ProcedureUncheckedCreateWithoutPricesInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutPricesInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutPricesInput, ProcedureUncheckedUpdateWithoutPricesInput>
  }

  export type ProcedureUpdateWithoutPricesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUpdateManyWithoutProcedureNestedInput
    results?: ResultUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutPricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appoiment?: AppointmentUncheckedUpdateManyWithoutProcedureNestedInput
    contraindications?: ContraindicationUncheckedUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUncheckedUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUncheckedUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUncheckedUpdateManyWithoutProcedureNestedInput
    results?: ResultUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type AppointmentCreateWithoutClientInput = {
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    procedure: ProcedureCreateNestedOneWithoutAppoimentInput
    doctor?: UserCreateNestedOneWithoutAppoinmentsInput
    reminders?: NotificationCreateNestedManyWithoutAppointmentInput
    comments?: CommentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutClientInput = {
    id?: number
    procedureId: number
    doctorId?: number
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminders?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput>
  }

  export type AppointmentCreateManyClientInputEnvelope = {
    data: AppointmentCreateManyClientInput | AppointmentCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientStatusCreateWithoutClientInput = {
    loyaltyLevel?: $Enums.LoyaltyLevel | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientStatusUncheckedCreateWithoutClientInput = {
    id?: number
    loyaltyLevel?: $Enums.LoyaltyLevel | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientStatusCreateOrConnectWithoutClientInput = {
    where: ClientStatusWhereUniqueInput
    create: XOR<ClientStatusCreateWithoutClientInput, ClientStatusUncheckedCreateWithoutClientInput>
  }

  export type ClientStatusCreateManyClientInputEnvelope = {
    data: ClientStatusCreateManyClientInput | ClientStatusCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutClientInput = {
    text: string
    createdAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutCommentsInput
    author?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutClientInput = {
    id?: number
    text: string
    appointmentId?: number | null
    createdAt?: Date | string
    userId?: number | null
  }

  export type CommentCreateOrConnectWithoutClientInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutClientInput, CommentUncheckedCreateWithoutClientInput>
  }

  export type CommentCreateManyClientInputEnvelope = {
    data: CommentCreateManyClientInput | CommentCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type VisitHistoryCreateWithoutClientInput = {
    procedureName: string
    doctorName?: string | null
    cost: number
    wasSuccessful?: boolean
    clientFeedback?: string | null
    isComplaint?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitHistoryUncheckedCreateWithoutClientInput = {
    id?: number
    procedureName: string
    doctorName?: string | null
    cost: number
    wasSuccessful?: boolean
    clientFeedback?: string | null
    isComplaint?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitHistoryCreateOrConnectWithoutClientInput = {
    where: VisitHistoryWhereUniqueInput
    create: XOR<VisitHistoryCreateWithoutClientInput, VisitHistoryUncheckedCreateWithoutClientInput>
  }

  export type VisitHistoryCreateManyClientInputEnvelope = {
    data: VisitHistoryCreateManyClientInput | VisitHistoryCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutClientInput, AppointmentUncheckedUpdateWithoutClientInput>
    create: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutClientInput, AppointmentUncheckedUpdateWithoutClientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutClientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientStatusUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientStatusWhereUniqueInput
    update: XOR<ClientStatusUpdateWithoutClientInput, ClientStatusUncheckedUpdateWithoutClientInput>
    create: XOR<ClientStatusCreateWithoutClientInput, ClientStatusUncheckedCreateWithoutClientInput>
  }

  export type ClientStatusUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientStatusWhereUniqueInput
    data: XOR<ClientStatusUpdateWithoutClientInput, ClientStatusUncheckedUpdateWithoutClientInput>
  }

  export type ClientStatusUpdateManyWithWhereWithoutClientInput = {
    where: ClientStatusScalarWhereInput
    data: XOR<ClientStatusUpdateManyMutationInput, ClientStatusUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientStatusScalarWhereInput = {
    AND?: ClientStatusScalarWhereInput | ClientStatusScalarWhereInput[]
    OR?: ClientStatusScalarWhereInput[]
    NOT?: ClientStatusScalarWhereInput | ClientStatusScalarWhereInput[]
    id?: IntFilter<"ClientStatus"> | number
    clientId?: IntFilter<"ClientStatus"> | number
    loyaltyLevel?: EnumLoyaltyLevelNullableFilter<"ClientStatus"> | $Enums.LoyaltyLevel | null
    notes?: StringNullableFilter<"ClientStatus"> | string | null
    createdAt?: DateTimeFilter<"ClientStatus"> | Date | string
    updatedAt?: DateTimeFilter<"ClientStatus"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutClientInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutClientInput, CommentUncheckedUpdateWithoutClientInput>
    create: XOR<CommentCreateWithoutClientInput, CommentUncheckedCreateWithoutClientInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutClientInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutClientInput, CommentUncheckedUpdateWithoutClientInput>
  }

  export type CommentUpdateManyWithWhereWithoutClientInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutClientInput>
  }

  export type VisitHistoryUpsertWithWhereUniqueWithoutClientInput = {
    where: VisitHistoryWhereUniqueInput
    update: XOR<VisitHistoryUpdateWithoutClientInput, VisitHistoryUncheckedUpdateWithoutClientInput>
    create: XOR<VisitHistoryCreateWithoutClientInput, VisitHistoryUncheckedCreateWithoutClientInput>
  }

  export type VisitHistoryUpdateWithWhereUniqueWithoutClientInput = {
    where: VisitHistoryWhereUniqueInput
    data: XOR<VisitHistoryUpdateWithoutClientInput, VisitHistoryUncheckedUpdateWithoutClientInput>
  }

  export type VisitHistoryUpdateManyWithWhereWithoutClientInput = {
    where: VisitHistoryScalarWhereInput
    data: XOR<VisitHistoryUpdateManyMutationInput, VisitHistoryUncheckedUpdateManyWithoutClientInput>
  }

  export type VisitHistoryScalarWhereInput = {
    AND?: VisitHistoryScalarWhereInput | VisitHistoryScalarWhereInput[]
    OR?: VisitHistoryScalarWhereInput[]
    NOT?: VisitHistoryScalarWhereInput | VisitHistoryScalarWhereInput[]
    id?: IntFilter<"VisitHistory"> | number
    clientId?: IntFilter<"VisitHistory"> | number
    procedureName?: StringFilter<"VisitHistory"> | string
    doctorName?: StringNullableFilter<"VisitHistory"> | string | null
    cost?: FloatFilter<"VisitHistory"> | number
    wasSuccessful?: BoolFilter<"VisitHistory"> | boolean
    clientFeedback?: StringNullableFilter<"VisitHistory"> | string | null
    isComplaint?: BoolFilter<"VisitHistory"> | boolean
    createdAt?: DateTimeFilter<"VisitHistory"> | Date | string
    updatedAt?: DateTimeFilter<"VisitHistory"> | Date | string
  }

  export type ClientCreateWithoutStatusesInput = {
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
    appoinments?: AppointmentCreateNestedManyWithoutClientInput
    comments?: CommentCreateNestedManyWithoutClientInput
    visitHistory?: VisitHistoryCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutStatusesInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
    appoinments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    comments?: CommentUncheckedCreateNestedManyWithoutClientInput
    visitHistory?: VisitHistoryUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutStatusesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutStatusesInput, ClientUncheckedCreateWithoutStatusesInput>
  }

  export type ClientUpsertWithoutStatusesInput = {
    update: XOR<ClientUpdateWithoutStatusesInput, ClientUncheckedUpdateWithoutStatusesInput>
    create: XOR<ClientCreateWithoutStatusesInput, ClientUncheckedCreateWithoutStatusesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutStatusesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutStatusesInput, ClientUncheckedUpdateWithoutStatusesInput>
  }

  export type ClientUpdateWithoutStatusesInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
    appoinments?: AppointmentUpdateManyWithoutClientNestedInput
    comments?: CommentUpdateManyWithoutClientNestedInput
    visitHistory?: VisitHistoryUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
    appoinments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    comments?: CommentUncheckedUpdateManyWithoutClientNestedInput
    visitHistory?: VisitHistoryUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutVisitHistoryInput = {
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
    appoinments?: AppointmentCreateNestedManyWithoutClientInput
    statuses?: ClientStatusCreateNestedManyWithoutClientInput
    comments?: CommentCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutVisitHistoryInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
    appoinments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    statuses?: ClientStatusUncheckedCreateNestedManyWithoutClientInput
    comments?: CommentUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutVisitHistoryInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutVisitHistoryInput, ClientUncheckedCreateWithoutVisitHistoryInput>
  }

  export type ClientUpsertWithoutVisitHistoryInput = {
    update: XOR<ClientUpdateWithoutVisitHistoryInput, ClientUncheckedUpdateWithoutVisitHistoryInput>
    create: XOR<ClientCreateWithoutVisitHistoryInput, ClientUncheckedCreateWithoutVisitHistoryInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutVisitHistoryInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutVisitHistoryInput, ClientUncheckedUpdateWithoutVisitHistoryInput>
  }

  export type ClientUpdateWithoutVisitHistoryInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
    appoinments?: AppointmentUpdateManyWithoutClientNestedInput
    statuses?: ClientStatusUpdateManyWithoutClientNestedInput
    comments?: CommentUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutVisitHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
    appoinments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    statuses?: ClientStatusUncheckedUpdateManyWithoutClientNestedInput
    comments?: CommentUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutAppoinmentsInput = {
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
    statuses?: ClientStatusCreateNestedManyWithoutClientInput
    comments?: CommentCreateNestedManyWithoutClientInput
    visitHistory?: VisitHistoryCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAppoinmentsInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
    statuses?: ClientStatusUncheckedCreateNestedManyWithoutClientInput
    comments?: CommentUncheckedCreateNestedManyWithoutClientInput
    visitHistory?: VisitHistoryUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAppoinmentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAppoinmentsInput, ClientUncheckedCreateWithoutAppoinmentsInput>
  }

  export type ProcedureCreateWithoutAppoimentInput = {
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contraindications?: ContraindicationCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationCreateNestedManyWithoutProcedureInput
    results?: ResultCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutAppoimentInput = {
    id?: number
    name?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contraindications?: ContraindicationUncheckedCreateNestedManyWithoutProcedureInput
    injectionZones?: InjectionZoneUncheckedCreateNestedManyWithoutProcedureInput
    preparations?: PreparetionsUncheckedCreateNestedManyWithoutProcedureInput
    prices?: ProcedurePriceUncheckedCreateNestedManyWithoutProcedureInput
    rehabilitations?: RehabilitationUncheckedCreateNestedManyWithoutProcedureInput
    results?: ResultUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutAppoimentInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutAppoimentInput, ProcedureUncheckedCreateWithoutAppoimentInput>
  }

  export type UserCreateWithoutAppoinmentsInput = {
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    salt?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppoinmentsInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    salt?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppoinmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppoinmentsInput, UserUncheckedCreateWithoutAppoinmentsInput>
  }

  export type NotificationCreateWithoutAppointmentInput = {
    channel: $Enums.NotificationChannel
    sentAt?: Date | string | null
    status?: $Enums.NotificationStatus
    errorText?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutAppointmentInput = {
    id?: number
    channel: $Enums.NotificationChannel
    sentAt?: Date | string | null
    status?: $Enums.NotificationStatus
    errorText?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput>
  }

  export type NotificationCreateManyAppointmentInputEnvelope = {
    data: NotificationCreateManyAppointmentInput | NotificationCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAppointmentInput = {
    text: string
    createdAt?: Date | string
    client?: ClientCreateNestedOneWithoutCommentsInput
    author?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAppointmentInput = {
    id?: number
    text: string
    clientId?: number | null
    createdAt?: Date | string
    userId?: number | null
  }

  export type CommentCreateOrConnectWithoutAppointmentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAppointmentInput, CommentUncheckedCreateWithoutAppointmentInput>
  }

  export type CommentCreateManyAppointmentInputEnvelope = {
    data: CommentCreateManyAppointmentInput | CommentCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutAppoinmentsInput = {
    update: XOR<ClientUpdateWithoutAppoinmentsInput, ClientUncheckedUpdateWithoutAppoinmentsInput>
    create: XOR<ClientCreateWithoutAppoinmentsInput, ClientUncheckedCreateWithoutAppoinmentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAppoinmentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAppoinmentsInput, ClientUncheckedUpdateWithoutAppoinmentsInput>
  }

  export type ClientUpdateWithoutAppoinmentsInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
    statuses?: ClientStatusUpdateManyWithoutClientNestedInput
    comments?: CommentUpdateManyWithoutClientNestedInput
    visitHistory?: VisitHistoryUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAppoinmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
    statuses?: ClientStatusUncheckedUpdateManyWithoutClientNestedInput
    comments?: CommentUncheckedUpdateManyWithoutClientNestedInput
    visitHistory?: VisitHistoryUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProcedureUpsertWithoutAppoimentInput = {
    update: XOR<ProcedureUpdateWithoutAppoimentInput, ProcedureUncheckedUpdateWithoutAppoimentInput>
    create: XOR<ProcedureCreateWithoutAppoimentInput, ProcedureUncheckedCreateWithoutAppoimentInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutAppoimentInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutAppoimentInput, ProcedureUncheckedUpdateWithoutAppoimentInput>
  }

  export type ProcedureUpdateWithoutAppoimentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contraindications?: ContraindicationUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUpdateManyWithoutProcedureNestedInput
    results?: ResultUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutAppoimentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contraindications?: ContraindicationUncheckedUpdateManyWithoutProcedureNestedInput
    injectionZones?: InjectionZoneUncheckedUpdateManyWithoutProcedureNestedInput
    preparations?: PreparetionsUncheckedUpdateManyWithoutProcedureNestedInput
    prices?: ProcedurePriceUncheckedUpdateManyWithoutProcedureNestedInput
    rehabilitations?: RehabilitationUncheckedUpdateManyWithoutProcedureNestedInput
    results?: ResultUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type UserUpsertWithoutAppoinmentsInput = {
    update: XOR<UserUpdateWithoutAppoinmentsInput, UserUncheckedUpdateWithoutAppoinmentsInput>
    create: XOR<UserCreateWithoutAppoinmentsInput, UserUncheckedCreateWithoutAppoinmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppoinmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppoinmentsInput, UserUncheckedUpdateWithoutAppoinmentsInput>
  }

  export type UserUpdateWithoutAppoinmentsInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppoinmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutAppointmentInput, NotificationUncheckedUpdateWithoutAppointmentInput>
    create: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutAppointmentInput, NotificationUncheckedUpdateWithoutAppointmentInput>
  }

  export type NotificationUpdateManyWithWhereWithoutAppointmentInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    appointmentId?: IntFilter<"Notification"> | number
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    errorText?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAppointmentInput, CommentUncheckedUpdateWithoutAppointmentInput>
    create: XOR<CommentCreateWithoutAppointmentInput, CommentUncheckedCreateWithoutAppointmentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAppointmentInput, CommentUncheckedUpdateWithoutAppointmentInput>
  }

  export type CommentUpdateManyWithWhereWithoutAppointmentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type AppointmentCreateWithoutRemindersInput = {
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAppoinmentsInput
    procedure: ProcedureCreateNestedOneWithoutAppoimentInput
    doctor?: UserCreateNestedOneWithoutAppoinmentsInput
    comments?: CommentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutRemindersInput = {
    id?: number
    clientId: number
    procedureId: number
    doctorId?: number
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutRemindersInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutRemindersInput, AppointmentUncheckedCreateWithoutRemindersInput>
  }

  export type AppointmentUpsertWithoutRemindersInput = {
    update: XOR<AppointmentUpdateWithoutRemindersInput, AppointmentUncheckedUpdateWithoutRemindersInput>
    create: XOR<AppointmentCreateWithoutRemindersInput, AppointmentUncheckedCreateWithoutRemindersInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutRemindersInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutRemindersInput, AppointmentUncheckedUpdateWithoutRemindersInput>
  }

  export type AppointmentUpdateWithoutRemindersInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAppoinmentsNestedInput
    procedure?: ProcedureUpdateOneRequiredWithoutAppoimentNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppoinmentsNestedInput
    comments?: CommentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutRemindersInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    procedureId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateWithoutCommentsInput = {
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAppoinmentsInput
    procedure: ProcedureCreateNestedOneWithoutAppoimentInput
    doctor?: UserCreateNestedOneWithoutAppoinmentsInput
    reminders?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutCommentsInput = {
    id?: number
    clientId: number
    procedureId: number
    doctorId?: number
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminders?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutCommentsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCommentsInput, AppointmentUncheckedCreateWithoutCommentsInput>
  }

  export type ClientCreateWithoutCommentsInput = {
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
    appoinments?: AppointmentCreateNestedManyWithoutClientInput
    statuses?: ClientStatusCreateNestedManyWithoutClientInput
    visitHistory?: VisitHistoryCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCommentsInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    anamnesis?: string | null
    social?: string | null
    description?: string | null
    image_3d?: boolean
    document?: boolean
    appoinments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    statuses?: ClientStatusUncheckedCreateNestedManyWithoutClientInput
    visitHistory?: VisitHistoryUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCommentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCommentsInput, ClientUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    salt?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    appoinments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    salt?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    appoinments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type AppointmentUpsertWithoutCommentsInput = {
    update: XOR<AppointmentUpdateWithoutCommentsInput, AppointmentUncheckedUpdateWithoutCommentsInput>
    create: XOR<AppointmentCreateWithoutCommentsInput, AppointmentUncheckedCreateWithoutCommentsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutCommentsInput, AppointmentUncheckedUpdateWithoutCommentsInput>
  }

  export type AppointmentUpdateWithoutCommentsInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAppoinmentsNestedInput
    procedure?: ProcedureUpdateOneRequiredWithoutAppoimentNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppoinmentsNestedInput
    reminders?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    procedureId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type ClientUpsertWithoutCommentsInput = {
    update: XOR<ClientUpdateWithoutCommentsInput, ClientUncheckedUpdateWithoutCommentsInput>
    create: XOR<ClientCreateWithoutCommentsInput, ClientUncheckedCreateWithoutCommentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutCommentsInput, ClientUncheckedUpdateWithoutCommentsInput>
  }

  export type ClientUpdateWithoutCommentsInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
    appoinments?: AppointmentUpdateManyWithoutClientNestedInput
    statuses?: ClientStatusUpdateManyWithoutClientNestedInput
    visitHistory?: VisitHistoryUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anamnesis?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_3d?: BoolFieldUpdateOperationsInput | boolean
    document?: BoolFieldUpdateOperationsInput | boolean
    appoinments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    statuses?: ClientStatusUncheckedUpdateManyWithoutClientNestedInput
    visitHistory?: VisitHistoryUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    appoinments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    appoinments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type CommentCreateManyAuthorInput = {
    id?: number
    text: string
    clientId?: number | null
    appointmentId?: number | null
    createdAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: number
    refreshToken: string
    ipAddress?: string | null
    userAgent?: string | null
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: number
    clientId: number
    procedureId: number
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutCommentsNestedInput
    client?: ClientUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAppoinmentsNestedInput
    procedure?: ProcedureUpdateOneRequiredWithoutAppoimentNestedInput
    reminders?: NotificationUpdateManyWithoutAppointmentNestedInput
    comments?: CommentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    procedureId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    procedureId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyProcedureInput = {
    id?: number
    clientId: number
    doctorId?: number
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContraindicationCreateManyProcedureInput = {
    id?: string
    text: string
  }

  export type InjectionZoneCreateManyProcedureInput = {
    id?: string
    text: string
  }

  export type PreparetionsCreateManyProcedureInput = {
    id?: string
    text: string
  }

  export type ProcedurePriceCreateManyProcedureInput = {
    id?: string
    zone: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type RehabilitationCreateManyProcedureInput = {
    id?: string
    text: string
  }

  export type ResultCreateManyProcedureInput = {
    id?: string
    text: string
  }

  export type AppointmentUpdateWithoutProcedureInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAppoinmentsNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppoinmentsNestedInput
    reminders?: NotificationUpdateManyWithoutAppointmentNestedInput
    comments?: CommentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutProcedureInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutProcedureInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContraindicationUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ContraindicationUncheckedUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ContraindicationUncheckedUpdateManyWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type InjectionZoneUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type InjectionZoneUncheckedUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type InjectionZoneUncheckedUpdateManyWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PreparetionsUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PreparetionsUncheckedUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PreparetionsUncheckedUpdateManyWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ProcedurePriceUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProcedurePriceUncheckedUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProcedurePriceUncheckedUpdateManyWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RehabilitationUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type RehabilitationUncheckedUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type RehabilitationUncheckedUpdateManyWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ResultUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ResultUncheckedUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ResultUncheckedUpdateManyWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateManyClientInput = {
    id?: number
    procedureId: number
    doctorId?: number
    image?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientStatusCreateManyClientInput = {
    id?: number
    loyaltyLevel?: $Enums.LoyaltyLevel | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyClientInput = {
    id?: number
    text: string
    appointmentId?: number | null
    createdAt?: Date | string
    userId?: number | null
  }

  export type VisitHistoryCreateManyClientInput = {
    id?: number
    procedureName: string
    doctorName?: string | null
    cost: number
    wasSuccessful?: boolean
    clientFeedback?: string | null
    isComplaint?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutClientInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procedure?: ProcedureUpdateOneRequiredWithoutAppoimentNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppoinmentsNestedInput
    reminders?: NotificationUpdateManyWithoutAppointmentNestedInput
    comments?: CommentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    procedureId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    procedureId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientStatusUpdateWithoutClientInput = {
    loyaltyLevel?: NullableEnumLoyaltyLevelFieldUpdateOperationsInput | $Enums.LoyaltyLevel | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientStatusUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    loyaltyLevel?: NullableEnumLoyaltyLevelFieldUpdateOperationsInput | $Enums.LoyaltyLevel | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientStatusUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    loyaltyLevel?: NullableEnumLoyaltyLevelFieldUpdateOperationsInput | $Enums.LoyaltyLevel | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutClientInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutCommentsNestedInput
    author?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VisitHistoryUpdateWithoutClientInput = {
    procedureName?: StringFieldUpdateOperationsInput | string
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    wasSuccessful?: BoolFieldUpdateOperationsInput | boolean
    clientFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    isComplaint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitHistoryUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    procedureName?: StringFieldUpdateOperationsInput | string
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    wasSuccessful?: BoolFieldUpdateOperationsInput | boolean
    clientFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    isComplaint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitHistoryUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    procedureName?: StringFieldUpdateOperationsInput | string
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    wasSuccessful?: BoolFieldUpdateOperationsInput | boolean
    clientFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    isComplaint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyAppointmentInput = {
    id?: number
    channel: $Enums.NotificationChannel
    sentAt?: Date | string | null
    status?: $Enums.NotificationStatus
    errorText?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateManyAppointmentInput = {
    id?: number
    text: string
    clientId?: number | null
    createdAt?: Date | string
    userId?: number | null
  }

  export type NotificationUpdateWithoutAppointmentInput = {
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    errorText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAppointmentInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutCommentsNestedInput
    author?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentUncheckedUpdateManyWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}