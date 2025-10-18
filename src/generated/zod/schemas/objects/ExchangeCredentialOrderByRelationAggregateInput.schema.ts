import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ExchangeCredentialOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialOrderByRelationAggregateInput>;
export const ExchangeCredentialOrderByRelationAggregateInputObjectZodSchema = makeSchema();
