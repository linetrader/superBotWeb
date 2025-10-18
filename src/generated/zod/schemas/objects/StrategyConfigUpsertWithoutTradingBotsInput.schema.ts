import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigUpdateWithoutTradingBotsInputObjectSchema as StrategyConfigUpdateWithoutTradingBotsInputObjectSchema } from './StrategyConfigUpdateWithoutTradingBotsInput.schema';
import { StrategyConfigUncheckedUpdateWithoutTradingBotsInputObjectSchema as StrategyConfigUncheckedUpdateWithoutTradingBotsInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutTradingBotsInput.schema';
import { StrategyConfigCreateWithoutTradingBotsInputObjectSchema as StrategyConfigCreateWithoutTradingBotsInputObjectSchema } from './StrategyConfigCreateWithoutTradingBotsInput.schema';
import { StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema as StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutTradingBotsInput.schema';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StrategyConfigUpdateWithoutTradingBotsInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutTradingBotsInputObjectSchema)]),
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutTradingBotsInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema)]),
  where: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional()
}).strict();
export const StrategyConfigUpsertWithoutTradingBotsInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpsertWithoutTradingBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpsertWithoutTradingBotsInput>;
export const StrategyConfigUpsertWithoutTradingBotsInputObjectZodSchema = makeSchema();
