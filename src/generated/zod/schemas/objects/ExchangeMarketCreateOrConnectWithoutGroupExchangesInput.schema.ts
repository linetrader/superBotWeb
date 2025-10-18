import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema as ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketCreateWithoutGroupExchangesInput.schema';
import { ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema as ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutGroupExchangesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema)])
}).strict();
export const ExchangeMarketCreateOrConnectWithoutGroupExchangesInputObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateOrConnectWithoutGroupExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateOrConnectWithoutGroupExchangesInput>;
export const ExchangeMarketCreateOrConnectWithoutGroupExchangesInputObjectZodSchema = makeSchema();
