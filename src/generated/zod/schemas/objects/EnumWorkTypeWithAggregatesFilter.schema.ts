import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkTypeSchema } from '../enums/WorkType.schema';
import { NestedEnumWorkTypeWithAggregatesFilterObjectSchema as NestedEnumWorkTypeWithAggregatesFilterObjectSchema } from './NestedEnumWorkTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumWorkTypeFilterObjectSchema as NestedEnumWorkTypeFilterObjectSchema } from './NestedEnumWorkTypeFilter.schema'

const makeSchema = () => z.object({
  equals: WorkTypeSchema.optional(),
  in: WorkTypeSchema.array().optional(),
  notIn: WorkTypeSchema.array().optional(),
  not: z.union([WorkTypeSchema, z.lazy(() => NestedEnumWorkTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumWorkTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumWorkTypeFilterObjectSchema).optional()
}).strict();
export const EnumWorkTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumWorkTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumWorkTypeWithAggregatesFilter>;
export const EnumWorkTypeWithAggregatesFilterObjectZodSchema = makeSchema();
