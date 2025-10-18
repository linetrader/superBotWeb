import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCredentialCreateManyInputObjectSchema as ExchangeCredentialCreateManyInputObjectSchema } from './objects/ExchangeCredentialCreateManyInput.schema';

export const ExchangeCredentialCreateManySchema: z.ZodType<Prisma.ExchangeCredentialCreateManyArgs> = z.object({ data: z.union([ ExchangeCredentialCreateManyInputObjectSchema, z.array(ExchangeCredentialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateManyArgs>;

export const ExchangeCredentialCreateManyZodSchema = z.object({ data: z.union([ ExchangeCredentialCreateManyInputObjectSchema, z.array(ExchangeCredentialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();