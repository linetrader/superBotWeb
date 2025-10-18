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
export const ExchangeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCountOrderByAggregateInput>;
export const ExchangeCountOrderByAggregateInputObjectZodSchema = makeSchema();
