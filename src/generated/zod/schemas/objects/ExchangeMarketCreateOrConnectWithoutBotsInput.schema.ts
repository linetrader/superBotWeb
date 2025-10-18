import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketCreateWithoutBotsInputObjectSchema as ExchangeMarketCreateWithoutBotsInputObjectSchema } from './ExchangeMarketCreateWithoutBotsInput.schema';
import { ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema as ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutBotsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutBotsInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema)])
}).strict();
export const ExchangeMarketCreateOrConnectWithoutBotsInputObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateOrConnectWithoutBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateOrConnectWithoutBotsInput>;
export const ExchangeMarketCreateOrConnectWithoutBotsInputObjectZodSchema = makeSchema();
