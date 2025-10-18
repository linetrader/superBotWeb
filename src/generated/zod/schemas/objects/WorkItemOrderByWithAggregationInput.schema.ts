import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkItemCountOrderByAggregateInputObjectSchema as WorkItemCountOrderByAggregateInputObjectSchema } from './WorkItemCountOrderByAggregateInput.schema';
import { WorkItemAvgOrderByAggregateInputObjectSchema as WorkItemAvgOrderByAggregateInputObjectSchema } from './WorkItemAvgOrderByAggregateInput.schema';
import { WorkItemMaxOrderByAggregateInputObjectSchema as WorkItemMaxOrderByAggregateInputObjectSchema } from './WorkItemMaxOrderByAggregateInput.schema';
import { WorkItemMinOrderByAggregateInputObjectSchema as WorkItemMinOrderByAggregateInputObjectSchema } from './WorkItemMinOrderByAggregateInput.schema';
import { WorkItemSumOrderByAggregateInputObjectSchema as WorkItemSumOrderByAggregateInputObjectSchema } from './WorkItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  botId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  dedupeKey: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sqsMessageId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sqsGroupId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  payload: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  attempts: SortOrderSchema.optional(),
  nextVisibleAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WorkItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WorkItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WorkItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemOrderByWithAggregationInput>;
export const WorkItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
