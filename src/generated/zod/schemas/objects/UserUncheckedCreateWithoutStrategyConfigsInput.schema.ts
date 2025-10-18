import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeUncheckedCreateNestedManyWithoutParentInputObjectSchema as ReferralEdgeUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './ReferralEdgeUncheckedCreateNestedManyWithoutParentInput.schema';
import { ReferralEdgeUncheckedCreateNestedManyWithoutChildInputObjectSchema as ReferralEdgeUncheckedCreateNestedManyWithoutChildInputObjectSchema } from './ReferralEdgeUncheckedCreateNestedManyWithoutChildInput.schema';
import { UserInfoUncheckedCreateNestedOneWithoutUserInputObjectSchema as UserInfoUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './UserInfoUncheckedCreateNestedOneWithoutUserInput.schema';
import { UserWalletUncheckedCreateNestedOneWithoutUserInputObjectSchema as UserWalletUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './UserWalletUncheckedCreateNestedOneWithoutUserInput.schema';
import { ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectSchema as ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ExchangeCredentialUncheckedCreateNestedManyWithoutUserInput.schema';
import { TradingBotUncheckedCreateNestedManyWithoutUserInputObjectSchema as TradingBotUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TradingBotUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  name: z.string(),
  passwordHash: z.string(),
  countryCode: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  downlines: z.lazy(() => ReferralEdgeUncheckedCreateNestedManyWithoutParentInputObjectSchema).optional(),
  uplines: z.lazy(() => ReferralEdgeUncheckedCreateNestedManyWithoutChildInputObjectSchema).optional(),
  info: z.lazy(() => UserInfoUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  wallet: z.lazy(() => UserWalletUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutStrategyConfigsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutStrategyConfigsInput>;
export const UserUncheckedCreateWithoutStrategyConfigsInputObjectZodSchema = makeSchema();
