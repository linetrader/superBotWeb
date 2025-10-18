import * as z from 'zod';

import { StrategyKindSchema } from '../../enums/StrategyKind.schema';
import { TimeframeSchema } from '../../enums/Timeframe.schema';
// prettier-ignore
export const StrategyConfigResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    name: z.string(),
    kind: StrategyKindSchema,
    useMartin: z.boolean(),
    martinMultiplier: z.number(),
    defaultSize: z.number().int(),
    maxSize: z.number().int(),
    targetProfit: z.number(),
    leverage: z.number().int(),
    timeframe: TimeframeSchema,
    enabled: z.boolean(),
    rsiLength: z.number().int(),
    trend: z.unknown().nullable(),
    box: z.unknown().nullable(),
    tradingBots: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type StrategyConfigResultType = z.infer<typeof StrategyConfigResultSchema>;
