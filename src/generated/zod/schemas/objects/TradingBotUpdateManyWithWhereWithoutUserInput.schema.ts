import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotScalarWhereInputObjectSchema as TradingBotScalarWhereInputObjectSchema } from './TradingBotScalarWhereInput.schema';
import { TradingBotUpdateManyMutationInputObjectSchema as TradingBotUpdateManyMutationInputObjectSchema } from './TradingBotUpdateManyMutationInput.schema';
import { TradingBotUncheckedUpdateManyWithoutUserInputObjectSchema as TradingBotUncheckedUpdateManyWithoutUserInputObjectSchema } from './TradingBotUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TradingBotUpdateManyMutationInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const TradingBotUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateManyWithWhereWithoutUserInput>;
export const TradingBotUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
