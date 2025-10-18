import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotModeSchema } from '../enums/BotMode.schema';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { ExchangeMarketCreateNestedOneWithoutBotsInputObjectSchema as ExchangeMarketCreateNestedOneWithoutBotsInputObjectSchema } from './ExchangeMarketCreateNestedOneWithoutBotsInput.schema';
import { StrategyConfigCreateNestedOneWithoutTradingBotsInputObjectSchema as StrategyConfigCreateNestedOneWithoutTradingBotsInputObjectSchema } from './StrategyConfigCreateNestedOneWithoutTradingBotsInput.schema';
import { BotRuntimeCreateNestedOneWithoutBotInputObjectSchema as BotRuntimeCreateNestedOneWithoutBotInputObjectSchema } from './BotRuntimeCreateNestedOneWithoutBotInput.schema';
import { WorkItemCreateNestedManyWithoutBotInputObjectSchema as WorkItemCreateNestedManyWithoutBotInputObjectSchema } from './WorkItemCreateNestedManyWithoutBotInput.schema';
import { BotGroupCreateNestedManyWithoutBotInputObjectSchema as BotGroupCreateNestedManyWithoutBotInputObjectSchema } from './BotGroupCreateNestedManyWithoutBotInput.schema';
import { UserCreateNestedOneWithoutTradingBotsInputObjectSchema as UserCreateNestedOneWithoutTradingBotsInputObjectSchema } from './UserCreateNestedOneWithoutTradingBotsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().max(60),
  mode: BotModeSchema.optional(),
  singleMarketKind: MarketKindSchema.optional().nullable(),
  symbol: z.string().max(40),
  enabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  exchangeMarket: z.lazy(() => ExchangeMarketCreateNestedOneWithoutBotsInputObjectSchema).optional(),
  strategyConfig: z.lazy(() => StrategyConfigCreateNestedOneWithoutTradingBotsInputObjectSchema),
  BotRuntime: z.lazy(() => BotRuntimeCreateNestedOneWithoutBotInputObjectSchema).optional(),
  workItems: z.lazy(() => WorkItemCreateNestedManyWithoutBotInputObjectSchema).optional(),
  groups: z.lazy(() => BotGroupCreateNestedManyWithoutBotInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTradingBotsInputObjectSchema)
}).strict();
export const TradingBotCreateWithoutBotLogInputObjectSchema: z.ZodType<Prisma.TradingBotCreateWithoutBotLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateWithoutBotLogInput>;
export const TradingBotCreateWithoutBotLogInputObjectZodSchema = makeSchema();
