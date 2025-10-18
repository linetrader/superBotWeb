import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateNestedOneWithoutBoxInputObjectSchema as StrategyConfigCreateNestedOneWithoutBoxInputObjectSchema } from './StrategyConfigCreateNestedOneWithoutBoxInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  lowerTh: z.number().optional(),
  upperTh: z.number().optional(),
  boxTouchPct: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  strategyConfig: z.lazy(() => StrategyConfigCreateNestedOneWithoutBoxInputObjectSchema)
}).strict();
export const BoxStrategyCreateInputObjectSchema: z.ZodType<Prisma.BoxStrategyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyCreateInput>;
export const BoxStrategyCreateInputObjectZodSchema = makeSchema();
