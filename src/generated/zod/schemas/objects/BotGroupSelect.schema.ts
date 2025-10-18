import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotArgsObjectSchema as TradingBotArgsObjectSchema } from './TradingBotArgs.schema';
import { BotGroupExchangeFindManySchema as BotGroupExchangeFindManySchema } from '../findManyBotGroupExchange.schema';
import { BotGroupCountOutputTypeArgsObjectSchema as BotGroupCountOutputTypeArgsObjectSchema } from './BotGroupCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  botId: z.boolean().optional(),
  bot: z.union([z.boolean(), z.lazy(() => TradingBotArgsObjectSchema)]).optional(),
  key: z.boolean().optional(),
  exchanges: z.union([z.boolean(), z.lazy(() => BotGroupExchangeFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => BotGroupCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BotGroupSelectObjectSchema: z.ZodType<Prisma.BotGroupSelect> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupSelect>;
export const BotGroupSelectObjectZodSchema = makeSchema();
