import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TradingBotOrderByWithRelationInputObjectSchema as TradingBotOrderByWithRelationInputObjectSchema } from './TradingBotOrderByWithRelationInput.schema';
import { WorkAttemptOrderByRelationAggregateInputObjectSchema as WorkAttemptOrderByRelationAggregateInputObjectSchema } from './WorkAttemptOrderByRelationAggregateInput.schema'

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
  bot: z.lazy(() => TradingBotOrderByWithRelationInputObjectSchema).optional(),
  runs: z.lazy(() => WorkAttemptOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const WorkItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemOrderByWithRelationInput>;
export const WorkItemOrderByWithRelationInputObjectZodSchema = makeSchema();
