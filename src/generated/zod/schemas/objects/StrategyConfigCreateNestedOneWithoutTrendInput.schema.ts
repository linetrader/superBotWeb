import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateWithoutTrendInputObjectSchema as StrategyConfigCreateWithoutTrendInputObjectSchema } from './StrategyConfigCreateWithoutTrendInput.schema';
import { StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema as StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutTrendInput.schema';
import { StrategyConfigCreateOrConnectWithoutTrendInputObjectSchema as StrategyConfigCreateOrConnectWithoutTrendInputObjectSchema } from './StrategyConfigCreateOrConnectWithoutTrendInput.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutTrendInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StrategyConfigCreateOrConnectWithoutTrendInputObjectSchema).optional(),
  connect: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).optional()
}).strict();
export const StrategyConfigCreateNestedOneWithoutTrendInputObjectSchema: z.ZodType<Prisma.StrategyConfigCreateNestedOneWithoutTrendInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCreateNestedOneWithoutTrendInput>;
export const StrategyConfigCreateNestedOneWithoutTrendInputObjectZodSchema = makeSchema();
