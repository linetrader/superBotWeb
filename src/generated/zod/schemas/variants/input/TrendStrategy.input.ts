import * as z from 'zod';

// prettier-ignore
export const TrendStrategyInputSchema = z.object({
    id: z.string(),
    strategyConfigId: z.string(),
    strategyConfig: z.unknown(),
    trendRsiUpperPullback: z.number().optional().nullable(),
    trendRsiLowerPullback: z.number().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TrendStrategyInputType = z.infer<typeof TrendStrategyInputSchema>;
