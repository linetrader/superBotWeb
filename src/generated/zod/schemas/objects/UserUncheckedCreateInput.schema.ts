import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeUncheckedCreateNestedManyWithoutParentInputObjectSchema as ReferralEdgeUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './ReferralEdgeUncheckedCreateNestedManyWithoutParentInput.schema';
import { ReferralEdgeUncheckedCreateNestedManyWithoutChildInputObjectSchema as ReferralEdgeUncheckedCreateNestedManyWithoutChildInputObjectSchema } from './ReferralEdgeUncheckedCreateNestedManyWithoutChildInput.schema';
import { UserInfoUncheckedCreateNestedOneWithoutUserInputObjectSchema as UserInfoUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './UserInfoUncheckedCreateNestedOneWithoutUserInput.schema';
import { UserWalletUncheckedCreateNestedOneWithoutUserInputObjectSchema as UserWalletUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './UserWalletUncheckedCreateNestedOneWithoutUserInput.schema';
import { ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectSchema as ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ExchangeCredentialUncheckedCreateNestedManyWithoutUserInput.schema';
import { StrategyConfigUncheckedCreateNestedManyWithoutUserInputObjectSchema as StrategyConfigUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './StrategyConfigUncheckedCreateNestedManyWithoutUserInput.schema';
import { TradingBotUncheckedCreateNestedManyWithoutUserInputObjectSchema as TradingBotUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TradingBotUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  name: z.string(),
  passwordHash: z.string(),
  countryCode: z.string().max(2).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  downlines: z.lazy(() => ReferralEdgeUncheckedCreateNestedManyWithoutParentInputObjectSchema),
  uplines: z.lazy(() => ReferralEdgeUncheckedCreateNestedManyWithoutChildInputObjectSchema),
  info: z.lazy(() => UserInfoUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  wallet: z.lazy(() => UserWalletUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  strategyConfigs: z.lazy(() => StrategyConfigUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  tradingBots: z.lazy(() => TradingBotUncheckedCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
