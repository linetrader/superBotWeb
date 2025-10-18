import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigUpdateWithoutUserInputObjectSchema as StrategyConfigUpdateWithoutUserInputObjectSchema } from './StrategyConfigUpdateWithoutUserInput.schema';
import { StrategyConfigUncheckedUpdateWithoutUserInputObjectSchema as StrategyConfigUncheckedUpdateWithoutUserInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutUserInput.schema';
import { StrategyConfigCreateWithoutUserInputObjectSchema as StrategyConfigCreateWithoutUserInputObjectSchema } from './StrategyConfigCreateWithoutUserInput.schema';
import { StrategyConfigUncheckedCreateWithoutUserInputObjectSchema as StrategyConfigUncheckedCreateWithoutUserInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StrategyConfigUpdateWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const StrategyConfigUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpsertWithWhereUniqueWithoutUserInput>;
export const StrategyConfigUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
