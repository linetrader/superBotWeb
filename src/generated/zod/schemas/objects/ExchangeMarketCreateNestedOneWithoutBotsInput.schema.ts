import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCreateWithoutBotsInputObjectSchema as ExchangeMarketCreateWithoutBotsInputObjectSchema } from './ExchangeMarketCreateWithoutBotsInput.schema';
import { ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema as ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutBotsInput.schema';
import { ExchangeMarketCreateOrConnectWithoutBotsInputObjectSchema as ExchangeMarketCreateOrConnectWithoutBotsInputObjectSchema } from './ExchangeMarketCreateOrConnectWithoutBotsInput.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutBotsInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExchangeMarketCreateOrConnectWithoutBotsInputObjectSchema).optional(),
  connect: z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema).optional()
}).strict();
export const ExchangeMarketCreateNestedOneWithoutBotsInputObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateNestedOneWithoutBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateNestedOneWithoutBotsInput>;
export const ExchangeMarketCreateNestedOneWithoutBotsInputObjectZodSchema = makeSchema();
