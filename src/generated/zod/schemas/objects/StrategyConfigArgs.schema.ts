import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigSelectObjectSchema as StrategyConfigSelectObjectSchema } from './StrategyConfigSelect.schema';
import { StrategyConfigIncludeObjectSchema as StrategyConfigIncludeObjectSchema } from './StrategyConfigInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StrategyConfigSelectObjectSchema).optional(),
  include: z.lazy(() => StrategyConfigIncludeObjectSchema).optional()
}).strict();
export const StrategyConfigArgsObjectSchema = makeSchema();
export const StrategyConfigArgsObjectZodSchema = makeSchema();
