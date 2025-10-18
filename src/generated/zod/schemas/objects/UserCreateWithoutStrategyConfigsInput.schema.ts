import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryCreateNestedOneWithoutUsersInputObjectSchema as CountryCreateNestedOneWithoutUsersInputObjectSchema } from './CountryCreateNestedOneWithoutUsersInput.schema';
import { ReferralEdgeCreateNestedManyWithoutParentInputObjectSchema as ReferralEdgeCreateNestedManyWithoutParentInputObjectSchema } from './ReferralEdgeCreateNestedManyWithoutParentInput.schema';
import { ReferralEdgeCreateNestedManyWithoutChildInputObjectSchema as ReferralEdgeCreateNestedManyWithoutChildInputObjectSchema } from './ReferralEdgeCreateNestedManyWithoutChildInput.schema';
import { UserInfoCreateNestedOneWithoutUserInputObjectSchema as UserInfoCreateNestedOneWithoutUserInputObjectSchema } from './UserInfoCreateNestedOneWithoutUserInput.schema';
import { UserWalletCreateNestedOneWithoutUserInputObjectSchema as UserWalletCreateNestedOneWithoutUserInputObjectSchema } from './UserWalletCreateNestedOneWithoutUserInput.schema';
import { ExchangeCredentialCreateNestedManyWithoutUserInputObjectSchema as ExchangeCredentialCreateNestedManyWithoutUserInputObjectSchema } from './ExchangeCredentialCreateNestedManyWithoutUserInput.schema';
import { TradingBotCreateNestedManyWithoutUserInputObjectSchema as TradingBotCreateNestedManyWithoutUserInputObjectSchema } from './TradingBotCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  name: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  country: z.lazy(() => CountryCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  downlines: z.lazy(() => ReferralEdgeCreateNestedManyWithoutParentInputObjectSchema).optional(),
  uplines: z.lazy(() => ReferralEdgeCreateNestedManyWithoutChildInputObjectSchema).optional(),
  info: z.lazy(() => UserInfoCreateNestedOneWithoutUserInputObjectSchema).optional(),
  wallet: z.lazy(() => UserWalletCreateNestedOneWithoutUserInputObjectSchema).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialCreateNestedManyWithoutUserInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutStrategyConfigsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutStrategyConfigsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutStrategyConfigsInput>;
export const UserCreateWithoutStrategyConfigsInputObjectZodSchema = makeSchema();
