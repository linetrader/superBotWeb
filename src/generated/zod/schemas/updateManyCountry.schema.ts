import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountryUpdateManyMutationInputObjectSchema as CountryUpdateManyMutationInputObjectSchema } from './objects/CountryUpdateManyMutationInput.schema';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './objects/CountryWhereInput.schema';

export const CountryUpdateManySchema: z.ZodType<Prisma.CountryUpdateManyArgs> = z.object({ data: CountryUpdateManyMutationInputObjectSchema, where: CountryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CountryUpdateManyArgs>;

export const CountryUpdateManyZodSchema = z.object({ data: CountryUpdateManyMutationInputObjectSchema, where: CountryWhereInputObjectSchema.optional() }).strict();