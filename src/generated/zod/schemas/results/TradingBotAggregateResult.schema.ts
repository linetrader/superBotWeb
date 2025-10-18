import * as z from 'zod';
export const TradingBotAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    mode: z.number(),
    exchangeMarketId: z.number(),
    exchangeMarket: z.number(),
    singleMarketKind: z.number(),
    symbol: z.number(),
    strategyConfigId: z.number(),
    strategyConfig: z.number(),
    enabled: z.number(),
    BotLog: z.number(),
    BotRuntime: z.number(),
    workItems: z.number(),
    groups: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    userId: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    exchangeMarketId: z.string().nullable(),
    symbol: z.string().nullable(),
    strategyConfigId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    exchangeMarketId: z.string().nullable(),
    symbol: z.string().nullable(),
    strategyConfigId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable()
  }).nullable().optional()});