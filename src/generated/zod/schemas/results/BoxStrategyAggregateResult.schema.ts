import * as z from 'zod';
export const BoxStrategyAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    strategyConfigId: z.number(),
    strategyConfig: z.number(),
    lowerTh: z.number(),
    upperTh: z.number(),
    boxTouchPct: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    lowerTh: z.number().nullable(),
    upperTh: z.number().nullable(),
    boxTouchPct: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    lowerTh: z.number().nullable(),
    upperTh: z.number().nullable(),
    boxTouchPct: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    strategyConfigId: z.string().nullable(),
    lowerTh: z.number().nullable(),
    upperTh: z.number().nullable(),
    boxTouchPct: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    strategyConfigId: z.string().nullable(),
    lowerTh: z.number().nullable(),
    upperTh: z.number().nullable(),
    boxTouchPct: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});