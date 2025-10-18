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
  payload: SortOrderSchema.optional(),
  attempts: SortOrderSchema.optional(),
  nextVisibleAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemCountOrderByAggregateInput>;
export const WorkItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
