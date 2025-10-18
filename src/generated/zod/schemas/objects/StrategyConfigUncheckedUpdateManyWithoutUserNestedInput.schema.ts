import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateWithoutUserInputObjectSchema as StrategyConfigCreateWithoutUserInputObjectSchema } from './StrategyConfigCreateWithoutUserInput.schema';
import { StrategyConfigUncheckedCreateWithoutUserInputObjectSchema as StrategyConfigUncheckedCreateWithoutUserInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutUserInput.schema';
import { StrategyConfigCreateOrConnectWithoutUserInputObjectSchema as StrategyConfigCreateOrConnectWithoutUserInputObjectSchema } from './StrategyConfigCreateOrConnectWithoutUserInput.schema';
import { StrategyConfigUpsertWithWhereUniqueWithoutUserInputObjectSchema as StrategyConfigUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './StrategyConfigUpsertWithWhereUniqueWithoutUserInput.schema';
import { StrategyConfigCreateManyUserInputEnvelopeObjectSchema as StrategyConfigCreateManyUserInputEnvelopeObjectSchema } from './StrategyConfigCreateManyUserInputEnvelope.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigUpdateWithWhereUniqueWithoutUserInputObjectSchema as StrategyConfigUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './StrategyConfigUpdateWithWhereUniqueWithoutUserInput.schema';
import { StrategyConfigUpdateManyWithWhereWithoutUserInputObjectSchema as StrategyConfigUpdateManyWithWhereWithoutUserInputObjectSchema } from './StrategyConfigUpdateManyWithWhereWithoutUserInput.schema';
import { StrategyConfigScalarWhereInputObjectSchema as StrategyConfigScalarWhereInputObjectSchema } from './StrategyConfigScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigCreateWithoutUserInputObjectSchema).array(), z.lazy(() => StrategyConfigUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StrategyConfigCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StrategyConfigUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StrategyConfigCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema), z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema), z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema), z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema), z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StrategyConfigUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StrategyConfigUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StrategyConfigScalarWhereInputObjectSchema), z.lazy(() => StrategyConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StrategyConfigUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.StrategyConfigUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUncheckedUpdateManyWithoutUserNestedInput>;
export const StrategyConfigUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
