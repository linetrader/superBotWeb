import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CountryUpdateOneWithoutUsersNestedInputObjectSchema as CountryUpdateOneWithoutUsersNestedInputObjectSchema } from './CountryUpdateOneWithoutUsersNestedInput.schema';
import { ReferralEdgeUpdateManyWithoutParentNestedInputObjectSchema as ReferralEdgeUpdateManyWithoutParentNestedInputObjectSchema } from './ReferralEdgeUpdateManyWithoutParentNestedInput.schema';
import { ReferralEdgeUpdateManyWithoutChildNestedInputObjectSchema as ReferralEdgeUpdateManyWithoutChildNestedInputObjectSchema } from './ReferralEdgeUpdateManyWithoutChildNestedInput.schema';
import { UserInfoUpdateOneWithoutUserNestedInputObjectSchema as UserInfoUpdateOneWithoutUserNestedInputObjectSchema } from './UserInfoUpdateOneWithoutUserNestedInput.schema';
import { UserWalletUpdateOneWithoutUserNestedInputObjectSchema as UserWalletUpdateOneWithoutUserNestedInputObjectSchema } from './UserWalletUpdateOneWithoutUserNestedInput.schema';
import { ExchangeCredentialUpdateManyWithoutUserNestedInputObjectSchema as ExchangeCredentialUpdateManyWithoutUserNestedInputObjectSchema } from './ExchangeCredentialUpdateManyWithoutUserNestedInput.schema';
import { TradingBotUpdateManyWithoutUserNestedInputObjectSchema as TradingBotUpdateManyWithoutUserNestedInputObjectSchema } from './TradingBotUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  country: z.lazy(() => CountryUpdateOneWithoutUsersNestedInputObjectSchema).optional(),
  downlines: z.lazy(() => ReferralEdgeUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  uplines: z.lazy(() => ReferralEdgeUpdateManyWithoutChildNestedInputObjectSchema).optional(),
  info: z.lazy(() => UserInfoUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  wallet: z.lazy(() => UserWalletUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutStrategyConfigsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutStrategyConfigsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutStrategyConfigsInput>;
export const UserUpdateWithoutStrategyConfigsInputObjectZodSchema = makeSchema();
