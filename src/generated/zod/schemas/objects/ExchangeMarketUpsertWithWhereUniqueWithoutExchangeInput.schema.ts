import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketUpdateWithoutExchangeInputObjectSchema as ExchangeMarketUpdateWithoutExchangeInputObjectSchema } from './ExchangeMarketUpdateWithoutExchangeInput.schema';
import { ExchangeMarketUncheckedUpdateWithoutExchangeInputObjectSchema as ExchangeMarketUncheckedUpdateWithoutExchangeInputObjectSchema } from './ExchangeMarketUncheckedUpdateWithoutExchangeInput.schema';
import { ExchangeMarketCreateWithoutExchangeInputObjectSchema as ExchangeMarketCreateWithoutExchangeInputObjectSchema } from './ExchangeMarketCreateWithoutExchangeInput.schema';
import { ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema as ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ExchangeMarketUpdateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedUpdateWithoutExchangeInputObjectSchema)]),
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema)])
}).strict();
export const ExchangeMarketUpsertWithWhereUniqueWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUpsertWithWhereUniqueWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUpsertWithWhereUniqueWithoutExchangeInput>;
export const ExchangeMarketUpsertWithWhereUniqueWithoutExchangeInputObjectZodSchema = makeSchema();
