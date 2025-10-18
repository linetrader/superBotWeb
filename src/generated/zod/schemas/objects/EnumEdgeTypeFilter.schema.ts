import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EdgeTypeSchema } from '../enums/EdgeType.schema';
import { NestedEnumEdgeTypeFilterObjectSchema as NestedEnumEdgeTypeFilterObjectSchema } from './NestedEnumEdgeTypeFilter.schema'

const makeSchema = () => z.object({
  equals: EdgeTypeSchema.optional(),
  in: EdgeTypeSchema.array().optional(),
  notIn: EdgeTypeSchema.array().optional(),
  not: z.union([EdgeTypeSchema, z.lazy(() => NestedEnumEdgeTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumEdgeTypeFilterObjectSchema: z.ZodType<Prisma.EnumEdgeTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumEdgeTypeFilter>;
export const EnumEdgeTypeFilterObjectZodSchema = makeSchema();
