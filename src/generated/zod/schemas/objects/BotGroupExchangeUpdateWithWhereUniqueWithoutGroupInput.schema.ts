import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './BotGroupExchangeWhereUniqueInput.schema';
import { BotGroupExchangeUpdateWithoutGroupInputObjectSchema as BotGroupExchangeUpdateWithoutGroupInputObjectSchema } from './BotGroupExchangeUpdateWithoutGroupInput.schema';
import { BotGroupExchangeUncheckedUpdateWithoutGroupInputObjectSchema as BotGroupExchangeUncheckedUpdateWithoutGroupInputObjectSchema } from './BotGroupExchangeUncheckedUpdateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BotGroupExchangeUpdateWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
export const BotGroupExchangeUpdateWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUpdateWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateWithWhereUniqueWithoutGroupInput>;
export const BotGroupExchangeUpdateWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
