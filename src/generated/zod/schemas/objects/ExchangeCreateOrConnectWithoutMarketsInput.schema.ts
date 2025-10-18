import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './ExchangeWhereUniqueInput.schema';
import { ExchangeCreateWithoutMarketsInputObjectSchema as ExchangeCreateWithoutMarketsInputObjectSchema } from './ExchangeCreateWithoutMarketsInput.schema';
import { ExchangeUncheckedCreateWithoutMarketsInputObjectSchema as ExchangeUncheckedCreateWithoutMarketsInputObjectSchema } from './ExchangeUncheckedCreateWithoutMarketsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExchangeCreateWithoutMarketsInputObjectSchema), z.lazy(() => ExchangeUncheckedCreateWithoutMarketsInputObjectSchema)])
}).strict();
export const ExchangeCreateOrConnectWithoutMarketsInputObjectSchema: z.ZodType<Prisma.ExchangeCreateOrConnectWithoutMarketsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCreateOrConnectWithoutMarketsInput>;
export const ExchangeCreateOrConnectWithoutMarketsInputObjectZodSchema = makeSchema();
