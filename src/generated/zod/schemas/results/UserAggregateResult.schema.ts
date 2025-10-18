import * as z from 'zod';
export const UserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    username: z.number(),
    email: z.number(),
    name: z.number(),
    passwordHash: z.number(),
    countryCode: z.number(),
    country: z.number(),
    downlines: z.number(),
    uplines: z.number(),
    info: z.number(),
    wallet: z.number(),
    exchangeCredentials: z.number(),
    strategyConfigs: z.number(),
    tradingBots: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    passwordHash: z.string().nullable(),
    countryCode: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    passwordHash: z.string().nullable(),
    countryCode: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});