import * as z from 'zod';
export const TradingBotFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});