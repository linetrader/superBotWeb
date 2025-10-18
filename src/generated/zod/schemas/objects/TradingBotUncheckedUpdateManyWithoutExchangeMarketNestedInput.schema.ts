import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutExchangeMarketInputObjectSchema as TradingBotCreateWithoutExchangeMarketInputObjectSchema } from './TradingBotCreateWithoutExchangeMarketInput.schema';
import { TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema as TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema } from './TradingBotUncheckedCreateWithoutExchangeMarketInput.schema';
import { TradingBotCreateOrConnectWithoutExchangeMarketInputObjectSchema as TradingBotCreateOrConnectWithoutExchangeMarketInputObjectSchema } from './TradingBotCreateOrConnectWithoutExchangeMarketInput.schema';
import { TradingBotUpsertWithWhereUniqueWithoutExchangeMarketInputObjectSchema as TradingBotUpsertWithWhereUniqueWithoutExchangeMarketInputObjectSchema } from './TradingBotUpsertWithWhereUniqueWithoutExchangeMarketInput.schema';
import { TradingBotCreateManyExchangeMarketInputEnvelopeObjectSchema as TradingBotCreateManyExchangeMarketInputEnvelopeObjectSchema } from './TradingBotCreateManyExchangeMarketInputEnvelope.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateWithWhereUniqueWithoutExchangeMarketInputObjectSchema as TradingBotUpdateWithWhereUniqueWithoutExchangeMarketInputObjectSchema } from './TradingBotUpdateWithWhereUniqueWithoutExchangeMarketInput.schema';
import { TradingBotUpdateManyWithWhereWithoutExchangeMarketInputObjectSchema as TradingBotUpdateManyWithWhereWithoutExchangeMarketInputObjectSchema } from './TradingBotUpdateManyWithWhereWithoutExchangeMarketInput.schema';
import { TradingBotScalarWhereInputObjectSchema as TradingBotScalarWhereInputObjectSchema } from './TradingBotScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotCreateWithoutExchangeMarketInputObjectSchema).array(), z.lazy(() => TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TradingBotCreateOrConnectWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotCreateOrConnectWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TradingBotUpsertWithWhereUniqueWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotUpsertWithWhereUniqueWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TradingBotCreateManyExchangeMarketInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TradingBotUpdateWithWhereUniqueWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotUpdateWithWhereUniqueWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TradingBotUpdateManyWithWhereWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotUpdateManyWithWhereWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TradingBotScalarWhereInputObjectSchema), z.lazy(() => TradingBotScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TradingBotUncheckedUpdateManyWithoutExchangeMarketNestedInputObjectSchema: z.ZodType<Prisma.TradingBotUncheckedUpdateManyWithoutExchangeMarketNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUncheckedUpdateManyWithoutExchangeMarketNestedInput>;
export const TradingBotUncheckedUpdateManyWithoutExchangeMarketNestedInputObjectZodSchema = makeSchema();
