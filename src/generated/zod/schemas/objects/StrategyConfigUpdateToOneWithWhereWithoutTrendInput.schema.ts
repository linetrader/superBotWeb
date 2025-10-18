import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema';
import { StrategyConfigUpdateWithoutTrendInputObjectSchema as StrategyConfigUpdateWithoutTrendInputObjectSchema } from './StrategyConfigUpdateWithoutTrendInput.schema';
import { StrategyConfigUncheckedUpdateWithoutTrendInputObjectSchema as StrategyConfigUncheckedUpdateWithoutTrendInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutTrendInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StrategyConfigUpdateWithoutTrendInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutTrendInputObjectSchema)])
}).strict();
export const StrategyConfigUpdateToOneWithWhereWithoutTrendInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpdateToOneWithWhereWithoutTrendInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpdateToOneWithWhereWithoutTrendInput>;
export const StrategyConfigUpdateToOneWithWhereWithoutTrendInputObjectZodSchema = makeSchema();
