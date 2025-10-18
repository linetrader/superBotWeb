import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  botId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  dedupeKey: SortOrderSchema.optional(),
  sqsMessageId: SortOrderSchema.optional(),
  sqsGroupId: SortOrderSchema.optional(),
  attempts: SortOrderSchema.optional(),
  nextVisibleAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkItemMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemMaxOrderByAggregateInput>;
export const WorkItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
