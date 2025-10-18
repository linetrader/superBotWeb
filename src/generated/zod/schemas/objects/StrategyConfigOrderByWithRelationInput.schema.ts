import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TrendStrategyOrderByWithRelationInputObjectSchema as TrendStrategyOrderByWithRelationInputObjectSchema } from './TrendStrategyOrderByWithRelationInput.schema';
import { BoxStrategyOrderByWithRelationInputObjectSchema as BoxStrategyOrderByWithRelationInputObjectSchema } from './BoxStrategyOrderByWithRelationInput.schema';
import { TradingBotOrderByRelationAggregateInputObjectSchema as TradingBotOrderByRelationAggregateInputObjectSchema } from './TradingBotOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  kind: SortOrderSchema.optional(),
  useMartin: SortOrderSchema.optional(),
  martinMultiplier: SortOrderSchema.optional(),
  defaultSize: SortOrderSchema.optional(),
  maxSize: SortOrderSchema.optional(),
  targetProfit: SortOrderSchema.optional(),
  leverage: SortOrderSchema.optional(),
  timeframe: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  rsiLength: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  trend: z.lazy(() => TrendStrategyOrderByWithRelationInputObjectSchema).optional(),
  box: z.lazy(() => BoxStrategyOrderByWithRelationInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const StrategyConfigOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StrategyConfigOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigOrderByWithRelationInput>;
export const StrategyConfigOrderByWithRelationInputObjectZodSchema = makeSchema();
