import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigCountOutputTypeSelectObjectSchema as StrategyConfigCountOutputTypeSelectObjectSchema } from './StrategyConfigCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StrategyConfigCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StrategyConfigCountOutputTypeArgsObjectSchema = makeSchema();
export const StrategyConfigCountOutputTypeArgsObjectZodSchema = makeSchema();
