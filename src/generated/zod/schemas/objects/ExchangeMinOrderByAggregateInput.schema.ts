import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  supportsFutures: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ExchangeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMinOrderByAggregateInput>;
export const ExchangeMinOrderByAggregateInputObjectZodSchema = makeSchema();
