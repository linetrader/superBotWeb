import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './BotGroupExchangeWhereUniqueInput.schema';
import { BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeCreateWithoutExchangeMarketInput.schema';
import { BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUncheckedCreateWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema)])
}).strict();
export const BotGroupExchangeCreateOrConnectWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeCreateOrConnectWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateOrConnectWithoutExchangeMarketInput>;
export const BotGroupExchangeCreateOrConnectWithoutExchangeMarketInputObjectZodSchema = makeSchema();
