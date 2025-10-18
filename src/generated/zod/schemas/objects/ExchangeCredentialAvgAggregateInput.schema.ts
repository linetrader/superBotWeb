import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  keyVersion: z.literal(true).optional()
}).strict();
export const ExchangeCredentialAvgAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialAvgAggregateInputType>;
export const ExchangeCredentialAvgAggregateInputObjectZodSchema = makeSchema();
