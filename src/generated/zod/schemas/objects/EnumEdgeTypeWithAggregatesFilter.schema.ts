import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EdgeTypeSchema } from '../enums/EdgeType.schema';
import { NestedEnumEdgeTypeWithAggregatesFilterObjectSchema as NestedEnumEdgeTypeWithAggregatesFilterObjectSchema } from './NestedEnumEdgeTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEdgeTypeFilterObjectSchema as NestedEnumEdgeTypeFilterObjectSchema } from './NestedEnumEdgeTypeFilter.schema'

const makeSchema = () => z.object({
  equals: EdgeTypeSchema.optional(),
  in: EdgeTypeSchema.array().optional(),
  notIn: EdgeTypeSchema.array().optional(),
  not: z.union([EdgeTypeSchema, z.lazy(() => NestedEnumEdgeTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumEdgeTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumEdgeTypeFilterObjectSchema).optional()
}).strict();
export const EnumEdgeTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumEdgeTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumEdgeTypeWithAggregatesFilter>;
export const EnumEdgeTypeWithAggregatesFilterObjectZodSchema = makeSchema();
