import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TrendStrategyUpdateWithoutStrategyConfigInputObjectSchema as TrendStrategyUpdateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUpdateWithoutStrategyConfigInput.schema';
import { TrendStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema as TrendStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUncheckedUpdateWithoutStrategyConfigInput.schema';
import { TrendStrategyCreateWithoutStrategyConfigInputObjectSchema as TrendStrategyCreateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyCreateWithoutStrategyConfigInput.schema';
import { TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema as TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUncheckedCreateWithoutStrategyConfigInput.schema';
import { TrendStrategyWhereInputObjectSchema as TrendStrategyWhereInputObjectSchema } from './TrendStrategyWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TrendStrategyUpdateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TrendStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema)]),
  create: z.union([z.lazy(() => TrendStrategyCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema)]),
  where: z.lazy(() => TrendStrategyWhereInputObjectSchema).optional()
}).strict();
export const TrendStrategyUpsertWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TrendStrategyUpsertWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyUpsertWithoutStrategyConfigInput>;
export const TrendStrategyUpsertWithoutStrategyConfigInputObjectZodSchema = makeSchema();
