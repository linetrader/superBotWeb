import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutBotLogInputObjectSchema as TradingBotCreateWithoutBotLogInputObjectSchema } from './TradingBotCreateWithoutBotLogInput.schema';
import { TradingBotUncheckedCreateWithoutBotLogInputObjectSchema as TradingBotUncheckedCreateWithoutBotLogInputObjectSchema } from './TradingBotUncheckedCreateWithoutBotLogInput.schema';
import { TradingBotCreateOrConnectWithoutBotLogInputObjectSchema as TradingBotCreateOrConnectWithoutBotLogInputObjectSchema } from './TradingBotCreateOrConnectWithoutBotLogInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutBotLogInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutBotLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TradingBotCreateOrConnectWithoutBotLogInputObjectSchema).optional(),
  connect: z.lazy(() => TradingBotWhereUniqueInputObjectSchema).optional()
}).strict();
export const TradingBotCreateNestedOneWithoutBotLogInputObjectSchema: z.ZodType<Prisma.TradingBotCreateNestedOneWithoutBotLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateNestedOneWithoutBotLogInput>;
export const TradingBotCreateNestedOneWithoutBotLogInputObjectZodSchema = makeSchema();
