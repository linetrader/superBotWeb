import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketUpdateWithoutBotsInputObjectSchema as ExchangeMarketUpdateWithoutBotsInputObjectSchema } from './ExchangeMarketUpdateWithoutBotsInput.schema';
import { ExchangeMarketUncheckedUpdateWithoutBotsInputObjectSchema as ExchangeMarketUncheckedUpdateWithoutBotsInputObjectSchema } from './ExchangeMarketUncheckedUpdateWithoutBotsInput.schema';
import { ExchangeMarketCreateWithoutBotsInputObjectSchema as ExchangeMarketCreateWithoutBotsInputObjectSchema } from './ExchangeMarketCreateWithoutBotsInput.schema';
import { ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema as ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutBotsInput.schema';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './ExchangeMarketWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ExchangeMarketUpdateWithoutBotsInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedUpdateWithoutBotsInputObjectSchema)]),
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutBotsInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema)]),
  where: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional()
}).strict();
export const ExchangeMarketUpsertWithoutBotsInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUpsertWithoutBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUpsertWithoutBotsInput>;
export const ExchangeMarketUpsertWithoutBotsInputObjectZodSchema = makeSchema();
