import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { NotifyStatusSchema } from '../enums/NotifyStatus.schema';
import { NestedEnumNotifyStatusWithAggregatesFilterObjectSchema as NestedEnumNotifyStatusWithAggregatesFilterObjectSchema } from './NestedEnumNotifyStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumNotifyStatusFilterObjectSchema as NestedEnumNotifyStatusFilterObjectSchema } from './NestedEnumNotifyStatusFilter.schema'

const makeSchema = () => z.object({
  equals: NotifyStatusSchema.optional(),
  in: NotifyStatusSchema.array().optional(),
  notIn: NotifyStatusSchema.array().optional(),
  not: z.union([NotifyStatusSchema, z.lazy(() => NestedEnumNotifyStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumNotifyStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumNotifyStatusFilterObjectSchema).optional()
}).strict();
export const EnumNotifyStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumNotifyStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumNotifyStatusWithAggregatesFilter>;
export const EnumNotifyStatusWithAggregatesFilterObjectZodSchema = makeSchema();
