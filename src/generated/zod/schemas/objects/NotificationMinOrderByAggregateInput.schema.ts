import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  channel: SortOrderSchema.optional(),
  target: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const NotificationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationMinOrderByAggregateInput>;
export const NotificationMinOrderByAggregateInputObjectZodSchema = makeSchema();
