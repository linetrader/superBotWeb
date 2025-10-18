import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountryCreateManyInputObjectSchema as CountryCreateManyInputObjectSchema } from './objects/CountryCreateManyInput.schema';

export const CountryCreateManySchema: z.ZodType<Prisma.CountryCreateManyArgs> = z.object({ data: z.union([ CountryCreateManyInputObjectSchema, z.array(CountryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CountryCreateManyArgs>;

export const CountryCreateManyZodSchema = z.object({ data: z.union([ CountryCreateManyInputObjectSchema, z.array(CountryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();