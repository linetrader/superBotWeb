import * as z from 'zod';
export const StrategyConfigAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    name: z.number(),
    kind: z.number(),
    useMartin: z.number(),
    martinMultiplier: z.number(),
    defaultSize: z.number(),
    maxSize: z.number(),
    targetProfit: z.number(),
    leverage: z.number(),
    timeframe: z.number(),
    enabled: z.number(),
    rsiLength: z.number(),
    trend: z.number(),
    box: z.number(),
    tradingBots: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    martinMultiplier: z.number().nullable(),
    defaultSize: z.number().nullable(),
    maxSize: z.number().nullable(),
    targetProfit: z.number().nullable(),
    leverage: z.number().nullable(),
    rsiLength: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    martinMultiplier: z.number().nullable(),
    defaultSize: z.number().nullable(),
    maxSize: z.number().nullable(),
    targetProfit: z.number().nullable(),
    leverage: z.number().nullable(),
    rsiLength: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    name: z.string().nullable(),
    martinMultiplier: z.number().nullable(),
    defaultSize: z.number().int().nullable(),
    maxSize: z.number().int().nullable(),
    targetProfit: z.number().nullable(),
    leverage: z.number().int().nullable(),
    rsiLength: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    name: z.string().nullable(),
    martinMultiplier: z.number().nullable(),
    defaultSize: z.number().int().nullable(),
    maxSize: z.number().int().nullable(),
    targetProfit: z.number().nullable(),
    leverage: z.number().int().nullable(),
    rsiLength: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});