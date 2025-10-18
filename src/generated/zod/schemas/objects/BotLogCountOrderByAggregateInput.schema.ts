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
export const BotLogCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BotLogCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogCountOrderByAggregateInput>;
export const BotLogCountOrderByAggregateInputObjectZodSchema = makeSchema();
