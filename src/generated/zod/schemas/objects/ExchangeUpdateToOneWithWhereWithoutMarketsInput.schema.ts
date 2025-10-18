import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './ExchangeWhereInput.schema';
import { ExchangeUpdateWithoutMarketsInputObjectSchema as ExchangeUpdateWithoutMarketsInputObjectSchema } from './ExchangeUpdateWithoutMarketsInput.schema';
import { ExchangeUncheckedUpdateWithoutMarketsInputObjectSchema as ExchangeUncheckedUpdateWithoutMarketsInputObjectSchema } from './ExchangeUncheckedUpdateWithoutMarketsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ExchangeUpdateWithoutMarketsInputObjectSchema), z.lazy(() => ExchangeUncheckedUpdateWithoutMarketsInputObjectSchema)])
}).strict();
export const ExchangeUpdateToOneWithWhereWithoutMarketsInputObjectSchema: z.ZodType<Prisma.ExchangeUpdateToOneWithWhereWithoutMarketsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeUpdateToOneWithWhereWithoutMarketsInput>;
export const ExchangeUpdateToOneWithWhereWithoutMarketsInputObjectZodSchema = makeSchema();
