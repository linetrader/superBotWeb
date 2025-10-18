import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketUpdateWithoutExchangeInputObjectSchema as ExchangeMarketUpdateWithoutExchangeInputObjectSchema } from './ExchangeMarketUpdateWithoutExchangeInput.schema';
import { ExchangeMarketUncheckedUpdateWithoutExchangeInputObjectSchema as ExchangeMarketUncheckedUpdateWithoutExchangeInputObjectSchema } from './ExchangeMarketUncheckedUpdateWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ExchangeMarketUpdateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedUpdateWithoutExchangeInputObjectSchema)])
}).strict();
export const ExchangeMarketUpdateWithWhereUniqueWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUpdateWithWhereUniqueWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUpdateWithWhereUniqueWithoutExchangeInput>;
export const ExchangeMarketUpdateWithWhereUniqueWithoutExchangeInputObjectZodSchema = makeSchema();
