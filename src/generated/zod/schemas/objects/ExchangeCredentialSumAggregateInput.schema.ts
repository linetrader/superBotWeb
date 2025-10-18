import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  keyVersion: z.literal(true).optional()
}).strict();
export const ExchangeCredentialSumAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialSumAggregateInputType>;
export const ExchangeCredentialSumAggregateInputObjectZodSchema = makeSchema();
