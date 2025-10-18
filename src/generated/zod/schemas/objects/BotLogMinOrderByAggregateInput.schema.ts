import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  botId: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const BotLogMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BotLogMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogMinOrderByAggregateInput>;
export const BotLogMinOrderByAggregateInputObjectZodSchema = makeSchema();
