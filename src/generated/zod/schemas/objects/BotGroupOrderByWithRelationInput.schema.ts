import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TradingBotOrderByWithRelationInputObjectSchema as TradingBotOrderByWithRelationInputObjectSchema } from './TradingBotOrderByWithRelationInput.schema';
import { BotGroupExchangeOrderByRelationAggregateInputObjectSchema as BotGroupExchangeOrderByRelationAggregateInputObjectSchema } from './BotGroupExchangeOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  botId: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  bot: z.lazy(() => TradingBotOrderByWithRelationInputObjectSchema).optional(),
  exchanges: z.lazy(() => BotGroupExchangeOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const BotGroupOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BotGroupOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupOrderByWithRelationInput>;
export const BotGroupOrderByWithRelationInputObjectZodSchema = makeSchema();
