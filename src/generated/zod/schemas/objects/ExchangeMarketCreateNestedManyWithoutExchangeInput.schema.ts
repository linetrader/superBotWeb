import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCreateWithoutExchangeInputObjectSchema as ExchangeMarketCreateWithoutExchangeInputObjectSchema } from './ExchangeMarketCreateWithoutExchangeInput.schema';
import { ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema as ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutExchangeInput.schema';
import { ExchangeMarketCreateOrConnectWithoutExchangeInputObjectSchema as ExchangeMarketCreateOrConnectWithoutExchangeInputObjectSchema } from './ExchangeMarketCreateOrConnectWithoutExchangeInput.schema';
import { ExchangeMarketCreateManyExchangeInputEnvelopeObjectSchema as ExchangeMarketCreateManyExchangeInputEnvelopeObjectSchema } from './ExchangeMarketCreateManyExchangeInputEnvelope.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketCreateWithoutExchangeInputObjectSchema).array(), z.lazy(() => ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExchangeMarketCreateOrConnectWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketCreateOrConnectWithoutExchangeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExchangeMarketCreateManyExchangeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema), z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ExchangeMarketCreateNestedManyWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateNestedManyWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateNestedManyWithoutExchangeInput>;
export const ExchangeMarketCreateNestedManyWithoutExchangeInputObjectZodSchema = makeSchema();
