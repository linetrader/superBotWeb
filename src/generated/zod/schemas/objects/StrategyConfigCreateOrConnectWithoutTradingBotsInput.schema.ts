import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigCreateWithoutTradingBotsInputObjectSchema as StrategyConfigCreateWithoutTradingBotsInputObjectSchema } from './StrategyConfigCreateWithoutTradingBotsInput.schema';
import { StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema as StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutTradingBotsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutTradingBotsInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema)])
}).strict();
export const StrategyConfigCreateOrConnectWithoutTradingBotsInputObjectSchema: z.ZodType<Prisma.StrategyConfigCreateOrConnectWithoutTradingBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCreateOrConnectWithoutTradingBotsInput>;
export const StrategyConfigCreateOrConnectWithoutTradingBotsInputObjectZodSchema = makeSchema();
