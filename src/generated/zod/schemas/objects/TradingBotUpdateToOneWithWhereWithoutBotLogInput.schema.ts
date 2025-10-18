import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema';
import { TradingBotUpdateWithoutBotLogInputObjectSchema as TradingBotUpdateWithoutBotLogInputObjectSchema } from './TradingBotUpdateWithoutBotLogInput.schema';
import { TradingBotUncheckedUpdateWithoutBotLogInputObjectSchema as TradingBotUncheckedUpdateWithoutBotLogInputObjectSchema } from './TradingBotUncheckedUpdateWithoutBotLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TradingBotUpdateWithoutBotLogInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutBotLogInputObjectSchema)])
}).strict();
export const TradingBotUpdateToOneWithWhereWithoutBotLogInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateToOneWithWhereWithoutBotLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateToOneWithWhereWithoutBotLogInput>;
export const TradingBotUpdateToOneWithWhereWithoutBotLogInputObjectZodSchema = makeSchema();
