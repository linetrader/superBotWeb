import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  botId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  pid: SortOrderSchema.optional(),
  queueJobId: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  stoppedAt: SortOrderSchema.optional(),
  lastHeartbeat: SortOrderSchema.optional(),
  lastError: SortOrderSchema.optional(),
  workerTaskArn: SortOrderSchema.optional(),
  workerRevision: SortOrderSchema.optional(),
  desiredState: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BotRuntimeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BotRuntimeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeMaxOrderByAggregateInput>;
export const BotRuntimeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
