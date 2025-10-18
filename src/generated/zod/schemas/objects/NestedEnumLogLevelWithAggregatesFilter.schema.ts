import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { LogLevelSchema } from '../enums/LogLevel.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumLogLevelFilterObjectSchema as NestedEnumLogLevelFilterObjectSchema } from './NestedEnumLogLevelFilter.schema'

const nestedenumloglevelwithaggregatesfilterSchema = z.object({
  equals: LogLevelSchema.optional(),
  in: LogLevelSchema.array().optional(),
  notIn: LogLevelSchema.array().optional(),
  not: z.union([LogLevelSchema, z.lazy(() => NestedEnumLogLevelWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumLogLevelFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumLogLevelFilterObjectSchema).optional()
}).strict();
export const NestedEnumLogLevelWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumLogLevelWithAggregatesFilter> = nestedenumloglevelwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumLogLevelWithAggregatesFilter>;
export const NestedEnumLogLevelWithAggregatesFilterObjectZodSchema = nestedenumloglevelwithaggregatesfilterSchema;
