import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutStrategyConfigInputObjectSchema as TradingBotCreateWithoutStrategyConfigInputObjectSchema } from './TradingBotCreateWithoutStrategyConfigInput.schema';
import { TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema as TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './TradingBotUncheckedCreateWithoutStrategyConfigInput.schema';
import { TradingBotCreateOrConnectWithoutStrategyConfigInputObjectSchema as TradingBotCreateOrConnectWithoutStrategyConfigInputObjectSchema } from './TradingBotCreateOrConnectWithoutStrategyConfigInput.schema';
import { TradingBotUpsertWithWhereUniqueWithoutStrategyConfigInputObjectSchema as TradingBotUpsertWithWhereUniqueWithoutStrategyConfigInputObjectSchema } from './TradingBotUpsertWithWhereUniqueWithoutStrategyConfigInput.schema';
import { TradingBotCreateManyStrategyConfigInputEnvelopeObjectSchema as TradingBotCreateManyStrategyConfigInputEnvelopeObjectSchema } from './TradingBotCreateManyStrategyConfigInputEnvelope.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateWithWhereUniqueWithoutStrategyConfigInputObjectSchema as TradingBotUpdateWithWhereUniqueWithoutStrategyConfigInputObjectSchema } from './TradingBotUpdateWithWhereUniqueWithoutStrategyConfigInput.schema';
import { TradingBotUpdateManyWithWhereWithoutStrategyConfigInputObjectSchema as TradingBotUpdateManyWithWhereWithoutStrategyConfigInputObjectSchema } from './TradingBotUpdateManyWithWhereWithoutStrategyConfigInput.schema';
import { TradingBotScalarWhereInputObjectSchema as TradingBotScalarWhereInputObjectSchema } from './TradingBotScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotCreateWithoutStrategyConfigInputObjectSchema).array(), z.lazy(() => TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TradingBotCreateOrConnectWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotCreateOrConnectWithoutStrategyConfigInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TradingBotUpsertWithWhereUniqueWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotUpsertWithWhereUniqueWithoutStrategyConfigInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TradingBotCreateManyStrategyConfigInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TradingBotUpdateWithWhereUniqueWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotUpdateWithWhereUniqueWithoutStrategyConfigInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TradingBotUpdateManyWithWhereWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotUpdateManyWithWhereWithoutStrategyConfigInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TradingBotScalarWhereInputObjectSchema), z.lazy(() => TradingBotScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TradingBotUncheckedUpdateManyWithoutStrategyConfigNestedInputObjectSchema: z.ZodType<Prisma.TradingBotUncheckedUpdateManyWithoutStrategyConfigNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUncheckedUpdateManyWithoutStrategyConfigNestedInput>;
export const TradingBotUncheckedUpdateManyWithoutStrategyConfigNestedInputObjectZodSchema = makeSchema();
