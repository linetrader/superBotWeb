import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkStatusSchema } from '../enums/WorkStatus.schema';
import { NestedEnumWorkStatusWithAggregatesFilterObjectSchema as NestedEnumWorkStatusWithAggregatesFilterObjectSchema } from './NestedEnumWorkStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumWorkStatusFilterObjectSchema as NestedEnumWorkStatusFilterObjectSchema } from './NestedEnumWorkStatusFilter.schema'

const makeSchema = () => z.object({
  equals: WorkStatusSchema.optional(),
  in: WorkStatusSchema.array().optional(),
  notIn: WorkStatusSchema.array().optional(),
  not: z.union([WorkStatusSchema, z.lazy(() => NestedEnumWorkStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumWorkStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumWorkStatusFilterObjectSchema).optional()
}).strict();
export const EnumWorkStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumWorkStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumWorkStatusWithAggregatesFilter>;
export const EnumWorkStatusWithAggregatesFilterObjectZodSchema = makeSchema();
