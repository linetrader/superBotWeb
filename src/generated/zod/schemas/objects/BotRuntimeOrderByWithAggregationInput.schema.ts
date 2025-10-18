import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BotRuntimeCountOrderByAggregateInputObjectSchema as BotRuntimeCountOrderByAggregateInputObjectSchema } from './BotRuntimeCountOrderByAggregateInput.schema';
import { BotRuntimeAvgOrderByAggregateInputObjectSchema as BotRuntimeAvgOrderByAggregateInputObjectSchema } from './BotRuntimeAvgOrderByAggregateInput.schema';
import { BotRuntimeMaxOrderByAggregateInputObjectSchema as BotRuntimeMaxOrderByAggregateInputObjectSchema } from './BotRuntimeMaxOrderByAggregateInput.schema';
import { BotRuntimeMinOrderByAggregateInputObjectSchema as BotRuntimeMinOrderByAggregateInputObjectSchema } from './BotRuntimeMinOrderByAggregateInput.schema';
import { BotRuntimeSumOrderByAggregateInputObjectSchema as BotRuntimeSumOrderByAggregateInputObjectSchema } from './BotRuntimeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  botId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  pid: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  queueJobId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  startedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stoppedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastHeartbeat: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastError: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  workerTaskArn: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  workerRevision: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  desiredState: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BotRuntimeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BotRuntimeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BotRuntimeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BotRuntimeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BotRuntimeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BotRuntimeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BotRuntimeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeOrderByWithAggregationInput>;
export const BotRuntimeOrderByWithAggregationInputObjectZodSchema = makeSchema();
