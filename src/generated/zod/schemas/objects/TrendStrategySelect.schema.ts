import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigArgsObjectSchema as StrategyConfigArgsObjectSchema } from './StrategyConfigArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  strategyConfigId: z.boolean().optional(),
  strategyConfig: z.union([z.boolean(), z.lazy(() => StrategyConfigArgsObjectSchema)]).optional(),
  trendRsiUpperPullback: z.boolean().optional(),
  trendRsiLowerPullback: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const TrendStrategySelectObjectSchema: z.ZodType<Prisma.TrendStrategySelect> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategySelect>;
export const TrendStrategySelectObjectZodSchema = makeSchema();
