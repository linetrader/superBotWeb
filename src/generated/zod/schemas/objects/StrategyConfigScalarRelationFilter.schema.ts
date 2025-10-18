import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => StrategyConfigWhereInputObjectSchema).optional()
}).strict();
export const StrategyConfigScalarRelationFilterObjectSchema: z.ZodType<Prisma.StrategyConfigScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigScalarRelationFilter>;
export const StrategyConfigScalarRelationFilterObjectZodSchema = makeSchema();
