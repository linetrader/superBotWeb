import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { LogLevelSchema } from '../enums/LogLevel.schema';
import { NestedEnumLogLevelFilterObjectSchema as NestedEnumLogLevelFilterObjectSchema } from './NestedEnumLogLevelFilter.schema'

const makeSchema = () => z.object({
  equals: LogLevelSchema.optional(),
  in: LogLevelSchema.array().optional(),
  notIn: LogLevelSchema.array().optional(),
  not: z.union([LogLevelSchema, z.lazy(() => NestedEnumLogLevelFilterObjectSchema)]).optional()
}).strict();
export const EnumLogLevelFilterObjectSchema: z.ZodType<Prisma.EnumLogLevelFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumLogLevelFilter>;
export const EnumLogLevelFilterObjectZodSchema = makeSchema();
