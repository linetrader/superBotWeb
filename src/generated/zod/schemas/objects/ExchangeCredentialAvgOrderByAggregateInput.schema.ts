import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  keyVersion: SortOrderSchema.optional()
}).strict();
export const ExchangeCredentialAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialAvgOrderByAggregateInput>;
export const ExchangeCredentialAvgOrderByAggregateInputObjectZodSchema = makeSchema();
