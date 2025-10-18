import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCreateWithoutExchangeInputObjectSchema as ExchangeMarketCreateWithoutExchangeInputObjectSchema } from './ExchangeMarketCreateWithoutExchangeInput.schema';
import { ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema as ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutExchangeInput.schema';
import { ExchangeMarketCreateOrConnectWithoutExchangeInputObjectSchema as ExchangeMarketCreateOrConnectWithoutExchangeInputObjectSchema } from './ExchangeMarketCreateOrConnectWithoutExchangeInput.schema';
import { ExchangeMarketUpsertWithWhereUniqueWithoutExchangeInputObjectSchema as ExchangeMarketUpsertWithWhereUniqueWithoutExchangeInputObjectSchema } from './ExchangeMarketUpsertWithWhereUniqueWithoutExchangeInput.schema';
import { ExchangeMarketCreateManyExchangeInputEnvelopeObjectSchema as ExchangeMarketCreateManyExchangeInputEnvelopeObjectSchema } from './ExchangeMarketCreateManyExchangeInputEnvelope.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketUpdateWithWhereUniqueWithoutExchangeInputObjectSchema as ExchangeMarketUpdateWithWhereUniqueWithoutExchangeInputObjectSchema } from './ExchangeMarketUpdateWithWhereUniqueWithoutExchangeInput.schema';
import { ExchangeMarketUpdateManyWithWhereWithoutExchangeInputObjectSchema as ExchangeMarketUpdateManyWithWhereWithoutExchangeInputObjectSchema } from './ExchangeMarketUpdateManyWithWhereWithoutExchangeInput.schema';
import { ExchangeMarketScalarWhereInputObjectSchema as ExchangeMarketScalarWhereInputObjectSchema } from './ExchangeMarketScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketCreateWithoutExchangeInputObjectSchema).array(), z.lazy(() => ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExchangeMarketCreateOrConnectWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketCreateOrConnectWithoutExchangeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ExchangeMarketUpsertWithWhereUniqueWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketUpsertWithWhereUniqueWithoutExchangeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExchangeMarketCreateManyExchangeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema), z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema), z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema), z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema), z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ExchangeMarketUpdateWithWhereUniqueWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketUpdateWithWhereUniqueWithoutExchangeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ExchangeMarketUpdateManyWithWhereWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketUpdateManyWithWhereWithoutExchangeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ExchangeMarketScalarWhereInputObjectSchema), z.lazy(() => ExchangeMarketScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ExchangeMarketUncheckedUpdateManyWithoutExchangeNestedInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUncheckedUpdateManyWithoutExchangeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUncheckedUpdateManyWithoutExchangeNestedInput>;
export const ExchangeMarketUncheckedUpdateManyWithoutExchangeNestedInputObjectZodSchema = makeSchema();
