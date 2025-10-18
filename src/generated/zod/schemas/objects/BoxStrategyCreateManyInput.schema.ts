import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  strategyConfigId: z.string(),
  lowerTh: z.number().optional(),
  upperTh: z.number().optional(),
  boxTouchPct: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BoxStrategyCreateManyInputObjectSchema: z.ZodType<Prisma.BoxStrategyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyCreateManyInput>;
export const BoxStrategyCreateManyInputObjectZodSchema = makeSchema();
