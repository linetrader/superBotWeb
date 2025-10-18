import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotCreateWithoutWorkItemsInputObjectSchema as TradingBotCreateWithoutWorkItemsInputObjectSchema } from './TradingBotCreateWithoutWorkItemsInput.schema';
import { TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema as TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema } from './TradingBotUncheckedCreateWithoutWorkItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TradingBotCreateWithoutWorkItemsInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema)])
}).strict();
export const TradingBotCreateOrConnectWithoutWorkItemsInputObjectSchema: z.ZodType<Prisma.TradingBotCreateOrConnectWithoutWorkItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateOrConnectWithoutWorkItemsInput>;
export const TradingBotCreateOrConnectWithoutWorkItemsInputObjectZodSchema = makeSchema();
