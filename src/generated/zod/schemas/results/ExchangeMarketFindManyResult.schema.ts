import * as z from 'zod';
export const ExchangeMarketFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});