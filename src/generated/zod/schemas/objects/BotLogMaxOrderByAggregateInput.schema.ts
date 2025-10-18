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
export const BotLogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BotLogMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogMaxOrderByAggregateInput>;
export const BotLogMaxOrderByAggregateInputObjectZodSchema = makeSchema();
