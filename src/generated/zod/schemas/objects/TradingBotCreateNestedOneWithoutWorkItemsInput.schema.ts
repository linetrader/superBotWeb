import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutWorkItemsInputObjectSchema as TradingBotCreateWithoutWorkItemsInputObjectSchema } from './TradingBotCreateWithoutWorkItemsInput.schema';
import { TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema as TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema } from './TradingBotUncheckedCreateWithoutWorkItemsInput.schema';
import { TradingBotCreateOrConnectWithoutWorkItemsInputObjectSchema as TradingBotCreateOrConnectWithoutWorkItemsInputObjectSchema } from './TradingBotCreateOrConnectWithoutWorkItemsInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutWorkItemsInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutWorkItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TradingBotCreateOrConnectWithoutWorkItemsInputObjectSchema).optional(),
  connect: z.lazy(() => TradingBotWhereUniqueInputObjectSchema).optional()
}).strict();
export const TradingBotCreateNestedOneWithoutWorkItemsInputObjectSchema: z.ZodType<Prisma.TradingBotCreateNestedOneWithoutWorkItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateNestedOneWithoutWorkItemsInput>;
export const TradingBotCreateNestedOneWithoutWorkItemsInputObjectZodSchema = makeSchema();
