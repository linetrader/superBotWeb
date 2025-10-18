import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketUpdateWithoutGroupExchangesInputObjectSchema as ExchangeMarketUpdateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUpdateWithoutGroupExchangesInput.schema';
import { ExchangeMarketUncheckedUpdateWithoutGroupExchangesInputObjectSchema as ExchangeMarketUncheckedUpdateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUncheckedUpdateWithoutGroupExchangesInput.schema';
import { ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema as ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketCreateWithoutGroupExchangesInput.schema';
import { ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema as ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutGroupExchangesInput.schema';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './ExchangeMarketWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ExchangeMarketUpdateWithoutGroupExchangesInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedUpdateWithoutGroupExchangesInputObjectSchema)]),
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema)]),
  where: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional()
}).strict();
export const ExchangeMarketUpsertWithoutGroupExchangesInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUpsertWithoutGroupExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUpsertWithoutGroupExchangesInput>;
export const ExchangeMarketUpsertWithoutGroupExchangesInputObjectZodSchema = makeSchema();
