import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupCreateWithoutExchangesInputObjectSchema as BotGroupCreateWithoutExchangesInputObjectSchema } from './BotGroupCreateWithoutExchangesInput.schema';
import { BotGroupUncheckedCreateWithoutExchangesInputObjectSchema as BotGroupUncheckedCreateWithoutExchangesInputObjectSchema } from './BotGroupUncheckedCreateWithoutExchangesInput.schema';
import { BotGroupCreateOrConnectWithoutExchangesInputObjectSchema as BotGroupCreateOrConnectWithoutExchangesInputObjectSchema } from './BotGroupCreateOrConnectWithoutExchangesInput.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './BotGroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotGroupCreateWithoutExchangesInputObjectSchema), z.lazy(() => BotGroupUncheckedCreateWithoutExchangesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BotGroupCreateOrConnectWithoutExchangesInputObjectSchema).optional(),
  connect: z.lazy(() => BotGroupWhereUniqueInputObjectSchema).optional()
}).strict();
export const BotGroupCreateNestedOneWithoutExchangesInputObjectSchema: z.ZodType<Prisma.BotGroupCreateNestedOneWithoutExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCreateNestedOneWithoutExchangesInput>;
export const BotGroupCreateNestedOneWithoutExchangesInputObjectZodSchema = makeSchema();
