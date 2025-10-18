import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotUpdateWithoutBotRuntimeInputObjectSchema as TradingBotUpdateWithoutBotRuntimeInputObjectSchema } from './TradingBotUpdateWithoutBotRuntimeInput.schema';
import { TradingBotUncheckedUpdateWithoutBotRuntimeInputObjectSchema as TradingBotUncheckedUpdateWithoutBotRuntimeInputObjectSchema } from './TradingBotUncheckedUpdateWithoutBotRuntimeInput.schema';
import { TradingBotCreateWithoutBotRuntimeInputObjectSchema as TradingBotCreateWithoutBotRuntimeInputObjectSchema } from './TradingBotCreateWithoutBotRuntimeInput.schema';
import { TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema as TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema } from './TradingBotUncheckedCreateWithoutBotRuntimeInput.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TradingBotUpdateWithoutBotRuntimeInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutBotRuntimeInputObjectSchema)]),
  create: z.union([z.lazy(() => TradingBotCreateWithoutBotRuntimeInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema)]),
  where: z.lazy(() => TradingBotWhereInputObjectSchema).optional()
}).strict();
export const TradingBotUpsertWithoutBotRuntimeInputObjectSchema: z.ZodType<Prisma.TradingBotUpsertWithoutBotRuntimeInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpsertWithoutBotRuntimeInput>;
export const TradingBotUpsertWithoutBotRuntimeInputObjectZodSchema = makeSchema();
