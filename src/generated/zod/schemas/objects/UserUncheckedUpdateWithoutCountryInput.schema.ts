import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReferralEdgeUncheckedUpdateManyWithoutParentNestedInputObjectSchema as ReferralEdgeUncheckedUpdateManyWithoutParentNestedInputObjectSchema } from './ReferralEdgeUncheckedUpdateManyWithoutParentNestedInput.schema';
import { ReferralEdgeUncheckedUpdateManyWithoutChildNestedInputObjectSchema as ReferralEdgeUncheckedUpdateManyWithoutChildNestedInputObjectSchema } from './ReferralEdgeUncheckedUpdateManyWithoutChildNestedInput.schema';
import { UserInfoUncheckedUpdateOneWithoutUserNestedInputObjectSchema as UserInfoUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './UserInfoUncheckedUpdateOneWithoutUserNestedInput.schema';
import { UserWalletUncheckedUpdateOneWithoutUserNestedInputObjectSchema as UserWalletUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './UserWalletUncheckedUpdateOneWithoutUserNestedInput.schema';
import { ExchangeCredentialUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ExchangeCredentialUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ExchangeCredentialUncheckedUpdateManyWithoutUserNestedInput.schema';
import { StrategyConfigUncheckedUpdateManyWithoutUserNestedInputObjectSchema as StrategyConfigUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './StrategyConfigUncheckedUpdateManyWithoutUserNestedInput.schema';
import { TradingBotUncheckedUpdateManyWithoutUserNestedInputObjectSchema as TradingBotUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './TradingBotUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  downlines: z.lazy(() => ReferralEdgeUncheckedUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  uplines: z.lazy(() => ReferralEdgeUncheckedUpdateManyWithoutChildNestedInputObjectSchema).optional(),
  info: z.lazy(() => UserInfoUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  wallet: z.lazy(() => UserWalletUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  strategyConfigs: z.lazy(() => StrategyConfigUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutCountryInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCountryInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutCountryInput>;
export const UserUncheckedUpdateWithoutCountryInputObjectZodSchema = makeSchema();
