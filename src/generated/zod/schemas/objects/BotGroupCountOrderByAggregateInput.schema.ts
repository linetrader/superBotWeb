import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  botId: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BotGroupCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCountOrderByAggregateInput>;
export const BotGroupCountOrderByAggregateInputObjectZodSchema = makeSchema();
