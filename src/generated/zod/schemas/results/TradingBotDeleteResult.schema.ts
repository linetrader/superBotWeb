import * as z from 'zod';
export const TradingBotDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  mode: z.unknown(),
  exchangeMarketId: z.string().optional(),
  exchangeMarket: z.unknown().optional(),
  singleMarketKind: z.unknown().optional(),
  symbol: z.string(),
  strategyConfigId: z.string(),
  strategyConfig: z.unknown(),
  enabled: z.boolean(),
  BotLog: z.array(z.unknown()),
  BotRuntime: z.unknown().optional(),
  workItems: z.array(z.unknown()),
  groups: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  user: z.unknown()
}));