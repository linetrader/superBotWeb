import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeUncheckedCreateNestedManyWithoutParentInputObjectSchema as ReferralEdgeUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './ReferralEdgeUncheckedCreateNestedManyWithoutParentInput.schema';
import { ReferralEdgeUncheckedCreateNestedManyWithoutChildInputObjectSchema as ReferralEdgeUncheckedCreateNestedManyWithoutChildInputObjectSchema } from './ReferralEdgeUncheckedCreateNestedManyWithoutChildInput.schema';
import { UserInfoUncheckedCreateNestedOneWithoutUserInputObjectSchema as UserInfoUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './UserInfoUncheckedCreateNestedOneWithoutUserInput.schema';
import { ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectSchema as ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ExchangeCredentialUncheckedCreateNestedManyWithoutUserInput.schema';
import { StrategyConfigUncheckedCreateNestedManyWithoutUserInputObjectSchema as StrategyConfigUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './StrategyConfigUncheckedCreateNestedManyWithoutUserInput.schema';
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
  exchangeCredentials: z.lazy(() => ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  strategyConfigs: z.lazy(() => StrategyConfigUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutWalletInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutWalletInput>;
export const UserUncheckedCreateWithoutWalletInputObjectZodSchema = makeSchema();
