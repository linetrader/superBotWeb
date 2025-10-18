import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TimeframeSchema } from '../enums/Timeframe.schema';
import { NestedEnumTimeframeWithAggregatesFilterObjectSchema as NestedEnumTimeframeWithAggregatesFilterObjectSchema } from './NestedEnumTimeframeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTimeframeFilterObjectSchema as NestedEnumTimeframeFilterObjectSchema } from './NestedEnumTimeframeFilter.schema'

const makeSchema = () => z.object({
  equals: TimeframeSchema.optional(),
  in: TimeframeSchema.array().optional(),
  notIn: TimeframeSchema.array().optional(),
  not: z.union([TimeframeSchema, z.lazy(() => NestedEnumTimeframeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTimeframeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTimeframeFilterObjectSchema).optional()
}).strict();
export const EnumTimeframeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumTimeframeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTimeframeWithAggregatesFilter>;
export const EnumTimeframeWithAggregatesFilterObjectZodSchema = makeSchema();
