import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional(),
  some: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional(),
  none: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional()
}).strict();
export const StrategyConfigListRelationFilterObjectSchema: z.ZodType<Prisma.StrategyConfigListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigListRelationFilter>;
export const StrategyConfigListRelationFilterObjectZodSchema = makeSchema();
