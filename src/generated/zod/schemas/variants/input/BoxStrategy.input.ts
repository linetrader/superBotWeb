import * as z from 'zod';

// prettier-ignore
export const BoxStrategyInputSchema = z.object({
    id: z.string(),
    strategyConfigId: z.string(),
    strategyConfig: z.unknown(),
    lowerTh: z.number(),
    upperTh: z.number(),
    boxTouchPct: z.number().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BoxStrategyInputType = z.infer<typeof BoxStrategyInputSchema>;
