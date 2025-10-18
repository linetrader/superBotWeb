import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './ExchangeWhereInput.schema';
import { ExchangeUpdateWithoutCredentialsInputObjectSchema as ExchangeUpdateWithoutCredentialsInputObjectSchema } from './ExchangeUpdateWithoutCredentialsInput.schema';
import { ExchangeUncheckedUpdateWithoutCredentialsInputObjectSchema as ExchangeUncheckedUpdateWithoutCredentialsInputObjectSchema } from './ExchangeUncheckedUpdateWithoutCredentialsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ExchangeUpdateWithoutCredentialsInputObjectSchema), z.lazy(() => ExchangeUncheckedUpdateWithoutCredentialsInputObjectSchema)])
}).strict();
export const ExchangeUpdateToOneWithWhereWithoutCredentialsInputObjectSchema: z.ZodType<Prisma.ExchangeUpdateToOneWithWhereWithoutCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeUpdateToOneWithWhereWithoutCredentialsInput>;
export const ExchangeUpdateToOneWithWhereWithoutCredentialsInputObjectZodSchema = makeSchema();
