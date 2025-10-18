import * as z from 'zod';

import { BotModeSchema } from '../../enums/BotMode.schema';
import { MarketKindSchema } from '../../enums/MarketKind.schema';
// prettier-ignore
export const TradingBotResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    mode: BotModeSchema,
    exchangeMarketId: z.string().nullable(),
    exchangeMarket: z.unknown().nullable(),
    singleMarketKind: MarketKindSchema.nullable(),
    symbol: z.string(),
    strategyConfigId: z.string(),
    strategyConfig: z.unknown(),
    enabled: z.boolean(),
    BotLog: z.array(z.unknown()),
    BotRuntime: z.unknown().nullable(),
    workItems: z.array(z.unknown()),
    groups: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
    user: z.unknown()
}).strict();

export type TradingBotResultType = z.infer<typeof TradingBotResultSchema>;
