import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema';
import { TradingBotUpdateWithoutWorkItemsInputObjectSchema as TradingBotUpdateWithoutWorkItemsInputObjectSchema } from './TradingBotUpdateWithoutWorkItemsInput.schema';
import { TradingBotUncheckedUpdateWithoutWorkItemsInputObjectSchema as TradingBotUncheckedUpdateWithoutWorkItemsInputObjectSchema } from './TradingBotUncheckedUpdateWithoutWorkItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TradingBotUpdateWithoutWorkItemsInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutWorkItemsInputObjectSchema)])
}).strict();
export const TradingBotUpdateToOneWithWhereWithoutWorkItemsInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateToOneWithWhereWithoutWorkItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateToOneWithWhereWithoutWorkItemsInput>;
export const TradingBotUpdateToOneWithWhereWithoutWorkItemsInputObjectZodSchema = makeSchema();
