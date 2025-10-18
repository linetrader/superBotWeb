import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './BotGroupWhereUniqueInput.schema';
import { BotGroupCreateWithoutExchangesInputObjectSchema as BotGroupCreateWithoutExchangesInputObjectSchema } from './BotGroupCreateWithoutExchangesInput.schema';
import { BotGroupUncheckedCreateWithoutExchangesInputObjectSchema as BotGroupUncheckedCreateWithoutExchangesInputObjectSchema } from './BotGroupUncheckedCreateWithoutExchangesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BotGroupCreateWithoutExchangesInputObjectSchema), z.lazy(() => BotGroupUncheckedCreateWithoutExchangesInputObjectSchema)])
}).strict();
export const BotGroupCreateOrConnectWithoutExchangesInputObjectSchema: z.ZodType<Prisma.BotGroupCreateOrConnectWithoutExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCreateOrConnectWithoutExchangesInput>;
export const BotGroupCreateOrConnectWithoutExchangesInputObjectZodSchema = makeSchema();
