import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const StrategyConfigOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.StrategyConfigOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigOrderByRelationAggregateInput>;
export const StrategyConfigOrderByRelationAggregateInputObjectZodSchema = makeSchema();
