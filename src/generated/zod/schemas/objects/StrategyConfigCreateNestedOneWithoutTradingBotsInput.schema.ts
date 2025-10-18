import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateWithoutTradingBotsInputObjectSchema as StrategyConfigCreateWithoutTradingBotsInputObjectSchema } from './StrategyConfigCreateWithoutTradingBotsInput.schema';
import { StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema as StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutTradingBotsInput.schema';
import { StrategyConfigCreateOrConnectWithoutTradingBotsInputObjectSchema as StrategyConfigCreateOrConnectWithoutTradingBotsInputObjectSchema } from './StrategyConfigCreateOrConnectWithoutTradingBotsInput.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutTradingBotsInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StrategyConfigCreateOrConnectWithoutTradingBotsInputObjectSchema).optional(),
  connect: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).optional()
}).strict();
export const StrategyConfigCreateNestedOneWithoutTradingBotsInputObjectSchema: z.ZodType<Prisma.StrategyConfigCreateNestedOneWithoutTradingBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCreateNestedOneWithoutTradingBotsInput>;
export const StrategyConfigCreateNestedOneWithoutTradingBotsInputObjectZodSchema = makeSchema();
