import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema';
import { StrategyConfigUpdateWithoutBoxInputObjectSchema as StrategyConfigUpdateWithoutBoxInputObjectSchema } from './StrategyConfigUpdateWithoutBoxInput.schema';
import { StrategyConfigUncheckedUpdateWithoutBoxInputObjectSchema as StrategyConfigUncheckedUpdateWithoutBoxInputObjectSchema } from './StrategyConfigUncheckedUpdateWithoutBoxInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StrategyConfigUpdateWithoutBoxInputObjectSchema), z.lazy(() => StrategyConfigUncheckedUpdateWithoutBoxInputObjectSchema)])
}).strict();
export const StrategyConfigUpdateToOneWithWhereWithoutBoxInputObjectSchema: z.ZodType<Prisma.StrategyConfigUpdateToOneWithWhereWithoutBoxInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUpdateToOneWithWhereWithoutBoxInput>;
export const StrategyConfigUpdateToOneWithWhereWithoutBoxInputObjectZodSchema = makeSchema();
