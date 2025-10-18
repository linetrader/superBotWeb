import * as z from 'zod';

// prettier-ignore
export const TrendStrategyModelSchema = z.object({
    id: z.string(),
    strategyConfigId: z.string(),
    strategyConfig: z.unknown(),
    trendRsiUpperPullback: z.number().nullable(),
    trendRsiLowerPullback: z.number().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TrendStrategyPureType = z.infer<typeof TrendStrategyModelSchema>;
