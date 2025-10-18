import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './ExchangeWhereUniqueInput.schema';
import { ExchangeCreateWithoutCredentialsInputObjectSchema as ExchangeCreateWithoutCredentialsInputObjectSchema } from './ExchangeCreateWithoutCredentialsInput.schema';
import { ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema as ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema } from './ExchangeUncheckedCreateWithoutCredentialsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExchangeCreateWithoutCredentialsInputObjectSchema), z.lazy(() => ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema)])
}).strict();
export const ExchangeCreateOrConnectWithoutCredentialsInputObjectSchema: z.ZodType<Prisma.ExchangeCreateOrConnectWithoutCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCreateOrConnectWithoutCredentialsInput>;
export const ExchangeCreateOrConnectWithoutCredentialsInputObjectZodSchema = makeSchema();
