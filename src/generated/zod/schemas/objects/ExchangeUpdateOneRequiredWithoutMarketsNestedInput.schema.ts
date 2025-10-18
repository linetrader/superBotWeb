import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCreateWithoutMarketsInputObjectSchema as ExchangeCreateWithoutMarketsInputObjectSchema } from './ExchangeCreateWithoutMarketsInput.schema';
import { ExchangeUncheckedCreateWithoutMarketsInputObjectSchema as ExchangeUncheckedCreateWithoutMarketsInputObjectSchema } from './ExchangeUncheckedCreateWithoutMarketsInput.schema';
import { ExchangeCreateOrConnectWithoutMarketsInputObjectSchema as ExchangeCreateOrConnectWithoutMarketsInputObjectSchema } from './ExchangeCreateOrConnectWithoutMarketsInput.schema';
import { ExchangeUpsertWithoutMarketsInputObjectSchema as ExchangeUpsertWithoutMarketsInputObjectSchema } from './ExchangeUpsertWithoutMarketsInput.schema';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './ExchangeWhereUniqueInput.schema';
import { ExchangeUpdateToOneWithWhereWithoutMarketsInputObjectSchema as ExchangeUpdateToOneWithWhereWithoutMarketsInputObjectSchema } from './ExchangeUpdateToOneWithWhereWithoutMarketsInput.schema';
import { ExchangeUpdateWithoutMarketsInputObjectSchema as ExchangeUpdateWithoutMarketsInputObjectSchema } from './ExchangeUpdateWithoutMarketsInput.schema';
import { ExchangeUncheckedUpdateWithoutMarketsInputObjectSchema as ExchangeUncheckedUpdateWithoutMarketsInputObjectSchema } from './ExchangeUncheckedUpdateWithoutMarketsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeCreateWithoutMarketsInputObjectSchema), z.lazy(() => ExchangeUncheckedCreateWithoutMarketsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExchangeCreateOrConnectWithoutMarketsInputObjectSchema).optional(),
  upsert: z.lazy(() => ExchangeUpsertWithoutMarketsInputObjectSchema).optional(),
  connect: z.lazy(() => ExchangeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ExchangeUpdateToOneWithWhereWithoutMarketsInputObjectSchema), z.lazy(() => ExchangeUpdateWithoutMarketsInputObjectSchema), z.lazy(() => ExchangeUncheckedUpdateWithoutMarketsInputObjectSchema)]).optional()
}).strict();
export const ExchangeUpdateOneRequiredWithoutMarketsNestedInputObjectSchema: z.ZodType<Prisma.ExchangeUpdateOneRequiredWithoutMarketsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeUpdateOneRequiredWithoutMarketsNestedInput>;
export const ExchangeUpdateOneRequiredWithoutMarketsNestedInputObjectZodSchema = makeSchema();
