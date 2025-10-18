import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigScalarWhereInputObjectSchema as StrategyConfigScalarWhereInputObjectSchema } from './StrategyConfigScalarWhereInput.schema';
import { StrategyConfigUpdateManyMutationInputObjectSchema as StrategyConfigUpdateManyMutationInputObjectSchema } from './StrategyConfigUpdateManyMutationInput.schema';
import { StrategyConfigUncheckedUpdateManyWithoutUserInputObjectSchema as StrategyConfigUncheckedUpdateManyWithoutUserInputObjectSchema } from './StrategyConfigUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StrategyConfigScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StrategyConfigUpdateManyMutationInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const StrategyConfigUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpdateManyWithWhereWithoutUserInput>;
export const StrategyConfigUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
