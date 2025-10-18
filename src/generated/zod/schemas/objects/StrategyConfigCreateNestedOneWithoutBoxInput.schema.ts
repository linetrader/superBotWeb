import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateWithoutBoxInputObjectSchema as StrategyConfigCreateWithoutBoxInputObjectSchema } from './StrategyConfigCreateWithoutBoxInput.schema';
import { StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema as StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutBoxInput.schema';
import { StrategyConfigCreateOrConnectWithoutBoxInputObjectSchema as StrategyConfigCreateOrConnectWithoutBoxInputObjectSchema } from './StrategyConfigCreateOrConnectWithoutBoxInput.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './StrategyConfigWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutBoxInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StrategyConfigCreateOrConnectWithoutBoxInputObjectSchema).optional(),
  connect: z.lazy(() => StrategyConfigWhereUniqueInputObjectSchema).optional()
}).strict();
export const StrategyConfigCreateNestedOneWithoutBoxInputObjectSchema: z.ZodType<Prisma.StrategyConfigCreateNestedOneWithoutBoxInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCreateNestedOneWithoutBoxInput>;
export const StrategyConfigCreateNestedOneWithoutBoxInputObjectZodSchema = makeSchema();
