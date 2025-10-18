import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeUpdateWithoutMarketsInputObjectSchema as ExchangeUpdateWithoutMarketsInputObjectSchema } from './ExchangeUpdateWithoutMarketsInput.schema';
import { ExchangeUncheckedUpdateWithoutMarketsInputObjectSchema as ExchangeUncheckedUpdateWithoutMarketsInputObjectSchema } from './ExchangeUncheckedUpdateWithoutMarketsInput.schema';
import { ExchangeCreateWithoutMarketsInputObjectSchema as ExchangeCreateWithoutMarketsInputObjectSchema } from './ExchangeCreateWithoutMarketsInput.schema';
import { ExchangeUncheckedCreateWithoutMarketsInputObjectSchema as ExchangeUncheckedCreateWithoutMarketsInputObjectSchema } from './ExchangeUncheckedCreateWithoutMarketsInput.schema';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './ExchangeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ExchangeUpdateWithoutMarketsInputObjectSchema), z.lazy(() => ExchangeUncheckedUpdateWithoutMarketsInputObjectSchema)]),
  create: z.union([z.lazy(() => ExchangeCreateWithoutMarketsInputObjectSchema), z.lazy(() => ExchangeUncheckedCreateWithoutMarketsInputObjectSchema)]),
  where: z.lazy(() => ExchangeWhereInputObjectSchema).optional()
}).strict();
export const ExchangeUpsertWithoutMarketsInputObjectSchema: z.ZodType<Prisma.ExchangeUpsertWithoutMarketsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeUpsertWithoutMarketsInput>;
export const ExchangeUpsertWithoutMarketsInputObjectZodSchema = makeSchema();
