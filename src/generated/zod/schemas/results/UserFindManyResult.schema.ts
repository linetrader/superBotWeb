import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  name: z.string(),
  passwordHash: z.string(),
  countryCode: z.string().optional(),
  country: z.unknown().optional(),
  downlines: z.array(z.unknown()),
  uplines: z.array(z.unknown()),
  info: z.unknown().optional(),
  wallet: z.unknown().optional(),
  exchangeCredentials: z.array(z.unknown()),
  strategyConfigs: z.array(z.unknown()),
  tradingBots: z.array(z.unknown()),
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