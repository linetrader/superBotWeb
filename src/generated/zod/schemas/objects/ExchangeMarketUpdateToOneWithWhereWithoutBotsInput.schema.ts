import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './ExchangeMarketWhereInput.schema';
import { ExchangeMarketUpdateWithoutBotsInputObjectSchema as ExchangeMarketUpdateWithoutBotsInputObjectSchema } from './ExchangeMarketUpdateWithoutBotsInput.schema';
import { ExchangeMarketUncheckedUpdateWithoutBotsInputObjectSchema as ExchangeMarketUncheckedUpdateWithoutBotsInputObjectSchema } from './ExchangeMarketUncheckedUpdateWithoutBotsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ExchangeMarketUpdateWithoutBotsInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedUpdateWithoutBotsInputObjectSchema)])
}).strict();
export const ExchangeMarketUpdateToOneWithWhereWithoutBotsInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUpdateToOneWithWhereWithoutBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUpdateToOneWithWhereWithoutBotsInput>;
export const ExchangeMarketUpdateToOneWithWhereWithoutBotsInputObjectZodSchema = makeSchema();
