import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutExchangeMarketInputObjectSchema as TradingBotCreateWithoutExchangeMarketInputObjectSchema } from './TradingBotCreateWithoutExchangeMarketInput.schema';
import { TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema as TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema } from './TradingBotUncheckedCreateWithoutExchangeMarketInput.schema';
import { TradingBotCreateOrConnectWithoutExchangeMarketInputObjectSchema as TradingBotCreateOrConnectWithoutExchangeMarketInputObjectSchema } from './TradingBotCreateOrConnectWithoutExchangeMarketInput.schema';
import { TradingBotCreateManyExchangeMarketInputEnvelopeObjectSchema as TradingBotCreateManyExchangeMarketInputEnvelopeObjectSchema } from './TradingBotCreateManyExchangeMarketInputEnvelope.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotCreateWithoutExchangeMarketInputObjectSchema).array(), z.lazy(() => TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TradingBotCreateOrConnectWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotCreateOrConnectWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TradingBotCreateManyExchangeMarketInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInput>;
export const TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectZodSchema = makeSchema();
