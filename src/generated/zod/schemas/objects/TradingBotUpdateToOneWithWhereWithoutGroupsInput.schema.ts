import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema';
import { TradingBotUpdateWithoutGroupsInputObjectSchema as TradingBotUpdateWithoutGroupsInputObjectSchema } from './TradingBotUpdateWithoutGroupsInput.schema';
import { TradingBotUncheckedUpdateWithoutGroupsInputObjectSchema as TradingBotUncheckedUpdateWithoutGroupsInputObjectSchema } from './TradingBotUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TradingBotUpdateWithoutGroupsInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutGroupsInputObjectSchema)])
}).strict();
export const TradingBotUpdateToOneWithWhereWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateToOneWithWhereWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateToOneWithWhereWithoutGroupsInput>;
export const TradingBotUpdateToOneWithWhereWithoutGroupsInputObjectZodSchema = makeSchema();
