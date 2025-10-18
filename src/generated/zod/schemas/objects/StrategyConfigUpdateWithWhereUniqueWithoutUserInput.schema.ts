import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigUpdateWithoutUserInputObjectSchema as StrategyConfigUpdateWithoutUserInputObjectSchema } from './StrategyConfigUpdateWithoutUserInput.schema';
import { StrategyConfigUncheckedUpdateWithoutUserInputObjectSchema as StrategyConfigUncheckedUpdateWithoutUserInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StrategyConfigUpdateWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const StrategyConfigUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpdateWithWhereUniqueWithoutUserInput>;
export const StrategyConfigUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
