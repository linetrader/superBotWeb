import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigArgsObjectSchema as StrategyConfigArgsObjectSchema } from './StrategyConfigArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  strategyConfigId: z.boolean().optional(),
  strategyConfig: z.union([z.boolean(), z.lazy(() => StrategyConfigArgsObjectSchema)]).optional(),
  lowerTh: z.boolean().optional(),
  upperTh: z.boolean().optional(),
  boxTouchPct: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const BoxStrategySelectObjectSchema: z.ZodType<Prisma.BoxStrategySelect> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategySelect>;
export const BoxStrategySelectObjectZodSchema = makeSchema();
