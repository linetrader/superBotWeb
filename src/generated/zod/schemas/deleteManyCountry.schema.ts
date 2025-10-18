import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './objects/CountryWhereInput.schema';

export const CountryDeleteManySchema: z.ZodType<Prisma.CountryDeleteManyArgs> = z.object({ where: CountryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CountryDeleteManyArgs>;

export const CountryDeleteManyZodSchema = z.object({ where: CountryWhereInputObjectSchema.optional() }).strict();