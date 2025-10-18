import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  lowerTh: z.number().optional(),
  upperTh: z.number().optional(),
  boxTouchPct: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.BoxStrategyUncheckedCreateWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyUncheckedCreateWithoutStrategyConfigInput>;
export const BoxStrategyUncheckedCreateWithoutStrategyConfigInputObjectZodSchema = makeSchema();
