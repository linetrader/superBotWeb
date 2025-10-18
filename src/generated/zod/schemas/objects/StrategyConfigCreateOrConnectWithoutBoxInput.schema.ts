import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigCreateWithoutBoxInputObjectSchema as StrategyConfigCreateWithoutBoxInputObjectSchema } from './StrategyConfigCreateWithoutBoxInput.schema';
import { StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema as StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutBoxInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutBoxInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema)])
}).strict();
export const StrategyConfigCreateOrConnectWithoutBoxInputObjectSchema: z.ZodType<Prisma.StrategyConfigCreateOrConnectWithoutBoxInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCreateOrConnectWithoutBoxInput>;
export const StrategyConfigCreateOrConnectWithoutBoxInputObjectZodSchema = makeSchema();
