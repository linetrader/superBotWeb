import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupArgsObjectSchema as BotGroupArgsObjectSchema } from './BotGroupArgs.schema';
import { ExchangeMarketArgsObjectSchema as ExchangeMarketArgsObjectSchema } from './ExchangeMarketArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  groupId: z.boolean().optional(),
  group: z.union([z.boolean(), z.lazy(() => BotGroupArgsObjectSchema)]).optional(),
  exchangeMarketId: z.boolean().optional(),
  exchangeMarket: z.union([z.boolean(), z.lazy(() => ExchangeMarketArgsObjectSchema)]).optional(),
  enabled: z.boolean().optional(),
  allocationBps: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const BotGroupExchangeSelectObjectSchema: z.ZodType<Prisma.BotGroupExchangeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeSelect>;
export const BotGroupExchangeSelectObjectZodSchema = makeSchema();
