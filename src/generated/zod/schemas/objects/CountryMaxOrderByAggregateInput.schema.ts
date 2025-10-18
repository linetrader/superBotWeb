import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const CountryMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CountryMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryMaxOrderByAggregateInput>;
export const CountryMaxOrderByAggregateInputObjectZodSchema = makeSchema();
