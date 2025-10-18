import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TrendStrategyCreateWithoutStrategyConfigInputObjectSchema as TrendStrategyCreateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyCreateWithoutStrategyConfigInput.schema';
import { TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema as TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUncheckedCreateWithoutStrategyConfigInput.schema';
import { TrendStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema as TrendStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema } from './TrendStrategyCreateOrConnectWithoutStrategyConfigInput.schema';
import { TrendStrategyUpsertWithoutStrategyConfigInputObjectSchema as TrendStrategyUpsertWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUpsertWithoutStrategyConfigInput.schema';
import { TrendStrategyWhereInputObjectSchema as TrendStrategyWhereInputObjectSchema } from './TrendStrategyWhereInput.schema';
import { TrendStrategyWhereUniqueInputObjectSchema as TrendStrategyWhereUniqueInputObjectSchema } from './TrendStrategyWhereUniqueInput.schema';
import { TrendStrategyUpdateToOneWithWhereWithoutStrategyConfigInputObjectSchema as TrendStrategyUpdateToOneWithWhereWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUpdateToOneWithWhereWithoutStrategyConfigInput.schema';
import { TrendStrategyUpdateWithoutStrategyConfigInputObjectSchema as TrendStrategyUpdateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUpdateWithoutStrategyConfigInput.schema';
import { TrendStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema as TrendStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema } from './TrendStrategyUncheckedUpdateWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TrendStrategyCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TrendStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TrendStrategyCreateOrConnectWithoutStrategyConfigInputObjectSchema).optional(),
  upsert: z.lazy(() => TrendStrategyUpsertWithoutStrategyConfigInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TrendStrategyWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TrendStrategyWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TrendStrategyWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TrendStrategyUpdateToOneWithWhereWithoutStrategyConfigInputObjectSchema), z.lazy(() => TrendStrategyUpdateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TrendStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema)]).optional()
}).strict();
export const TrendStrategyUpdateOneWithoutStrategyConfigNestedInputObjectSchema: z.ZodType<Prisma.TrendStrategyUpdateOneWithoutStrategyConfigNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyUpdateOneWithoutStrategyConfigNestedInput>;
export const TrendStrategyUpdateOneWithoutStrategyConfigNestedInputObjectZodSchema = makeSchema();
