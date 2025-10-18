import * as z from 'zod';
export const BotGroupExchangeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    groupId: z.number(),
    group: z.number(),
    exchangeMarketId: z.number(),
    exchangeMarket: z.number(),
    enabled: z.number(),
    allocationBps: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    allocationBps: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    allocationBps: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    groupId: z.string().nullable(),
    exchangeMarketId: z.string().nullable(),
    allocationBps: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    groupId: z.string().nullable(),
    exchangeMarketId: z.string().nullable(),
    allocationBps: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});