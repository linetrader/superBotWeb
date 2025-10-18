import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BotModeSchema } from '../enums/BotMode.schema';
import { EnumBotModeFieldUpdateOperationsInputObjectSchema as EnumBotModeFieldUpdateOperationsInputObjectSchema } from './EnumBotModeFieldUpdateOperationsInput.schema';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { NullableEnumMarketKindFieldUpdateOperationsInputObjectSchema as NullableEnumMarketKindFieldUpdateOperationsInputObjectSchema } from './NullableEnumMarketKindFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ExchangeMarketUpdateOneWithoutBotsNestedInputObjectSchema as ExchangeMarketUpdateOneWithoutBotsNestedInputObjectSchema } from './ExchangeMarketUpdateOneWithoutBotsNestedInput.schema';
import { StrategyConfigUpdateOneRequiredWithoutTradingBotsNestedInputObjectSchema as StrategyConfigUpdateOneRequiredWithoutTradingBotsNestedInputObjectSchema } from './StrategyConfigUpdateOneRequiredWithoutTradingBotsNestedInput.schema';
import { BotLogUpdateManyWithoutBotNestedInputObjectSchema as BotLogUpdateManyWithoutBotNestedInputObjectSchema } from './BotLogUpdateManyWithoutBotNestedInput.schema';
import { BotRuntimeUpdateOneWithoutBotNestedInputObjectSchema as BotRuntimeUpdateOneWithoutBotNestedInputObjectSchema } from './BotRuntimeUpdateOneWithoutBotNestedInput.schema';
import { WorkItemUpdateManyWithoutBotNestedInputObjectSchema as WorkItemUpdateManyWithoutBotNestedInputObjectSchema } from './WorkItemUpdateManyWithoutBotNestedInput.schema';
import { UserUpdateOneRequiredWithoutTradingBotsNestedInputObjectSchema as UserUpdateOneRequiredWithoutTradingBotsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTradingBotsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(60), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mode: z.union([BotModeSchema, z.lazy(() => EnumBotModeFieldUpdateOperationsInputObjectSchema)]).optional(),
  singleMarketKind: z.union([MarketKindSchema, z.lazy(() => NullableEnumMarketKindFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  symbol: z.union([z.string().max(40), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  enabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  exchangeMarket: z.lazy(() => ExchangeMarketUpdateOneWithoutBotsNestedInputObjectSchema).optional(),
  strategyConfig: z.lazy(() => StrategyConfigUpdateOneRequiredWithoutTradingBotsNestedInputObjectSchema).optional(),
  BotLog: z.lazy(() => BotLogUpdateManyWithoutBotNestedInputObjectSchema).optional(),
  BotRuntime: z.lazy(() => BotRuntimeUpdateOneWithoutBotNestedInputObjectSchema).optional(),
  workItems: z.lazy(() => WorkItemUpdateManyWithoutBotNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTradingBotsNestedInputObjectSchema).optional()
}).strict();
export const TradingBotUpdateWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateWithoutGroupsInput>;
export const TradingBotUpdateWithoutGroupsInputObjectZodSchema = makeSchema();
