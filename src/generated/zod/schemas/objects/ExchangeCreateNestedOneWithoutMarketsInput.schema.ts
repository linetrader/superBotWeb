import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCreateWithoutMarketsInputObjectSchema as ExchangeCreateWithoutMarketsInputObjectSchema } from './ExchangeCreateWithoutMarketsInput.schema';
import { ExchangeUncheckedCreateWithoutMarketsInputObjectSchema as ExchangeUncheckedCreateWithoutMarketsInputObjectSchema } from './ExchangeUncheckedCreateWithoutMarketsInput.schema';
import { ExchangeCreateOrConnectWithoutMarketsInputObjectSchema as ExchangeCreateOrConnectWithoutMarketsInputObjectSchema } from './ExchangeCreateOrConnectWithoutMarketsInput.schema';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './ExchangeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeCreateWithoutMarketsInputObjectSchema), z.lazy(() => ExchangeUncheckedCreateWithoutMarketsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExchangeCreateOrConnectWithoutMarketsInputObjectSchema).optional(),
  connect: z.lazy(() => ExchangeWhereUniqueInputObjectSchema).optional()
}).strict();
export const ExchangeCreateNestedOneWithoutMarketsInputObjectSchema: z.ZodType<Prisma.ExchangeCreateNestedOneWithoutMarketsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCreateNestedOneWithoutMarketsInput>;
export const ExchangeCreateNestedOneWithoutMarketsInputObjectZodSchema = makeSchema();
