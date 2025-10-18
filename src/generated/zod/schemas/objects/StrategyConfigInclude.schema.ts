import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TrendStrategyArgsObjectSchema as TrendStrategyArgsObjectSchema } from './TrendStrategyArgs.schema';
import { BoxStrategyArgsObjectSchema as BoxStrategyArgsObjectSchema } from './BoxStrategyArgs.schema';
import { TradingBotFindManySchema as TradingBotFindManySchema } from '../findManyTradingBot.schema';
import { StrategyConfigCountOutputTypeArgsObjectSchema as StrategyConfigCountOutputTypeArgsObjectSchema } from './StrategyConfigCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  trend: z.union([z.boolean(), z.lazy(() => TrendStrategyArgsObjectSchema)]).optional(),
  box: z.union([z.boolean(), z.lazy(() => BoxStrategyArgsObjectSchema)]).optional(),
  tradingBots: z.union([z.boolean(), z.lazy(() => TradingBotFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StrategyConfigCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StrategyConfigIncludeObjectSchema: z.ZodType<Prisma.StrategyConfigInclude> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigInclude>;
export const StrategyConfigIncludeObjectZodSchema = makeSchema();
