import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyKindSchema } from '../enums/StrategyKind.schema';
import { TimeframeSchema } from '../enums/Timeframe.schema';
import { TrendStrategyUncheckedCreateNestedOneWithoutStrategyConfigInputObjectSchema as TrendStrategyUncheckedCreateNestedOneWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUncheckedCreateNestedOneWithoutStrategyConfigInput.schema';
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
  trend: z.lazy(() => TrendStrategyUncheckedCreateNestedOneWithoutStrategyConfigInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotUncheckedCreateNestedManyWithoutStrategyConfigInputObjectSchema).optional()
}).strict();
export const StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema: z.ZodType<Prisma.StrategyConfigUncheckedCreateWithoutBoxInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUncheckedCreateWithoutBoxInput>;
export const StrategyConfigUncheckedCreateWithoutBoxInputObjectZodSchema = makeSchema();
