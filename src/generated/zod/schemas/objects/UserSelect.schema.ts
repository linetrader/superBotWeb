import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryArgsObjectSchema as CountryArgsObjectSchema } from './CountryArgs.schema';
import { ReferralEdgeFindManySchema as ReferralEdgeFindManySchema } from '../findManyReferralEdge.schema';
import { UserInfoArgsObjectSchema as UserInfoArgsObjectSchema } from './UserInfoArgs.schema';
import { UserWalletArgsObjectSchema as UserWalletArgsObjectSchema } from './UserWalletArgs.schema';
import { ExchangeCredentialFindManySchema as ExchangeCredentialFindManySchema } from '../findManyExchangeCredential.schema';
import { StrategyConfigFindManySchema as StrategyConfigFindManySchema } from '../findManyStrategyConfig.schema';
import { TradingBotFindManySchema as TradingBotFindManySchema } from '../findManyTradingBot.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  passwordHash: z.boolean().optional(),
  countryCode: z.boolean().optional(),
  country: z.union([z.boolean(), z.lazy(() => CountryArgsObjectSchema)]).optional(),
  downlines: z.union([z.boolean(), z.lazy(() => ReferralEdgeFindManySchema)]).optional(),
  uplines: z.union([z.boolean(), z.lazy(() => ReferralEdgeFindManySchema)]).optional(),
  info: z.union([z.boolean(), z.lazy(() => UserInfoArgsObjectSchema)]).optional(),
  wallet: z.union([z.boolean(), z.lazy(() => UserWalletArgsObjectSchema)]).optional(),
  exchangeCredentials: z.union([z.boolean(), z.lazy(() => ExchangeCredentialFindManySchema)]).optional(),
  strategyConfigs: z.union([z.boolean(), z.lazy(() => StrategyConfigFindManySchema)]).optional(),
  tradingBots: z.union([z.boolean(), z.lazy(() => TradingBotFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
