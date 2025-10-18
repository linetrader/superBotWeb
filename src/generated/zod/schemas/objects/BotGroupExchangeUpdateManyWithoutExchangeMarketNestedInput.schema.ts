import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeCreateWithoutExchangeMarketInput.schema';
import { BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUncheckedCreateWithoutExchangeMarketInput.schema';
import { BotGroupExchangeCreateOrConnectWithoutExchangeMarketInputObjectSchema as BotGroupExchangeCreateOrConnectWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeCreateOrConnectWithoutExchangeMarketInput.schema';
import { BotGroupExchangeUpsertWithWhereUniqueWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUpsertWithWhereUniqueWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUpsertWithWhereUniqueWithoutExchangeMarketInput.schema';
import { BotGroupExchangeCreateManyExchangeMarketInputEnvelopeObjectSchema as BotGroupExchangeCreateManyExchangeMarketInputEnvelopeObjectSchema } from './BotGroupExchangeCreateManyExchangeMarketInputEnvelope.schema';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './BotGroupExchangeWhereUniqueInput.schema';
import { BotGroupExchangeUpdateWithWhereUniqueWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUpdateWithWhereUniqueWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUpdateWithWhereUniqueWithoutExchangeMarketInput.schema';
import { BotGroupExchangeUpdateManyWithWhereWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUpdateManyWithWhereWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUpdateManyWithWhereWithoutExchangeMarketInput.schema';
import { BotGroupExchangeScalarWhereInputObjectSchema as BotGroupExchangeScalarWhereInputObjectSchema } from './BotGroupExchangeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeCreateWithoutExchangeMarketInputObjectSchema).array(), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BotGroupExchangeCreateOrConnectWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeCreateOrConnectWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BotGroupExchangeUpsertWithWhereUniqueWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeUpsertWithWhereUniqueWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BotGroupExchangeCreateManyExchangeMarketInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema), z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema), z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema), z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema), z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BotGroupExchangeUpdateWithWhereUniqueWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeUpdateWithWhereUniqueWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BotGroupExchangeUpdateManyWithWhereWithoutExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeUpdateManyWithWhereWithoutExchangeMarketInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema), z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BotGroupExchangeUpdateManyWithoutExchangeMarketNestedInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUpdateManyWithoutExchangeMarketNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateManyWithoutExchangeMarketNestedInput>;
export const BotGroupExchangeUpdateManyWithoutExchangeMarketNestedInputObjectZodSchema = makeSchema();
