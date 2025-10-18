import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotUpdateWithoutGroupsInputObjectSchema as TradingBotUpdateWithoutGroupsInputObjectSchema } from './TradingBotUpdateWithoutGroupsInput.schema';
import { TradingBotUncheckedUpdateWithoutGroupsInputObjectSchema as TradingBotUncheckedUpdateWithoutGroupsInputObjectSchema } from './TradingBotUncheckedUpdateWithoutGroupsInput.schema';
import { TradingBotCreateWithoutGroupsInputObjectSchema as TradingBotCreateWithoutGroupsInputObjectSchema } from './TradingBotCreateWithoutGroupsInput.schema';
import { TradingBotUncheckedCreateWithoutGroupsInputObjectSchema as TradingBotUncheckedCreateWithoutGroupsInputObjectSchema } from './TradingBotUncheckedCreateWithoutGroupsInput.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TradingBotUpdateWithoutGroupsInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => TradingBotCreateWithoutGroupsInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutGroupsInputObjectSchema)]),
  where: z.lazy(() => TradingBotWhereInputObjectSchema).optional()
}).strict();
export const TradingBotUpsertWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TradingBotUpsertWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpsertWithoutGroupsInput>;
export const TradingBotUpsertWithoutGroupsInputObjectZodSchema = makeSchema();
