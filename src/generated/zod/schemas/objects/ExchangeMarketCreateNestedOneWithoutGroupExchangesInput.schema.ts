import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema as ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketCreateWithoutGroupExchangesInput.schema';
import { ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema as ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutGroupExchangesInput.schema';
import { ExchangeMarketCreateOrConnectWithoutGroupExchangesInputObjectSchema as ExchangeMarketCreateOrConnectWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketCreateOrConnectWithoutGroupExchangesInput.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExchangeMarketCreateOrConnectWithoutGroupExchangesInputObjectSchema).optional(),
  connect: z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema).optional()
}).strict();
export const ExchangeMarketCreateNestedOneWithoutGroupExchangesInputObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateNestedOneWithoutGroupExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateNestedOneWithoutGroupExchangesInput>;
export const ExchangeMarketCreateNestedOneWithoutGroupExchangesInputObjectZodSchema = makeSchema();
