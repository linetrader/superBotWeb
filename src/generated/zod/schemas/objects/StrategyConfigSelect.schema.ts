import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TrendStrategyArgsObjectSchema as TrendStrategyArgsObjectSchema } from './TrendStrategyArgs.schema';
import { BoxStrategyArgsObjectSchema as BoxStrategyArgsObjectSchema } from './BoxStrategyArgs.schema';
import { TradingBotFindManySchema as TradingBotFindManySchema } from '../findManyTradingBot.schema';
import { StrategyConfigCountOutputTypeArgsObjectSchema as StrategyConfigCountOutputTypeArgsObjectSchema } from './StrategyConfigCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  name: z.boolean().optional(),
  kind: z.boolean().optional(),
  useMartin: z.boolean().optional(),
  martinMultiplier: z.boolean().optional(),
  defaultSize: z.boolean().optional(),
  maxSize: z.boolean().optional(),
  targetProfit: z.boolean().optional(),
  leverage: z.boolean().optional(),
  timeframe: z.boolean().optional(),
  enabled: z.boolean().optional(),
  rsiLength: z.boolean().optional(),
  trend: z.union([z.boolean(), z.lazy(() => TrendStrategyArgsObjectSchema)]).optional(),
  box: z.union([z.boolean(), z.lazy(() => BoxStrategyArgsObjectSchema)]).optional(),
  tradingBots: z.union([z.boolean(), z.lazy(() => TradingBotFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => StrategyConfigCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StrategyConfigSelectObjectSchema: z.ZodType<Prisma.StrategyConfigSelect> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigSelect>;
export const StrategyConfigSelectObjectZodSchema = makeSchema();
