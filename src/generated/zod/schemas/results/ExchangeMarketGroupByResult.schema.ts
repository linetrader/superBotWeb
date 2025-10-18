import * as z from 'zod';
export const ExchangeMarketGroupByResultSchema = z.array(z.object({
  id: z.string(),
  exchangeId: z.string(),
  code: z.string(),
  name: z.string(),
  restBaseUrl: z.string(),
  wsBaseUrl: z.string(),
  active: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    exchangeId: z.number(),
    exchange: z.number(),
    code: z.number(),
    name: z.number(),
    restBaseUrl: z.number(),
    wsBaseUrl: z.number(),
    active: z.number(),
    bots: z.number(),
    groupExchanges: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    exchangeId: z.string().nullable(),
    code: z.string().nullable(),
    name: z.string().nullable(),
    restBaseUrl: z.string().nullable(),
    wsBaseUrl: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    exchangeId: z.string().nullable(),
    code: z.string().nullable(),
    name: z.string().nullable(),
    restBaseUrl: z.string().nullable(),
    wsBaseUrl: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));