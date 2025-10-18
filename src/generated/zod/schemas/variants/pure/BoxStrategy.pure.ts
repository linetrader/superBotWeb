import * as z from 'zod';

// prettier-ignore
export const BoxStrategyModelSchema = z.object({
    id: z.string(),
    strategyConfigId: z.string(),
    strategyConfig: z.unknown(),
    lowerTh: z.number(),
    upperTh: z.number(),
    boxTouchPct: z.number().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BoxStrategyPureType = z.infer<typeof BoxStrategyModelSchema>;
