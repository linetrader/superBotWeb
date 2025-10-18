import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BotGroupOrderByWithRelationInputObjectSchema as BotGroupOrderByWithRelationInputObjectSchema } from './BotGroupOrderByWithRelationInput.schema';
import { ExchangeMarketOrderByWithRelationInputObjectSchema as ExchangeMarketOrderByWithRelationInputObjectSchema } from './ExchangeMarketOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional(),
  exchangeMarketId: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  allocationBps: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  group: z.lazy(() => BotGroupOrderByWithRelationInputObjectSchema).optional(),
  exchangeMarket: z.lazy(() => ExchangeMarketOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BotGroupExchangeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeOrderByWithRelationInput>;
export const BotGroupExchangeOrderByWithRelationInputObjectZodSchema = makeSchema();
