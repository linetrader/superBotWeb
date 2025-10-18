import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigCreateWithoutUserInputObjectSchema as StrategyConfigCreateWithoutUserInputObjectSchema } from './StrategyConfigCreateWithoutUserInput.schema';
import { StrategyConfigUncheckedCreateWithoutUserInputObjectSchema as StrategyConfigUncheckedCreateWithoutUserInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutUserInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const StrategyConfigCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.StrategyConfigCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCreateOrConnectWithoutUserInput>;
export const StrategyConfigCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
