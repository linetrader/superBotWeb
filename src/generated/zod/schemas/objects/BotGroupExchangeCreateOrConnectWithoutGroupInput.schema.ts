import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './BotGroupExchangeWhereUniqueInput.schema';
import { BotGroupExchangeCreateWithoutGroupInputObjectSchema as BotGroupExchangeCreateWithoutGroupInputObjectSchema } from './BotGroupExchangeCreateWithoutGroupInput.schema';
import { BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema as BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema } from './BotGroupExchangeUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BotGroupExchangeCreateWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const BotGroupExchangeCreateOrConnectWithoutGroupInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeCreateOrConnectWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateOrConnectWithoutGroupInput>;
export const BotGroupExchangeCreateOrConnectWithoutGroupInputObjectZodSchema = makeSchema();
