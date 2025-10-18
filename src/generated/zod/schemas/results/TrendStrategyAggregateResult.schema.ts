import * as z from 'zod';
export const TrendStrategyAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    strategyConfigId: z.number(),
    strategyConfig: z.number(),
    trendRsiUpperPullback: z.number(),
    trendRsiLowerPullback: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    trendRsiUpperPullback: z.number().nullable(),
    trendRsiLowerPullback: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    trendRsiUpperPullback: z.number().nullable(),
    trendRsiLowerPullback: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    strategyConfigId: z.string().nullable(),
    trendRsiUpperPullback: z.number().nullable(),
    trendRsiLowerPullback: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    strategyConfigId: z.string().nullable(),
    trendRsiUpperPullback: z.number().nullable(),
    trendRsiLowerPullback: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});