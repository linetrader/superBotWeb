import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional(),
  exchangeMarketId: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  allocationBps: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BotGroupExchangeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeMaxOrderByAggregateInput>;
export const BotGroupExchangeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
