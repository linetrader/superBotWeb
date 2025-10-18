import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EdgeTypeSchema } from '../enums/EdgeType.schema'

const nestedenumedgetypefilterSchema = z.object({
  equals: EdgeTypeSchema.optional(),
  in: EdgeTypeSchema.array().optional(),
  notIn: EdgeTypeSchema.array().optional(),
  not: z.union([EdgeTypeSchema, z.lazy(() => NestedEnumEdgeTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumEdgeTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumEdgeTypeFilter> = nestedenumedgetypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumEdgeTypeFilter>;
export const NestedEnumEdgeTypeFilterObjectZodSchema = nestedenumedgetypefilterSchema;
