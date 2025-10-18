import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeUpdateWithoutCredentialsInputObjectSchema as ExchangeUpdateWithoutCredentialsInputObjectSchema } from './ExchangeUpdateWithoutCredentialsInput.schema';
import { ExchangeUncheckedUpdateWithoutCredentialsInputObjectSchema as ExchangeUncheckedUpdateWithoutCredentialsInputObjectSchema } from './ExchangeUncheckedUpdateWithoutCredentialsInput.schema';
import { ExchangeCreateWithoutCredentialsInputObjectSchema as ExchangeCreateWithoutCredentialsInputObjectSchema } from './ExchangeCreateWithoutCredentialsInput.schema';
import { ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema as ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema } from './ExchangeUncheckedCreateWithoutCredentialsInput.schema';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './ExchangeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ExchangeUpdateWithoutCredentialsInputObjectSchema), z.lazy(() => ExchangeUncheckedUpdateWithoutCredentialsInputObjectSchema)]),
  create: z.union([z.lazy(() => ExchangeCreateWithoutCredentialsInputObjectSchema), z.lazy(() => ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema)]),
  where: z.lazy(() => ExchangeWhereInputObjectSchema).optional()
}).strict();
export const ExchangeUpsertWithoutCredentialsInputObjectSchema: z.ZodType<Prisma.ExchangeUpsertWithoutCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeUpsertWithoutCredentialsInput>;
export const ExchangeUpsertWithoutCredentialsInputObjectZodSchema = makeSchema();
