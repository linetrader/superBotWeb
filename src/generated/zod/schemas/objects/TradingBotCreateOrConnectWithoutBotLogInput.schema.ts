import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotCreateWithoutBotLogInputObjectSchema as TradingBotCreateWithoutBotLogInputObjectSchema } from './TradingBotCreateWithoutBotLogInput.schema';
import { TradingBotUncheckedCreateWithoutBotLogInputObjectSchema as TradingBotUncheckedCreateWithoutBotLogInputObjectSchema } from './TradingBotUncheckedCreateWithoutBotLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TradingBotCreateWithoutBotLogInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutBotLogInputObjectSchema)])
}).strict();
export const TradingBotCreateOrConnectWithoutBotLogInputObjectSchema: z.ZodType<Prisma.TradingBotCreateOrConnectWithoutBotLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateOrConnectWithoutBotLogInput>;
export const TradingBotCreateOrConnectWithoutBotLogInputObjectZodSchema = makeSchema();
