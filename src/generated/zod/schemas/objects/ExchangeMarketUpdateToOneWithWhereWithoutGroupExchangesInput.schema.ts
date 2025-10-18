import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './ExchangeMarketWhereInput.schema';
import { ExchangeMarketUpdateWithoutGroupExchangesInputObjectSchema as ExchangeMarketUpdateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUpdateWithoutGroupExchangesInput.schema';
import { ExchangeMarketUncheckedUpdateWithoutGroupExchangesInputObjectSchema as ExchangeMarketUncheckedUpdateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUncheckedUpdateWithoutGroupExchangesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ExchangeMarketUpdateWithoutGroupExchangesInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedUpdateWithoutGroupExchangesInputObjectSchema)])
}).strict();
export const ExchangeMarketUpdateToOneWithWhereWithoutGroupExchangesInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUpdateToOneWithWhereWithoutGroupExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUpdateToOneWithWhereWithoutGroupExchangesInput>;
export const ExchangeMarketUpdateToOneWithWhereWithoutGroupExchangesInputObjectZodSchema = makeSchema();
