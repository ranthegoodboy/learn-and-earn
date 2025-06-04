
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
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
 * Model UserCourseProgress
 * 
 */
export type UserCourseProgress = $Result.DefaultSelection<Prisma.$UserCourseProgressPayload>
/**
 * Model UserCourseSectionProgress
 * 
 */
export type UserCourseSectionProgress = $Result.DefaultSelection<Prisma.$UserCourseSectionProgressPayload>
/**
 * Model UserCourseChapterProgress
 * 
 */
export type UserCourseChapterProgress = $Result.DefaultSelection<Prisma.$UserCourseChapterProgressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Level: {
  Beginner: 'Beginner',
  Intermediate: 'Intermediate',
  Advanced: 'Advanced'
};

export type Level = (typeof Level)[keyof typeof Level]

}

export type Level = $Enums.Level

export const Level: typeof $Enums.Level

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.userCourseProgress`: Exposes CRUD operations for the **UserCourseProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCourseProgresses
    * const userCourseProgresses = await prisma.userCourseProgress.findMany()
    * ```
    */
  get userCourseProgress(): Prisma.UserCourseProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCourseSectionProgress`: Exposes CRUD operations for the **UserCourseSectionProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCourseSectionProgresses
    * const userCourseSectionProgresses = await prisma.userCourseSectionProgress.findMany()
    * ```
    */
  get userCourseSectionProgress(): Prisma.UserCourseSectionProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCourseChapterProgress`: Exposes CRUD operations for the **UserCourseChapterProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCourseChapterProgresses
    * const userCourseChapterProgresses = await prisma.userCourseChapterProgress.findMany()
    * ```
    */
  get userCourseChapterProgress(): Prisma.UserCourseChapterProgressDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Account: 'Account',
    Course: 'Course',
    Enrollment: 'Enrollment',
    Section: 'Section',
    Chapter: 'Chapter',
    Comment: 'Comment',
    Transaction: 'Transaction',
    UserCourseProgress: 'UserCourseProgress',
    UserCourseSectionProgress: 'UserCourseSectionProgress',
    UserCourseChapterProgress: 'UserCourseChapterProgress'
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
      modelProps: "user" | "account" | "course" | "enrollment" | "section" | "chapter" | "comment" | "transaction" | "userCourseProgress" | "userCourseSectionProgress" | "userCourseChapterProgress"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CourseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CourseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EnrollmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EnrollmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SectionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SectionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChapterFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChapterAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
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
          findRaw: {
            args: Prisma.CommentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CommentAggregateRawArgs<ExtArgs>
            result: JsonObject
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
          findRaw: {
            args: Prisma.TransactionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TransactionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      UserCourseProgress: {
        payload: Prisma.$UserCourseProgressPayload<ExtArgs>
        fields: Prisma.UserCourseProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCourseProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCourseProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          findFirst: {
            args: Prisma.UserCourseProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCourseProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          findMany: {
            args: Prisma.UserCourseProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>[]
          }
          create: {
            args: Prisma.UserCourseProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          createMany: {
            args: Prisma.UserCourseProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCourseProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          update: {
            args: Prisma.UserCourseProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserCourseProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCourseProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCourseProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          aggregate: {
            args: Prisma.UserCourseProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCourseProgress>
          }
          groupBy: {
            args: Prisma.UserCourseProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCourseProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserCourseProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserCourseProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCourseProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserCourseProgressCountAggregateOutputType> | number
          }
        }
      }
      UserCourseSectionProgress: {
        payload: Prisma.$UserCourseSectionProgressPayload<ExtArgs>
        fields: Prisma.UserCourseSectionProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCourseSectionProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseSectionProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCourseSectionProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseSectionProgressPayload>
          }
          findFirst: {
            args: Prisma.UserCourseSectionProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseSectionProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCourseSectionProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseSectionProgressPayload>
          }
          findMany: {
            args: Prisma.UserCourseSectionProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseSectionProgressPayload>[]
          }
          create: {
            args: Prisma.UserCourseSectionProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseSectionProgressPayload>
          }
          createMany: {
            args: Prisma.UserCourseSectionProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCourseSectionProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseSectionProgressPayload>
          }
          update: {
            args: Prisma.UserCourseSectionProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseSectionProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserCourseSectionProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCourseSectionProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCourseSectionProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseSectionProgressPayload>
          }
          aggregate: {
            args: Prisma.UserCourseSectionProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCourseSectionProgress>
          }
          groupBy: {
            args: Prisma.UserCourseSectionProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCourseSectionProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserCourseSectionProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserCourseSectionProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCourseSectionProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserCourseSectionProgressCountAggregateOutputType> | number
          }
        }
      }
      UserCourseChapterProgress: {
        payload: Prisma.$UserCourseChapterProgressPayload<ExtArgs>
        fields: Prisma.UserCourseChapterProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCourseChapterProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseChapterProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCourseChapterProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseChapterProgressPayload>
          }
          findFirst: {
            args: Prisma.UserCourseChapterProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseChapterProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCourseChapterProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseChapterProgressPayload>
          }
          findMany: {
            args: Prisma.UserCourseChapterProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseChapterProgressPayload>[]
          }
          create: {
            args: Prisma.UserCourseChapterProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseChapterProgressPayload>
          }
          createMany: {
            args: Prisma.UserCourseChapterProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCourseChapterProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseChapterProgressPayload>
          }
          update: {
            args: Prisma.UserCourseChapterProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseChapterProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserCourseChapterProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCourseChapterProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCourseChapterProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseChapterProgressPayload>
          }
          aggregate: {
            args: Prisma.UserCourseChapterProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCourseChapterProgress>
          }
          groupBy: {
            args: Prisma.UserCourseChapterProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCourseChapterProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserCourseChapterProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserCourseChapterProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCourseChapterProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserCourseChapterProgressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    account?: AccountOmit
    course?: CourseOmit
    enrollment?: EnrollmentOmit
    section?: SectionOmit
    chapter?: ChapterOmit
    comment?: CommentOmit
    transaction?: TransactionOmit
    userCourseProgress?: UserCourseProgressOmit
    userCourseSectionProgress?: UserCourseSectionProgressOmit
    userCourseChapterProgress?: UserCourseChapterProgressOmit
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
    accounts: number
    comments: number
    transactions: number
    userProgresses: number
    courses: number
    enrollments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    userProgresses?: boolean | UserCountOutputTypeCountUserProgressesArgs
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
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
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    sections: number
    transactions: number
    userProgresses: number
    enrollments: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | CourseCountOutputTypeCountSectionsArgs
    transactions?: boolean | CourseCountOutputTypeCountTransactionsArgs
    userProgresses?: boolean | CourseCountOutputTypeCountUserProgressesArgs
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountUserProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    chapters: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | SectionCountOutputTypeCountChaptersArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    comments: number
    UserCourseProgress: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ChapterCountOutputTypeCountCommentsArgs
    UserCourseProgress?: boolean | ChapterCountOutputTypeCountUserCourseProgressArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountUserCourseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
  }


  /**
   * Count Type UserCourseProgressCountOutputType
   */

  export type UserCourseProgressCountOutputType = {
    sections: number
  }

  export type UserCourseProgressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | UserCourseProgressCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * UserCourseProgressCountOutputType without action
   */
  export type UserCourseProgressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgressCountOutputType
     */
    select?: UserCourseProgressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCourseProgressCountOutputType without action
   */
  export type UserCourseProgressCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseSectionProgressWhereInput
  }


  /**
   * Count Type UserCourseSectionProgressCountOutputType
   */

  export type UserCourseSectionProgressCountOutputType = {
    chapters: number
  }

  export type UserCourseSectionProgressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | UserCourseSectionProgressCountOutputTypeCountChaptersArgs
  }

  // Custom InputTypes
  /**
   * UserCourseSectionProgressCountOutputType without action
   */
  export type UserCourseSectionProgressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgressCountOutputType
     */
    select?: UserCourseSectionProgressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCourseSectionProgressCountOutputType without action
   */
  export type UserCourseSectionProgressCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseChapterProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    googleId: string | null
    email: string | null
    name: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
    about: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    googleId: string | null
    email: string | null
    name: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
    about: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    googleId: number
    email: number
    name: number
    password: number
    emailVerified: number
    image: number
    about: number
    experiences: number
    education: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    password?: true
    emailVerified?: true
    image?: true
    about?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    password?: true
    emailVerified?: true
    image?: true
    about?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    password?: true
    emailVerified?: true
    image?: true
    about?: true
    experiences?: true
    education?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    googleId: string | null
    email: string
    name: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
    about: string | null
    experiences: string[]
    education: string[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    googleId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    about?: boolean
    experiences?: boolean
    education?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    userProgresses?: boolean | User$userProgressesArgs<ExtArgs>
    courses?: boolean | User$coursesArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    about?: boolean
    experiences?: boolean
    education?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "googleId" | "email" | "name" | "password" | "emailVerified" | "image" | "about" | "experiences" | "education" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    userProgresses?: boolean | User$userProgressesArgs<ExtArgs>
    courses?: boolean | User$coursesArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      userProgresses: Prisma.$UserCourseProgressPayload<ExtArgs>[]
      courses: Prisma.$CoursePayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      googleId: string | null
      email: string
      name: string | null
      password: string | null
      emailVerified: Date | null
      image: string | null
      about: string | null
      experiences: string[]
      education: string[]
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProgresses<T extends User$userProgressesArgs<ExtArgs> = {}>(args?: Subset<T, User$userProgressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends User$coursesArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly about: FieldRef<"User", 'String'>
    readonly experiences: FieldRef<"User", 'String[]'>
    readonly education: FieldRef<"User", 'String[]'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
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
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.userProgresses
   */
  export type User$userProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    cursor?: UserCourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * User.courses
   */
  export type User$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: number | null
    embeddings: number | null
  }

  export type CourseSumAggregateOutputType = {
    price: number | null
    embeddings: number[]
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    image: string | null
    price: number | null
    level: $Enums.Level | null
    isPublished: boolean | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    image: string | null
    price: number | null
    level: $Enums.Level | null
    isPublished: boolean | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    image: number
    price: number
    level: number
    isPublished: number
    whatYouLearn: number
    requirements: number
    targetAudience: number
    language: number
    createdAt: number
    updatedAt: number
    userId: number
    embeddings: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
    embeddings?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
    embeddings?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    price?: true
    level?: true
    isPublished?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    price?: true
    level?: true
    isPublished?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    price?: true
    level?: true
    isPublished?: true
    whatYouLearn?: true
    requirements?: true
    targetAudience?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    embeddings?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level: $Enums.Level
    isPublished: boolean
    whatYouLearn: string[]
    requirements: string[]
    targetAudience: string[]
    language: string
    createdAt: Date
    updatedAt: Date
    userId: string
    embeddings: number[]
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    price?: boolean
    level?: boolean
    isPublished?: boolean
    whatYouLearn?: boolean
    requirements?: boolean
    targetAudience?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    embeddings?: boolean
    sections?: boolean | Course$sectionsArgs<ExtArgs>
    transactions?: boolean | Course$transactionsArgs<ExtArgs>
    userProgresses?: boolean | Course$userProgressesArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    price?: boolean
    level?: boolean
    isPublished?: boolean
    whatYouLearn?: boolean
    requirements?: boolean
    targetAudience?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    embeddings?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "image" | "price" | "level" | "isPublished" | "whatYouLearn" | "requirements" | "targetAudience" | "language" | "createdAt" | "updatedAt" | "userId" | "embeddings", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | Course$sectionsArgs<ExtArgs>
    transactions?: boolean | Course$transactionsArgs<ExtArgs>
    userProgresses?: boolean | Course$userProgressesArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      sections: Prisma.$SectionPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      userProgresses: Prisma.$UserCourseProgressPayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs>
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      image: string
      price: number
      level: $Enums.Level
      isPublished: boolean
      whatYouLearn: string[]
      requirements: string[]
      targetAudience: string[]
      language: string
      createdAt: Date
      updatedAt: Date
      userId: string
      embeddings: number[]
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * @param {CourseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const course = await prisma.course.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CourseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Course.
     * @param {CourseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const course = await prisma.course.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CourseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends Course$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Course$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Course$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Course$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProgresses<T extends Course$userProgressesArgs<ExtArgs> = {}>(args?: Subset<T, Course$userProgressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends Course$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly category: FieldRef<"Course", 'String'>
    readonly image: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Float'>
    readonly level: FieldRef<"Course", 'Level'>
    readonly isPublished: FieldRef<"Course", 'Boolean'>
    readonly whatYouLearn: FieldRef<"Course", 'String[]'>
    readonly requirements: FieldRef<"Course", 'String[]'>
    readonly targetAudience: FieldRef<"Course", 'String[]'>
    readonly language: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
    readonly userId: FieldRef<"Course", 'String'>
    readonly embeddings: FieldRef<"Course", 'Float[]'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course findRaw
   */
  export type CourseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Course aggregateRaw
   */
  export type CourseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Course.sections
   */
  export type Course$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Course.transactions
   */
  export type Course$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Course.userProgresses
   */
  export type Course$userProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    cursor?: UserCourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * Course.enrollments
   */
  export type Course$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
    userId: string | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
    userId: string | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    courseId: number
    userId: number
    _all: number
  }


  export type EnrollmentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    userId?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    userId?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    userId?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    courseId: string
    userId: string
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>



  export type EnrollmentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    userId?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "courseId" | "userId", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      courseId: string
      userId: string
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * @param {EnrollmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const enrollment = await prisma.enrollment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EnrollmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Enrollment.
     * @param {EnrollmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const enrollment = await prisma.enrollment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EnrollmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'String'>
    readonly createdAt: FieldRef<"Enrollment", 'DateTime'>
    readonly updatedAt: FieldRef<"Enrollment", 'DateTime'>
    readonly courseId: FieldRef<"Enrollment", 'String'>
    readonly userId: FieldRef<"Enrollment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment findRaw
   */
  export type EnrollmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Enrollment aggregateRaw
   */
  export type EnrollmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    sectionTitle: string | null
    sectionDescription: string | null
    courseId: string | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    sectionTitle: string | null
    sectionDescription: string | null
    courseId: string | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    sectionTitle: number
    sectionDescription: number
    courseId: number
    _all: number
  }


  export type SectionMinAggregateInputType = {
    id?: true
    sectionTitle?: true
    sectionDescription?: true
    courseId?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    sectionTitle?: true
    sectionDescription?: true
    courseId?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    sectionTitle?: true
    sectionDescription?: true
    courseId?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    sectionTitle: string
    sectionDescription: string
    courseId: string
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionTitle?: boolean
    sectionDescription?: boolean
    courseId?: boolean
    chapters?: boolean | Section$chaptersArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>



  export type SectionSelectScalar = {
    id?: boolean
    sectionTitle?: boolean
    sectionDescription?: boolean
    courseId?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionTitle" | "sectionDescription" | "courseId", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | Section$chaptersArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionTitle: string
      sectionDescription: string
      courseId: string
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * @param {SectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const section = await prisma.section.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SectionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Section.
     * @param {SectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const section = await prisma.section.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SectionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapters<T extends Section$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Section$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly sectionTitle: FieldRef<"Section", 'String'>
    readonly sectionDescription: FieldRef<"Section", 'String'>
    readonly courseId: FieldRef<"Section", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section findRaw
   */
  export type SectionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Section aggregateRaw
   */
  export type SectionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Section.chapters
   */
  export type Section$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    videoLength: number | null
  }

  export type ChapterSumAggregateOutputType = {
    videoLength: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    content: string | null
    videoLength: number | null
    videoUrl: string | null
    videoUniqueId: string | null
    videoType: string | null
    sectionId: string | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    content: string | null
    videoLength: number | null
    videoUrl: string | null
    videoUniqueId: string | null
    videoType: string | null
    sectionId: string | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    type: number
    title: number
    content: number
    videoLength: number
    videoUrl: number
    videoUniqueId: number
    videoType: number
    sectionId: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    videoLength?: true
  }

  export type ChapterSumAggregateInputType = {
    videoLength?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    content?: true
    videoLength?: true
    videoUrl?: true
    videoUniqueId?: true
    videoType?: true
    sectionId?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    content?: true
    videoLength?: true
    videoUrl?: true
    videoUniqueId?: true
    videoType?: true
    sectionId?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    content?: true
    videoLength?: true
    videoUrl?: true
    videoUniqueId?: true
    videoType?: true
    sectionId?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
    sectionId: string
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    videoLength?: boolean
    videoUrl?: boolean
    videoUniqueId?: boolean
    videoType?: boolean
    sectionId?: boolean
    comments?: boolean | Chapter$commentsArgs<ExtArgs>
    Section?: boolean | SectionDefaultArgs<ExtArgs>
    UserCourseProgress?: boolean | Chapter$UserCourseProgressArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>



  export type ChapterSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    videoLength?: boolean
    videoUrl?: boolean
    videoUniqueId?: boolean
    videoType?: boolean
    sectionId?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "content" | "videoLength" | "videoUrl" | "videoUniqueId" | "videoType" | "sectionId", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Chapter$commentsArgs<ExtArgs>
    Section?: boolean | SectionDefaultArgs<ExtArgs>
    UserCourseProgress?: boolean | Chapter$UserCourseProgressArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      Section: Prisma.$SectionPayload<ExtArgs>
      UserCourseProgress: Prisma.$UserCourseProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      title: string
      content: string
      videoLength: number
      videoUrl: string
      videoUniqueId: string
      videoType: string
      sectionId: string
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * @param {ChapterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chapter = await prisma.chapter.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ChapterFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Chapter.
     * @param {ChapterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chapter = await prisma.chapter.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ChapterAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
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
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Chapter$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UserCourseProgress<T extends Chapter$UserCourseProgressArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$UserCourseProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chapter model
   */
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'String'>
    readonly type: FieldRef<"Chapter", 'String'>
    readonly title: FieldRef<"Chapter", 'String'>
    readonly content: FieldRef<"Chapter", 'String'>
    readonly videoLength: FieldRef<"Chapter", 'Float'>
    readonly videoUrl: FieldRef<"Chapter", 'String'>
    readonly videoUniqueId: FieldRef<"Chapter", 'String'>
    readonly videoType: FieldRef<"Chapter", 'String'>
    readonly sectionId: FieldRef<"Chapter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter findRaw
   */
  export type ChapterFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Chapter aggregateRaw
   */
  export type ChapterAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Chapter.comments
   */
  export type Chapter$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Chapter.UserCourseProgress
   */
  export type Chapter$UserCourseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    cursor?: UserCourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    text: string | null
    timestamp: Date | null
    userId: string | null
    chapterId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    text: string | null
    timestamp: Date | null
    userId: string | null
    chapterId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    timestamp: number
    userId: number
    chapterId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
    timestamp?: true
    userId?: true
    chapterId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
    timestamp?: true
    userId?: true
    chapterId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    timestamp?: true
    userId?: true
    chapterId?: true
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
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    text: string
    timestamp: Date
    userId: string
    chapterId: string
    _count: CommentCountAggregateOutputType | null
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
    timestamp?: boolean
    userId?: boolean
    chapterId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    text?: boolean
    timestamp?: boolean
    userId?: boolean
    chapterId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "timestamp" | "userId" | "chapterId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chapter: Prisma.$ChapterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      timestamp: Date
      userId: string
      chapterId: string
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
     * Find zero or more Comments that matches the filter.
     * @param {CommentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const comment = await prisma.comment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CommentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Comment.
     * @param {CommentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const comment = await prisma.comment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CommentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly timestamp: FieldRef<"Comment", 'DateTime'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly chapterId: FieldRef<"Comment", 'String'>
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
   * Comment findRaw
   */
  export type CommentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comment aggregateRaw
   */
  export type CommentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    paymentProvider: string | null
    transactionId: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    courseId: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    paymentProvider: string | null
    transactionId: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    courseId: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    paymentProvider: number
    transactionId: number
    amount: number
    createdAt: number
    updatedAt: number
    userId: number
    courseId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    paymentProvider?: true
    transactionId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    courseId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    paymentProvider?: true
    transactionId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    courseId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    paymentProvider?: true
    transactionId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    courseId?: true
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
    id: string
    paymentProvider: string
    transactionId: string
    amount: number
    createdAt: Date
    updatedAt: Date
    userId: string
    courseId: string
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
    paymentProvider?: boolean
    transactionId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    courseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type TransactionSelectScalar = {
    id?: boolean
    paymentProvider?: boolean
    transactionId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    courseId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentProvider" | "transactionId" | "amount" | "createdAt" | "updatedAt" | "userId" | "courseId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentProvider: string
      transactionId: string
      amount: number
      createdAt: Date
      updatedAt: Date
      userId: string
      courseId: string
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
     * Find zero or more Transactions that matches the filter.
     * @param {TransactionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const transaction = await prisma.transaction.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TransactionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Transaction.
     * @param {TransactionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const transaction = await prisma.transaction.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TransactionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Transaction", 'String'>
    readonly paymentProvider: FieldRef<"Transaction", 'String'>
    readonly transactionId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly courseId: FieldRef<"Transaction", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
   * Transaction findRaw
   */
  export type TransactionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Transaction aggregateRaw
   */
  export type TransactionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model UserCourseProgress
   */

  export type AggregateUserCourseProgress = {
    _count: UserCourseProgressCountAggregateOutputType | null
    _avg: UserCourseProgressAvgAggregateOutputType | null
    _sum: UserCourseProgressSumAggregateOutputType | null
    _min: UserCourseProgressMinAggregateOutputType | null
    _max: UserCourseProgressMaxAggregateOutputType | null
  }

  export type UserCourseProgressAvgAggregateOutputType = {
    overallProgress: number | null
  }

  export type UserCourseProgressSumAggregateOutputType = {
    overallProgress: number | null
  }

  export type UserCourseProgressMinAggregateOutputType = {
    id: string | null
    enrollmentDate: Date | null
    overallProgress: number | null
    lastAccessedTimestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
    userId: string | null
    chapterId: string | null
  }

  export type UserCourseProgressMaxAggregateOutputType = {
    id: string | null
    enrollmentDate: Date | null
    overallProgress: number | null
    lastAccessedTimestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
    userId: string | null
    chapterId: string | null
  }

  export type UserCourseProgressCountAggregateOutputType = {
    id: number
    enrollmentDate: number
    overallProgress: number
    lastAccessedTimestamp: number
    createdAt: number
    updatedAt: number
    courseId: number
    userId: number
    chapterId: number
    _all: number
  }


  export type UserCourseProgressAvgAggregateInputType = {
    overallProgress?: true
  }

  export type UserCourseProgressSumAggregateInputType = {
    overallProgress?: true
  }

  export type UserCourseProgressMinAggregateInputType = {
    id?: true
    enrollmentDate?: true
    overallProgress?: true
    lastAccessedTimestamp?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    userId?: true
    chapterId?: true
  }

  export type UserCourseProgressMaxAggregateInputType = {
    id?: true
    enrollmentDate?: true
    overallProgress?: true
    lastAccessedTimestamp?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    userId?: true
    chapterId?: true
  }

  export type UserCourseProgressCountAggregateInputType = {
    id?: true
    enrollmentDate?: true
    overallProgress?: true
    lastAccessedTimestamp?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    userId?: true
    chapterId?: true
    _all?: true
  }

  export type UserCourseProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseProgress to aggregate.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCourseProgresses
    **/
    _count?: true | UserCourseProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCourseProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCourseProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCourseProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCourseProgressMaxAggregateInputType
  }

  export type GetUserCourseProgressAggregateType<T extends UserCourseProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCourseProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCourseProgress[P]>
      : GetScalarType<T[P], AggregateUserCourseProgress[P]>
  }




  export type UserCourseProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithAggregationInput | UserCourseProgressOrderByWithAggregationInput[]
    by: UserCourseProgressScalarFieldEnum[] | UserCourseProgressScalarFieldEnum
    having?: UserCourseProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCourseProgressCountAggregateInputType | true
    _avg?: UserCourseProgressAvgAggregateInputType
    _sum?: UserCourseProgressSumAggregateInputType
    _min?: UserCourseProgressMinAggregateInputType
    _max?: UserCourseProgressMaxAggregateInputType
  }

  export type UserCourseProgressGroupByOutputType = {
    id: string
    enrollmentDate: Date
    overallProgress: number
    lastAccessedTimestamp: Date
    createdAt: Date
    updatedAt: Date
    courseId: string
    userId: string
    chapterId: string | null
    _count: UserCourseProgressCountAggregateOutputType | null
    _avg: UserCourseProgressAvgAggregateOutputType | null
    _sum: UserCourseProgressSumAggregateOutputType | null
    _min: UserCourseProgressMinAggregateOutputType | null
    _max: UserCourseProgressMaxAggregateOutputType | null
  }

  type GetUserCourseProgressGroupByPayload<T extends UserCourseProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCourseProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCourseProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCourseProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserCourseProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserCourseProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollmentDate?: boolean
    overallProgress?: boolean
    lastAccessedTimestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    userId?: boolean
    chapterId?: boolean
    sections?: boolean | UserCourseProgress$sectionsArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapter?: boolean | UserCourseProgress$chapterArgs<ExtArgs>
    _count?: boolean | UserCourseProgressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCourseProgress"]>



  export type UserCourseProgressSelectScalar = {
    id?: boolean
    enrollmentDate?: boolean
    overallProgress?: boolean
    lastAccessedTimestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    userId?: boolean
    chapterId?: boolean
  }

  export type UserCourseProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enrollmentDate" | "overallProgress" | "lastAccessedTimestamp" | "createdAt" | "updatedAt" | "courseId" | "userId" | "chapterId", ExtArgs["result"]["userCourseProgress"]>
  export type UserCourseProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | UserCourseProgress$sectionsArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapter?: boolean | UserCourseProgress$chapterArgs<ExtArgs>
    _count?: boolean | UserCourseProgressCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserCourseProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCourseProgress"
    objects: {
      sections: Prisma.$UserCourseSectionProgressPayload<ExtArgs>[]
      course: Prisma.$CoursePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      chapter: Prisma.$ChapterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enrollmentDate: Date
      overallProgress: number
      lastAccessedTimestamp: Date
      createdAt: Date
      updatedAt: Date
      courseId: string
      userId: string
      chapterId: string | null
    }, ExtArgs["result"]["userCourseProgress"]>
    composites: {}
  }

  type UserCourseProgressGetPayload<S extends boolean | null | undefined | UserCourseProgressDefaultArgs> = $Result.GetResult<Prisma.$UserCourseProgressPayload, S>

  type UserCourseProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCourseProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCourseProgressCountAggregateInputType | true
    }

  export interface UserCourseProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCourseProgress'], meta: { name: 'UserCourseProgress' } }
    /**
     * Find zero or one UserCourseProgress that matches the filter.
     * @param {UserCourseProgressFindUniqueArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCourseProgressFindUniqueArgs>(args: SelectSubset<T, UserCourseProgressFindUniqueArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCourseProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCourseProgressFindUniqueOrThrowArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCourseProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCourseProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressFindFirstArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCourseProgressFindFirstArgs>(args?: SelectSubset<T, UserCourseProgressFindFirstArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressFindFirstOrThrowArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCourseProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCourseProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourseProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCourseProgresses
     * const userCourseProgresses = await prisma.userCourseProgress.findMany()
     * 
     * // Get first 10 UserCourseProgresses
     * const userCourseProgresses = await prisma.userCourseProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCourseProgressWithIdOnly = await prisma.userCourseProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCourseProgressFindManyArgs>(args?: SelectSubset<T, UserCourseProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCourseProgress.
     * @param {UserCourseProgressCreateArgs} args - Arguments to create a UserCourseProgress.
     * @example
     * // Create one UserCourseProgress
     * const UserCourseProgress = await prisma.userCourseProgress.create({
     *   data: {
     *     // ... data to create a UserCourseProgress
     *   }
     * })
     * 
     */
    create<T extends UserCourseProgressCreateArgs>(args: SelectSubset<T, UserCourseProgressCreateArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCourseProgresses.
     * @param {UserCourseProgressCreateManyArgs} args - Arguments to create many UserCourseProgresses.
     * @example
     * // Create many UserCourseProgresses
     * const userCourseProgress = await prisma.userCourseProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCourseProgressCreateManyArgs>(args?: SelectSubset<T, UserCourseProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCourseProgress.
     * @param {UserCourseProgressDeleteArgs} args - Arguments to delete one UserCourseProgress.
     * @example
     * // Delete one UserCourseProgress
     * const UserCourseProgress = await prisma.userCourseProgress.delete({
     *   where: {
     *     // ... filter to delete one UserCourseProgress
     *   }
     * })
     * 
     */
    delete<T extends UserCourseProgressDeleteArgs>(args: SelectSubset<T, UserCourseProgressDeleteArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCourseProgress.
     * @param {UserCourseProgressUpdateArgs} args - Arguments to update one UserCourseProgress.
     * @example
     * // Update one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCourseProgressUpdateArgs>(args: SelectSubset<T, UserCourseProgressUpdateArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCourseProgresses.
     * @param {UserCourseProgressDeleteManyArgs} args - Arguments to filter UserCourseProgresses to delete.
     * @example
     * // Delete a few UserCourseProgresses
     * const { count } = await prisma.userCourseProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCourseProgressDeleteManyArgs>(args?: SelectSubset<T, UserCourseProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCourseProgresses
     * const userCourseProgress = await prisma.userCourseProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCourseProgressUpdateManyArgs>(args: SelectSubset<T, UserCourseProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCourseProgress.
     * @param {UserCourseProgressUpsertArgs} args - Arguments to update or create a UserCourseProgress.
     * @example
     * // Update or create a UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.upsert({
     *   create: {
     *     // ... data to create a UserCourseProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCourseProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserCourseProgressUpsertArgs>(args: SelectSubset<T, UserCourseProgressUpsertArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourseProgresses that matches the filter.
     * @param {UserCourseProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userCourseProgress = await prisma.userCourseProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserCourseProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserCourseProgress.
     * @param {UserCourseProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userCourseProgress = await prisma.userCourseProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserCourseProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserCourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressCountArgs} args - Arguments to filter UserCourseProgresses to count.
     * @example
     * // Count the number of UserCourseProgresses
     * const count = await prisma.userCourseProgress.count({
     *   where: {
     *     // ... the filter for the UserCourseProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserCourseProgressCountArgs>(
      args?: Subset<T, UserCourseProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCourseProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCourseProgressAggregateArgs>(args: Subset<T, UserCourseProgressAggregateArgs>): Prisma.PrismaPromise<GetUserCourseProgressAggregateType<T>>

    /**
     * Group by UserCourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressGroupByArgs} args - Group by arguments.
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
      T extends UserCourseProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCourseProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserCourseProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCourseProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCourseProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCourseProgress model
   */
  readonly fields: UserCourseProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCourseProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCourseProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends UserCourseProgress$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, UserCourseProgress$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapter<T extends UserCourseProgress$chapterArgs<ExtArgs> = {}>(args?: Subset<T, UserCourseProgress$chapterArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCourseProgress model
   */
  interface UserCourseProgressFieldRefs {
    readonly id: FieldRef<"UserCourseProgress", 'String'>
    readonly enrollmentDate: FieldRef<"UserCourseProgress", 'DateTime'>
    readonly overallProgress: FieldRef<"UserCourseProgress", 'Float'>
    readonly lastAccessedTimestamp: FieldRef<"UserCourseProgress", 'DateTime'>
    readonly createdAt: FieldRef<"UserCourseProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCourseProgress", 'DateTime'>
    readonly courseId: FieldRef<"UserCourseProgress", 'String'>
    readonly userId: FieldRef<"UserCourseProgress", 'String'>
    readonly chapterId: FieldRef<"UserCourseProgress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserCourseProgress findUnique
   */
  export type UserCourseProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress findUniqueOrThrow
   */
  export type UserCourseProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress findFirst
   */
  export type UserCourseProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseProgresses.
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseProgresses.
     */
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * UserCourseProgress findFirstOrThrow
   */
  export type UserCourseProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseProgresses.
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseProgresses.
     */
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * UserCourseProgress findMany
   */
  export type UserCourseProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgresses to fetch.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCourseProgresses.
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * UserCourseProgress create
   */
  export type UserCourseProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCourseProgress.
     */
    data: XOR<UserCourseProgressCreateInput, UserCourseProgressUncheckedCreateInput>
  }

  /**
   * UserCourseProgress createMany
   */
  export type UserCourseProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCourseProgresses.
     */
    data: UserCourseProgressCreateManyInput | UserCourseProgressCreateManyInput[]
  }

  /**
   * UserCourseProgress update
   */
  export type UserCourseProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCourseProgress.
     */
    data: XOR<UserCourseProgressUpdateInput, UserCourseProgressUncheckedUpdateInput>
    /**
     * Choose, which UserCourseProgress to update.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress updateMany
   */
  export type UserCourseProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCourseProgresses.
     */
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserCourseProgresses to update
     */
    where?: UserCourseProgressWhereInput
    /**
     * Limit how many UserCourseProgresses to update.
     */
    limit?: number
  }

  /**
   * UserCourseProgress upsert
   */
  export type UserCourseProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCourseProgress to update in case it exists.
     */
    where: UserCourseProgressWhereUniqueInput
    /**
     * In case the UserCourseProgress found by the `where` argument doesn't exist, create a new UserCourseProgress with this data.
     */
    create: XOR<UserCourseProgressCreateInput, UserCourseProgressUncheckedCreateInput>
    /**
     * In case the UserCourseProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCourseProgressUpdateInput, UserCourseProgressUncheckedUpdateInput>
  }

  /**
   * UserCourseProgress delete
   */
  export type UserCourseProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter which UserCourseProgress to delete.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress deleteMany
   */
  export type UserCourseProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseProgresses to delete
     */
    where?: UserCourseProgressWhereInput
    /**
     * Limit how many UserCourseProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserCourseProgress findRaw
   */
  export type UserCourseProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserCourseProgress aggregateRaw
   */
  export type UserCourseProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserCourseProgress.sections
   */
  export type UserCourseProgress$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
    where?: UserCourseSectionProgressWhereInput
    orderBy?: UserCourseSectionProgressOrderByWithRelationInput | UserCourseSectionProgressOrderByWithRelationInput[]
    cursor?: UserCourseSectionProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseSectionProgressScalarFieldEnum | UserCourseSectionProgressScalarFieldEnum[]
  }

  /**
   * UserCourseProgress.chapter
   */
  export type UserCourseProgress$chapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
  }

  /**
   * UserCourseProgress without action
   */
  export type UserCourseProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserCourseSectionProgress
   */

  export type AggregateUserCourseSectionProgress = {
    _count: UserCourseSectionProgressCountAggregateOutputType | null
    _min: UserCourseSectionProgressMinAggregateOutputType | null
    _max: UserCourseSectionProgressMaxAggregateOutputType | null
  }

  export type UserCourseSectionProgressMinAggregateOutputType = {
    id: string | null
    sectionId: string | null
    userCourseProgressId: string | null
  }

  export type UserCourseSectionProgressMaxAggregateOutputType = {
    id: string | null
    sectionId: string | null
    userCourseProgressId: string | null
  }

  export type UserCourseSectionProgressCountAggregateOutputType = {
    id: number
    sectionId: number
    userCourseProgressId: number
    _all: number
  }


  export type UserCourseSectionProgressMinAggregateInputType = {
    id?: true
    sectionId?: true
    userCourseProgressId?: true
  }

  export type UserCourseSectionProgressMaxAggregateInputType = {
    id?: true
    sectionId?: true
    userCourseProgressId?: true
  }

  export type UserCourseSectionProgressCountAggregateInputType = {
    id?: true
    sectionId?: true
    userCourseProgressId?: true
    _all?: true
  }

  export type UserCourseSectionProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseSectionProgress to aggregate.
     */
    where?: UserCourseSectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseSectionProgresses to fetch.
     */
    orderBy?: UserCourseSectionProgressOrderByWithRelationInput | UserCourseSectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCourseSectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseSectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseSectionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCourseSectionProgresses
    **/
    _count?: true | UserCourseSectionProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCourseSectionProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCourseSectionProgressMaxAggregateInputType
  }

  export type GetUserCourseSectionProgressAggregateType<T extends UserCourseSectionProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCourseSectionProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCourseSectionProgress[P]>
      : GetScalarType<T[P], AggregateUserCourseSectionProgress[P]>
  }




  export type UserCourseSectionProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseSectionProgressWhereInput
    orderBy?: UserCourseSectionProgressOrderByWithAggregationInput | UserCourseSectionProgressOrderByWithAggregationInput[]
    by: UserCourseSectionProgressScalarFieldEnum[] | UserCourseSectionProgressScalarFieldEnum
    having?: UserCourseSectionProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCourseSectionProgressCountAggregateInputType | true
    _min?: UserCourseSectionProgressMinAggregateInputType
    _max?: UserCourseSectionProgressMaxAggregateInputType
  }

  export type UserCourseSectionProgressGroupByOutputType = {
    id: string
    sectionId: string
    userCourseProgressId: string
    _count: UserCourseSectionProgressCountAggregateOutputType | null
    _min: UserCourseSectionProgressMinAggregateOutputType | null
    _max: UserCourseSectionProgressMaxAggregateOutputType | null
  }

  type GetUserCourseSectionProgressGroupByPayload<T extends UserCourseSectionProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCourseSectionProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCourseSectionProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCourseSectionProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserCourseSectionProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserCourseSectionProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    userCourseProgressId?: boolean
    chapters?: boolean | UserCourseSectionProgress$chaptersArgs<ExtArgs>
    userCourseProgress?: boolean | UserCourseProgressDefaultArgs<ExtArgs>
    _count?: boolean | UserCourseSectionProgressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCourseSectionProgress"]>



  export type UserCourseSectionProgressSelectScalar = {
    id?: boolean
    sectionId?: boolean
    userCourseProgressId?: boolean
  }

  export type UserCourseSectionProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionId" | "userCourseProgressId", ExtArgs["result"]["userCourseSectionProgress"]>
  export type UserCourseSectionProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | UserCourseSectionProgress$chaptersArgs<ExtArgs>
    userCourseProgress?: boolean | UserCourseProgressDefaultArgs<ExtArgs>
    _count?: boolean | UserCourseSectionProgressCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserCourseSectionProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCourseSectionProgress"
    objects: {
      chapters: Prisma.$UserCourseChapterProgressPayload<ExtArgs>[]
      userCourseProgress: Prisma.$UserCourseProgressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionId: string
      userCourseProgressId: string
    }, ExtArgs["result"]["userCourseSectionProgress"]>
    composites: {}
  }

  type UserCourseSectionProgressGetPayload<S extends boolean | null | undefined | UserCourseSectionProgressDefaultArgs> = $Result.GetResult<Prisma.$UserCourseSectionProgressPayload, S>

  type UserCourseSectionProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCourseSectionProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCourseSectionProgressCountAggregateInputType | true
    }

  export interface UserCourseSectionProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCourseSectionProgress'], meta: { name: 'UserCourseSectionProgress' } }
    /**
     * Find zero or one UserCourseSectionProgress that matches the filter.
     * @param {UserCourseSectionProgressFindUniqueArgs} args - Arguments to find a UserCourseSectionProgress
     * @example
     * // Get one UserCourseSectionProgress
     * const userCourseSectionProgress = await prisma.userCourseSectionProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCourseSectionProgressFindUniqueArgs>(args: SelectSubset<T, UserCourseSectionProgressFindUniqueArgs<ExtArgs>>): Prisma__UserCourseSectionProgressClient<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCourseSectionProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCourseSectionProgressFindUniqueOrThrowArgs} args - Arguments to find a UserCourseSectionProgress
     * @example
     * // Get one UserCourseSectionProgress
     * const userCourseSectionProgress = await prisma.userCourseSectionProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCourseSectionProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCourseSectionProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCourseSectionProgressClient<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseSectionProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseSectionProgressFindFirstArgs} args - Arguments to find a UserCourseSectionProgress
     * @example
     * // Get one UserCourseSectionProgress
     * const userCourseSectionProgress = await prisma.userCourseSectionProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCourseSectionProgressFindFirstArgs>(args?: SelectSubset<T, UserCourseSectionProgressFindFirstArgs<ExtArgs>>): Prisma__UserCourseSectionProgressClient<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseSectionProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseSectionProgressFindFirstOrThrowArgs} args - Arguments to find a UserCourseSectionProgress
     * @example
     * // Get one UserCourseSectionProgress
     * const userCourseSectionProgress = await prisma.userCourseSectionProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCourseSectionProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCourseSectionProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCourseSectionProgressClient<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourseSectionProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseSectionProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCourseSectionProgresses
     * const userCourseSectionProgresses = await prisma.userCourseSectionProgress.findMany()
     * 
     * // Get first 10 UserCourseSectionProgresses
     * const userCourseSectionProgresses = await prisma.userCourseSectionProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCourseSectionProgressWithIdOnly = await prisma.userCourseSectionProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCourseSectionProgressFindManyArgs>(args?: SelectSubset<T, UserCourseSectionProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCourseSectionProgress.
     * @param {UserCourseSectionProgressCreateArgs} args - Arguments to create a UserCourseSectionProgress.
     * @example
     * // Create one UserCourseSectionProgress
     * const UserCourseSectionProgress = await prisma.userCourseSectionProgress.create({
     *   data: {
     *     // ... data to create a UserCourseSectionProgress
     *   }
     * })
     * 
     */
    create<T extends UserCourseSectionProgressCreateArgs>(args: SelectSubset<T, UserCourseSectionProgressCreateArgs<ExtArgs>>): Prisma__UserCourseSectionProgressClient<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCourseSectionProgresses.
     * @param {UserCourseSectionProgressCreateManyArgs} args - Arguments to create many UserCourseSectionProgresses.
     * @example
     * // Create many UserCourseSectionProgresses
     * const userCourseSectionProgress = await prisma.userCourseSectionProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCourseSectionProgressCreateManyArgs>(args?: SelectSubset<T, UserCourseSectionProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCourseSectionProgress.
     * @param {UserCourseSectionProgressDeleteArgs} args - Arguments to delete one UserCourseSectionProgress.
     * @example
     * // Delete one UserCourseSectionProgress
     * const UserCourseSectionProgress = await prisma.userCourseSectionProgress.delete({
     *   where: {
     *     // ... filter to delete one UserCourseSectionProgress
     *   }
     * })
     * 
     */
    delete<T extends UserCourseSectionProgressDeleteArgs>(args: SelectSubset<T, UserCourseSectionProgressDeleteArgs<ExtArgs>>): Prisma__UserCourseSectionProgressClient<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCourseSectionProgress.
     * @param {UserCourseSectionProgressUpdateArgs} args - Arguments to update one UserCourseSectionProgress.
     * @example
     * // Update one UserCourseSectionProgress
     * const userCourseSectionProgress = await prisma.userCourseSectionProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCourseSectionProgressUpdateArgs>(args: SelectSubset<T, UserCourseSectionProgressUpdateArgs<ExtArgs>>): Prisma__UserCourseSectionProgressClient<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCourseSectionProgresses.
     * @param {UserCourseSectionProgressDeleteManyArgs} args - Arguments to filter UserCourseSectionProgresses to delete.
     * @example
     * // Delete a few UserCourseSectionProgresses
     * const { count } = await prisma.userCourseSectionProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCourseSectionProgressDeleteManyArgs>(args?: SelectSubset<T, UserCourseSectionProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCourseSectionProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseSectionProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCourseSectionProgresses
     * const userCourseSectionProgress = await prisma.userCourseSectionProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCourseSectionProgressUpdateManyArgs>(args: SelectSubset<T, UserCourseSectionProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCourseSectionProgress.
     * @param {UserCourseSectionProgressUpsertArgs} args - Arguments to update or create a UserCourseSectionProgress.
     * @example
     * // Update or create a UserCourseSectionProgress
     * const userCourseSectionProgress = await prisma.userCourseSectionProgress.upsert({
     *   create: {
     *     // ... data to create a UserCourseSectionProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCourseSectionProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserCourseSectionProgressUpsertArgs>(args: SelectSubset<T, UserCourseSectionProgressUpsertArgs<ExtArgs>>): Prisma__UserCourseSectionProgressClient<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourseSectionProgresses that matches the filter.
     * @param {UserCourseSectionProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userCourseSectionProgress = await prisma.userCourseSectionProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserCourseSectionProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserCourseSectionProgress.
     * @param {UserCourseSectionProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userCourseSectionProgress = await prisma.userCourseSectionProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserCourseSectionProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserCourseSectionProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseSectionProgressCountArgs} args - Arguments to filter UserCourseSectionProgresses to count.
     * @example
     * // Count the number of UserCourseSectionProgresses
     * const count = await prisma.userCourseSectionProgress.count({
     *   where: {
     *     // ... the filter for the UserCourseSectionProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserCourseSectionProgressCountArgs>(
      args?: Subset<T, UserCourseSectionProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCourseSectionProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCourseSectionProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseSectionProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCourseSectionProgressAggregateArgs>(args: Subset<T, UserCourseSectionProgressAggregateArgs>): Prisma.PrismaPromise<GetUserCourseSectionProgressAggregateType<T>>

    /**
     * Group by UserCourseSectionProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseSectionProgressGroupByArgs} args - Group by arguments.
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
      T extends UserCourseSectionProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCourseSectionProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserCourseSectionProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCourseSectionProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCourseSectionProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCourseSectionProgress model
   */
  readonly fields: UserCourseSectionProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCourseSectionProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCourseSectionProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapters<T extends UserCourseSectionProgress$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, UserCourseSectionProgress$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseChapterProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userCourseProgress<T extends UserCourseProgressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserCourseProgressDefaultArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCourseSectionProgress model
   */
  interface UserCourseSectionProgressFieldRefs {
    readonly id: FieldRef<"UserCourseSectionProgress", 'String'>
    readonly sectionId: FieldRef<"UserCourseSectionProgress", 'String'>
    readonly userCourseProgressId: FieldRef<"UserCourseSectionProgress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserCourseSectionProgress findUnique
   */
  export type UserCourseSectionProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseSectionProgress to fetch.
     */
    where: UserCourseSectionProgressWhereUniqueInput
  }

  /**
   * UserCourseSectionProgress findUniqueOrThrow
   */
  export type UserCourseSectionProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseSectionProgress to fetch.
     */
    where: UserCourseSectionProgressWhereUniqueInput
  }

  /**
   * UserCourseSectionProgress findFirst
   */
  export type UserCourseSectionProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseSectionProgress to fetch.
     */
    where?: UserCourseSectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseSectionProgresses to fetch.
     */
    orderBy?: UserCourseSectionProgressOrderByWithRelationInput | UserCourseSectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseSectionProgresses.
     */
    cursor?: UserCourseSectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseSectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseSectionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseSectionProgresses.
     */
    distinct?: UserCourseSectionProgressScalarFieldEnum | UserCourseSectionProgressScalarFieldEnum[]
  }

  /**
   * UserCourseSectionProgress findFirstOrThrow
   */
  export type UserCourseSectionProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseSectionProgress to fetch.
     */
    where?: UserCourseSectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseSectionProgresses to fetch.
     */
    orderBy?: UserCourseSectionProgressOrderByWithRelationInput | UserCourseSectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseSectionProgresses.
     */
    cursor?: UserCourseSectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseSectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseSectionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseSectionProgresses.
     */
    distinct?: UserCourseSectionProgressScalarFieldEnum | UserCourseSectionProgressScalarFieldEnum[]
  }

  /**
   * UserCourseSectionProgress findMany
   */
  export type UserCourseSectionProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseSectionProgresses to fetch.
     */
    where?: UserCourseSectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseSectionProgresses to fetch.
     */
    orderBy?: UserCourseSectionProgressOrderByWithRelationInput | UserCourseSectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCourseSectionProgresses.
     */
    cursor?: UserCourseSectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseSectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseSectionProgresses.
     */
    skip?: number
    distinct?: UserCourseSectionProgressScalarFieldEnum | UserCourseSectionProgressScalarFieldEnum[]
  }

  /**
   * UserCourseSectionProgress create
   */
  export type UserCourseSectionProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCourseSectionProgress.
     */
    data: XOR<UserCourseSectionProgressCreateInput, UserCourseSectionProgressUncheckedCreateInput>
  }

  /**
   * UserCourseSectionProgress createMany
   */
  export type UserCourseSectionProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCourseSectionProgresses.
     */
    data: UserCourseSectionProgressCreateManyInput | UserCourseSectionProgressCreateManyInput[]
  }

  /**
   * UserCourseSectionProgress update
   */
  export type UserCourseSectionProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCourseSectionProgress.
     */
    data: XOR<UserCourseSectionProgressUpdateInput, UserCourseSectionProgressUncheckedUpdateInput>
    /**
     * Choose, which UserCourseSectionProgress to update.
     */
    where: UserCourseSectionProgressWhereUniqueInput
  }

  /**
   * UserCourseSectionProgress updateMany
   */
  export type UserCourseSectionProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCourseSectionProgresses.
     */
    data: XOR<UserCourseSectionProgressUpdateManyMutationInput, UserCourseSectionProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserCourseSectionProgresses to update
     */
    where?: UserCourseSectionProgressWhereInput
    /**
     * Limit how many UserCourseSectionProgresses to update.
     */
    limit?: number
  }

  /**
   * UserCourseSectionProgress upsert
   */
  export type UserCourseSectionProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCourseSectionProgress to update in case it exists.
     */
    where: UserCourseSectionProgressWhereUniqueInput
    /**
     * In case the UserCourseSectionProgress found by the `where` argument doesn't exist, create a new UserCourseSectionProgress with this data.
     */
    create: XOR<UserCourseSectionProgressCreateInput, UserCourseSectionProgressUncheckedCreateInput>
    /**
     * In case the UserCourseSectionProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCourseSectionProgressUpdateInput, UserCourseSectionProgressUncheckedUpdateInput>
  }

  /**
   * UserCourseSectionProgress delete
   */
  export type UserCourseSectionProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
    /**
     * Filter which UserCourseSectionProgress to delete.
     */
    where: UserCourseSectionProgressWhereUniqueInput
  }

  /**
   * UserCourseSectionProgress deleteMany
   */
  export type UserCourseSectionProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseSectionProgresses to delete
     */
    where?: UserCourseSectionProgressWhereInput
    /**
     * Limit how many UserCourseSectionProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserCourseSectionProgress findRaw
   */
  export type UserCourseSectionProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserCourseSectionProgress aggregateRaw
   */
  export type UserCourseSectionProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserCourseSectionProgress.chapters
   */
  export type UserCourseSectionProgress$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
    where?: UserCourseChapterProgressWhereInput
    orderBy?: UserCourseChapterProgressOrderByWithRelationInput | UserCourseChapterProgressOrderByWithRelationInput[]
    cursor?: UserCourseChapterProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseChapterProgressScalarFieldEnum | UserCourseChapterProgressScalarFieldEnum[]
  }

  /**
   * UserCourseSectionProgress without action
   */
  export type UserCourseSectionProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseSectionProgress
     */
    select?: UserCourseSectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseSectionProgress
     */
    omit?: UserCourseSectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseSectionProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserCourseChapterProgress
   */

  export type AggregateUserCourseChapterProgress = {
    _count: UserCourseChapterProgressCountAggregateOutputType | null
    _avg: UserCourseChapterProgressAvgAggregateOutputType | null
    _sum: UserCourseChapterProgressSumAggregateOutputType | null
    _min: UserCourseChapterProgressMinAggregateOutputType | null
    _max: UserCourseChapterProgressMaxAggregateOutputType | null
  }

  export type UserCourseChapterProgressAvgAggregateOutputType = {
    lastPosition: number | null
  }

  export type UserCourseChapterProgressSumAggregateOutputType = {
    lastPosition: number | null
  }

  export type UserCourseChapterProgressMinAggregateOutputType = {
    id: string | null
    chapterId: string | null
    completed: boolean | null
    lastPosition: number | null
    userCourseSectionProgressId: string | null
  }

  export type UserCourseChapterProgressMaxAggregateOutputType = {
    id: string | null
    chapterId: string | null
    completed: boolean | null
    lastPosition: number | null
    userCourseSectionProgressId: string | null
  }

  export type UserCourseChapterProgressCountAggregateOutputType = {
    id: number
    chapterId: number
    completed: number
    lastPosition: number
    userCourseSectionProgressId: number
    _all: number
  }


  export type UserCourseChapterProgressAvgAggregateInputType = {
    lastPosition?: true
  }

  export type UserCourseChapterProgressSumAggregateInputType = {
    lastPosition?: true
  }

  export type UserCourseChapterProgressMinAggregateInputType = {
    id?: true
    chapterId?: true
    completed?: true
    lastPosition?: true
    userCourseSectionProgressId?: true
  }

  export type UserCourseChapterProgressMaxAggregateInputType = {
    id?: true
    chapterId?: true
    completed?: true
    lastPosition?: true
    userCourseSectionProgressId?: true
  }

  export type UserCourseChapterProgressCountAggregateInputType = {
    id?: true
    chapterId?: true
    completed?: true
    lastPosition?: true
    userCourseSectionProgressId?: true
    _all?: true
  }

  export type UserCourseChapterProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseChapterProgress to aggregate.
     */
    where?: UserCourseChapterProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseChapterProgresses to fetch.
     */
    orderBy?: UserCourseChapterProgressOrderByWithRelationInput | UserCourseChapterProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCourseChapterProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseChapterProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseChapterProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCourseChapterProgresses
    **/
    _count?: true | UserCourseChapterProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCourseChapterProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCourseChapterProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCourseChapterProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCourseChapterProgressMaxAggregateInputType
  }

  export type GetUserCourseChapterProgressAggregateType<T extends UserCourseChapterProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCourseChapterProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCourseChapterProgress[P]>
      : GetScalarType<T[P], AggregateUserCourseChapterProgress[P]>
  }




  export type UserCourseChapterProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseChapterProgressWhereInput
    orderBy?: UserCourseChapterProgressOrderByWithAggregationInput | UserCourseChapterProgressOrderByWithAggregationInput[]
    by: UserCourseChapterProgressScalarFieldEnum[] | UserCourseChapterProgressScalarFieldEnum
    having?: UserCourseChapterProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCourseChapterProgressCountAggregateInputType | true
    _avg?: UserCourseChapterProgressAvgAggregateInputType
    _sum?: UserCourseChapterProgressSumAggregateInputType
    _min?: UserCourseChapterProgressMinAggregateInputType
    _max?: UserCourseChapterProgressMaxAggregateInputType
  }

  export type UserCourseChapterProgressGroupByOutputType = {
    id: string
    chapterId: string
    completed: boolean
    lastPosition: number
    userCourseSectionProgressId: string
    _count: UserCourseChapterProgressCountAggregateOutputType | null
    _avg: UserCourseChapterProgressAvgAggregateOutputType | null
    _sum: UserCourseChapterProgressSumAggregateOutputType | null
    _min: UserCourseChapterProgressMinAggregateOutputType | null
    _max: UserCourseChapterProgressMaxAggregateOutputType | null
  }

  type GetUserCourseChapterProgressGroupByPayload<T extends UserCourseChapterProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCourseChapterProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCourseChapterProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCourseChapterProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserCourseChapterProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserCourseChapterProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapterId?: boolean
    completed?: boolean
    lastPosition?: boolean
    userCourseSectionProgressId?: boolean
    userCourseSectionProgress?: boolean | UserCourseSectionProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCourseChapterProgress"]>



  export type UserCourseChapterProgressSelectScalar = {
    id?: boolean
    chapterId?: boolean
    completed?: boolean
    lastPosition?: boolean
    userCourseSectionProgressId?: boolean
  }

  export type UserCourseChapterProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chapterId" | "completed" | "lastPosition" | "userCourseSectionProgressId", ExtArgs["result"]["userCourseChapterProgress"]>
  export type UserCourseChapterProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCourseSectionProgress?: boolean | UserCourseSectionProgressDefaultArgs<ExtArgs>
  }

  export type $UserCourseChapterProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCourseChapterProgress"
    objects: {
      userCourseSectionProgress: Prisma.$UserCourseSectionProgressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chapterId: string
      completed: boolean
      lastPosition: number
      userCourseSectionProgressId: string
    }, ExtArgs["result"]["userCourseChapterProgress"]>
    composites: {}
  }

  type UserCourseChapterProgressGetPayload<S extends boolean | null | undefined | UserCourseChapterProgressDefaultArgs> = $Result.GetResult<Prisma.$UserCourseChapterProgressPayload, S>

  type UserCourseChapterProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCourseChapterProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCourseChapterProgressCountAggregateInputType | true
    }

  export interface UserCourseChapterProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCourseChapterProgress'], meta: { name: 'UserCourseChapterProgress' } }
    /**
     * Find zero or one UserCourseChapterProgress that matches the filter.
     * @param {UserCourseChapterProgressFindUniqueArgs} args - Arguments to find a UserCourseChapterProgress
     * @example
     * // Get one UserCourseChapterProgress
     * const userCourseChapterProgress = await prisma.userCourseChapterProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCourseChapterProgressFindUniqueArgs>(args: SelectSubset<T, UserCourseChapterProgressFindUniqueArgs<ExtArgs>>): Prisma__UserCourseChapterProgressClient<$Result.GetResult<Prisma.$UserCourseChapterProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCourseChapterProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCourseChapterProgressFindUniqueOrThrowArgs} args - Arguments to find a UserCourseChapterProgress
     * @example
     * // Get one UserCourseChapterProgress
     * const userCourseChapterProgress = await prisma.userCourseChapterProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCourseChapterProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCourseChapterProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCourseChapterProgressClient<$Result.GetResult<Prisma.$UserCourseChapterProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseChapterProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseChapterProgressFindFirstArgs} args - Arguments to find a UserCourseChapterProgress
     * @example
     * // Get one UserCourseChapterProgress
     * const userCourseChapterProgress = await prisma.userCourseChapterProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCourseChapterProgressFindFirstArgs>(args?: SelectSubset<T, UserCourseChapterProgressFindFirstArgs<ExtArgs>>): Prisma__UserCourseChapterProgressClient<$Result.GetResult<Prisma.$UserCourseChapterProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseChapterProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseChapterProgressFindFirstOrThrowArgs} args - Arguments to find a UserCourseChapterProgress
     * @example
     * // Get one UserCourseChapterProgress
     * const userCourseChapterProgress = await prisma.userCourseChapterProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCourseChapterProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCourseChapterProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCourseChapterProgressClient<$Result.GetResult<Prisma.$UserCourseChapterProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourseChapterProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseChapterProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCourseChapterProgresses
     * const userCourseChapterProgresses = await prisma.userCourseChapterProgress.findMany()
     * 
     * // Get first 10 UserCourseChapterProgresses
     * const userCourseChapterProgresses = await prisma.userCourseChapterProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCourseChapterProgressWithIdOnly = await prisma.userCourseChapterProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCourseChapterProgressFindManyArgs>(args?: SelectSubset<T, UserCourseChapterProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseChapterProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCourseChapterProgress.
     * @param {UserCourseChapterProgressCreateArgs} args - Arguments to create a UserCourseChapterProgress.
     * @example
     * // Create one UserCourseChapterProgress
     * const UserCourseChapterProgress = await prisma.userCourseChapterProgress.create({
     *   data: {
     *     // ... data to create a UserCourseChapterProgress
     *   }
     * })
     * 
     */
    create<T extends UserCourseChapterProgressCreateArgs>(args: SelectSubset<T, UserCourseChapterProgressCreateArgs<ExtArgs>>): Prisma__UserCourseChapterProgressClient<$Result.GetResult<Prisma.$UserCourseChapterProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCourseChapterProgresses.
     * @param {UserCourseChapterProgressCreateManyArgs} args - Arguments to create many UserCourseChapterProgresses.
     * @example
     * // Create many UserCourseChapterProgresses
     * const userCourseChapterProgress = await prisma.userCourseChapterProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCourseChapterProgressCreateManyArgs>(args?: SelectSubset<T, UserCourseChapterProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCourseChapterProgress.
     * @param {UserCourseChapterProgressDeleteArgs} args - Arguments to delete one UserCourseChapterProgress.
     * @example
     * // Delete one UserCourseChapterProgress
     * const UserCourseChapterProgress = await prisma.userCourseChapterProgress.delete({
     *   where: {
     *     // ... filter to delete one UserCourseChapterProgress
     *   }
     * })
     * 
     */
    delete<T extends UserCourseChapterProgressDeleteArgs>(args: SelectSubset<T, UserCourseChapterProgressDeleteArgs<ExtArgs>>): Prisma__UserCourseChapterProgressClient<$Result.GetResult<Prisma.$UserCourseChapterProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCourseChapterProgress.
     * @param {UserCourseChapterProgressUpdateArgs} args - Arguments to update one UserCourseChapterProgress.
     * @example
     * // Update one UserCourseChapterProgress
     * const userCourseChapterProgress = await prisma.userCourseChapterProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCourseChapterProgressUpdateArgs>(args: SelectSubset<T, UserCourseChapterProgressUpdateArgs<ExtArgs>>): Prisma__UserCourseChapterProgressClient<$Result.GetResult<Prisma.$UserCourseChapterProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCourseChapterProgresses.
     * @param {UserCourseChapterProgressDeleteManyArgs} args - Arguments to filter UserCourseChapterProgresses to delete.
     * @example
     * // Delete a few UserCourseChapterProgresses
     * const { count } = await prisma.userCourseChapterProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCourseChapterProgressDeleteManyArgs>(args?: SelectSubset<T, UserCourseChapterProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCourseChapterProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseChapterProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCourseChapterProgresses
     * const userCourseChapterProgress = await prisma.userCourseChapterProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCourseChapterProgressUpdateManyArgs>(args: SelectSubset<T, UserCourseChapterProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCourseChapterProgress.
     * @param {UserCourseChapterProgressUpsertArgs} args - Arguments to update or create a UserCourseChapterProgress.
     * @example
     * // Update or create a UserCourseChapterProgress
     * const userCourseChapterProgress = await prisma.userCourseChapterProgress.upsert({
     *   create: {
     *     // ... data to create a UserCourseChapterProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCourseChapterProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserCourseChapterProgressUpsertArgs>(args: SelectSubset<T, UserCourseChapterProgressUpsertArgs<ExtArgs>>): Prisma__UserCourseChapterProgressClient<$Result.GetResult<Prisma.$UserCourseChapterProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourseChapterProgresses that matches the filter.
     * @param {UserCourseChapterProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userCourseChapterProgress = await prisma.userCourseChapterProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserCourseChapterProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserCourseChapterProgress.
     * @param {UserCourseChapterProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userCourseChapterProgress = await prisma.userCourseChapterProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserCourseChapterProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserCourseChapterProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseChapterProgressCountArgs} args - Arguments to filter UserCourseChapterProgresses to count.
     * @example
     * // Count the number of UserCourseChapterProgresses
     * const count = await prisma.userCourseChapterProgress.count({
     *   where: {
     *     // ... the filter for the UserCourseChapterProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserCourseChapterProgressCountArgs>(
      args?: Subset<T, UserCourseChapterProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCourseChapterProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCourseChapterProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseChapterProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCourseChapterProgressAggregateArgs>(args: Subset<T, UserCourseChapterProgressAggregateArgs>): Prisma.PrismaPromise<GetUserCourseChapterProgressAggregateType<T>>

    /**
     * Group by UserCourseChapterProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseChapterProgressGroupByArgs} args - Group by arguments.
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
      T extends UserCourseChapterProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCourseChapterProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserCourseChapterProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCourseChapterProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCourseChapterProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCourseChapterProgress model
   */
  readonly fields: UserCourseChapterProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCourseChapterProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCourseChapterProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userCourseSectionProgress<T extends UserCourseSectionProgressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserCourseSectionProgressDefaultArgs<ExtArgs>>): Prisma__UserCourseSectionProgressClient<$Result.GetResult<Prisma.$UserCourseSectionProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCourseChapterProgress model
   */
  interface UserCourseChapterProgressFieldRefs {
    readonly id: FieldRef<"UserCourseChapterProgress", 'String'>
    readonly chapterId: FieldRef<"UserCourseChapterProgress", 'String'>
    readonly completed: FieldRef<"UserCourseChapterProgress", 'Boolean'>
    readonly lastPosition: FieldRef<"UserCourseChapterProgress", 'Float'>
    readonly userCourseSectionProgressId: FieldRef<"UserCourseChapterProgress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserCourseChapterProgress findUnique
   */
  export type UserCourseChapterProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseChapterProgress to fetch.
     */
    where: UserCourseChapterProgressWhereUniqueInput
  }

  /**
   * UserCourseChapterProgress findUniqueOrThrow
   */
  export type UserCourseChapterProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseChapterProgress to fetch.
     */
    where: UserCourseChapterProgressWhereUniqueInput
  }

  /**
   * UserCourseChapterProgress findFirst
   */
  export type UserCourseChapterProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseChapterProgress to fetch.
     */
    where?: UserCourseChapterProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseChapterProgresses to fetch.
     */
    orderBy?: UserCourseChapterProgressOrderByWithRelationInput | UserCourseChapterProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseChapterProgresses.
     */
    cursor?: UserCourseChapterProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseChapterProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseChapterProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseChapterProgresses.
     */
    distinct?: UserCourseChapterProgressScalarFieldEnum | UserCourseChapterProgressScalarFieldEnum[]
  }

  /**
   * UserCourseChapterProgress findFirstOrThrow
   */
  export type UserCourseChapterProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseChapterProgress to fetch.
     */
    where?: UserCourseChapterProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseChapterProgresses to fetch.
     */
    orderBy?: UserCourseChapterProgressOrderByWithRelationInput | UserCourseChapterProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseChapterProgresses.
     */
    cursor?: UserCourseChapterProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseChapterProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseChapterProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseChapterProgresses.
     */
    distinct?: UserCourseChapterProgressScalarFieldEnum | UserCourseChapterProgressScalarFieldEnum[]
  }

  /**
   * UserCourseChapterProgress findMany
   */
  export type UserCourseChapterProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseChapterProgresses to fetch.
     */
    where?: UserCourseChapterProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseChapterProgresses to fetch.
     */
    orderBy?: UserCourseChapterProgressOrderByWithRelationInput | UserCourseChapterProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCourseChapterProgresses.
     */
    cursor?: UserCourseChapterProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseChapterProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseChapterProgresses.
     */
    skip?: number
    distinct?: UserCourseChapterProgressScalarFieldEnum | UserCourseChapterProgressScalarFieldEnum[]
  }

  /**
   * UserCourseChapterProgress create
   */
  export type UserCourseChapterProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCourseChapterProgress.
     */
    data: XOR<UserCourseChapterProgressCreateInput, UserCourseChapterProgressUncheckedCreateInput>
  }

  /**
   * UserCourseChapterProgress createMany
   */
  export type UserCourseChapterProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCourseChapterProgresses.
     */
    data: UserCourseChapterProgressCreateManyInput | UserCourseChapterProgressCreateManyInput[]
  }

  /**
   * UserCourseChapterProgress update
   */
  export type UserCourseChapterProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCourseChapterProgress.
     */
    data: XOR<UserCourseChapterProgressUpdateInput, UserCourseChapterProgressUncheckedUpdateInput>
    /**
     * Choose, which UserCourseChapterProgress to update.
     */
    where: UserCourseChapterProgressWhereUniqueInput
  }

  /**
   * UserCourseChapterProgress updateMany
   */
  export type UserCourseChapterProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCourseChapterProgresses.
     */
    data: XOR<UserCourseChapterProgressUpdateManyMutationInput, UserCourseChapterProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserCourseChapterProgresses to update
     */
    where?: UserCourseChapterProgressWhereInput
    /**
     * Limit how many UserCourseChapterProgresses to update.
     */
    limit?: number
  }

  /**
   * UserCourseChapterProgress upsert
   */
  export type UserCourseChapterProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCourseChapterProgress to update in case it exists.
     */
    where: UserCourseChapterProgressWhereUniqueInput
    /**
     * In case the UserCourseChapterProgress found by the `where` argument doesn't exist, create a new UserCourseChapterProgress with this data.
     */
    create: XOR<UserCourseChapterProgressCreateInput, UserCourseChapterProgressUncheckedCreateInput>
    /**
     * In case the UserCourseChapterProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCourseChapterProgressUpdateInput, UserCourseChapterProgressUncheckedUpdateInput>
  }

  /**
   * UserCourseChapterProgress delete
   */
  export type UserCourseChapterProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
    /**
     * Filter which UserCourseChapterProgress to delete.
     */
    where: UserCourseChapterProgressWhereUniqueInput
  }

  /**
   * UserCourseChapterProgress deleteMany
   */
  export type UserCourseChapterProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseChapterProgresses to delete
     */
    where?: UserCourseChapterProgressWhereInput
    /**
     * Limit how many UserCourseChapterProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserCourseChapterProgress findRaw
   */
  export type UserCourseChapterProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserCourseChapterProgress aggregateRaw
   */
  export type UserCourseChapterProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserCourseChapterProgress without action
   */
  export type UserCourseChapterProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseChapterProgress
     */
    select?: UserCourseChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseChapterProgress
     */
    omit?: UserCourseChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseChapterProgressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    googleId: 'googleId',
    email: 'email',
    name: 'name',
    password: 'password',
    emailVerified: 'emailVerified',
    image: 'image',
    about: 'about',
    experiences: 'experiences',
    education: 'education',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    image: 'image',
    price: 'price',
    level: 'level',
    isPublished: 'isPublished',
    whatYouLearn: 'whatYouLearn',
    requirements: 'requirements',
    targetAudience: 'targetAudience',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    embeddings: 'embeddings'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    courseId: 'courseId',
    userId: 'userId'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    sectionTitle: 'sectionTitle',
    sectionDescription: 'sectionDescription',
    courseId: 'courseId'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    content: 'content',
    videoLength: 'videoLength',
    videoUrl: 'videoUrl',
    videoUniqueId: 'videoUniqueId',
    videoType: 'videoType',
    sectionId: 'sectionId'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    timestamp: 'timestamp',
    userId: 'userId',
    chapterId: 'chapterId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    paymentProvider: 'paymentProvider',
    transactionId: 'transactionId',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    courseId: 'courseId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const UserCourseProgressScalarFieldEnum: {
    id: 'id',
    enrollmentDate: 'enrollmentDate',
    overallProgress: 'overallProgress',
    lastAccessedTimestamp: 'lastAccessedTimestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    courseId: 'courseId',
    userId: 'userId',
    chapterId: 'chapterId'
  };

  export type UserCourseProgressScalarFieldEnum = (typeof UserCourseProgressScalarFieldEnum)[keyof typeof UserCourseProgressScalarFieldEnum]


  export const UserCourseSectionProgressScalarFieldEnum: {
    id: 'id',
    sectionId: 'sectionId',
    userCourseProgressId: 'userCourseProgressId'
  };

  export type UserCourseSectionProgressScalarFieldEnum = (typeof UserCourseSectionProgressScalarFieldEnum)[keyof typeof UserCourseSectionProgressScalarFieldEnum]


  export const UserCourseChapterProgressScalarFieldEnum: {
    id: 'id',
    chapterId: 'chapterId',
    completed: 'completed',
    lastPosition: 'lastPosition',
    userCourseSectionProgressId: 'userCourseSectionProgressId'
  };

  export type UserCourseChapterProgressScalarFieldEnum = (typeof UserCourseChapterProgressScalarFieldEnum)[keyof typeof UserCourseChapterProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Level'
   */
  export type EnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level'>
    


  /**
   * Reference to a field of type 'Level[]'
   */
  export type ListEnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    googleId?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    about?: StringNullableFilter<"User"> | string | null
    experiences?: StringNullableListFilter<"User">
    education?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    comments?: CommentListRelationFilter
    transactions?: TransactionListRelationFilter
    userProgresses?: UserCourseProgressListRelationFilter
    courses?: CourseListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    about?: SortOrder
    experiences?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    userProgresses?: UserCourseProgressOrderByRelationAggregateInput
    courses?: CourseOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    googleId?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    about?: StringNullableFilter<"User"> | string | null
    experiences?: StringNullableListFilter<"User">
    education?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    comments?: CommentListRelationFilter
    transactions?: TransactionListRelationFilter
    userProgresses?: UserCourseProgressListRelationFilter
    courses?: CourseListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    about?: SortOrder
    experiences?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    about?: StringNullableWithAggregatesFilter<"User"> | string | null
    experiences?: StringNullableListFilter<"User">
    education?: StringNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    image?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    level?: EnumLevelFilter<"Course"> | $Enums.Level
    isPublished?: BoolFilter<"Course"> | boolean
    whatYouLearn?: StringNullableListFilter<"Course">
    requirements?: StringNullableListFilter<"Course">
    targetAudience?: StringNullableListFilter<"Course">
    language?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    userId?: StringFilter<"Course"> | string
    embeddings?: FloatNullableListFilter<"Course">
    sections?: SectionListRelationFilter
    transactions?: TransactionListRelationFilter
    userProgresses?: UserCourseProgressListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    enrollments?: EnrollmentListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    price?: SortOrder
    level?: SortOrder
    isPublished?: SortOrder
    whatYouLearn?: SortOrder
    requirements?: SortOrder
    targetAudience?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    embeddings?: SortOrder
    sections?: SectionOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    userProgresses?: UserCourseProgressOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    image?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    level?: EnumLevelFilter<"Course"> | $Enums.Level
    isPublished?: BoolFilter<"Course"> | boolean
    whatYouLearn?: StringNullableListFilter<"Course">
    requirements?: StringNullableListFilter<"Course">
    targetAudience?: StringNullableListFilter<"Course">
    language?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    userId?: StringFilter<"Course"> | string
    embeddings?: FloatNullableListFilter<"Course">
    sections?: SectionListRelationFilter
    transactions?: TransactionListRelationFilter
    userProgresses?: UserCourseProgressListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    enrollments?: EnrollmentListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    price?: SortOrder
    level?: SortOrder
    isPublished?: SortOrder
    whatYouLearn?: SortOrder
    requirements?: SortOrder
    targetAudience?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    embeddings?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    category?: StringWithAggregatesFilter<"Course"> | string
    image?: StringWithAggregatesFilter<"Course"> | string
    price?: FloatWithAggregatesFilter<"Course"> | number
    level?: EnumLevelWithAggregatesFilter<"Course"> | $Enums.Level
    isPublished?: BoolWithAggregatesFilter<"Course"> | boolean
    whatYouLearn?: StringNullableListFilter<"Course">
    requirements?: StringNullableListFilter<"Course">
    targetAudience?: StringNullableListFilter<"Course">
    language?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    userId?: StringWithAggregatesFilter<"Course"> | string
    embeddings?: FloatNullableListFilter<"Course">
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    courseId?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    courseId?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    courseId?: StringWithAggregatesFilter<"Enrollment"> | string
    userId?: StringWithAggregatesFilter<"Enrollment"> | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    sectionTitle?: StringFilter<"Section"> | string
    sectionDescription?: StringFilter<"Section"> | string
    courseId?: StringFilter<"Section"> | string
    chapters?: ChapterListRelationFilter
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    sectionTitle?: SortOrder
    sectionDescription?: SortOrder
    courseId?: SortOrder
    chapters?: ChapterOrderByRelationAggregateInput
    course?: CourseOrderByWithRelationInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    sectionTitle?: StringFilter<"Section"> | string
    sectionDescription?: StringFilter<"Section"> | string
    courseId?: StringFilter<"Section"> | string
    chapters?: ChapterListRelationFilter
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    sectionTitle?: SortOrder
    sectionDescription?: SortOrder
    courseId?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    sectionTitle?: StringWithAggregatesFilter<"Section"> | string
    sectionDescription?: StringWithAggregatesFilter<"Section"> | string
    courseId?: StringWithAggregatesFilter<"Section"> | string
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: StringFilter<"Chapter"> | string
    type?: StringFilter<"Chapter"> | string
    title?: StringFilter<"Chapter"> | string
    content?: StringFilter<"Chapter"> | string
    videoLength?: FloatFilter<"Chapter"> | number
    videoUrl?: StringFilter<"Chapter"> | string
    videoUniqueId?: StringFilter<"Chapter"> | string
    videoType?: StringFilter<"Chapter"> | string
    sectionId?: StringFilter<"Chapter"> | string
    comments?: CommentListRelationFilter
    Section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    UserCourseProgress?: UserCourseProgressListRelationFilter
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    videoLength?: SortOrder
    videoUrl?: SortOrder
    videoUniqueId?: SortOrder
    videoType?: SortOrder
    sectionId?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    Section?: SectionOrderByWithRelationInput
    UserCourseProgress?: UserCourseProgressOrderByRelationAggregateInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    type?: StringFilter<"Chapter"> | string
    title?: StringFilter<"Chapter"> | string
    content?: StringFilter<"Chapter"> | string
    videoLength?: FloatFilter<"Chapter"> | number
    videoUrl?: StringFilter<"Chapter"> | string
    videoUniqueId?: StringFilter<"Chapter"> | string
    videoType?: StringFilter<"Chapter"> | string
    sectionId?: StringFilter<"Chapter"> | string
    comments?: CommentListRelationFilter
    Section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    UserCourseProgress?: UserCourseProgressListRelationFilter
  }, "id">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    videoLength?: SortOrder
    videoUrl?: SortOrder
    videoUniqueId?: SortOrder
    videoType?: SortOrder
    sectionId?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapter"> | string
    type?: StringWithAggregatesFilter<"Chapter"> | string
    title?: StringWithAggregatesFilter<"Chapter"> | string
    content?: StringWithAggregatesFilter<"Chapter"> | string
    videoLength?: FloatWithAggregatesFilter<"Chapter"> | number
    videoUrl?: StringWithAggregatesFilter<"Chapter"> | string
    videoUniqueId?: StringWithAggregatesFilter<"Chapter"> | string
    videoType?: StringWithAggregatesFilter<"Chapter"> | string
    sectionId?: StringWithAggregatesFilter<"Chapter"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    timestamp?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    chapterId?: StringFilter<"Comment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
    user?: UserOrderByWithRelationInput
    chapter?: ChapterOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    text?: StringFilter<"Comment"> | string
    timestamp?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    chapterId?: StringFilter<"Comment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    text?: StringWithAggregatesFilter<"Comment"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    chapterId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    paymentProvider?: StringFilter<"Transaction"> | string
    transactionId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    userId?: StringFilter<"Transaction"> | string
    courseId?: StringFilter<"Transaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    paymentProvider?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    paymentProvider?: StringFilter<"Transaction"> | string
    transactionId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    userId?: StringFilter<"Transaction"> | string
    courseId?: StringFilter<"Transaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    paymentProvider?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
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
    id?: StringWithAggregatesFilter<"Transaction"> | string
    paymentProvider?: StringWithAggregatesFilter<"Transaction"> | string
    transactionId?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    courseId?: StringWithAggregatesFilter<"Transaction"> | string
  }

  export type UserCourseProgressWhereInput = {
    AND?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    OR?: UserCourseProgressWhereInput[]
    NOT?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    id?: StringFilter<"UserCourseProgress"> | string
    enrollmentDate?: DateTimeFilter<"UserCourseProgress"> | Date | string
    overallProgress?: FloatFilter<"UserCourseProgress"> | number
    lastAccessedTimestamp?: DateTimeFilter<"UserCourseProgress"> | Date | string
    createdAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    courseId?: StringFilter<"UserCourseProgress"> | string
    userId?: StringFilter<"UserCourseProgress"> | string
    chapterId?: StringNullableFilter<"UserCourseProgress"> | string | null
    sections?: UserCourseSectionProgressListRelationFilter
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapter?: XOR<ChapterNullableScalarRelationFilter, ChapterWhereInput> | null
  }

  export type UserCourseProgressOrderByWithRelationInput = {
    id?: SortOrder
    enrollmentDate?: SortOrder
    overallProgress?: SortOrder
    lastAccessedTimestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
    sections?: UserCourseSectionProgressOrderByRelationAggregateInput
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    chapter?: ChapterOrderByWithRelationInput
  }

  export type UserCourseProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    OR?: UserCourseProgressWhereInput[]
    NOT?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    enrollmentDate?: DateTimeFilter<"UserCourseProgress"> | Date | string
    overallProgress?: FloatFilter<"UserCourseProgress"> | number
    lastAccessedTimestamp?: DateTimeFilter<"UserCourseProgress"> | Date | string
    createdAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    courseId?: StringFilter<"UserCourseProgress"> | string
    userId?: StringFilter<"UserCourseProgress"> | string
    chapterId?: StringNullableFilter<"UserCourseProgress"> | string | null
    sections?: UserCourseSectionProgressListRelationFilter
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapter?: XOR<ChapterNullableScalarRelationFilter, ChapterWhereInput> | null
  }, "id">

  export type UserCourseProgressOrderByWithAggregationInput = {
    id?: SortOrder
    enrollmentDate?: SortOrder
    overallProgress?: SortOrder
    lastAccessedTimestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
    _count?: UserCourseProgressCountOrderByAggregateInput
    _avg?: UserCourseProgressAvgOrderByAggregateInput
    _max?: UserCourseProgressMaxOrderByAggregateInput
    _min?: UserCourseProgressMinOrderByAggregateInput
    _sum?: UserCourseProgressSumOrderByAggregateInput
  }

  export type UserCourseProgressScalarWhereWithAggregatesInput = {
    AND?: UserCourseProgressScalarWhereWithAggregatesInput | UserCourseProgressScalarWhereWithAggregatesInput[]
    OR?: UserCourseProgressScalarWhereWithAggregatesInput[]
    NOT?: UserCourseProgressScalarWhereWithAggregatesInput | UserCourseProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCourseProgress"> | string
    enrollmentDate?: DateTimeWithAggregatesFilter<"UserCourseProgress"> | Date | string
    overallProgress?: FloatWithAggregatesFilter<"UserCourseProgress"> | number
    lastAccessedTimestamp?: DateTimeWithAggregatesFilter<"UserCourseProgress"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCourseProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCourseProgress"> | Date | string
    courseId?: StringWithAggregatesFilter<"UserCourseProgress"> | string
    userId?: StringWithAggregatesFilter<"UserCourseProgress"> | string
    chapterId?: StringNullableWithAggregatesFilter<"UserCourseProgress"> | string | null
  }

  export type UserCourseSectionProgressWhereInput = {
    AND?: UserCourseSectionProgressWhereInput | UserCourseSectionProgressWhereInput[]
    OR?: UserCourseSectionProgressWhereInput[]
    NOT?: UserCourseSectionProgressWhereInput | UserCourseSectionProgressWhereInput[]
    id?: StringFilter<"UserCourseSectionProgress"> | string
    sectionId?: StringFilter<"UserCourseSectionProgress"> | string
    userCourseProgressId?: StringFilter<"UserCourseSectionProgress"> | string
    chapters?: UserCourseChapterProgressListRelationFilter
    userCourseProgress?: XOR<UserCourseProgressScalarRelationFilter, UserCourseProgressWhereInput>
  }

  export type UserCourseSectionProgressOrderByWithRelationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    userCourseProgressId?: SortOrder
    chapters?: UserCourseChapterProgressOrderByRelationAggregateInput
    userCourseProgress?: UserCourseProgressOrderByWithRelationInput
  }

  export type UserCourseSectionProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCourseSectionProgressWhereInput | UserCourseSectionProgressWhereInput[]
    OR?: UserCourseSectionProgressWhereInput[]
    NOT?: UserCourseSectionProgressWhereInput | UserCourseSectionProgressWhereInput[]
    sectionId?: StringFilter<"UserCourseSectionProgress"> | string
    userCourseProgressId?: StringFilter<"UserCourseSectionProgress"> | string
    chapters?: UserCourseChapterProgressListRelationFilter
    userCourseProgress?: XOR<UserCourseProgressScalarRelationFilter, UserCourseProgressWhereInput>
  }, "id">

  export type UserCourseSectionProgressOrderByWithAggregationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    userCourseProgressId?: SortOrder
    _count?: UserCourseSectionProgressCountOrderByAggregateInput
    _max?: UserCourseSectionProgressMaxOrderByAggregateInput
    _min?: UserCourseSectionProgressMinOrderByAggregateInput
  }

  export type UserCourseSectionProgressScalarWhereWithAggregatesInput = {
    AND?: UserCourseSectionProgressScalarWhereWithAggregatesInput | UserCourseSectionProgressScalarWhereWithAggregatesInput[]
    OR?: UserCourseSectionProgressScalarWhereWithAggregatesInput[]
    NOT?: UserCourseSectionProgressScalarWhereWithAggregatesInput | UserCourseSectionProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCourseSectionProgress"> | string
    sectionId?: StringWithAggregatesFilter<"UserCourseSectionProgress"> | string
    userCourseProgressId?: StringWithAggregatesFilter<"UserCourseSectionProgress"> | string
  }

  export type UserCourseChapterProgressWhereInput = {
    AND?: UserCourseChapterProgressWhereInput | UserCourseChapterProgressWhereInput[]
    OR?: UserCourseChapterProgressWhereInput[]
    NOT?: UserCourseChapterProgressWhereInput | UserCourseChapterProgressWhereInput[]
    id?: StringFilter<"UserCourseChapterProgress"> | string
    chapterId?: StringFilter<"UserCourseChapterProgress"> | string
    completed?: BoolFilter<"UserCourseChapterProgress"> | boolean
    lastPosition?: FloatFilter<"UserCourseChapterProgress"> | number
    userCourseSectionProgressId?: StringFilter<"UserCourseChapterProgress"> | string
    userCourseSectionProgress?: XOR<UserCourseSectionProgressScalarRelationFilter, UserCourseSectionProgressWhereInput>
  }

  export type UserCourseChapterProgressOrderByWithRelationInput = {
    id?: SortOrder
    chapterId?: SortOrder
    completed?: SortOrder
    lastPosition?: SortOrder
    userCourseSectionProgressId?: SortOrder
    userCourseSectionProgress?: UserCourseSectionProgressOrderByWithRelationInput
  }

  export type UserCourseChapterProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCourseChapterProgressWhereInput | UserCourseChapterProgressWhereInput[]
    OR?: UserCourseChapterProgressWhereInput[]
    NOT?: UserCourseChapterProgressWhereInput | UserCourseChapterProgressWhereInput[]
    chapterId?: StringFilter<"UserCourseChapterProgress"> | string
    completed?: BoolFilter<"UserCourseChapterProgress"> | boolean
    lastPosition?: FloatFilter<"UserCourseChapterProgress"> | number
    userCourseSectionProgressId?: StringFilter<"UserCourseChapterProgress"> | string
    userCourseSectionProgress?: XOR<UserCourseSectionProgressScalarRelationFilter, UserCourseSectionProgressWhereInput>
  }, "id">

  export type UserCourseChapterProgressOrderByWithAggregationInput = {
    id?: SortOrder
    chapterId?: SortOrder
    completed?: SortOrder
    lastPosition?: SortOrder
    userCourseSectionProgressId?: SortOrder
    _count?: UserCourseChapterProgressCountOrderByAggregateInput
    _avg?: UserCourseChapterProgressAvgOrderByAggregateInput
    _max?: UserCourseChapterProgressMaxOrderByAggregateInput
    _min?: UserCourseChapterProgressMinOrderByAggregateInput
    _sum?: UserCourseChapterProgressSumOrderByAggregateInput
  }

  export type UserCourseChapterProgressScalarWhereWithAggregatesInput = {
    AND?: UserCourseChapterProgressScalarWhereWithAggregatesInput | UserCourseChapterProgressScalarWhereWithAggregatesInput[]
    OR?: UserCourseChapterProgressScalarWhereWithAggregatesInput[]
    NOT?: UserCourseChapterProgressScalarWhereWithAggregatesInput | UserCourseChapterProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCourseChapterProgress"> | string
    chapterId?: StringWithAggregatesFilter<"UserCourseChapterProgress"> | string
    completed?: BoolWithAggregatesFilter<"UserCourseChapterProgress"> | boolean
    lastPosition?: FloatWithAggregatesFilter<"UserCourseChapterProgress"> | number
    userCourseSectionProgressId?: StringWithAggregatesFilter<"UserCourseChapterProgress"> | string
  }

  export type UserCreateInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutAuthorInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutAuthorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutAuthorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: CourseCreateembeddingsInput | number[]
    sections?: SectionCreateNestedManyWithoutCourseInput
    transactions?: TransactionCreateNestedManyWithoutCourseInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutCourseInput
    author: UserCreateNestedOneWithoutCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    embeddings?: CourseCreateembeddingsInput | number[]
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCourseInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    sections?: SectionUpdateManyWithoutCourseNestedInput
    transactions?: TransactionUpdateManyWithoutCourseNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutCourseNestedInput
    author?: UserUpdateOneRequiredWithoutCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCourseNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    embeddings?: CourseCreateembeddingsInput | number[]
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: CourseUpdateembeddingsInput | number[]
  }

  export type CourseUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    embeddings?: CourseUpdateembeddingsInput | number[]
  }

  export type EnrollmentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutEnrollmentsInput
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    userId: string
  }

  export type EnrollmentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    userId: string
  }

  export type EnrollmentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateInput = {
    id?: string
    sectionTitle: string
    sectionDescription: string
    chapters?: ChapterCreateNestedManyWithoutSectionInput
    course: CourseCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    sectionTitle: string
    sectionDescription: string
    courseId: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    sectionTitle?: StringFieldUpdateOperationsInput | string
    sectionDescription?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUpdateManyWithoutSectionNestedInput
    course?: CourseUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    sectionTitle?: StringFieldUpdateOperationsInput | string
    sectionDescription?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    sectionTitle: string
    sectionDescription: string
    courseId: string
  }

  export type SectionUpdateManyMutationInput = {
    sectionTitle?: StringFieldUpdateOperationsInput | string
    sectionDescription?: StringFieldUpdateOperationsInput | string
  }

  export type SectionUncheckedUpdateManyInput = {
    sectionTitle?: StringFieldUpdateOperationsInput | string
    sectionDescription?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateInput = {
    id?: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
    comments?: CommentCreateNestedManyWithoutChapterInput
    Section: SectionCreateNestedOneWithoutChaptersInput
    UserCourseProgress?: UserCourseProgressCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
    sectionId: string
    comments?: CommentUncheckedCreateNestedManyWithoutChapterInput
    UserCourseProgress?: UserCourseProgressUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutChapterNestedInput
    Section?: SectionUpdateOneRequiredWithoutChaptersNestedInput
    UserCourseProgress?: UserCourseProgressUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutChapterNestedInput
    UserCourseProgress?: UserCourseProgressUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateManyInput = {
    id?: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
    sectionId: string
  }

  export type ChapterUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    text: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    chapter: ChapterCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    text: string
    timestamp?: Date | string
    userId: string
    chapterId: string
  }

  export type CommentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    text: string
    timestamp?: Date | string
    userId: string
    chapterId: string
  }

  export type CommentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    paymentProvider: string
    transactionId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    course: CourseCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    paymentProvider: string
    transactionId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    courseId: string
  }

  export type TransactionUpdateInput = {
    paymentProvider?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    course?: CourseUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    paymentProvider?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    paymentProvider: string
    transactionId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    courseId: string
  }

  export type TransactionUpdateManyMutationInput = {
    paymentProvider?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    paymentProvider?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCourseProgressCreateInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: UserCourseSectionProgressCreateNestedManyWithoutUserCourseProgressInput
    course: CourseCreateNestedOneWithoutUserProgressesInput
    user: UserCreateNestedOneWithoutUserProgressesInput
    chapter?: ChapterCreateNestedOneWithoutUserCourseProgressInput
  }

  export type UserCourseProgressUncheckedCreateInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    userId: string
    chapterId?: string | null
    sections?: UserCourseSectionProgressUncheckedCreateNestedManyWithoutUserCourseProgressInput
  }

  export type UserCourseProgressUpdateInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: UserCourseSectionProgressUpdateManyWithoutUserCourseProgressNestedInput
    course?: CourseUpdateOneRequiredWithoutUserProgressesNestedInput
    user?: UserUpdateOneRequiredWithoutUserProgressesNestedInput
    chapter?: ChapterUpdateOneWithoutUserCourseProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: NullableStringFieldUpdateOperationsInput | string | null
    sections?: UserCourseSectionProgressUncheckedUpdateManyWithoutUserCourseProgressNestedInput
  }

  export type UserCourseProgressCreateManyInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    userId: string
    chapterId?: string | null
  }

  export type UserCourseProgressUpdateManyMutationInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUncheckedUpdateManyInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCourseSectionProgressCreateInput = {
    id?: string
    sectionId: string
    chapters?: UserCourseChapterProgressCreateNestedManyWithoutUserCourseSectionProgressInput
    userCourseProgress: UserCourseProgressCreateNestedOneWithoutSectionsInput
  }

  export type UserCourseSectionProgressUncheckedCreateInput = {
    id?: string
    sectionId: string
    userCourseProgressId: string
    chapters?: UserCourseChapterProgressUncheckedCreateNestedManyWithoutUserCourseSectionProgressInput
  }

  export type UserCourseSectionProgressUpdateInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    chapters?: UserCourseChapterProgressUpdateManyWithoutUserCourseSectionProgressNestedInput
    userCourseProgress?: UserCourseProgressUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type UserCourseSectionProgressUncheckedUpdateInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    userCourseProgressId?: StringFieldUpdateOperationsInput | string
    chapters?: UserCourseChapterProgressUncheckedUpdateManyWithoutUserCourseSectionProgressNestedInput
  }

  export type UserCourseSectionProgressCreateManyInput = {
    id?: string
    sectionId: string
    userCourseProgressId: string
  }

  export type UserCourseSectionProgressUpdateManyMutationInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCourseSectionProgressUncheckedUpdateManyInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    userCourseProgressId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCourseChapterProgressCreateInput = {
    id?: string
    chapterId: string
    completed: boolean
    lastPosition: number
    userCourseSectionProgress: UserCourseSectionProgressCreateNestedOneWithoutChaptersInput
  }

  export type UserCourseChapterProgressUncheckedCreateInput = {
    id?: string
    chapterId: string
    completed: boolean
    lastPosition: number
    userCourseSectionProgressId: string
  }

  export type UserCourseChapterProgressUpdateInput = {
    chapterId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastPosition?: FloatFieldUpdateOperationsInput | number
    userCourseSectionProgress?: UserCourseSectionProgressUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type UserCourseChapterProgressUncheckedUpdateInput = {
    chapterId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastPosition?: FloatFieldUpdateOperationsInput | number
    userCourseSectionProgressId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCourseChapterProgressCreateManyInput = {
    id?: string
    chapterId: string
    completed: boolean
    lastPosition: number
    userCourseSectionProgressId: string
  }

  export type UserCourseChapterProgressUpdateManyMutationInput = {
    chapterId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastPosition?: FloatFieldUpdateOperationsInput | number
  }

  export type UserCourseChapterProgressUncheckedUpdateManyInput = {
    chapterId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastPosition?: FloatFieldUpdateOperationsInput | number
    userCourseSectionProgressId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type UserCourseProgressListRelationFilter = {
    every?: UserCourseProgressWhereInput
    some?: UserCourseProgressWhereInput
    none?: UserCourseProgressWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCourseProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    about?: SortOrder
    experiences?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    about?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    about?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    price?: SortOrder
    level?: SortOrder
    isPublished?: SortOrder
    whatYouLearn?: SortOrder
    requirements?: SortOrder
    targetAudience?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    embeddings?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
    embeddings?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    price?: SortOrder
    level?: SortOrder
    isPublished?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    price?: SortOrder
    level?: SortOrder
    isPublished?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
    embeddings?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type EnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    sectionTitle?: SortOrder
    sectionDescription?: SortOrder
    courseId?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionTitle?: SortOrder
    sectionDescription?: SortOrder
    courseId?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    sectionTitle?: SortOrder
    sectionDescription?: SortOrder
    courseId?: SortOrder
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    videoLength?: SortOrder
    videoUrl?: SortOrder
    videoUniqueId?: SortOrder
    videoType?: SortOrder
    sectionId?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    videoLength?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    videoLength?: SortOrder
    videoUrl?: SortOrder
    videoUniqueId?: SortOrder
    videoType?: SortOrder
    sectionId?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    videoLength?: SortOrder
    videoUrl?: SortOrder
    videoUniqueId?: SortOrder
    videoType?: SortOrder
    sectionId?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    videoLength?: SortOrder
  }

  export type ChapterScalarRelationFilter = {
    is?: ChapterWhereInput
    isNot?: ChapterWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    paymentProvider?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentProvider?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    paymentProvider?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserCourseSectionProgressListRelationFilter = {
    every?: UserCourseSectionProgressWhereInput
    some?: UserCourseSectionProgressWhereInput
    none?: UserCourseSectionProgressWhereInput
  }

  export type ChapterNullableScalarRelationFilter = {
    is?: ChapterWhereInput | null
    isNot?: ChapterWhereInput | null
  }

  export type UserCourseSectionProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCourseProgressCountOrderByAggregateInput = {
    id?: SortOrder
    enrollmentDate?: SortOrder
    overallProgress?: SortOrder
    lastAccessedTimestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
  }

  export type UserCourseProgressAvgOrderByAggregateInput = {
    overallProgress?: SortOrder
  }

  export type UserCourseProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    enrollmentDate?: SortOrder
    overallProgress?: SortOrder
    lastAccessedTimestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
  }

  export type UserCourseProgressMinOrderByAggregateInput = {
    id?: SortOrder
    enrollmentDate?: SortOrder
    overallProgress?: SortOrder
    lastAccessedTimestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    chapterId?: SortOrder
  }

  export type UserCourseProgressSumOrderByAggregateInput = {
    overallProgress?: SortOrder
  }

  export type UserCourseChapterProgressListRelationFilter = {
    every?: UserCourseChapterProgressWhereInput
    some?: UserCourseChapterProgressWhereInput
    none?: UserCourseChapterProgressWhereInput
  }

  export type UserCourseProgressScalarRelationFilter = {
    is?: UserCourseProgressWhereInput
    isNot?: UserCourseProgressWhereInput
  }

  export type UserCourseChapterProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCourseSectionProgressCountOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    userCourseProgressId?: SortOrder
  }

  export type UserCourseSectionProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    userCourseProgressId?: SortOrder
  }

  export type UserCourseSectionProgressMinOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    userCourseProgressId?: SortOrder
  }

  export type UserCourseSectionProgressScalarRelationFilter = {
    is?: UserCourseSectionProgressWhereInput
    isNot?: UserCourseSectionProgressWhereInput
  }

  export type UserCourseChapterProgressCountOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
    completed?: SortOrder
    lastPosition?: SortOrder
    userCourseSectionProgressId?: SortOrder
  }

  export type UserCourseChapterProgressAvgOrderByAggregateInput = {
    lastPosition?: SortOrder
  }

  export type UserCourseChapterProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
    completed?: SortOrder
    lastPosition?: SortOrder
    userCourseSectionProgressId?: SortOrder
  }

  export type UserCourseChapterProgressMinOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
    completed?: SortOrder
    lastPosition?: SortOrder
    userCourseSectionProgressId?: SortOrder
  }

  export type UserCourseChapterProgressSumOrderByAggregateInput = {
    lastPosition?: SortOrder
  }

  export type UserCreateexperiencesInput = {
    set: string[]
  }

  export type UserCreateeducationInput = {
    set: string[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCourseProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CourseCreateWithoutAuthorInput, CourseUncheckedCreateWithoutAuthorInput> | CourseCreateWithoutAuthorInput[] | CourseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutAuthorInput | CourseCreateOrConnectWithoutAuthorInput[]
    createMany?: CourseCreateManyAuthorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCourseProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CourseCreateWithoutAuthorInput, CourseUncheckedCreateWithoutAuthorInput> | CourseCreateWithoutAuthorInput[] | CourseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutAuthorInput | CourseCreateOrConnectWithoutAuthorInput[]
    createMany?: CourseCreateManyAuthorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserUpdateexperiencesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateeducationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCourseProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutUserInput | UserCourseProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutUserInput | UserCourseProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutUserInput | UserCourseProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CourseCreateWithoutAuthorInput, CourseUncheckedCreateWithoutAuthorInput> | CourseCreateWithoutAuthorInput[] | CourseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutAuthorInput | CourseCreateOrConnectWithoutAuthorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutAuthorInput | CourseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CourseCreateManyAuthorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutAuthorInput | CourseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutAuthorInput | CourseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutUserInput | UserCourseProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutUserInput | UserCourseProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutUserInput | UserCourseProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CourseCreateWithoutAuthorInput, CourseUncheckedCreateWithoutAuthorInput> | CourseCreateWithoutAuthorInput[] | CourseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutAuthorInput | CourseCreateOrConnectWithoutAuthorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutAuthorInput | CourseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CourseCreateManyAuthorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutAuthorInput | CourseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutAuthorInput | CourseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type CourseCreatewhatYouLearnInput = {
    set: string[]
  }

  export type CourseCreaterequirementsInput = {
    set: string[]
  }

  export type CourseCreatetargetAudienceInput = {
    set: string[]
  }

  export type CourseCreateembeddingsInput = {
    set: number[]
  }

  export type SectionCreateNestedManyWithoutCourseInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCourseInput = {
    create?: XOR<TransactionCreateWithoutCourseInput, TransactionUncheckedCreateWithoutCourseInput> | TransactionCreateWithoutCourseInput[] | TransactionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCourseInput | TransactionCreateOrConnectWithoutCourseInput[]
    createMany?: TransactionCreateManyCourseInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCourseProgressCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<TransactionCreateWithoutCourseInput, TransactionUncheckedCreateWithoutCourseInput> | TransactionCreateWithoutCourseInput[] | TransactionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCourseInput | TransactionCreateOrConnectWithoutCourseInput[]
    createMany?: TransactionCreateManyCourseInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: $Enums.Level
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CourseUpdatewhatYouLearnInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CourseUpdaterequirementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CourseUpdatetargetAudienceInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CourseUpdateembeddingsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type SectionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCourseInput | SectionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCourseInput | SectionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCourseInput | SectionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TransactionCreateWithoutCourseInput, TransactionUncheckedCreateWithoutCourseInput> | TransactionCreateWithoutCourseInput[] | TransactionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCourseInput | TransactionCreateOrConnectWithoutCourseInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCourseInput | TransactionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TransactionCreateManyCourseInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCourseInput | TransactionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCourseInput | TransactionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCourseProgressUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput | UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput | UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutCourseInput | UserCourseProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesInput, UserUpdateWithoutCoursesInput>, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCourseInput | SectionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCourseInput | SectionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCourseInput | SectionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TransactionCreateWithoutCourseInput, TransactionUncheckedCreateWithoutCourseInput> | TransactionCreateWithoutCourseInput[] | TransactionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCourseInput | TransactionCreateOrConnectWithoutCourseInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCourseInput | TransactionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TransactionCreateManyCourseInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCourseInput | TransactionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCourseInput | TransactionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput | UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput | UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutCourseInput | UserCourseProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseUpsertWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentsInput, CourseUpdateWithoutEnrollmentsInput>, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ChapterCreateNestedManyWithoutSectionInput = {
    create?: XOR<ChapterCreateWithoutSectionInput, ChapterUncheckedCreateWithoutSectionInput> | ChapterCreateWithoutSectionInput[] | ChapterUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutSectionInput | ChapterCreateOrConnectWithoutSectionInput[]
    createMany?: ChapterCreateManySectionInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type CourseCreateNestedOneWithoutSectionsInput = {
    create?: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSectionsInput
    connect?: CourseWhereUniqueInput
  }

  export type ChapterUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<ChapterCreateWithoutSectionInput, ChapterUncheckedCreateWithoutSectionInput> | ChapterCreateWithoutSectionInput[] | ChapterUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutSectionInput | ChapterCreateOrConnectWithoutSectionInput[]
    createMany?: ChapterCreateManySectionInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ChapterUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ChapterCreateWithoutSectionInput, ChapterUncheckedCreateWithoutSectionInput> | ChapterCreateWithoutSectionInput[] | ChapterUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutSectionInput | ChapterCreateOrConnectWithoutSectionInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutSectionInput | ChapterUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ChapterCreateManySectionInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutSectionInput | ChapterUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutSectionInput | ChapterUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type CourseUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSectionsInput
    upsert?: CourseUpsertWithoutSectionsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutSectionsInput, CourseUpdateWithoutSectionsInput>, CourseUncheckedUpdateWithoutSectionsInput>
  }

  export type ChapterUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ChapterCreateWithoutSectionInput, ChapterUncheckedCreateWithoutSectionInput> | ChapterCreateWithoutSectionInput[] | ChapterUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutSectionInput | ChapterCreateOrConnectWithoutSectionInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutSectionInput | ChapterUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ChapterCreateManySectionInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutSectionInput | ChapterUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutSectionInput | ChapterUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type CommentCreateNestedManyWithoutChapterInput = {
    create?: XOR<CommentCreateWithoutChapterInput, CommentUncheckedCreateWithoutChapterInput> | CommentCreateWithoutChapterInput[] | CommentUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutChapterInput | CommentCreateOrConnectWithoutChapterInput[]
    createMany?: CommentCreateManyChapterInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type SectionCreateNestedOneWithoutChaptersInput = {
    create?: XOR<SectionCreateWithoutChaptersInput, SectionUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: SectionCreateOrConnectWithoutChaptersInput
    connect?: SectionWhereUniqueInput
  }

  export type UserCourseProgressCreateNestedManyWithoutChapterInput = {
    create?: XOR<UserCourseProgressCreateWithoutChapterInput, UserCourseProgressUncheckedCreateWithoutChapterInput> | UserCourseProgressCreateWithoutChapterInput[] | UserCourseProgressUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutChapterInput | UserCourseProgressCreateOrConnectWithoutChapterInput[]
    createMany?: UserCourseProgressCreateManyChapterInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<CommentCreateWithoutChapterInput, CommentUncheckedCreateWithoutChapterInput> | CommentCreateWithoutChapterInput[] | CommentUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutChapterInput | CommentCreateOrConnectWithoutChapterInput[]
    createMany?: CommentCreateManyChapterInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserCourseProgressUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<UserCourseProgressCreateWithoutChapterInput, UserCourseProgressUncheckedCreateWithoutChapterInput> | UserCourseProgressCreateWithoutChapterInput[] | UserCourseProgressUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutChapterInput | UserCourseProgressCreateOrConnectWithoutChapterInput[]
    createMany?: UserCourseProgressCreateManyChapterInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type CommentUpdateManyWithoutChapterNestedInput = {
    create?: XOR<CommentCreateWithoutChapterInput, CommentUncheckedCreateWithoutChapterInput> | CommentCreateWithoutChapterInput[] | CommentUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutChapterInput | CommentCreateOrConnectWithoutChapterInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutChapterInput | CommentUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: CommentCreateManyChapterInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutChapterInput | CommentUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutChapterInput | CommentUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type SectionUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<SectionCreateWithoutChaptersInput, SectionUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: SectionCreateOrConnectWithoutChaptersInput
    upsert?: SectionUpsertWithoutChaptersInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutChaptersInput, SectionUpdateWithoutChaptersInput>, SectionUncheckedUpdateWithoutChaptersInput>
  }

  export type UserCourseProgressUpdateManyWithoutChapterNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutChapterInput, UserCourseProgressUncheckedCreateWithoutChapterInput> | UserCourseProgressCreateWithoutChapterInput[] | UserCourseProgressUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutChapterInput | UserCourseProgressCreateOrConnectWithoutChapterInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutChapterInput | UserCourseProgressUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: UserCourseProgressCreateManyChapterInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutChapterInput | UserCourseProgressUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutChapterInput | UserCourseProgressUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<CommentCreateWithoutChapterInput, CommentUncheckedCreateWithoutChapterInput> | CommentCreateWithoutChapterInput[] | CommentUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutChapterInput | CommentCreateOrConnectWithoutChapterInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutChapterInput | CommentUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: CommentCreateManyChapterInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutChapterInput | CommentUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutChapterInput | CommentUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutChapterInput, UserCourseProgressUncheckedCreateWithoutChapterInput> | UserCourseProgressCreateWithoutChapterInput[] | UserCourseProgressUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutChapterInput | UserCourseProgressCreateOrConnectWithoutChapterInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutChapterInput | UserCourseProgressUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: UserCourseProgressCreateManyChapterInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutChapterInput | UserCourseProgressUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutChapterInput | UserCourseProgressUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ChapterCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ChapterCreateWithoutCommentsInput, ChapterUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutCommentsInput
    connect?: ChapterWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type ChapterUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ChapterCreateWithoutCommentsInput, ChapterUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutCommentsInput
    upsert?: ChapterUpsertWithoutCommentsInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutCommentsInput, ChapterUpdateWithoutCommentsInput>, ChapterUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CourseCreateWithoutTransactionsInput, CourseUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTransactionsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type CourseUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CourseCreateWithoutTransactionsInput, CourseUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTransactionsInput
    upsert?: CourseUpsertWithoutTransactionsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTransactionsInput, CourseUpdateWithoutTransactionsInput>, CourseUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCourseSectionProgressCreateNestedManyWithoutUserCourseProgressInput = {
    create?: XOR<UserCourseSectionProgressCreateWithoutUserCourseProgressInput, UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput> | UserCourseSectionProgressCreateWithoutUserCourseProgressInput[] | UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput[]
    connectOrCreate?: UserCourseSectionProgressCreateOrConnectWithoutUserCourseProgressInput | UserCourseSectionProgressCreateOrConnectWithoutUserCourseProgressInput[]
    createMany?: UserCourseSectionProgressCreateManyUserCourseProgressInputEnvelope
    connect?: UserCourseSectionProgressWhereUniqueInput | UserCourseSectionProgressWhereUniqueInput[]
  }

  export type CourseCreateNestedOneWithoutUserProgressesInput = {
    create?: XOR<CourseCreateWithoutUserProgressesInput, CourseUncheckedCreateWithoutUserProgressesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutUserProgressesInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserProgressesInput = {
    create?: XOR<UserCreateWithoutUserProgressesInput, UserUncheckedCreateWithoutUserProgressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProgressesInput
    connect?: UserWhereUniqueInput
  }

  export type ChapterCreateNestedOneWithoutUserCourseProgressInput = {
    create?: XOR<ChapterCreateWithoutUserCourseProgressInput, ChapterUncheckedCreateWithoutUserCourseProgressInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutUserCourseProgressInput
    connect?: ChapterWhereUniqueInput
  }

  export type UserCourseSectionProgressUncheckedCreateNestedManyWithoutUserCourseProgressInput = {
    create?: XOR<UserCourseSectionProgressCreateWithoutUserCourseProgressInput, UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput> | UserCourseSectionProgressCreateWithoutUserCourseProgressInput[] | UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput[]
    connectOrCreate?: UserCourseSectionProgressCreateOrConnectWithoutUserCourseProgressInput | UserCourseSectionProgressCreateOrConnectWithoutUserCourseProgressInput[]
    createMany?: UserCourseSectionProgressCreateManyUserCourseProgressInputEnvelope
    connect?: UserCourseSectionProgressWhereUniqueInput | UserCourseSectionProgressWhereUniqueInput[]
  }

  export type UserCourseSectionProgressUpdateManyWithoutUserCourseProgressNestedInput = {
    create?: XOR<UserCourseSectionProgressCreateWithoutUserCourseProgressInput, UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput> | UserCourseSectionProgressCreateWithoutUserCourseProgressInput[] | UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput[]
    connectOrCreate?: UserCourseSectionProgressCreateOrConnectWithoutUserCourseProgressInput | UserCourseSectionProgressCreateOrConnectWithoutUserCourseProgressInput[]
    upsert?: UserCourseSectionProgressUpsertWithWhereUniqueWithoutUserCourseProgressInput | UserCourseSectionProgressUpsertWithWhereUniqueWithoutUserCourseProgressInput[]
    createMany?: UserCourseSectionProgressCreateManyUserCourseProgressInputEnvelope
    set?: UserCourseSectionProgressWhereUniqueInput | UserCourseSectionProgressWhereUniqueInput[]
    disconnect?: UserCourseSectionProgressWhereUniqueInput | UserCourseSectionProgressWhereUniqueInput[]
    delete?: UserCourseSectionProgressWhereUniqueInput | UserCourseSectionProgressWhereUniqueInput[]
    connect?: UserCourseSectionProgressWhereUniqueInput | UserCourseSectionProgressWhereUniqueInput[]
    update?: UserCourseSectionProgressUpdateWithWhereUniqueWithoutUserCourseProgressInput | UserCourseSectionProgressUpdateWithWhereUniqueWithoutUserCourseProgressInput[]
    updateMany?: UserCourseSectionProgressUpdateManyWithWhereWithoutUserCourseProgressInput | UserCourseSectionProgressUpdateManyWithWhereWithoutUserCourseProgressInput[]
    deleteMany?: UserCourseSectionProgressScalarWhereInput | UserCourseSectionProgressScalarWhereInput[]
  }

  export type CourseUpdateOneRequiredWithoutUserProgressesNestedInput = {
    create?: XOR<CourseCreateWithoutUserProgressesInput, CourseUncheckedCreateWithoutUserProgressesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutUserProgressesInput
    upsert?: CourseUpsertWithoutUserProgressesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutUserProgressesInput, CourseUpdateWithoutUserProgressesInput>, CourseUncheckedUpdateWithoutUserProgressesInput>
  }

  export type UserUpdateOneRequiredWithoutUserProgressesNestedInput = {
    create?: XOR<UserCreateWithoutUserProgressesInput, UserUncheckedCreateWithoutUserProgressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProgressesInput
    upsert?: UserUpsertWithoutUserProgressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProgressesInput, UserUpdateWithoutUserProgressesInput>, UserUncheckedUpdateWithoutUserProgressesInput>
  }

  export type ChapterUpdateOneWithoutUserCourseProgressNestedInput = {
    create?: XOR<ChapterCreateWithoutUserCourseProgressInput, ChapterUncheckedCreateWithoutUserCourseProgressInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutUserCourseProgressInput
    upsert?: ChapterUpsertWithoutUserCourseProgressInput
    disconnect?: boolean
    delete?: ChapterWhereInput | boolean
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutUserCourseProgressInput, ChapterUpdateWithoutUserCourseProgressInput>, ChapterUncheckedUpdateWithoutUserCourseProgressInput>
  }

  export type UserCourseSectionProgressUncheckedUpdateManyWithoutUserCourseProgressNestedInput = {
    create?: XOR<UserCourseSectionProgressCreateWithoutUserCourseProgressInput, UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput> | UserCourseSectionProgressCreateWithoutUserCourseProgressInput[] | UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput[]
    connectOrCreate?: UserCourseSectionProgressCreateOrConnectWithoutUserCourseProgressInput | UserCourseSectionProgressCreateOrConnectWithoutUserCourseProgressInput[]
    upsert?: UserCourseSectionProgressUpsertWithWhereUniqueWithoutUserCourseProgressInput | UserCourseSectionProgressUpsertWithWhereUniqueWithoutUserCourseProgressInput[]
    createMany?: UserCourseSectionProgressCreateManyUserCourseProgressInputEnvelope
    set?: UserCourseSectionProgressWhereUniqueInput | UserCourseSectionProgressWhereUniqueInput[]
    disconnect?: UserCourseSectionProgressWhereUniqueInput | UserCourseSectionProgressWhereUniqueInput[]
    delete?: UserCourseSectionProgressWhereUniqueInput | UserCourseSectionProgressWhereUniqueInput[]
    connect?: UserCourseSectionProgressWhereUniqueInput | UserCourseSectionProgressWhereUniqueInput[]
    update?: UserCourseSectionProgressUpdateWithWhereUniqueWithoutUserCourseProgressInput | UserCourseSectionProgressUpdateWithWhereUniqueWithoutUserCourseProgressInput[]
    updateMany?: UserCourseSectionProgressUpdateManyWithWhereWithoutUserCourseProgressInput | UserCourseSectionProgressUpdateManyWithWhereWithoutUserCourseProgressInput[]
    deleteMany?: UserCourseSectionProgressScalarWhereInput | UserCourseSectionProgressScalarWhereInput[]
  }

  export type UserCourseChapterProgressCreateNestedManyWithoutUserCourseSectionProgressInput = {
    create?: XOR<UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput, UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput> | UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput[] | UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput[]
    connectOrCreate?: UserCourseChapterProgressCreateOrConnectWithoutUserCourseSectionProgressInput | UserCourseChapterProgressCreateOrConnectWithoutUserCourseSectionProgressInput[]
    createMany?: UserCourseChapterProgressCreateManyUserCourseSectionProgressInputEnvelope
    connect?: UserCourseChapterProgressWhereUniqueInput | UserCourseChapterProgressWhereUniqueInput[]
  }

  export type UserCourseProgressCreateNestedOneWithoutSectionsInput = {
    create?: XOR<UserCourseProgressCreateWithoutSectionsInput, UserCourseProgressUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutSectionsInput
    connect?: UserCourseProgressWhereUniqueInput
  }

  export type UserCourseChapterProgressUncheckedCreateNestedManyWithoutUserCourseSectionProgressInput = {
    create?: XOR<UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput, UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput> | UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput[] | UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput[]
    connectOrCreate?: UserCourseChapterProgressCreateOrConnectWithoutUserCourseSectionProgressInput | UserCourseChapterProgressCreateOrConnectWithoutUserCourseSectionProgressInput[]
    createMany?: UserCourseChapterProgressCreateManyUserCourseSectionProgressInputEnvelope
    connect?: UserCourseChapterProgressWhereUniqueInput | UserCourseChapterProgressWhereUniqueInput[]
  }

  export type UserCourseChapterProgressUpdateManyWithoutUserCourseSectionProgressNestedInput = {
    create?: XOR<UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput, UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput> | UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput[] | UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput[]
    connectOrCreate?: UserCourseChapterProgressCreateOrConnectWithoutUserCourseSectionProgressInput | UserCourseChapterProgressCreateOrConnectWithoutUserCourseSectionProgressInput[]
    upsert?: UserCourseChapterProgressUpsertWithWhereUniqueWithoutUserCourseSectionProgressInput | UserCourseChapterProgressUpsertWithWhereUniqueWithoutUserCourseSectionProgressInput[]
    createMany?: UserCourseChapterProgressCreateManyUserCourseSectionProgressInputEnvelope
    set?: UserCourseChapterProgressWhereUniqueInput | UserCourseChapterProgressWhereUniqueInput[]
    disconnect?: UserCourseChapterProgressWhereUniqueInput | UserCourseChapterProgressWhereUniqueInput[]
    delete?: UserCourseChapterProgressWhereUniqueInput | UserCourseChapterProgressWhereUniqueInput[]
    connect?: UserCourseChapterProgressWhereUniqueInput | UserCourseChapterProgressWhereUniqueInput[]
    update?: UserCourseChapterProgressUpdateWithWhereUniqueWithoutUserCourseSectionProgressInput | UserCourseChapterProgressUpdateWithWhereUniqueWithoutUserCourseSectionProgressInput[]
    updateMany?: UserCourseChapterProgressUpdateManyWithWhereWithoutUserCourseSectionProgressInput | UserCourseChapterProgressUpdateManyWithWhereWithoutUserCourseSectionProgressInput[]
    deleteMany?: UserCourseChapterProgressScalarWhereInput | UserCourseChapterProgressScalarWhereInput[]
  }

  export type UserCourseProgressUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutSectionsInput, UserCourseProgressUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutSectionsInput
    upsert?: UserCourseProgressUpsertWithoutSectionsInput
    connect?: UserCourseProgressWhereUniqueInput
    update?: XOR<XOR<UserCourseProgressUpdateToOneWithWhereWithoutSectionsInput, UserCourseProgressUpdateWithoutSectionsInput>, UserCourseProgressUncheckedUpdateWithoutSectionsInput>
  }

  export type UserCourseChapterProgressUncheckedUpdateManyWithoutUserCourseSectionProgressNestedInput = {
    create?: XOR<UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput, UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput> | UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput[] | UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput[]
    connectOrCreate?: UserCourseChapterProgressCreateOrConnectWithoutUserCourseSectionProgressInput | UserCourseChapterProgressCreateOrConnectWithoutUserCourseSectionProgressInput[]
    upsert?: UserCourseChapterProgressUpsertWithWhereUniqueWithoutUserCourseSectionProgressInput | UserCourseChapterProgressUpsertWithWhereUniqueWithoutUserCourseSectionProgressInput[]
    createMany?: UserCourseChapterProgressCreateManyUserCourseSectionProgressInputEnvelope
    set?: UserCourseChapterProgressWhereUniqueInput | UserCourseChapterProgressWhereUniqueInput[]
    disconnect?: UserCourseChapterProgressWhereUniqueInput | UserCourseChapterProgressWhereUniqueInput[]
    delete?: UserCourseChapterProgressWhereUniqueInput | UserCourseChapterProgressWhereUniqueInput[]
    connect?: UserCourseChapterProgressWhereUniqueInput | UserCourseChapterProgressWhereUniqueInput[]
    update?: UserCourseChapterProgressUpdateWithWhereUniqueWithoutUserCourseSectionProgressInput | UserCourseChapterProgressUpdateWithWhereUniqueWithoutUserCourseSectionProgressInput[]
    updateMany?: UserCourseChapterProgressUpdateManyWithWhereWithoutUserCourseSectionProgressInput | UserCourseChapterProgressUpdateManyWithWhereWithoutUserCourseSectionProgressInput[]
    deleteMany?: UserCourseChapterProgressScalarWhereInput | UserCourseChapterProgressScalarWhereInput[]
  }

  export type UserCourseSectionProgressCreateNestedOneWithoutChaptersInput = {
    create?: XOR<UserCourseSectionProgressCreateWithoutChaptersInput, UserCourseSectionProgressUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: UserCourseSectionProgressCreateOrConnectWithoutChaptersInput
    connect?: UserCourseSectionProgressWhereUniqueInput
  }

  export type UserCourseSectionProgressUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<UserCourseSectionProgressCreateWithoutChaptersInput, UserCourseSectionProgressUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: UserCourseSectionProgressCreateOrConnectWithoutChaptersInput
    upsert?: UserCourseSectionProgressUpsertWithoutChaptersInput
    connect?: UserCourseSectionProgressWhereUniqueInput
    update?: XOR<XOR<UserCourseSectionProgressUpdateToOneWithWhereWithoutChaptersInput, UserCourseSectionProgressUpdateWithoutChaptersInput>, UserCourseSectionProgressUncheckedUpdateWithoutChaptersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    text: string
    timestamp?: Date | string
    chapter: ChapterCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    text: string
    timestamp?: Date | string
    chapterId: string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    paymentProvider: string
    transactionId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    paymentProvider: string
    transactionId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
  }

  export type UserCourseProgressCreateWithoutUserInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: UserCourseSectionProgressCreateNestedManyWithoutUserCourseProgressInput
    course: CourseCreateNestedOneWithoutUserProgressesInput
    chapter?: ChapterCreateNestedOneWithoutUserCourseProgressInput
  }

  export type UserCourseProgressUncheckedCreateWithoutUserInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    chapterId?: string | null
    sections?: UserCourseSectionProgressUncheckedCreateNestedManyWithoutUserCourseProgressInput
  }

  export type UserCourseProgressCreateOrConnectWithoutUserInput = {
    where: UserCourseProgressWhereUniqueInput
    create: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput>
  }

  export type UserCourseProgressCreateManyUserInputEnvelope = {
    data: UserCourseProgressCreateManyUserInput | UserCourseProgressCreateManyUserInput[]
  }

  export type CourseCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: CourseCreateembeddingsInput | number[]
    sections?: SectionCreateNestedManyWithoutCourseInput
    transactions?: TransactionCreateNestedManyWithoutCourseInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: CourseCreateembeddingsInput | number[]
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCourseInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutAuthorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutAuthorInput, CourseUncheckedCreateWithoutAuthorInput>
  }

  export type CourseCreateManyAuthorInputEnvelope = {
    data: CourseCreateManyAuthorInput | CourseCreateManyAuthorInput[]
  }

  export type EnrollmentCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    timestamp?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    chapterId?: StringFilter<"Comment"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    paymentProvider?: StringFilter<"Transaction"> | string
    transactionId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    userId?: StringFilter<"Transaction"> | string
    courseId?: StringFilter<"Transaction"> | string
  }

  export type UserCourseProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCourseProgressWhereUniqueInput
    update: XOR<UserCourseProgressUpdateWithoutUserInput, UserCourseProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput>
  }

  export type UserCourseProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCourseProgressWhereUniqueInput
    data: XOR<UserCourseProgressUpdateWithoutUserInput, UserCourseProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserCourseProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserCourseProgressScalarWhereInput
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCourseProgressScalarWhereInput = {
    AND?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
    OR?: UserCourseProgressScalarWhereInput[]
    NOT?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
    id?: StringFilter<"UserCourseProgress"> | string
    enrollmentDate?: DateTimeFilter<"UserCourseProgress"> | Date | string
    overallProgress?: FloatFilter<"UserCourseProgress"> | number
    lastAccessedTimestamp?: DateTimeFilter<"UserCourseProgress"> | Date | string
    createdAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    courseId?: StringFilter<"UserCourseProgress"> | string
    userId?: StringFilter<"UserCourseProgress"> | string
    chapterId?: StringNullableFilter<"UserCourseProgress"> | string | null
  }

  export type CourseUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutAuthorInput, CourseUncheckedUpdateWithoutAuthorInput>
    create: XOR<CourseCreateWithoutAuthorInput, CourseUncheckedCreateWithoutAuthorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutAuthorInput, CourseUncheckedUpdateWithoutAuthorInput>
  }

  export type CourseUpdateManyWithWhereWithoutAuthorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    image?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    level?: EnumLevelFilter<"Course"> | $Enums.Level
    isPublished?: BoolFilter<"Course"> | boolean
    whatYouLearn?: StringNullableListFilter<"Course">
    requirements?: StringNullableListFilter<"Course">
    targetAudience?: StringNullableListFilter<"Course">
    language?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    userId?: StringFilter<"Course"> | string
    embeddings?: FloatNullableListFilter<"Course">
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    courseId?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutAuthorInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutAuthorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutAuthorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SectionCreateWithoutCourseInput = {
    id?: string
    sectionTitle: string
    sectionDescription: string
    chapters?: ChapterCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutCourseInput = {
    id?: string
    sectionTitle: string
    sectionDescription: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutCourseInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput>
  }

  export type SectionCreateManyCourseInputEnvelope = {
    data: SectionCreateManyCourseInput | SectionCreateManyCourseInput[]
  }

  export type TransactionCreateWithoutCourseInput = {
    id?: string
    paymentProvider: string
    transactionId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCourseInput = {
    id?: string
    paymentProvider: string
    transactionId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type TransactionCreateOrConnectWithoutCourseInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCourseInput, TransactionUncheckedCreateWithoutCourseInput>
  }

  export type TransactionCreateManyCourseInputEnvelope = {
    data: TransactionCreateManyCourseInput | TransactionCreateManyCourseInput[]
  }

  export type UserCourseProgressCreateWithoutCourseInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: UserCourseSectionProgressCreateNestedManyWithoutUserCourseProgressInput
    user: UserCreateNestedOneWithoutUserProgressesInput
    chapter?: ChapterCreateNestedOneWithoutUserCourseProgressInput
  }

  export type UserCourseProgressUncheckedCreateWithoutCourseInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chapterId?: string | null
    sections?: UserCourseSectionProgressUncheckedCreateNestedManyWithoutUserCourseProgressInput
  }

  export type UserCourseProgressCreateOrConnectWithoutCourseInput = {
    where: UserCourseProgressWhereUniqueInput
    create: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput>
  }

  export type UserCourseProgressCreateManyCourseInputEnvelope = {
    data: UserCourseProgressCreateManyCourseInput | UserCourseProgressCreateManyCourseInput[]
  }

  export type UserCreateWithoutCoursesInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type EnrollmentCreateWithoutCourseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
  }

  export type SectionUpsertWithWhereUniqueWithoutCourseInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutCourseInput, SectionUncheckedUpdateWithoutCourseInput>
    create: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutCourseInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutCourseInput, SectionUncheckedUpdateWithoutCourseInput>
  }

  export type SectionUpdateManyWithWhereWithoutCourseInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutCourseInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    sectionTitle?: StringFilter<"Section"> | string
    sectionDescription?: StringFilter<"Section"> | string
    courseId?: StringFilter<"Section"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutCourseInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCourseInput, TransactionUncheckedUpdateWithoutCourseInput>
    create: XOR<TransactionCreateWithoutCourseInput, TransactionUncheckedCreateWithoutCourseInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCourseInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCourseInput, TransactionUncheckedUpdateWithoutCourseInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCourseInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCourseInput>
  }

  export type UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput = {
    where: UserCourseProgressWhereUniqueInput
    update: XOR<UserCourseProgressUpdateWithoutCourseInput, UserCourseProgressUncheckedUpdateWithoutCourseInput>
    create: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput>
  }

  export type UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput = {
    where: UserCourseProgressWhereUniqueInput
    data: XOR<UserCourseProgressUpdateWithoutCourseInput, UserCourseProgressUncheckedUpdateWithoutCourseInput>
  }

  export type UserCourseProgressUpdateManyWithWhereWithoutCourseInput = {
    where: UserCourseProgressScalarWhereInput
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyWithoutCourseInput>
  }

  export type UserUpsertWithoutCoursesInput = {
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateWithoutCoursesInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: CourseCreateembeddingsInput | number[]
    sections?: SectionCreateNestedManyWithoutCourseInput
    transactions?: TransactionCreateNestedManyWithoutCourseInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutCourseInput
    author: UserCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    embeddings?: CourseCreateembeddingsInput | number[]
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCourseInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserCreateWithoutEnrollmentsInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateWithoutEnrollmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    sections?: SectionUpdateManyWithoutCourseNestedInput
    transactions?: TransactionUpdateManyWithoutCourseNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutCourseNestedInput
    author?: UserUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCourseNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ChapterCreateWithoutSectionInput = {
    id?: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
    comments?: CommentCreateNestedManyWithoutChapterInput
    UserCourseProgress?: UserCourseProgressCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutSectionInput = {
    id?: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
    comments?: CommentUncheckedCreateNestedManyWithoutChapterInput
    UserCourseProgress?: UserCourseProgressUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutSectionInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutSectionInput, ChapterUncheckedCreateWithoutSectionInput>
  }

  export type ChapterCreateManySectionInputEnvelope = {
    data: ChapterCreateManySectionInput | ChapterCreateManySectionInput[]
  }

  export type CourseCreateWithoutSectionsInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: CourseCreateembeddingsInput | number[]
    transactions?: TransactionCreateNestedManyWithoutCourseInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutCourseInput
    author: UserCreateNestedOneWithoutCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSectionsInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    embeddings?: CourseCreateembeddingsInput | number[]
    transactions?: TransactionUncheckedCreateNestedManyWithoutCourseInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSectionsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
  }

  export type ChapterUpsertWithWhereUniqueWithoutSectionInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutSectionInput, ChapterUncheckedUpdateWithoutSectionInput>
    create: XOR<ChapterCreateWithoutSectionInput, ChapterUncheckedCreateWithoutSectionInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutSectionInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutSectionInput, ChapterUncheckedUpdateWithoutSectionInput>
  }

  export type ChapterUpdateManyWithWhereWithoutSectionInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutSectionInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: StringFilter<"Chapter"> | string
    type?: StringFilter<"Chapter"> | string
    title?: StringFilter<"Chapter"> | string
    content?: StringFilter<"Chapter"> | string
    videoLength?: FloatFilter<"Chapter"> | number
    videoUrl?: StringFilter<"Chapter"> | string
    videoUniqueId?: StringFilter<"Chapter"> | string
    videoType?: StringFilter<"Chapter"> | string
    sectionId?: StringFilter<"Chapter"> | string
  }

  export type CourseUpsertWithoutSectionsInput = {
    update: XOR<CourseUpdateWithoutSectionsInput, CourseUncheckedUpdateWithoutSectionsInput>
    create: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutSectionsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutSectionsInput, CourseUncheckedUpdateWithoutSectionsInput>
  }

  export type CourseUpdateWithoutSectionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    transactions?: TransactionUpdateManyWithoutCourseNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutCourseNestedInput
    author?: UserUpdateOneRequiredWithoutCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSectionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    transactions?: TransactionUncheckedUpdateManyWithoutCourseNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CommentCreateWithoutChapterInput = {
    id?: string
    text: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutChapterInput = {
    id?: string
    text: string
    timestamp?: Date | string
    userId: string
  }

  export type CommentCreateOrConnectWithoutChapterInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutChapterInput, CommentUncheckedCreateWithoutChapterInput>
  }

  export type CommentCreateManyChapterInputEnvelope = {
    data: CommentCreateManyChapterInput | CommentCreateManyChapterInput[]
  }

  export type SectionCreateWithoutChaptersInput = {
    id?: string
    sectionTitle: string
    sectionDescription: string
    course: CourseCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutChaptersInput = {
    id?: string
    sectionTitle: string
    sectionDescription: string
    courseId: string
  }

  export type SectionCreateOrConnectWithoutChaptersInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutChaptersInput, SectionUncheckedCreateWithoutChaptersInput>
  }

  export type UserCourseProgressCreateWithoutChapterInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: UserCourseSectionProgressCreateNestedManyWithoutUserCourseProgressInput
    course: CourseCreateNestedOneWithoutUserProgressesInput
    user: UserCreateNestedOneWithoutUserProgressesInput
  }

  export type UserCourseProgressUncheckedCreateWithoutChapterInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    userId: string
    sections?: UserCourseSectionProgressUncheckedCreateNestedManyWithoutUserCourseProgressInput
  }

  export type UserCourseProgressCreateOrConnectWithoutChapterInput = {
    where: UserCourseProgressWhereUniqueInput
    create: XOR<UserCourseProgressCreateWithoutChapterInput, UserCourseProgressUncheckedCreateWithoutChapterInput>
  }

  export type UserCourseProgressCreateManyChapterInputEnvelope = {
    data: UserCourseProgressCreateManyChapterInput | UserCourseProgressCreateManyChapterInput[]
  }

  export type CommentUpsertWithWhereUniqueWithoutChapterInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutChapterInput, CommentUncheckedUpdateWithoutChapterInput>
    create: XOR<CommentCreateWithoutChapterInput, CommentUncheckedCreateWithoutChapterInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutChapterInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutChapterInput, CommentUncheckedUpdateWithoutChapterInput>
  }

  export type CommentUpdateManyWithWhereWithoutChapterInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutChapterInput>
  }

  export type SectionUpsertWithoutChaptersInput = {
    update: XOR<SectionUpdateWithoutChaptersInput, SectionUncheckedUpdateWithoutChaptersInput>
    create: XOR<SectionCreateWithoutChaptersInput, SectionUncheckedCreateWithoutChaptersInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutChaptersInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutChaptersInput, SectionUncheckedUpdateWithoutChaptersInput>
  }

  export type SectionUpdateWithoutChaptersInput = {
    sectionTitle?: StringFieldUpdateOperationsInput | string
    sectionDescription?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutChaptersInput = {
    sectionTitle?: StringFieldUpdateOperationsInput | string
    sectionDescription?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCourseProgressUpsertWithWhereUniqueWithoutChapterInput = {
    where: UserCourseProgressWhereUniqueInput
    update: XOR<UserCourseProgressUpdateWithoutChapterInput, UserCourseProgressUncheckedUpdateWithoutChapterInput>
    create: XOR<UserCourseProgressCreateWithoutChapterInput, UserCourseProgressUncheckedCreateWithoutChapterInput>
  }

  export type UserCourseProgressUpdateWithWhereUniqueWithoutChapterInput = {
    where: UserCourseProgressWhereUniqueInput
    data: XOR<UserCourseProgressUpdateWithoutChapterInput, UserCourseProgressUncheckedUpdateWithoutChapterInput>
  }

  export type UserCourseProgressUpdateManyWithWhereWithoutChapterInput = {
    where: UserCourseProgressScalarWhereInput
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyWithoutChapterInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutAuthorInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ChapterCreateWithoutCommentsInput = {
    id?: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
    Section: SectionCreateNestedOneWithoutChaptersInput
    UserCourseProgress?: UserCourseProgressCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutCommentsInput = {
    id?: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
    sectionId: string
    UserCourseProgress?: UserCourseProgressUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutCommentsInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutCommentsInput, ChapterUncheckedCreateWithoutCommentsInput>
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
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutAuthorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutAuthorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChapterUpsertWithoutCommentsInput = {
    update: XOR<ChapterUpdateWithoutCommentsInput, ChapterUncheckedUpdateWithoutCommentsInput>
    create: XOR<ChapterCreateWithoutCommentsInput, ChapterUncheckedCreateWithoutCommentsInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutCommentsInput, ChapterUncheckedUpdateWithoutCommentsInput>
  }

  export type ChapterUpdateWithoutCommentsInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
    Section?: SectionUpdateOneRequiredWithoutChaptersNestedInput
    UserCourseProgress?: UserCourseProgressUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutCommentsInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    UserCourseProgress?: UserCourseProgressUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutAuthorInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type CourseCreateWithoutTransactionsInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: CourseCreateembeddingsInput | number[]
    sections?: SectionCreateNestedManyWithoutCourseInput
    userProgresses?: UserCourseProgressCreateNestedManyWithoutCourseInput
    author: UserCreateNestedOneWithoutCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTransactionsInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    embeddings?: CourseCreateembeddingsInput | number[]
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    userProgresses?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTransactionsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTransactionsInput, CourseUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutAuthorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutAuthorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutTransactionsInput = {
    update: XOR<CourseUpdateWithoutTransactionsInput, CourseUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CourseCreateWithoutTransactionsInput, CourseUncheckedCreateWithoutTransactionsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTransactionsInput, CourseUncheckedUpdateWithoutTransactionsInput>
  }

  export type CourseUpdateWithoutTransactionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    sections?: SectionUpdateManyWithoutCourseNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutCourseNestedInput
    author?: UserUpdateOneRequiredWithoutCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTransactionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCourseSectionProgressCreateWithoutUserCourseProgressInput = {
    id?: string
    sectionId: string
    chapters?: UserCourseChapterProgressCreateNestedManyWithoutUserCourseSectionProgressInput
  }

  export type UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput = {
    id?: string
    sectionId: string
    chapters?: UserCourseChapterProgressUncheckedCreateNestedManyWithoutUserCourseSectionProgressInput
  }

  export type UserCourseSectionProgressCreateOrConnectWithoutUserCourseProgressInput = {
    where: UserCourseSectionProgressWhereUniqueInput
    create: XOR<UserCourseSectionProgressCreateWithoutUserCourseProgressInput, UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput>
  }

  export type UserCourseSectionProgressCreateManyUserCourseProgressInputEnvelope = {
    data: UserCourseSectionProgressCreateManyUserCourseProgressInput | UserCourseSectionProgressCreateManyUserCourseProgressInput[]
  }

  export type CourseCreateWithoutUserProgressesInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: CourseCreateembeddingsInput | number[]
    sections?: SectionCreateNestedManyWithoutCourseInput
    transactions?: TransactionCreateNestedManyWithoutCourseInput
    author: UserCreateNestedOneWithoutCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutUserProgressesInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    embeddings?: CourseCreateembeddingsInput | number[]
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutUserProgressesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutUserProgressesInput, CourseUncheckedCreateWithoutUserProgressesInput>
  }

  export type UserCreateWithoutUserProgressesInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    courses?: CourseCreateNestedManyWithoutAuthorInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserProgressesInput = {
    id?: string
    googleId?: string | null
    email: string
    name?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    about?: string | null
    experiences?: UserCreateexperiencesInput | string[]
    education?: UserCreateeducationInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserProgressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProgressesInput, UserUncheckedCreateWithoutUserProgressesInput>
  }

  export type ChapterCreateWithoutUserCourseProgressInput = {
    id?: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
    comments?: CommentCreateNestedManyWithoutChapterInput
    Section: SectionCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateWithoutUserCourseProgressInput = {
    id?: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
    sectionId: string
    comments?: CommentUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutUserCourseProgressInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutUserCourseProgressInput, ChapterUncheckedCreateWithoutUserCourseProgressInput>
  }

  export type UserCourseSectionProgressUpsertWithWhereUniqueWithoutUserCourseProgressInput = {
    where: UserCourseSectionProgressWhereUniqueInput
    update: XOR<UserCourseSectionProgressUpdateWithoutUserCourseProgressInput, UserCourseSectionProgressUncheckedUpdateWithoutUserCourseProgressInput>
    create: XOR<UserCourseSectionProgressCreateWithoutUserCourseProgressInput, UserCourseSectionProgressUncheckedCreateWithoutUserCourseProgressInput>
  }

  export type UserCourseSectionProgressUpdateWithWhereUniqueWithoutUserCourseProgressInput = {
    where: UserCourseSectionProgressWhereUniqueInput
    data: XOR<UserCourseSectionProgressUpdateWithoutUserCourseProgressInput, UserCourseSectionProgressUncheckedUpdateWithoutUserCourseProgressInput>
  }

  export type UserCourseSectionProgressUpdateManyWithWhereWithoutUserCourseProgressInput = {
    where: UserCourseSectionProgressScalarWhereInput
    data: XOR<UserCourseSectionProgressUpdateManyMutationInput, UserCourseSectionProgressUncheckedUpdateManyWithoutUserCourseProgressInput>
  }

  export type UserCourseSectionProgressScalarWhereInput = {
    AND?: UserCourseSectionProgressScalarWhereInput | UserCourseSectionProgressScalarWhereInput[]
    OR?: UserCourseSectionProgressScalarWhereInput[]
    NOT?: UserCourseSectionProgressScalarWhereInput | UserCourseSectionProgressScalarWhereInput[]
    id?: StringFilter<"UserCourseSectionProgress"> | string
    sectionId?: StringFilter<"UserCourseSectionProgress"> | string
    userCourseProgressId?: StringFilter<"UserCourseSectionProgress"> | string
  }

  export type CourseUpsertWithoutUserProgressesInput = {
    update: XOR<CourseUpdateWithoutUserProgressesInput, CourseUncheckedUpdateWithoutUserProgressesInput>
    create: XOR<CourseCreateWithoutUserProgressesInput, CourseUncheckedCreateWithoutUserProgressesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutUserProgressesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutUserProgressesInput, CourseUncheckedUpdateWithoutUserProgressesInput>
  }

  export type CourseUpdateWithoutUserProgressesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    sections?: SectionUpdateManyWithoutCourseNestedInput
    transactions?: TransactionUpdateManyWithoutCourseNestedInput
    author?: UserUpdateOneRequiredWithoutCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutUserProgressesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutUserProgressesInput = {
    update: XOR<UserUpdateWithoutUserProgressesInput, UserUncheckedUpdateWithoutUserProgressesInput>
    create: XOR<UserCreateWithoutUserProgressesInput, UserUncheckedCreateWithoutUserProgressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProgressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProgressesInput, UserUncheckedUpdateWithoutUserProgressesInput>
  }

  export type UserUpdateWithoutUserProgressesInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    courses?: CourseUpdateManyWithoutAuthorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProgressesInput = {
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experiences?: UserUpdateexperiencesInput | string[]
    education?: UserUpdateeducationInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    courses?: CourseUncheckedUpdateManyWithoutAuthorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChapterUpsertWithoutUserCourseProgressInput = {
    update: XOR<ChapterUpdateWithoutUserCourseProgressInput, ChapterUncheckedUpdateWithoutUserCourseProgressInput>
    create: XOR<ChapterCreateWithoutUserCourseProgressInput, ChapterUncheckedCreateWithoutUserCourseProgressInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutUserCourseProgressInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutUserCourseProgressInput, ChapterUncheckedUpdateWithoutUserCourseProgressInput>
  }

  export type ChapterUpdateWithoutUserCourseProgressInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutChapterNestedInput
    Section?: SectionUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateWithoutUserCourseProgressInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput = {
    id?: string
    chapterId: string
    completed: boolean
    lastPosition: number
  }

  export type UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput = {
    id?: string
    chapterId: string
    completed: boolean
    lastPosition: number
  }

  export type UserCourseChapterProgressCreateOrConnectWithoutUserCourseSectionProgressInput = {
    where: UserCourseChapterProgressWhereUniqueInput
    create: XOR<UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput, UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput>
  }

  export type UserCourseChapterProgressCreateManyUserCourseSectionProgressInputEnvelope = {
    data: UserCourseChapterProgressCreateManyUserCourseSectionProgressInput | UserCourseChapterProgressCreateManyUserCourseSectionProgressInput[]
  }

  export type UserCourseProgressCreateWithoutSectionsInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutUserProgressesInput
    user: UserCreateNestedOneWithoutUserProgressesInput
    chapter?: ChapterCreateNestedOneWithoutUserCourseProgressInput
  }

  export type UserCourseProgressUncheckedCreateWithoutSectionsInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    userId: string
    chapterId?: string | null
  }

  export type UserCourseProgressCreateOrConnectWithoutSectionsInput = {
    where: UserCourseProgressWhereUniqueInput
    create: XOR<UserCourseProgressCreateWithoutSectionsInput, UserCourseProgressUncheckedCreateWithoutSectionsInput>
  }

  export type UserCourseChapterProgressUpsertWithWhereUniqueWithoutUserCourseSectionProgressInput = {
    where: UserCourseChapterProgressWhereUniqueInput
    update: XOR<UserCourseChapterProgressUpdateWithoutUserCourseSectionProgressInput, UserCourseChapterProgressUncheckedUpdateWithoutUserCourseSectionProgressInput>
    create: XOR<UserCourseChapterProgressCreateWithoutUserCourseSectionProgressInput, UserCourseChapterProgressUncheckedCreateWithoutUserCourseSectionProgressInput>
  }

  export type UserCourseChapterProgressUpdateWithWhereUniqueWithoutUserCourseSectionProgressInput = {
    where: UserCourseChapterProgressWhereUniqueInput
    data: XOR<UserCourseChapterProgressUpdateWithoutUserCourseSectionProgressInput, UserCourseChapterProgressUncheckedUpdateWithoutUserCourseSectionProgressInput>
  }

  export type UserCourseChapterProgressUpdateManyWithWhereWithoutUserCourseSectionProgressInput = {
    where: UserCourseChapterProgressScalarWhereInput
    data: XOR<UserCourseChapterProgressUpdateManyMutationInput, UserCourseChapterProgressUncheckedUpdateManyWithoutUserCourseSectionProgressInput>
  }

  export type UserCourseChapterProgressScalarWhereInput = {
    AND?: UserCourseChapterProgressScalarWhereInput | UserCourseChapterProgressScalarWhereInput[]
    OR?: UserCourseChapterProgressScalarWhereInput[]
    NOT?: UserCourseChapterProgressScalarWhereInput | UserCourseChapterProgressScalarWhereInput[]
    id?: StringFilter<"UserCourseChapterProgress"> | string
    chapterId?: StringFilter<"UserCourseChapterProgress"> | string
    completed?: BoolFilter<"UserCourseChapterProgress"> | boolean
    lastPosition?: FloatFilter<"UserCourseChapterProgress"> | number
    userCourseSectionProgressId?: StringFilter<"UserCourseChapterProgress"> | string
  }

  export type UserCourseProgressUpsertWithoutSectionsInput = {
    update: XOR<UserCourseProgressUpdateWithoutSectionsInput, UserCourseProgressUncheckedUpdateWithoutSectionsInput>
    create: XOR<UserCourseProgressCreateWithoutSectionsInput, UserCourseProgressUncheckedCreateWithoutSectionsInput>
    where?: UserCourseProgressWhereInput
  }

  export type UserCourseProgressUpdateToOneWithWhereWithoutSectionsInput = {
    where?: UserCourseProgressWhereInput
    data: XOR<UserCourseProgressUpdateWithoutSectionsInput, UserCourseProgressUncheckedUpdateWithoutSectionsInput>
  }

  export type UserCourseProgressUpdateWithoutSectionsInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutUserProgressesNestedInput
    user?: UserUpdateOneRequiredWithoutUserProgressesNestedInput
    chapter?: ChapterUpdateOneWithoutUserCourseProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateWithoutSectionsInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCourseSectionProgressCreateWithoutChaptersInput = {
    id?: string
    sectionId: string
    userCourseProgress: UserCourseProgressCreateNestedOneWithoutSectionsInput
  }

  export type UserCourseSectionProgressUncheckedCreateWithoutChaptersInput = {
    id?: string
    sectionId: string
    userCourseProgressId: string
  }

  export type UserCourseSectionProgressCreateOrConnectWithoutChaptersInput = {
    where: UserCourseSectionProgressWhereUniqueInput
    create: XOR<UserCourseSectionProgressCreateWithoutChaptersInput, UserCourseSectionProgressUncheckedCreateWithoutChaptersInput>
  }

  export type UserCourseSectionProgressUpsertWithoutChaptersInput = {
    update: XOR<UserCourseSectionProgressUpdateWithoutChaptersInput, UserCourseSectionProgressUncheckedUpdateWithoutChaptersInput>
    create: XOR<UserCourseSectionProgressCreateWithoutChaptersInput, UserCourseSectionProgressUncheckedCreateWithoutChaptersInput>
    where?: UserCourseSectionProgressWhereInput
  }

  export type UserCourseSectionProgressUpdateToOneWithWhereWithoutChaptersInput = {
    where?: UserCourseSectionProgressWhereInput
    data: XOR<UserCourseSectionProgressUpdateWithoutChaptersInput, UserCourseSectionProgressUncheckedUpdateWithoutChaptersInput>
  }

  export type UserCourseSectionProgressUpdateWithoutChaptersInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    userCourseProgress?: UserCourseProgressUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type UserCourseSectionProgressUncheckedUpdateWithoutChaptersInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    userCourseProgressId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    text: string
    timestamp?: Date | string
    chapterId: string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    paymentProvider: string
    transactionId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type UserCourseProgressCreateManyUserInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    chapterId?: string | null
  }

  export type CourseCreateManyAuthorInput = {
    id?: string
    title: string
    description: string
    category: string
    image: string
    price: number
    level?: $Enums.Level
    isPublished?: boolean
    whatYouLearn?: CourseCreatewhatYouLearnInput | string[]
    requirements?: CourseCreaterequirementsInput | string[]
    targetAudience?: CourseCreatetargetAudienceInput | string[]
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: CourseCreateembeddingsInput | number[]
  }

  export type EnrollmentCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutUserInput = {
    paymentProvider?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    paymentProvider?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    paymentProvider?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCourseProgressUpdateWithoutUserInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: UserCourseSectionProgressUpdateManyWithoutUserCourseProgressNestedInput
    course?: CourseUpdateOneRequiredWithoutUserProgressesNestedInput
    chapter?: ChapterUpdateOneWithoutUserCourseProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateWithoutUserInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    chapterId?: NullableStringFieldUpdateOperationsInput | string | null
    sections?: UserCourseSectionProgressUncheckedUpdateManyWithoutUserCourseProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutUserInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    chapterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    sections?: SectionUpdateManyWithoutCourseNestedInput
    transactions?: TransactionUpdateManyWithoutCourseNestedInput
    userProgresses?: UserCourseProgressUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: CourseUpdateembeddingsInput | number[]
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCourseNestedInput
    userProgresses?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    whatYouLearn?: CourseUpdatewhatYouLearnInput | string[]
    requirements?: CourseUpdaterequirementsInput | string[]
    targetAudience?: CourseUpdatetargetAudienceInput | string[]
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: CourseUpdateembeddingsInput | number[]
  }

  export type EnrollmentUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateManyCourseInput = {
    id?: string
    sectionTitle: string
    sectionDescription: string
  }

  export type TransactionCreateManyCourseInput = {
    id?: string
    paymentProvider: string
    transactionId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type UserCourseProgressCreateManyCourseInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chapterId?: string | null
  }

  export type EnrollmentCreateManyCourseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SectionUpdateWithoutCourseInput = {
    sectionTitle?: StringFieldUpdateOperationsInput | string
    sectionDescription?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutCourseInput = {
    sectionTitle?: StringFieldUpdateOperationsInput | string
    sectionDescription?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutCourseInput = {
    sectionTitle?: StringFieldUpdateOperationsInput | string
    sectionDescription?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutCourseInput = {
    paymentProvider?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCourseInput = {
    paymentProvider?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutCourseInput = {
    paymentProvider?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCourseProgressUpdateWithoutCourseInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: UserCourseSectionProgressUpdateManyWithoutUserCourseProgressNestedInput
    user?: UserUpdateOneRequiredWithoutUserProgressesNestedInput
    chapter?: ChapterUpdateOneWithoutUserCourseProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateWithoutCourseInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: NullableStringFieldUpdateOperationsInput | string | null
    sections?: UserCourseSectionProgressUncheckedUpdateManyWithoutUserCourseProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutCourseInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chapterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateManySectionInput = {
    id?: string
    type: string
    title: string
    content: string
    videoLength: number
    videoUrl: string
    videoUniqueId: string
    videoType: string
  }

  export type ChapterUpdateWithoutSectionInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutChapterNestedInput
    UserCourseProgress?: UserCourseProgressUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutSectionInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutChapterNestedInput
    UserCourseProgress?: UserCourseProgressUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateManyWithoutSectionInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoLength?: FloatFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoUniqueId?: StringFieldUpdateOperationsInput | string
    videoType?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyChapterInput = {
    id?: string
    text: string
    timestamp?: Date | string
    userId: string
  }

  export type UserCourseProgressCreateManyChapterInput = {
    id?: string
    enrollmentDate: Date | string
    overallProgress: number
    lastAccessedTimestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    userId: string
  }

  export type CommentUpdateWithoutChapterInput = {
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutChapterInput = {
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutChapterInput = {
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCourseProgressUpdateWithoutChapterInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: UserCourseSectionProgressUpdateManyWithoutUserCourseProgressNestedInput
    course?: CourseUpdateOneRequiredWithoutUserProgressesNestedInput
    user?: UserUpdateOneRequiredWithoutUserProgressesNestedInput
  }

  export type UserCourseProgressUncheckedUpdateWithoutChapterInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sections?: UserCourseSectionProgressUncheckedUpdateManyWithoutUserCourseProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutChapterInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    overallProgress?: FloatFieldUpdateOperationsInput | number
    lastAccessedTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCourseSectionProgressCreateManyUserCourseProgressInput = {
    id?: string
    sectionId: string
  }

  export type UserCourseSectionProgressUpdateWithoutUserCourseProgressInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    chapters?: UserCourseChapterProgressUpdateManyWithoutUserCourseSectionProgressNestedInput
  }

  export type UserCourseSectionProgressUncheckedUpdateWithoutUserCourseProgressInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    chapters?: UserCourseChapterProgressUncheckedUpdateManyWithoutUserCourseSectionProgressNestedInput
  }

  export type UserCourseSectionProgressUncheckedUpdateManyWithoutUserCourseProgressInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCourseChapterProgressCreateManyUserCourseSectionProgressInput = {
    id?: string
    chapterId: string
    completed: boolean
    lastPosition: number
  }

  export type UserCourseChapterProgressUpdateWithoutUserCourseSectionProgressInput = {
    chapterId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastPosition?: FloatFieldUpdateOperationsInput | number
  }

  export type UserCourseChapterProgressUncheckedUpdateWithoutUserCourseSectionProgressInput = {
    chapterId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastPosition?: FloatFieldUpdateOperationsInput | number
  }

  export type UserCourseChapterProgressUncheckedUpdateManyWithoutUserCourseSectionProgressInput = {
    chapterId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastPosition?: FloatFieldUpdateOperationsInput | number
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