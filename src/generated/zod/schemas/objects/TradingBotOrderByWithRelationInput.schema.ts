import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ExchangeMarketOrderByWithRelationInputObjectSchema as ExchangeMarketOrderByWithRelationInputObjectSchema } from './ExchangeMarketOrderByWithRelationInput.schema';
import { StrategyConfigOrderByWithRelationInputObjectSchema as StrategyConfigOrderByWithRelationInputObjectSchema } from './StrategyConfigOrderByWithRelationInput.schema';
import { BotLogOrderByRelationAggregateInputObjectSchema as BotLogOrderByRelationAggregateInputObjectSchema } from './BotLogOrderByRelationAggregateInput.schema';
import { BotRuntimeOrderByWithRelationInputObjectSchema as BotRuntimeOrderByWithRelationInputObjectSchema } from './BotRuntimeOrderByWithRelationInput.schema';
import { WorkItemOrderByRelationAggregateInputObjectSchema as WorkItemOrderByRelationAggregateInputObjectSchema } from './WorkItemOrderByRelationAggregateInput.schema';
import { BotGroupOrderByRelationAggregateInputObjectSchema as BotGroupOrderByRelationAggregateInputObjectSchema } from './BotGroupOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

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
  exchangeMarket: z.lazy(() => ExchangeMarketOrderByWithRelationInputObjectSchema).optional(),
  strategyConfig: z.lazy(() => StrategyConfigOrderByWithRelationInputObjectSchema).optional(),
  BotLog: z.lazy(() => BotLogOrderByRelationAggregateInputObjectSchema).optional(),
  BotRuntime: z.lazy(() => BotRuntimeOrderByWithRelationInputObjectSchema).optional(),
  workItems: z.lazy(() => WorkItemOrderByRelationAggregateInputObjectSchema).optional(),
  groups: z.lazy(() => BotGroupOrderByRelationAggregateInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TradingBotOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TradingBotOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotOrderByWithRelationInput>;
export const TradingBotOrderByWithRelationInputObjectZodSchema = makeSchema();
