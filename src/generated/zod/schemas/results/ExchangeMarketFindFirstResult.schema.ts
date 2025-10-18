import * as z from 'zod';
export const ExchangeMarketFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  exchangeId: z.string(),
  exchange: z.unknown(),
  code: z.string(),
  name: z.string().optional(),
  restBaseUrl: z.string(),
  wsBaseUrl: z.string().optional(),
  active: z.boolean(),
  bots: z.array(z.unknown()),
  groupExchanges: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));