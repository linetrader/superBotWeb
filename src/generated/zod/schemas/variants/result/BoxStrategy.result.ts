import * as z from 'zod';

// prettier-ignore
export const BoxStrategyResultSchema = z.object({
    id: z.string(),
    strategyConfigId: z.string(),
    strategyConfig: z.unknown(),
    lowerTh: z.number(),
    upperTh: z.number(),
    boxTouchPct: z.number().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BoxStrategyResultType = z.infer<typeof BoxStrategyResultSchema>;
