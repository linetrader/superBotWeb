import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BotGroupExchangeCountOrderByAggregateInputObjectSchema as BotGroupExchangeCountOrderByAggregateInputObjectSchema } from './BotGroupExchangeCountOrderByAggregateInput.schema';
import { BotGroupExchangeAvgOrderByAggregateInputObjectSchema as BotGroupExchangeAvgOrderByAggregateInputObjectSchema } from './BotGroupExchangeAvgOrderByAggregateInput.schema';
import { BotGroupExchangeMaxOrderByAggregateInputObjectSchema as BotGroupExchangeMaxOrderByAggregateInputObjectSchema } from './BotGroupExchangeMaxOrderByAggregateInput.schema';
import { BotGroupExchangeMinOrderByAggregateInputObjectSchema as BotGroupExchangeMinOrderByAggregateInputObjectSchema } from './BotGroupExchangeMinOrderByAggregateInput.schema';
import { BotGroupExchangeSumOrderByAggregateInputObjectSchema as BotGroupExchangeSumOrderByAggregateInputObjectSchema } from './BotGroupExchangeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional(),
  exchangeMarketId: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  allocationBps: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BotGroupExchangeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BotGroupExchangeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BotGroupExchangeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BotGroupExchangeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BotGroupExchangeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BotGroupExchangeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeOrderByWithAggregationInput>;
export const BotGroupExchangeOrderByWithAggregationInputObjectZodSchema = makeSchema();
