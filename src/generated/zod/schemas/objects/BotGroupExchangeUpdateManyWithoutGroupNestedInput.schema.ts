import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeCreateWithoutGroupInputObjectSchema as BotGroupExchangeCreateWithoutGroupInputObjectSchema } from './BotGroupExchangeCreateWithoutGroupInput.schema';
import { BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema as BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema } from './BotGroupExchangeUncheckedCreateWithoutGroupInput.schema';
import { BotGroupExchangeCreateOrConnectWithoutGroupInputObjectSchema as BotGroupExchangeCreateOrConnectWithoutGroupInputObjectSchema } from './BotGroupExchangeCreateOrConnectWithoutGroupInput.schema';
import { BotGroupExchangeUpsertWithWhereUniqueWithoutGroupInputObjectSchema as BotGroupExchangeUpsertWithWhereUniqueWithoutGroupInputObjectSchema } from './BotGroupExchangeUpsertWithWhereUniqueWithoutGroupInput.schema';
import { BotGroupExchangeCreateManyGroupInputEnvelopeObjectSchema as BotGroupExchangeCreateManyGroupInputEnvelopeObjectSchema } from './BotGroupExchangeCreateManyGroupInputEnvelope.schema';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './BotGroupExchangeWhereUniqueInput.schema';
import { BotGroupExchangeUpdateWithWhereUniqueWithoutGroupInputObjectSchema as BotGroupExchangeUpdateWithWhereUniqueWithoutGroupInputObjectSchema } from './BotGroupExchangeUpdateWithWhereUniqueWithoutGroupInput.schema';
import { BotGroupExchangeUpdateManyWithWhereWithoutGroupInputObjectSchema as BotGroupExchangeUpdateManyWithWhereWithoutGroupInputObjectSchema } from './BotGroupExchangeUpdateManyWithWhereWithoutGroupInput.schema';
import { BotGroupExchangeScalarWhereInputObjectSchema as BotGroupExchangeScalarWhereInputObjectSchema } from './BotGroupExchangeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotGroupExchangeCreateWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BotGroupExchangeCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BotGroupExchangeUpsertWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BotGroupExchangeCreateManyGroupInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema), z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema), z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema), z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema), z.lazy(() => BotGroupExchangeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BotGroupExchangeUpdateWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BotGroupExchangeUpdateManyWithWhereWithoutGroupInputObjectSchema), z.lazy(() => BotGroupExchangeUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema), z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BotGroupExchangeUpdateManyWithoutGroupNestedInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUpdateManyWithoutGroupNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateManyWithoutGroupNestedInput>;
export const BotGroupExchangeUpdateManyWithoutGroupNestedInputObjectZodSchema = makeSchema();
