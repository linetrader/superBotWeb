import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutGroupsInputObjectSchema as TradingBotCreateWithoutGroupsInputObjectSchema } from './TradingBotCreateWithoutGroupsInput.schema';
import { TradingBotUncheckedCreateWithoutGroupsInputObjectSchema as TradingBotUncheckedCreateWithoutGroupsInputObjectSchema } from './TradingBotUncheckedCreateWithoutGroupsInput.schema';
import { TradingBotCreateOrConnectWithoutGroupsInputObjectSchema as TradingBotCreateOrConnectWithoutGroupsInputObjectSchema } from './TradingBotCreateOrConnectWithoutGroupsInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutGroupsInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TradingBotCreateOrConnectWithoutGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => TradingBotWhereUniqueInputObjectSchema).optional()
}).strict();
export const TradingBotCreateNestedOneWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TradingBotCreateNestedOneWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateNestedOneWithoutGroupsInput>;
export const TradingBotCreateNestedOneWithoutGroupsInputObjectZodSchema = makeSchema();
