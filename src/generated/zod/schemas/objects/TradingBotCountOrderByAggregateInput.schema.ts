import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  mode: SortOrderSchema.optional(),
  exchangeMarketId: SortOrderSchema.optional(),
  singleMarketKind: SortOrderSchema.optional(),
  symbol: SortOrderSchema.optional(),
  strategyConfigId: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const TradingBotCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TradingBotCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCountOrderByAggregateInput>;
export const TradingBotCountOrderByAggregateInputObjectZodSchema = makeSchema();
