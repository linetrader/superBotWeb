import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateWithoutTradingBotsInputObjectSchema as StrategyConfigCreateWithoutTradingBotsInputObjectSchema } from './StrategyConfigCreateWithoutTradingBotsInput.schema';
import { StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema as StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutTradingBotsInput.schema';
import { StrategyConfigCreateOrConnectWithoutTradingBotsInputObjectSchema as StrategyConfigCreateOrConnectWithoutTradingBotsInputObjectSchema } from './StrategyConfigCreateOrConnectWithoutTradingBotsInput.schema';
import { StrategyConfigUpsertWithoutTradingBotsInputObjectSchema as StrategyConfigUpsertWithoutTradingBotsInputObjectSchema } from './StrategyConfigUpsertWithoutTradingBotsInput.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigUpdateToOneWithWhereWithoutTradingBotsInputObjectSchema as StrategyConfigUpdateToOneWithWhereWithoutTradingBotsInputObjectSchema } from './StrategyConfigUpdateToOneWithWhereWithoutTradingBotsInput.schema';
import { StrategyConfigUpdateWithoutTradingBotsInputObjectSchema as StrategyConfigUpdateWithoutTradingBotsInputObjectSchema } from './StrategyConfigUpdateWithoutTradingBotsInput.schema';
import { StrategyConfigUncheckedUpdateWithoutTradingBotsInputObjectSchema as StrategyConfigUncheckedUpdateWithoutTradingBotsInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutTradingBotsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutTradingBotsInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutTradingBotsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StrategyConfigCreateOrConnectWithoutTradingBotsInputObjectSchema).optional(),
  upsert: z.lazy(() => StrategyConfigUpsertWithoutTradingBotsInputObjectSchema).optional(),
  connect: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StrategyConfigUpdateToOneWithWhereWithoutTradingBotsInputObjectSchema), z.lazy(() => StrategyConfigUpdateWithoutTradingBotsInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutTradingBotsInputObjectSchema)]).optional()
}).strict();
export const StrategyConfigUpdateOneRequiredWithoutTradingBotsNestedInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpdateOneRequiredWithoutTradingBotsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpdateOneRequiredWithoutTradingBotsNestedInput>;
export const StrategyConfigUpdateOneRequiredWithoutTradingBotsNestedInputObjectZodSchema = makeSchema();
