import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema';
import { TradingBotUpdateWithoutBotRuntimeInputObjectSchema as TradingBotUpdateWithoutBotRuntimeInputObjectSchema } from './TradingBotUpdateWithoutBotRuntimeInput.schema';
import { TradingBotUncheckedUpdateWithoutBotRuntimeInputObjectSchema as TradingBotUncheckedUpdateWithoutBotRuntimeInputObjectSchema } from './TradingBotUncheckedUpdateWithoutBotRuntimeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TradingBotUpdateWithoutBotRuntimeInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutBotRuntimeInputObjectSchema)])
}).strict();
export const TradingBotUpdateToOneWithWhereWithoutBotRuntimeInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateToOneWithWhereWithoutBotRuntimeInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateToOneWithWhereWithoutBotRuntimeInput>;
export const TradingBotUpdateToOneWithWhereWithoutBotRuntimeInputObjectZodSchema = makeSchema();
