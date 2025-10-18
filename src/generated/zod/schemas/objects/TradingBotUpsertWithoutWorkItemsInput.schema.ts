import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotUpdateWithoutWorkItemsInputObjectSchema as TradingBotUpdateWithoutWorkItemsInputObjectSchema } from './TradingBotUpdateWithoutWorkItemsInput.schema';
import { TradingBotUncheckedUpdateWithoutWorkItemsInputObjectSchema as TradingBotUncheckedUpdateWithoutWorkItemsInputObjectSchema } from './TradingBotUncheckedUpdateWithoutWorkItemsInput.schema';
import { TradingBotCreateWithoutWorkItemsInputObjectSchema as TradingBotCreateWithoutWorkItemsInputObjectSchema } from './TradingBotCreateWithoutWorkItemsInput.schema';
import { TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema as TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema } from './TradingBotUncheckedCreateWithoutWorkItemsInput.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TradingBotUpdateWithoutWorkItemsInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutWorkItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => TradingBotCreateWithoutWorkItemsInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema)]),
  where: z.lazy(() => TradingBotWhereInputObjectSchema).optional()
}).strict();
export const TradingBotUpsertWithoutWorkItemsInputObjectSchema: z.ZodType<Prisma.TradingBotUpsertWithoutWorkItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpsertWithoutWorkItemsInput>;
export const TradingBotUpsertWithoutWorkItemsInputObjectZodSchema = makeSchema();
