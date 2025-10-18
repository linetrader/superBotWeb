import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TrendStrategySelectObjectSchema as TrendStrategySelectObjectSchema } from './TrendStrategySelect.schema';
import { TrendStrategyIncludeObjectSchema as TrendStrategyIncludeObjectSchema } from './TrendStrategyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TrendStrategySelectObjectSchema).optional(),
  include: z.lazy(() => TrendStrategyIncludeObjectSchema).optional()
}).strict();
export const TrendStrategyArgsObjectSchema = makeSchema();
export const TrendStrategyArgsObjectZodSchema = makeSchema();
