import * as z from 'zod';

// prettier-ignore
export const BotGroupExchangeInputSchema = z.object({
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

export type BotGroupExchangeInputType = z.infer<typeof BotGroupExchangeInputSchema>;
