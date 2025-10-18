import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './BotGroupExchangeWhereUniqueInput.schema';
import { BotGroupExchangeUpdateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUpdateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUpdateWithoutExchangeMarketInput.schema';
import { BotGroupExchangeUncheckedUpdateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUncheckedUpdateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUncheckedUpdateWithoutExchangeMarketInput.schema';
import { BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeCreateWithoutExchangeMarketInput.schema';
import { BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUncheckedCreateWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BotGroupExchangeUpdateWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedUpdateWithoutExchangeMarketInputObjectSchema)]),
  create: z.union([z.lazy(() => BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema)])
}).strict();
export const BotGroupExchangeUpsertWithWhereUniqueWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUpsertWithWhereUniqueWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUpsertWithWhereUniqueWithoutExchangeMarketInput>;
export const BotGroupExchangeUpsertWithWhereUniqueWithoutExchangeMarketInputObjectZodSchema = makeSchema();
