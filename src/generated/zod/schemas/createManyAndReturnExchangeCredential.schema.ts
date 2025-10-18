import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCredentialSelectObjectSchema as ExchangeCredentialSelectObjectSchema } from './objects/ExchangeCredentialSelect.schema';
import { ExchangeCredentialCreateManyInputObjectSchema as ExchangeCredentialCreateManyInputObjectSchema } from './objects/ExchangeCredentialCreateManyInput.schema';

export const ExchangeCredentialCreateManyAndReturnSchema: z.ZodType<Prisma.ExchangeCredentialCreateManyAndReturnArgs> = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), data: z.union([ ExchangeCredentialCreateManyInputObjectSchema, z.array(ExchangeCredentialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateManyAndReturnArgs>;

export const ExchangeCredentialCreateManyAndReturnZodSchema = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), data: z.union([ ExchangeCredentialCreateManyInputObjectSchema, z.array(ExchangeCredentialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();