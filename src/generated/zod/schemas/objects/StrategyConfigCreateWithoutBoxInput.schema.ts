import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyKindSchema } from '../enums/StrategyKind.schema';
import { TimeframeSchema } from '../enums/Timeframe.schema';
import { UserCreateNestedOneWithoutStrategyConfigsInputObjectSchema as UserCreateNestedOneWithoutStrategyConfigsInputObjectSchema } from './UserCreateNestedOneWithoutStrategyConfigsInput.schema';
import { TrendStrategyCreateNestedOneWithoutStrategyConfigInputObjectSchema as TrendStrategyCreateNestedOneWithoutStrategyConfigInputObjectSchema } from './TrendStrategyCreateNestedOneWithoutStrategyConfigInput.schema';
import { TradingBotCreateNestedManyWithoutStrategyConfigInputObjectSchema as TradingBotCreateNestedManyWithoutStrategyConfigInputObjectSchema } from './TradingBotCreateNestedManyWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
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
  user: z.lazy(() => UserCreateNestedOneWithoutStrategyConfigsInputObjectSchema),
  trend: z.lazy(() => TrendStrategyCreateNestedOneWithoutStrategyConfigInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotCreateNestedManyWithoutStrategyConfigInputObjectSchema).optional()
}).strict();
export const StrategyConfigCreateWithoutBoxInputObjectSchema: z.ZodType<Prisma.StrategyConfigCreateWithoutBoxInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCreateWithoutBoxInput>;
export const StrategyConfigCreateWithoutBoxInputObjectZodSchema = makeSchema();
