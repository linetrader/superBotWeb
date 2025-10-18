import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCreateWithoutBotsInputObjectSchema as ExchangeMarketCreateWithoutBotsInputObjectSchema } from './ExchangeMarketCreateWithoutBotsInput.schema';
import { ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema as ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutBotsInput.schema';
import { ExchangeMarketCreateOrConnectWithoutBotsInputObjectSchema as ExchangeMarketCreateOrConnectWithoutBotsInputObjectSchema } from './ExchangeMarketCreateOrConnectWithoutBotsInput.schema';
import { ExchangeMarketUpsertWithoutBotsInputObjectSchema as ExchangeMarketUpsertWithoutBotsInputObjectSchema } from './ExchangeMarketUpsertWithoutBotsInput.schema';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './ExchangeMarketWhereInput.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketUpdateToOneWithWhereWithoutBotsInputObjectSchema as ExchangeMarketUpdateToOneWithWhereWithoutBotsInputObjectSchema } from './ExchangeMarketUpdateToOneWithWhereWithoutBotsInput.schema';
import { ExchangeMarketUpdateWithoutBotsInputObjectSchema as ExchangeMarketUpdateWithoutBotsInputObjectSchema } from './ExchangeMarketUpdateWithoutBotsInput.schema';
import { ExchangeMarketUncheckedUpdateWithoutBotsInputObjectSchema as ExchangeMarketUncheckedUpdateWithoutBotsInputObjectSchema } from './ExchangeMarketUncheckedUpdateWithoutBotsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutBotsInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExchangeMarketCreateOrConnectWithoutBotsInputObjectSchema).optional(),
  upsert: z.lazy(() => ExchangeMarketUpsertWithoutBotsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ExchangeMarketWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ExchangeMarketWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ExchangeMarketUpdateToOneWithWhereWithoutBotsInputObjectSchema), z.lazy(() => ExchangeMarketUpdateWithoutBotsInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedUpdateWithoutBotsInputObjectSchema)]).optional()
}).strict();
export const ExchangeMarketUpdateOneWithoutBotsNestedInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUpdateOneWithoutBotsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUpdateOneWithoutBotsNestedInput>;
export const ExchangeMarketUpdateOneWithoutBotsNestedInputObjectZodSchema = makeSchema();
