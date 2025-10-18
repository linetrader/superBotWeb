import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotScalarWhereInputObjectSchema as TradingBotScalarWhereInputObjectSchema } from './TradingBotScalarWhereInput.schema';
import { TradingBotUpdateManyMutationInputObjectSchema as TradingBotUpdateManyMutationInputObjectSchema } from './TradingBotUpdateManyMutationInput.schema';
import { TradingBotUncheckedUpdateManyWithoutStrategyConfigInputObjectSchema as TradingBotUncheckedUpdateManyWithoutStrategyConfigInputObjectSchema } from './TradingBotUncheckedUpdateManyWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TradingBotUpdateManyMutationInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateManyWithoutStrategyConfigInputObjectSchema)])
}).strict();
export const TradingBotUpdateManyWithWhereWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateManyWithWhereWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateManyWithWhereWithoutStrategyConfigInput>;
export const TradingBotUpdateManyWithWhereWithoutStrategyConfigInputObjectZodSchema = makeSchema();
