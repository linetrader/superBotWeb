import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotUpdateWithoutBotLogInputObjectSchema as TradingBotUpdateWithoutBotLogInputObjectSchema } from './TradingBotUpdateWithoutBotLogInput.schema';
import { TradingBotUncheckedUpdateWithoutBotLogInputObjectSchema as TradingBotUncheckedUpdateWithoutBotLogInputObjectSchema } from './TradingBotUncheckedUpdateWithoutBotLogInput.schema';
import { TradingBotCreateWithoutBotLogInputObjectSchema as TradingBotCreateWithoutBotLogInputObjectSchema } from './TradingBotCreateWithoutBotLogInput.schema';
import { TradingBotUncheckedCreateWithoutBotLogInputObjectSchema as TradingBotUncheckedCreateWithoutBotLogInputObjectSchema } from './TradingBotUncheckedCreateWithoutBotLogInput.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TradingBotUpdateWithoutBotLogInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutBotLogInputObjectSchema)]),
  create: z.union([z.lazy(() => TradingBotCreateWithoutBotLogInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutBotLogInputObjectSchema)]),
  where: z.lazy(() => TradingBotWhereInputObjectSchema).optional()
}).strict();
export const TradingBotUpsertWithoutBotLogInputObjectSchema: z.ZodType<Prisma.TradingBotUpsertWithoutBotLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpsertWithoutBotLogInput>;
export const TradingBotUpsertWithoutBotLogInputObjectZodSchema = makeSchema();
