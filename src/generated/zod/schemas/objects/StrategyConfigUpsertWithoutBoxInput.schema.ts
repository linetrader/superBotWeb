import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigUpdateWithoutBoxInputObjectSchema as StrategyConfigUpdateWithoutBoxInputObjectSchema } from './StrategyConfigUpdateWithoutBoxInput.schema';
import { StrategyConfigUncheckedUpdateWithoutBoxInputObjectSchema as StrategyConfigUncheckedUpdateWithoutBoxInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutBoxInput.schema';
import { StrategyConfigCreateWithoutBoxInputObjectSchema as StrategyConfigCreateWithoutBoxInputObjectSchema } from './StrategyConfigCreateWithoutBoxInput.schema';
import { StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema as StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema } from './StrategyConfigUncheckedCreateWithoutBoxInput.schema';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StrategyConfigUpdateWithoutBoxInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutBoxInputObjectSchema)]),
  create: z.union([z.lazy(() => StrategyConfigCreateWithoutBoxInputObjectSchema), z.lazy(() => StrategyConfigUncheckedCreateWithoutBoxInputObjectSchema)]),
  where: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional()
}).strict();
export const StrategyConfigUpsertWithoutBoxInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpsertWithoutBoxInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpsertWithoutBoxInput>;
export const StrategyConfigUpsertWithoutBoxInputObjectZodSchema = makeSchema();
