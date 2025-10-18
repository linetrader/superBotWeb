import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ExchangeMarketOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeMarketOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketOrderByRelationAggregateInput>;
export const ExchangeMarketOrderByRelationAggregateInputObjectZodSchema = makeSchema();
