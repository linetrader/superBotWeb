import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotScalarWhereInputObjectSchema as TradingBotScalarWhereInputObjectSchema } from './TradingBotScalarWhereInput.schema';
import { TradingBotUpdateManyMutationInputObjectSchema as TradingBotUpdateManyMutationInputObjectSchema } from './TradingBotUpdateManyMutationInput.schema';
import { TradingBotUncheckedUpdateManyWithoutExchangeMarketInputObjectSchema as TradingBotUncheckedUpdateManyWithoutExchangeMarketInputObjectSchema } from './TradingBotUncheckedUpdateManyWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TradingBotUpdateManyMutationInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateManyWithoutExchangeMarketInputObjectSchema)])
}).strict();
export const TradingBotUpdateManyWithWhereWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateManyWithWhereWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateManyWithWhereWithoutExchangeMarketInput>;
export const TradingBotUpdateManyWithWhereWithoutExchangeMarketInputObjectZodSchema = makeSchema();
