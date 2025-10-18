import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BoxStrategyUpdateWithoutStrategyConfigInputObjectSchema as BoxStrategyUpdateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUpdateWithoutStrategyConfigInput.schema';
import { BoxStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema as BoxStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUncheckedUpdateWithoutStrategyConfigInput.schema';
import { BoxStrategyCreateWithoutStrategyConfigInputObjectSchema as BoxStrategyCreateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyCreateWithoutStrategyConfigInput.schema';
import { BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema as BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUncheckedCreateWithoutStrategyConfigInput.schema';
import { BoxStrategyWhereInputObjectSchema as BoxStrategyWhereInputObjectSchema } from './BoxStrategyWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BoxStrategyUpdateWithoutStrategyConfigInputObjectSchema), z.lazy(() => BoxStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema)]),
  create: z.union([z.lazy(() => BoxStrategyCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema)]),
  where: z.lazy(() => BoxStrategyWhereInputObjectSchema).optional()
}).strict();
export const BoxStrategyUpsertWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.BoxStrategyUpsertWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyUpsertWithoutStrategyConfigInput>;
export const BoxStrategyUpsertWithoutStrategyConfigInputObjectZodSchema = makeSchema();
