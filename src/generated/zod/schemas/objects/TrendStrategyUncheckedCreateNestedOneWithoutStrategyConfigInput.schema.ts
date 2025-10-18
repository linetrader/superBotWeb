import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TrendStrategyCreateWithoutStrategyConfigInputObjectSchema as TrendStrategyCreateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyCreateWithoutStrategyConfigInput.schema';
import { TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema as TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUncheckedCreateWithoutStrategyConfigInput.schema';
import { TrendStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema as TrendStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema } from './TrendStrategyCreateOrConnectWithoutStrategyConfigInput.schema';
import { TrendStrategyWhereUniqueInputObjectSchema as TrendStrategyWhereUniqueInputObjectSchema } from './TrendStrategyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TrendStrategyCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TrendStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema).optional(),
  connect: z.lazy(() => TrendStrategyWhereUniqueInputObjectSchema).optional()
}).strict();
export const TrendStrategyUncheckedCreateNestedOneWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TrendStrategyUncheckedCreateNestedOneWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyUncheckedCreateNestedOneWithoutStrategyConfigInput>;
export const TrendStrategyUncheckedCreateNestedOneWithoutStrategyConfigInputObjectZodSchema = makeSchema();
