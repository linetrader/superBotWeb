import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  strategyConfigId: z.string(),
  lowerTh: z.number().optional(),
  upperTh: z.number().optional(),
  boxTouchPct: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const BoxStrategyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BoxStrategyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyUncheckedCreateInput>;
export const BoxStrategyUncheckedCreateInputObjectZodSchema = makeSchema();
