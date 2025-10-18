import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReferralEdgeUncheckedUpdateManyWithoutParentNestedInputObjectSchema as ReferralEdgeUncheckedUpdateManyWithoutParentNestedInputObjectSchema } from './ReferralEdgeUncheckedUpdateManyWithoutParentNestedInput.schema';
import { ReferralEdgeUncheckedUpdateManyWithoutChildNestedInputObjectSchema as ReferralEdgeUncheckedUpdateManyWithoutChildNestedInputObjectSchema } from './ReferralEdgeUncheckedUpdateManyWithoutChildNestedInput.schema';
import { UserInfoUncheckedUpdateOneWithoutUserNestedInputObjectSchema as UserInfoUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './UserInfoUncheckedUpdateOneWithoutUserNestedInput.schema';
import { UserWalletUncheckedUpdateOneWithoutUserNestedInputObjectSchema as UserWalletUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './UserWalletUncheckedUpdateOneWithoutUserNestedInput.schema';
import { ExchangeCredentialUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ExchangeCredentialUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ExchangeCredentialUncheckedUpdateManyWithoutUserNestedInput.schema';
import { StrategyConfigUncheckedUpdateManyWithoutUserNestedInputObjectSchema as StrategyConfigUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './StrategyConfigUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  countryCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  downlines: z.lazy(() => ReferralEdgeUncheckedUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  uplines: z.lazy(() => ReferralEdgeUncheckedUpdateManyWithoutChildNestedInputObjectSchema).optional(),
  info: z.lazy(() => UserInfoUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  wallet: z.lazy(() => UserWalletUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  strategyConfigs: z.lazy(() => StrategyConfigUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutTradingBotsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTradingBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutTradingBotsInput>;
export const UserUncheckedUpdateWithoutTradingBotsInputObjectZodSchema = makeSchema();
