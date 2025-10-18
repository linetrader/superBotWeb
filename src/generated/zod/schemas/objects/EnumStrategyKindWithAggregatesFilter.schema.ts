import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyKindSchema } from '../enums/StrategyKind.schema';
import { NestedEnumStrategyKindWithAggregatesFilterObjectSchema as NestedEnumStrategyKindWithAggregatesFilterObjectSchema } from './NestedEnumStrategyKindWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStrategyKindFilterObjectSchema as NestedEnumStrategyKindFilterObjectSchema } from './NestedEnumStrategyKindFilter.schema'

const makeSchema = () => z.object({
  equals: StrategyKindSchema.optional(),
  in: StrategyKindSchema.array().optional(),
  notIn: StrategyKindSchema.array().optional(),
  not: z.union([StrategyKindSchema, z.lazy(() => NestedEnumStrategyKindWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStrategyKindFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStrategyKindFilterObjectSchema).optional()
}).strict();
export const EnumStrategyKindWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumStrategyKindWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStrategyKindWithAggregatesFilter>;
export const EnumStrategyKindWithAggregatesFilterObjectZodSchema = makeSchema();
