import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotModeSchema } from '../enums/BotMode.schema';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { BotLogUncheckedCreateNestedManyWithoutBotInputObjectSchema as BotLogUncheckedCreateNestedManyWithoutBotInputObjectSchema } from './BotLogUncheckedCreateNestedManyWithoutBotInput.schema';
import { BotRuntimeUncheckedCreateNestedOneWithoutBotInputObjectSchema as BotRuntimeUncheckedCreateNestedOneWithoutBotInputObjectSchema } from './BotRuntimeUncheckedCreateNestedOneWithoutBotInput.schema';
import { WorkItemUncheckedCreateNestedManyWithoutBotInputObjectSchema as WorkItemUncheckedCreateNestedManyWithoutBotInputObjectSchema } from './WorkItemUncheckedCreateNestedManyWithoutBotInput.schema';
import { BotGroupUncheckedCreateNestedManyWithoutBotInputObjectSchema as BotGroupUncheckedCreateNestedManyWithoutBotInputObjectSchema } from './BotGroupUncheckedCreateNestedManyWithoutBotInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().max(60),
  mode: BotModeSchema.optional(),
  exchangeMarketId: z.string().optional().nullable(),
  singleMarketKind: MarketKindSchema.optional().nullable(),
  symbol: z.string().max(40),
  strategyConfigId: z.string(),
  enabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  BotLog: z.lazy(() => BotLogUncheckedCreateNestedManyWithoutBotInputObjectSchema),
  BotRuntime: z.lazy(() => BotRuntimeUncheckedCreateNestedOneWithoutBotInputObjectSchema).optional(),
  workItems: z.lazy(() => WorkItemUncheckedCreateNestedManyWithoutBotInputObjectSchema),
  groups: z.lazy(() => BotGroupUncheckedCreateNestedManyWithoutBotInputObjectSchema)
}).strict();
export const TradingBotUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TradingBotUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUncheckedCreateInput>;
export const TradingBotUncheckedCreateInputObjectZodSchema = makeSchema();
