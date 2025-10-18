import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BoxStrategySelectObjectSchema as BoxStrategySelectObjectSchema } from './BoxStrategySelect.schema';
import { BoxStrategyIncludeObjectSchema as BoxStrategyIncludeObjectSchema } from './BoxStrategyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BoxStrategySelectObjectSchema).optional(),
  include: z.lazy(() => BoxStrategyIncludeObjectSchema).optional()
}).strict();
export const BoxStrategyArgsObjectSchema = makeSchema();
export const BoxStrategyArgsObjectZodSchema = makeSchema();
