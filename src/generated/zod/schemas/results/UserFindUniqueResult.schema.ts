import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
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
}));