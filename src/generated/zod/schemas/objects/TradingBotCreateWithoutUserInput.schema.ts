import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotModeSchema } from '../enums/BotMode.schema';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { ExchangeMarketCreateNestedOneWithoutBotsInputObjectSchema as ExchangeMarketCreateNestedOneWithoutBotsInputObjectSchema } from './ExchangeMarketCreateNestedOneWithoutBotsInput.schema';
import { StrategyConfigCreateNestedOneWithoutTradingBotsInputObjectSchema as StrategyConfigCreateNestedOneWithoutTradingBotsInputObjectSchema } from './StrategyConfigCreateNestedOneWithoutTradingBotsInput.schema';
import { BotLogCreateNestedManyWithoutBotInputObjectSchema as BotLogCreateNestedManyWithoutBotInputObjectSchema } from './BotLogCreateNestedManyWithoutBotInput.schema';
import { BotRuntimeCreateNestedOneWithoutBotInputObjectSchema as BotRuntimeCreateNestedOneWithoutBotInputObjectSchema } from './BotRuntimeCreateNestedOneWithoutBotInput.schema';
import { WorkItemCreateNestedManyWithoutBotInputObjectSchema as WorkItemCreateNestedManyWithoutBotInputObjectSchema } from './WorkItemCreateNestedManyWithoutBotInput.schema';
import { BotGroupCreateNestedManyWithoutBotInputObjectSchema as BotGroupCreateNestedManyWithoutBotInputObjectSchema } from './BotGroupCreateNestedManyWithoutBotInput.schema'

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
  BotLog: z.lazy(() => BotLogCreateNestedManyWithoutBotInputObjectSchema).optional(),
  BotRuntime: z.lazy(() => BotRuntimeCreateNestedOneWithoutBotInputObjectSchema).optional(),
  workItems: z.lazy(() => WorkItemCreateNestedManyWithoutBotInputObjectSchema).optional(),
  groups: z.lazy(() => BotGroupCreateNestedManyWithoutBotInputObjectSchema).optional()
}).strict();
export const TradingBotCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TradingBotCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateWithoutUserInput>;
export const TradingBotCreateWithoutUserInputObjectZodSchema = makeSchema();
