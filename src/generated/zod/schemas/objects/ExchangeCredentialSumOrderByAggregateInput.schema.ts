import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  keyVersion: SortOrderSchema.optional()
}).strict();
export const ExchangeCredentialSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialSumOrderByAggregateInput>;
export const ExchangeCredentialSumOrderByAggregateInputObjectZodSchema = makeSchema();
