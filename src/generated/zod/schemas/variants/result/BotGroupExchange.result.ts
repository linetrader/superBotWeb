import * as z from 'zod';

// prettier-ignore
export const BotGroupExchangeResultSchema = z.object({
    id: z.string(),
    groupId: z.string(),
    group: z.unknown(),
    exchangeMarketId: z.string(),
    exchangeMarket: z.unknown(),
    enabled: z.boolean(),
    allocationBps: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BotGroupExchangeResultType = z.infer<typeof BotGroupExchangeResultSchema>;
