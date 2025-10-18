import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketCreateWithoutExchangeInputObjectSchema as ExchangeMarketCreateWithoutExchangeInputObjectSchema } from './ExchangeMarketCreateWithoutExchangeInput.schema';
import { ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema as ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema)])
}).strict();
export const ExchangeMarketCreateOrConnectWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateOrConnectWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateOrConnectWithoutExchangeInput>;
export const ExchangeMarketCreateOrConnectWithoutExchangeInputObjectZodSchema = makeSchema();
