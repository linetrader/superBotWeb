import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema as ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketCreateWithoutGroupExchangesInput.schema';
import { ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema as ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUncheckedCreateWithoutGroupExchangesInput.schema';
import { ExchangeMarketCreateOrConnectWithoutGroupExchangesInputObjectSchema as ExchangeMarketCreateOrConnectWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketCreateOrConnectWithoutGroupExchangesInput.schema';
import { ExchangeMarketUpsertWithoutGroupExchangesInputObjectSchema as ExchangeMarketUpsertWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUpsertWithoutGroupExchangesInput.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketUpdateToOneWithWhereWithoutGroupExchangesInputObjectSchema as ExchangeMarketUpdateToOneWithWhereWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUpdateToOneWithWhereWithoutGroupExchangesInput.schema';
import { ExchangeMarketUpdateWithoutGroupExchangesInputObjectSchema as ExchangeMarketUpdateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUpdateWithoutGroupExchangesInput.schema';
import { ExchangeMarketUncheckedUpdateWithoutGroupExchangesInputObjectSchema as ExchangeMarketUncheckedUpdateWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketUncheckedUpdateWithoutGroupExchangesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExchangeMarketCreateOrConnectWithoutGroupExchangesInputObjectSchema).optional(),
  upsert: z.lazy(() => ExchangeMarketUpsertWithoutGroupExchangesInputObjectSchema).optional(),
  connect: z.lazy(() => ExchangeMarketWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ExchangeMarketUpdateToOneWithWhereWithoutGroupExchangesInputObjectSchema), z.lazy(() => ExchangeMarketUpdateWithoutGroupExchangesInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedUpdateWithoutGroupExchangesInputObjectSchema)]).optional()
}).strict();
export const ExchangeMarketUpdateOneRequiredWithoutGroupExchangesNestedInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUpdateOneRequiredWithoutGroupExchangesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUpdateOneRequiredWithoutGroupExchangesNestedInput>;
export const ExchangeMarketUpdateOneRequiredWithoutGroupExchangesNestedInputObjectZodSchema = makeSchema();
