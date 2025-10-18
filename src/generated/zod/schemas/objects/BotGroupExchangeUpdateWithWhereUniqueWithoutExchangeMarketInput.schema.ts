import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './BotGroupExchangeWhereUniqueInput.schema';
import { BotGroupExchangeUpdateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUpdateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUpdateWithoutExchangeMarketInput.schema';
import { BotGroupExchangeUncheckedUpdateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUncheckedUpdateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUncheckedUpdateWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BotGroupExchangeUpdateWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedUpdateWithoutExchangeMarketInputObjectSchema)])
}).strict();
export const BotGroupExchangeUpdateWithWhereUniqueWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUpdateWithWhereUniqueWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateWithWhereUniqueWithoutExchangeMarketInput>;
export const BotGroupExchangeUpdateWithWhereUniqueWithoutExchangeMarketInputObjectZodSchema = makeSchema();
