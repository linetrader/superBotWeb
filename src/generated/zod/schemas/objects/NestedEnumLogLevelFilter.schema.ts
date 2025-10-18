import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { LogLevelSchema } from '../enums/LogLevel.schema'

const nestedenumloglevelfilterSchema = z.object({
  equals: LogLevelSchema.optional(),
  in: LogLevelSchema.array().optional(),
  notIn: LogLevelSchema.array().optional(),
  not: z.union([LogLevelSchema, z.lazy(() => NestedEnumLogLevelFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumLogLevelFilterObjectSchema: z.ZodType<Prisma.NestedEnumLogLevelFilter> = nestedenumloglevelfilterSchema as unknown as z.ZodType<Prisma.NestedEnumLogLevelFilter>;
export const NestedEnumLogLevelFilterObjectZodSchema = nestedenumloglevelfilterSchema;
