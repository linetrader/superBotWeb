import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCreateWithoutCredentialsInputObjectSchema as ExchangeCreateWithoutCredentialsInputObjectSchema } from './ExchangeCreateWithoutCredentialsInput.schema';
import { ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema as ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema } from './ExchangeUncheckedCreateWithoutCredentialsInput.schema';
import { ExchangeCreateOrConnectWithoutCredentialsInputObjectSchema as ExchangeCreateOrConnectWithoutCredentialsInputObjectSchema } from './ExchangeCreateOrConnectWithoutCredentialsInput.schema';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './ExchangeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeCreateWithoutCredentialsInputObjectSchema), z.lazy(() => ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExchangeCreateOrConnectWithoutCredentialsInputObjectSchema).optional(),
  connect: z.lazy(() => ExchangeWhereUniqueInputObjectSchema).optional()
}).strict();
export const ExchangeCreateNestedOneWithoutCredentialsInputObjectSchema: z.ZodType<Prisma.ExchangeCreateNestedOneWithoutCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCreateNestedOneWithoutCredentialsInput>;
export const ExchangeCreateNestedOneWithoutCredentialsInputObjectZodSchema = makeSchema();
