import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const CountryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CountryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryMinOrderByAggregateInput>;
export const CountryMinOrderByAggregateInputObjectZodSchema = makeSchema();
