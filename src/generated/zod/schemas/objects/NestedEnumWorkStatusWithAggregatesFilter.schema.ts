import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkStatusSchema } from '../enums/WorkStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumWorkStatusFilterObjectSchema as NestedEnumWorkStatusFilterObjectSchema } from './NestedEnumWorkStatusFilter.schema'

const nestedenumworkstatuswithaggregatesfilterSchema = z.object({
  equals: WorkStatusSchema.optional(),
  in: WorkStatusSchema.array().optional(),
  notIn: WorkStatusSchema.array().optional(),
  not: z.union([WorkStatusSchema, z.lazy(() => NestedEnumWorkStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumWorkStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumWorkStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumWorkStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumWorkStatusWithAggregatesFilter> = nestedenumworkstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumWorkStatusWithAggregatesFilter>;
export const NestedEnumWorkStatusWithAggregatesFilterObjectZodSchema = nestedenumworkstatuswithaggregatesfilterSchema;
