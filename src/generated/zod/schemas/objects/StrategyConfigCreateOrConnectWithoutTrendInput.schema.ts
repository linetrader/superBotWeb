import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigCreateWithoutTrendInputObjectSchema as StrategyConfigCreateWithoutTrendInputObjectSchema } from './StrategyConfigCreateWithoutTrendInput.schema';
import { StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema as StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutTrendInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutTrendInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema)])
}).strict();
export const StrategyConfigCreateOrConnectWithoutTrendInputObjectSchema: z.ZodType<Prisma.StrategyConfigCreateOrConnectWithoutTrendInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCreateOrConnectWithoutTrendInput>;
export const StrategyConfigCreateOrConnectWithoutTrendInputObjectZodSchema = makeSchema();
