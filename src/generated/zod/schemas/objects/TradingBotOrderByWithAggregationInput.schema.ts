import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TradingBotCountOrderByAggregateInputObjectSchema as TradingBotCountOrderByAggregateInputObjectSchema } from './TradingBotCountOrderByAggregateInput.schema';
import { TradingBotMaxOrderByAggregateInputObjectSchema as TradingBotMaxOrderByAggregateInputObjectSchema } from './TradingBotMaxOrderByAggregateInput.schema';
import { TradingBotMinOrderByAggregateInputObjectSchema as TradingBotMinOrderByAggregateInputObjectSchema } from './TradingBotMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  mode: SortOrderSchema.optional(),
  exchangeMarketId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  singleMarketKind: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  symbol: SortOrderSchema.optional(),
  strategyConfigId: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => TradingBotCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TradingBotMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TradingBotMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TradingBotOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TradingBotOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotOrderByWithAggregationInput>;
export const TradingBotOrderByWithAggregationInputObjectZodSchema = makeSchema();
