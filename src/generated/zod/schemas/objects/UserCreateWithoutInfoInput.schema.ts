import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryCreateNestedOneWithoutUsersInputObjectSchema as CountryCreateNestedOneWithoutUsersInputObjectSchema } from './CountryCreateNestedOneWithoutUsersInput.schema';
import { ReferralEdgeCreateNestedManyWithoutParentInputObjectSchema as ReferralEdgeCreateNestedManyWithoutParentInputObjectSchema } from './ReferralEdgeCreateNestedManyWithoutParentInput.schema';
import { ReferralEdgeCreateNestedManyWithoutChildInputObjectSchema as ReferralEdgeCreateNestedManyWithoutChildInputObjectSchema } from './ReferralEdgeCreateNestedManyWithoutChildInput.schema';
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
  updatedAt: z.coerce.date().optional(),
  country: z.lazy(() => CountryCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  downlines: z.lazy(() => ReferralEdgeCreateNestedManyWithoutParentInputObjectSchema).optional(),
  uplines: z.lazy(() => ReferralEdgeCreateNestedManyWithoutChildInputObjectSchema).optional(),
  wallet: z.lazy(() => UserWalletCreateNestedOneWithoutUserInputObjectSchema).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialCreateNestedManyWithoutUserInputObjectSchema).optional(),
  strategyConfigs: z.lazy(() => StrategyConfigCreateNestedManyWithoutUserInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutInfoInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutInfoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutInfoInput>;
export const UserCreateWithoutInfoInputObjectZodSchema = makeSchema();
