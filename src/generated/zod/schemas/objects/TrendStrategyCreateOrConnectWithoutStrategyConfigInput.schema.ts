import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TrendStrategyWhereUniqueInputObjectSchema as TrendStrategyWhereUniqueInputObjectSchema } from './TrendStrategyWhereUniqueInput.schema';
import { TrendStrategyCreateWithoutStrategyConfigInputObjectSchema as TrendStrategyCreateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyCreateWithoutStrategyConfigInput.schema';
import { TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema as TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUncheckedCreateWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TrendStrategyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TrendStrategyCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema)])
}).strict();
export const TrendStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TrendStrategyCreateOrConnectWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyCreateOrConnectWithoutStrategyConfigInput>;
export const TrendStrategyCreateOrConnectWithoutStrategyConfigInputObjectZodSchema = makeSchema();
