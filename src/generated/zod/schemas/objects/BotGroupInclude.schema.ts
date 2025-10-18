import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotArgsObjectSchema as TradingBotArgsObjectSchema } from './TradingBotArgs.schema';
import { BotGroupExchangeFindManySchema as BotGroupExchangeFindManySchema } from '../findManyBotGroupExchange.schema';
import { BotGroupCountOutputTypeArgsObjectSchema as BotGroupCountOutputTypeArgsObjectSchema } from './BotGroupCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  bot: z.union([z.boolean(), z.lazy(() => TradingBotArgsObjectSchema)]).optional(),
  exchanges: z.union([z.boolean(), z.lazy(() => BotGroupExchangeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BotGroupCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BotGroupIncludeObjectSchema: z.ZodType<Prisma.BotGroupInclude> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupInclude>;
export const BotGroupIncludeObjectZodSchema = makeSchema();
