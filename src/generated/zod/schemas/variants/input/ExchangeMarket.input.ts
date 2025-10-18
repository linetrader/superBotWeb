import * as z from 'zod';

// prettier-ignore
export const ExchangeMarketInputSchema = z.object({
    id: z.string(),
    exchangeId: z.string(),
    exchange: z.unknown(),
    code: z.string(),
    name: z.string().optional().nullable(),
    restBaseUrl: z.string(),
    wsBaseUrl: z.string().optional().nullable(),
    active: z.boolean(),
    bots: z.array(z.unknown()),
    groupExchanges: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ExchangeMarketInputType = z.infer<typeof ExchangeMarketInputSchema>;
