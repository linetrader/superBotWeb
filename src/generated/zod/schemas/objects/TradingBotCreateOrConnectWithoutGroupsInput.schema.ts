import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotCreateWithoutGroupsInputObjectSchema as TradingBotCreateWithoutGroupsInputObjectSchema } from './TradingBotCreateWithoutGroupsInput.schema';
import { TradingBotUncheckedCreateWithoutGroupsInputObjectSchema as TradingBotUncheckedCreateWithoutGroupsInputObjectSchema } from './TradingBotUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TradingBotCreateWithoutGroupsInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const TradingBotCreateOrConnectWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TradingBotCreateOrConnectWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateOrConnectWithoutGroupsInput>;
export const TradingBotCreateOrConnectWithoutGroupsInputObjectZodSchema = makeSchema();
