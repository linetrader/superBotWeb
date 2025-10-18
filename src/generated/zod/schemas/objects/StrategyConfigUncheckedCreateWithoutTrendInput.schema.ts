import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyKindSchema } from '../enums/StrategyKind.schema';
import { TimeframeSchema } from '../enums/Timeframe.schema';
import { BoxStrategyUncheckedCreateNestedOneWithoutStrategyConfigInputObjectSchema as BoxStrategyUncheckedCreateNestedOneWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUncheckedCreateNestedOneWithoutStrategyConfigInput.schema';
import { TradingBotUncheckedCreateNestedManyWithoutStrategyConfigInputObjectSchema as TradingBotUncheckedCreateNestedManyWithoutStrategyConfigInputObjectSchema } from './TradingBotUncheckedCreateNestedManyWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  name: z.string(),
  kind: StrategyKindSchema,
  useMartin: z.boolean().optional(),
  martinMultiplier: z.number().optional(),
  defaultSize: z.number().int().optional(),
  maxSize: z.number().int().optional(),
  targetProfit: z.number().optional(),
  leverage: z.number().int().optional(),
  timeframe: TimeframeSchema.optional(),
  enabled: z.boolean().optional(),
  rsiLength: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  box: z.lazy(() => BoxStrategyUncheckedCreateNestedOneWithoutStrategyConfigInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotUncheckedCreateNestedManyWithoutStrategyConfigInputObjectSchema).optional()
}).strict();
export const StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema: z.ZodType<Prisma.StrategyConfigUncheckedCreateWithoutTrendInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUncheckedCreateWithoutTrendInput>;
export const StrategyConfigUncheckedCreateWithoutTrendInputObjectZodSchema = makeSchema();
