import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketArgsObjectSchema as ExchangeMarketArgsObjectSchema } from './ExchangeMarketArgs.schema';
import { StrategyConfigArgsObjectSchema as StrategyConfigArgsObjectSchema } from './StrategyConfigArgs.schema';
import { BotLogFindManySchema as BotLogFindManySchema } from '../findManyBotLog.schema';
import { BotRuntimeArgsObjectSchema as BotRuntimeArgsObjectSchema } from './BotRuntimeArgs.schema';
import { WorkItemFindManySchema as WorkItemFindManySchema } from '../findManyWorkItem.schema';
import { BotGroupFindManySchema as BotGroupFindManySchema } from '../findManyBotGroup.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TradingBotCountOutputTypeArgsObjectSchema as TradingBotCountOutputTypeArgsObjectSchema } from './TradingBotCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  exchangeMarket: z.union([z.boolean(), z.lazy(() => ExchangeMarketArgsObjectSchema)]).optional(),
  strategyConfig: z.union([z.boolean(), z.lazy(() => StrategyConfigArgsObjectSchema)]).optional(),
  BotLog: z.union([z.boolean(), z.lazy(() => BotLogFindManySchema)]).optional(),
  BotRuntime: z.union([z.boolean(), z.lazy(() => BotRuntimeArgsObjectSchema)]).optional(),
  workItems: z.union([z.boolean(), z.lazy(() => WorkItemFindManySchema)]).optional(),
  groups: z.union([z.boolean(), z.lazy(() => BotGroupFindManySchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TradingBotCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TradingBotIncludeObjectSchema: z.ZodType<Prisma.TradingBotInclude> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotInclude>;
export const TradingBotIncludeObjectZodSchema = makeSchema();
