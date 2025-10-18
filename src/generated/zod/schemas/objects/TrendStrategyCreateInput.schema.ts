import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCreateNestedOneWithoutTrendInputObjectSchema as StrategyConfigCreateNestedOneWithoutTrendInputObjectSchema } from './StrategyConfigCreateNestedOneWithoutTrendInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  trendRsiUpperPullback: z.number().optional().nullable(),
  trendRsiLowerPullback: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  strategyConfig: z.lazy(() => StrategyConfigCreateNestedOneWithoutTrendInputObjectSchema)
}).strict();
export const TrendStrategyCreateInputObjectSchema: z.ZodType<Prisma.TrendStrategyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyCreateInput>;
export const TrendStrategyCreateInputObjectZodSchema = makeSchema();
