import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkAttemptCountOrderByAggregateInputObjectSchema as WorkAttemptCountOrderByAggregateInputObjectSchema } from './WorkAttemptCountOrderByAggregateInput.schema';
import { WorkAttemptAvgOrderByAggregateInputObjectSchema as WorkAttemptAvgOrderByAggregateInputObjectSchema } from './WorkAttemptAvgOrderByAggregateInput.schema';
import { WorkAttemptMaxOrderByAggregateInputObjectSchema as WorkAttemptMaxOrderByAggregateInputObjectSchema } from './WorkAttemptMaxOrderByAggregateInput.schema';
import { WorkAttemptMinOrderByAggregateInputObjectSchema as WorkAttemptMinOrderByAggregateInputObjectSchema } from './WorkAttemptMinOrderByAggregateInput.schema';
import { WorkAttemptSumOrderByAggregateInputObjectSchema as WorkAttemptSumOrderByAggregateInputObjectSchema } from './WorkAttemptSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workItemId: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  finishedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  workerTaskArn: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  exitCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  error: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logsRef: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => WorkAttemptCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WorkAttemptAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkAttemptMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkAttemptMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WorkAttemptSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkAttemptOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkAttemptOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptOrderByWithAggregationInput>;
export const WorkAttemptOrderByWithAggregationInputObjectZodSchema = makeSchema();
