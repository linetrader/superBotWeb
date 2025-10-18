import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CountryUpdateOneWithoutUsersNestedInputObjectSchema as CountryUpdateOneWithoutUsersNestedInputObjectSchema } from './CountryUpdateOneWithoutUsersNestedInput.schema';
import { ReferralEdgeUpdateManyWithoutParentNestedInputObjectSchema as ReferralEdgeUpdateManyWithoutParentNestedInputObjectSchema } from './ReferralEdgeUpdateManyWithoutParentNestedInput.schema';
import { UserInfoUpdateOneWithoutUserNestedInputObjectSchema as UserInfoUpdateOneWithoutUserNestedInputObjectSchema } from './UserInfoUpdateOneWithoutUserNestedInput.schema';
import { UserWalletUpdateOneWithoutUserNestedInputObjectSchema as UserWalletUpdateOneWithoutUserNestedInputObjectSchema } from './UserWalletUpdateOneWithoutUserNestedInput.schema';
import { ExchangeCredentialUpdateManyWithoutUserNestedInputObjectSchema as ExchangeCredentialUpdateManyWithoutUserNestedInputObjectSchema } from './ExchangeCredentialUpdateManyWithoutUserNestedInput.schema';
import { StrategyConfigUpdateManyWithoutUserNestedInputObjectSchema as StrategyConfigUpdateManyWithoutUserNestedInputObjectSchema } from './StrategyConfigUpdateManyWithoutUserNestedInput.schema';
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
  info: z.lazy(() => UserInfoUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  wallet: z.lazy(() => UserWalletUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  exchangeCredentials: z.lazy(() => ExchangeCredentialUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  strategyConfigs: z.lazy(() => StrategyConfigUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutUplinesInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutUplinesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutUplinesInput>;
export const UserUpdateWithoutUplinesInputObjectZodSchema = makeSchema();
