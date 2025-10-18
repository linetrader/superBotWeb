import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ExchangeOrderByWithRelationInputObjectSchema as ExchangeOrderByWithRelationInputObjectSchema } from './ExchangeOrderByWithRelationInput.schema';
import { TradingBotOrderByRelationAggregateInputObjectSchema as TradingBotOrderByRelationAggregateInputObjectSchema } from './TradingBotOrderByRelationAggregateInput.schema';
import { BotGroupExchangeOrderByRelationAggregateInputObjectSchema as BotGroupExchangeOrderByRelationAggregateInputObjectSchema } from './BotGroupExchangeOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  exchangeId: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  restBaseUrl: SortOrderSchema.optional(),
  wsBaseUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  active: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  exchange: z.lazy(() => ExchangeOrderByWithRelationInputObjectSchema).optional(),
  bots: z.lazy(() => TradingBotOrderByRelationAggregateInputObjectSchema).optional(),
  groupExchanges: z.lazy(() => BotGroupExchangeOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ExchangeMarketOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ExchangeMarketOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketOrderByWithRelationInput>;
export const ExchangeMarketOrderByWithRelationInputObjectZodSchema = makeSchema();
