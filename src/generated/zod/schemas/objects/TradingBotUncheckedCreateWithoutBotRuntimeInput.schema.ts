import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotModeSchema } from '../enums/BotMode.schema';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { BotLogUncheckedCreateNestedManyWithoutBotInputObjectSchema as BotLogUncheckedCreateNestedManyWithoutBotInputObjectSchema } from './BotLogUncheckedCreateNestedManyWithoutBotInput.schema';
import { WorkItemUncheckedCreateNestedManyWithoutBotInputObjectSchema as WorkItemUncheckedCreateNestedManyWithoutBotInputObjectSchema } from './WorkItemUncheckedCreateNestedManyWithoutBotInput.schema';
import { BotGroupUncheckedCreateNestedManyWithoutBotInputObjectSchema as BotGroupUncheckedCreateNestedManyWithoutBotInputObjectSchema } from './BotGroupUncheckedCreateNestedManyWithoutBotInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  mode: BotModeSchema.optional(),
  exchangeMarketId: z.string().optional().nullable(),
  singleMarketKind: MarketKindSchema.optional().nullable(),
  symbol: z.string(),
  strategyConfigId: z.string(),
  enabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  BotLog: z.lazy(() => BotLogUncheckedCreateNestedManyWithoutBotInputObjectSchema).optional(),
  workItems: z.lazy(() => WorkItemUncheckedCreateNestedManyWithoutBotInputObjectSchema).optional(),
  groups: z.lazy(() => BotGroupUncheckedCreateNestedManyWithoutBotInputObjectSchema).optional()
}).strict();
export const TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema: z.ZodType<Prisma.TradingBotUncheckedCreateWithoutBotRuntimeInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUncheckedCreateWithoutBotRuntimeInput>;
export const TradingBotUncheckedCreateWithoutBotRuntimeInputObjectZodSchema = makeSchema();
