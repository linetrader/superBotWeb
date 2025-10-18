import * as z from 'zod';

// prettier-ignore
export const ExchangeMarketModelSchema = z.object({
    id: z.string(),
    exchangeId: z.string(),
    exchange: z.unknown(),
    code: z.string(),
    name: z.string().nullable(),
    restBaseUrl: z.string(),
    wsBaseUrl: z.string().nullable(),
    active: z.boolean(),
    bots: z.array(z.unknown()),
    groupExchanges: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ExchangeMarketPureType = z.infer<typeof ExchangeMarketModelSchema>;
