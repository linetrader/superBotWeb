import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './BotGroupExchangeWhereUniqueInput.schema';
import { BotGroupExchangeUpdateWithoutGroupInputObjectSchema as BotGroupExchangeUpdateWithoutGroupInputObjectSchema } from './BotGroupExchangeUpdateWithoutGroupInput.schema';
import { BotGroupExchangeUncheckedUpdateWithoutGroupInputObjectSchema as BotGroupExchangeUncheckedUpdateWithoutGroupInputObjectSchema } from './BotGroupExchangeUncheckedUpdateWithoutGroupInput.schema';
import { BotGroupExchangeCreateWithoutGroupInputObjectSchema as BotGroupExchangeCreateWithoutGroupInputObjectSchema } from './BotGroupExchangeCreateWithoutGroupInput.schema';
import { BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema as BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema } from './BotGroupExchangeUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BotGroupExchangeUpdateWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedUpdateWithoutGroupInputObjectSchema)]),
  create: z.union([z.lazy(() => BotGroupExchangeCreateWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const BotGroupExchangeUpsertWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUpsertWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUpsertWithWhereUniqueWithoutGroupInput>;
export const BotGroupExchangeUpsertWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
