import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { LogLevelSchema } from '../enums/LogLevel.schema';
import { NestedEnumLogLevelWithAggregatesFilterObjectSchema as NestedEnumLogLevelWithAggregatesFilterObjectSchema } from './NestedEnumLogLevelWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumLogLevelFilterObjectSchema as NestedEnumLogLevelFilterObjectSchema } from './NestedEnumLogLevelFilter.schema'

const makeSchema = () => z.object({
  equals: LogLevelSchema.optional(),
  in: LogLevelSchema.array().optional(),
  notIn: LogLevelSchema.array().optional(),
  not: z.union([LogLevelSchema, z.lazy(() => NestedEnumLogLevelWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumLogLevelFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumLogLevelFilterObjectSchema).optional()
}).strict();
export const EnumLogLevelWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumLogLevelWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumLogLevelWithAggregatesFilter>;
export const EnumLogLevelWithAggregatesFilterObjectZodSchema = makeSchema();
