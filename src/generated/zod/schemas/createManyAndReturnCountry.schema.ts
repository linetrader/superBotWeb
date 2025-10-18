import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountrySelectObjectSchema as CountrySelectObjectSchema } from './objects/CountrySelect.schema';
import { CountryCreateManyInputObjectSchema as CountryCreateManyInputObjectSchema } from './objects/CountryCreateManyInput.schema';

export const CountryCreateManyAndReturnSchema: z.ZodType<Prisma.CountryCreateManyAndReturnArgs> = z.object({ select: CountrySelectObjectSchema.optional(), data: z.union([ CountryCreateManyInputObjectSchema, z.array(CountryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CountryCreateManyAndReturnArgs>;

export const CountryCreateManyAndReturnZodSchema = z.object({ select: CountrySelectObjectSchema.optional(), data: z.union([ CountryCreateManyInputObjectSchema, z.array(CountryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();