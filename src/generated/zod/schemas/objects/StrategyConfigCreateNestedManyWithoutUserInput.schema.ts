import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateWithoutUserInputObjectSchema as StrategyConfigCreateWithoutUserInputObjectSchema } from './StrategyConfigCreateWithoutUserInput.schema';
import { StrategyConfigUncheckedCreateWithoutUserInputObjectSchema as StrategyConfigUncheckedCreateWithoutUserInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutUserInput.schema';
import { StrategyConfigCreateOrConnectWithoutUserInputObjectSchema as StrategyConfigCreateOrConnectWithoutUserInputObjectSchema } from './StrategyConfigCreateOrConnectWithoutUserInput.schema';
import { StrategyConfigCreateManyUserInputEnvelopeObjectSchema as StrategyConfigCreateManyUserInputEnvelopeObjectSchema } from './StrategyConfigCreateManyUserInputEnvelope.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigCreateWithoutUserInputObjectSchema).array(), z.lazy(() => StrategyConfigUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StrategyConfigCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StrategyConfigCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema), z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StrategyConfigCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.StrategyConfigCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCreateNestedManyWithoutUserInput>;
export const StrategyConfigCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
