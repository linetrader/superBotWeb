import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCreateWithoutCredentialsInputObjectSchema as ExchangeCreateWithoutCredentialsInputObjectSchema } from './ExchangeCreateWithoutCredentialsInput.schema';
import { ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema as ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema } from './ExchangeUncheckedCreateWithoutCredentialsInput.schema';
import { ExchangeCreateOrConnectWithoutCredentialsInputObjectSchema as ExchangeCreateOrConnectWithoutCredentialsInputObjectSchema } from './ExchangeCreateOrConnectWithoutCredentialsInput.schema';
import { ExchangeUpsertWithoutCredentialsInputObjectSchema as ExchangeUpsertWithoutCredentialsInputObjectSchema } from './ExchangeUpsertWithoutCredentialsInput.schema';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './ExchangeWhereUniqueInput.schema';
import { ExchangeUpdateToOneWithWhereWithoutCredentialsInputObjectSchema as ExchangeUpdateToOneWithWhereWithoutCredentialsInputObjectSchema } from './ExchangeUpdateToOneWithWhereWithoutCredentialsInput.schema';
import { ExchangeUpdateWithoutCredentialsInputObjectSchema as ExchangeUpdateWithoutCredentialsInputObjectSchema } from './ExchangeUpdateWithoutCredentialsInput.schema';
import { ExchangeUncheckedUpdateWithoutCredentialsInputObjectSchema as ExchangeUncheckedUpdateWithoutCredentialsInputObjectSchema } from './ExchangeUncheckedUpdateWithoutCredentialsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeCreateWithoutCredentialsInputObjectSchema), z.lazy(() => ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExchangeCreateOrConnectWithoutCredentialsInputObjectSchema).optional(),
  upsert: z.lazy(() => ExchangeUpsertWithoutCredentialsInputObjectSchema).optional(),
  connect: z.lazy(() => ExchangeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ExchangeUpdateToOneWithWhereWithoutCredentialsInputObjectSchema), z.lazy(() => ExchangeUpdateWithoutCredentialsInputObjectSchema), z.lazy(() => ExchangeUncheckedUpdateWithoutCredentialsInputObjectSchema)]).optional()
}).strict();
export const ExchangeUpdateOneRequiredWithoutCredentialsNestedInputObjectSchema: z.ZodType<Prisma.ExchangeUpdateOneRequiredWithoutCredentialsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeUpdateOneRequiredWithoutCredentialsNestedInput>;
export const ExchangeUpdateOneRequiredWithoutCredentialsNestedInputObjectZodSchema = makeSchema();
