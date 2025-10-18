import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigUpdateWithoutTrendInputObjectSchema as StrategyConfigUpdateWithoutTrendInputObjectSchema } from './StrategyConfigUpdateWithoutTrendInput.schema';
import { StrategyConfigUncheckedUpdateWithoutTrendInputObjectSchema as StrategyConfigUncheckedUpdateWithoutTrendInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutTrendInput.schema';
import { StrategyConfigCreateWithoutTrendInputObjectSchema as StrategyConfigCreateWithoutTrendInputObjectSchema } from './StrategyConfigCreateWithoutTrendInput.schema';
import { StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema as StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutTrendInput.schema';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StrategyConfigUpdateWithoutTrendInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutTrendInputObjectSchema)]),
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutTrendInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutTrendInputObjectSchema)]),
  where: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional()
}).strict();
export const StrategyConfigUpsertWithoutTrendInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpsertWithoutTrendInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpsertWithoutTrendInput>;
export const StrategyConfigUpsertWithoutTrendInputObjectZodSchema = makeSchema();
