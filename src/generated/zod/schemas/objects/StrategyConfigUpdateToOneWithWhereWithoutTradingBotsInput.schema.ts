import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema';
import { StrategyConfigUpdateWithoutTradingBotsInputObjectSchema as StrategyConfigUpdateWithoutTradingBotsInputObjectSchema } from './StrategyConfigUpdateWithoutTradingBotsInput.schema';
import { StrategyConfigUncheckedUpdateWithoutTradingBotsInputObjectSchema as StrategyConfigUncheckedUpdateWithoutTradingBotsInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutTradingBotsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StrategyConfigUpdateWithoutTradingBotsInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutTradingBotsInputObjectSchema)])
}).strict();
export const StrategyConfigUpdateToOneWithWhereWithoutTradingBotsInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpdateToOneWithWhereWithoutTradingBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpdateToOneWithWhereWithoutTradingBotsInput>;
export const StrategyConfigUpdateToOneWithWhereWithoutTradingBotsInputObjectZodSchema = makeSchema();
