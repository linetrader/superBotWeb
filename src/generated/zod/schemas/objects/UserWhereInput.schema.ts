import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CountryNullableScalarRelationFilterObjectSchema as CountryNullableScalarRelationFilterObjectSchema } from './CountryNullableScalarRelationFilter.schema';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './CountryWhereInput.schema';
import { ReferralEdgeListRelationFilterObjectSchema as ReferralEdgeListRelationFilterObjectSchema } from './ReferralEdgeListRelationFilter.schema';
import { UserInfoNullableScalarRelationFilterObjectSchema as UserInfoNullableScalarRelationFilterObjectSchema } from './UserInfoNullableScalarRelationFilter.schema';
import { UserInfoWhereInputObjectSchema as UserInfoWhereInputObjectSchema } from './UserInfoWhereInput.schema';
import { UserWalletNullableScalarRelationFilterObjectSchema as UserWalletNullableScalarRelationFilterObjectSchema } from './UserWalletNullableScalarRelationFilter.schema';
import { UserWalletWhereInputObjectSchema as UserWalletWhereInputObjectSchema } from './UserWalletWhereInput.schema';
import { ExchangeCredentialListRelationFilterObjectSchema as ExchangeCredentialListRelationFilterObjectSchema } from './ExchangeCredentialListRelationFilter.schema';
import { StrategyConfigListRelationFilterObjectSchema as StrategyConfigListRelationFilterObjectSchema } from './StrategyConfigListRelationFilter.schema';
import { TradingBotListRelationFilterObjectSchema as TradingBotListRelationFilterObjectSchema } from './TradingBotListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  passwordHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  countryCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(2)]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  country: z.union([z.lazy(() => CountryNullableScalarRelationFilterObjectSchema), z.lazy(() => CountryWhereInputObjectSchema)]).optional(),
  downlines: z.lazy(() => ReferralEdgeListRelationFilterObjectSchema).optional(),
  uplines: z.lazy(() => ReferralEdgeListRelationFilterObjectSchema).optional(),
  info: z.union([z.lazy(() => UserInfoNullableScalarRelationFilterObjectSchema), z.lazy(() => UserInfoWhereInputObjectSchema)]).optional(),
  wallet: z.union([z.lazy(() => UserWalletNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWalletWhereInputObjectSchema)]).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialListRelationFilterObjectSchema).optional(),
  strategyConfigs: z.lazy(() => StrategyConfigListRelationFilterObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
