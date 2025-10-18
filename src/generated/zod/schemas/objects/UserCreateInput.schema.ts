import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryCreateNestedOneWithoutUsersInputObjectSchema as CountryCreateNestedOneWithoutUsersInputObjectSchema } from './CountryCreateNestedOneWithoutUsersInput.schema';
import { ReferralEdgeCreateNestedManyWithoutParentInputObjectSchema as ReferralEdgeCreateNestedManyWithoutParentInputObjectSchema } from './ReferralEdgeCreateNestedManyWithoutParentInput.schema';
import { ReferralEdgeCreateNestedManyWithoutChildInputObjectSchema as ReferralEdgeCreateNestedManyWithoutChildInputObjectSchema } from './ReferralEdgeCreateNestedManyWithoutChildInput.schema';
import { UserInfoCreateNestedOneWithoutUserInputObjectSchema as UserInfoCreateNestedOneWithoutUserInputObjectSchema } from './UserInfoCreateNestedOneWithoutUserInput.schema';
import { UserWalletCreateNestedOneWithoutUserInputObjectSchema as UserWalletCreateNestedOneWithoutUserInputObjectSchema } from './UserWalletCreateNestedOneWithoutUserInput.schema';
import { ExchangeCredentialCreateNestedManyWithoutUserInputObjectSchema as ExchangeCredentialCreateNestedManyWithoutUserInputObjectSchema } from './ExchangeCredentialCreateNestedManyWithoutUserInput.schema';
import { StrategyConfigCreateNestedManyWithoutUserInputObjectSchema as StrategyConfigCreateNestedManyWithoutUserInputObjectSchema } from './StrategyConfigCreateNestedManyWithoutUserInput.schema';
import { TradingBotCreateNestedManyWithoutUserInputObjectSchema as TradingBotCreateNestedManyWithoutUserInputObjectSchema } from './TradingBotCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  name: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date().optional(),
  country: z.lazy(() => CountryCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  downlines: z.lazy(() => ReferralEdgeCreateNestedManyWithoutParentInputObjectSchema),
  uplines: z.lazy(() => ReferralEdgeCreateNestedManyWithoutChildInputObjectSchema),
  info: z.lazy(() => UserInfoCreateNestedOneWithoutUserInputObjectSchema).optional(),
  wallet: z.lazy(() => UserWalletCreateNestedOneWithoutUserInputObjectSchema).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialCreateNestedManyWithoutUserInputObjectSchema),
  strategyConfigs: z.lazy(() => StrategyConfigCreateNestedManyWithoutUserInputObjectSchema),
  tradingBots: z.lazy(() => TradingBotCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
