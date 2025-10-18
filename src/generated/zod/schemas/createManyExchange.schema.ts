import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCreateManyInputObjectSchema as ExchangeCreateManyInputObjectSchema } from './objects/ExchangeCreateManyInput.schema';

export const ExchangeCreateManySchema: z.ZodType<Prisma.ExchangeCreateManyArgs> = z.object({ data: z.union([ ExchangeCreateManyInputObjectSchema, z.array(ExchangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeCreateManyArgs>;

export const ExchangeCreateManyZodSchema = z.object({ data: z.union([ ExchangeCreateManyInputObjectSchema, z.array(ExchangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();