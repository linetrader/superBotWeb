import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigArgsObjectSchema as StrategyConfigArgsObjectSchema } from './StrategyConfigArgs.schema'

const makeSchema = () => z.object({
  strategyConfig: z.union([z.boolean(), z.lazy(() => StrategyConfigArgsObjectSchema)]).optional()
}).strict();
export const BoxStrategyIncludeObjectSchema: z.ZodType<Prisma.BoxStrategyInclude> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyInclude>;
export const BoxStrategyIncludeObjectZodSchema = makeSchema();
