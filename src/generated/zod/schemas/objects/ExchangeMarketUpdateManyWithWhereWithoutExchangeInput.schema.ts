import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketScalarWhereInputObjectSchema as ExchangeMarketScalarWhereInputObjectSchema } from './ExchangeMarketScalarWhereInput.schema';
import { ExchangeMarketUpdateManyMutationInputObjectSchema as ExchangeMarketUpdateManyMutationInputObjectSchema } from './ExchangeMarketUpdateManyMutationInput.schema';
import { ExchangeMarketUncheckedUpdateManyWithoutExchangeInputObjectSchema as ExchangeMarketUncheckedUpdateManyWithoutExchangeInputObjectSchema } from './ExchangeMarketUncheckedUpdateManyWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeMarketScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ExchangeMarketUpdateManyMutationInputObjectSchema), z.lazy(() => ExchangeMarketUncheckedUpdateManyWithoutExchangeInputObjectSchema)])
}).strict();
export const ExchangeMarketUpdateManyWithWhereWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUpdateManyWithWhereWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUpdateManyWithWhereWithoutExchangeInput>;
export const ExchangeMarketUpdateManyWithWhereWithoutExchangeInputObjectZodSchema = makeSchema();
