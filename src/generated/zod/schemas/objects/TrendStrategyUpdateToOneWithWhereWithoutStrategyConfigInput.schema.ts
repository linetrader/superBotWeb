import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TrendStrategyWhereInputObjectSchema as TrendStrategyWhereInputObjectSchema } from './TrendStrategyWhereInput.schema';
import { TrendStrategyUpdateWithoutStrategyConfigInputObjectSchema as TrendStrategyUpdateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUpdateWithoutStrategyConfigInput.schema';
import { TrendStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema as TrendStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUncheckedUpdateWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TrendStrategyWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TrendStrategyUpdateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TrendStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema)])
}).strict();
export const TrendStrategyUpdateToOneWithWhereWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TrendStrategyUpdateToOneWithWhereWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyUpdateToOneWithWhereWithoutStrategyConfigInput>;
export const TrendStrategyUpdateToOneWithWhereWithoutStrategyConfigInputObjectZodSchema = makeSchema();
