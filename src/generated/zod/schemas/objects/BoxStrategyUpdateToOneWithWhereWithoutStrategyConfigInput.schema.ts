import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BoxStrategyWhereInputObjectSchema as BoxStrategyWhereInputObjectSchema } from './BoxStrategyWhereInput.schema';
import { BoxStrategyUpdateWithoutStrategyConfigInputObjectSchema as BoxStrategyUpdateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUpdateWithoutStrategyConfigInput.schema';
import { BoxStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema as BoxStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema } from './BoxStrategyUncheckedUpdateWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BoxStrategyWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BoxStrategyUpdateWithoutStrategyConfigInputObjectSchema), z.lazy(() => BoxStrategyUncheckedUpdateWithoutStrategyConfigInputObjectSchema)])
}).strict();
export const BoxStrategyUpdateToOneWithWhereWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.BoxStrategyUpdateToOneWithWhereWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyUpdateToOneWithWhereWithoutStrategyConfigInput>;
export const BoxStrategyUpdateToOneWithWhereWithoutStrategyConfigInputObjectZodSchema = makeSchema();
