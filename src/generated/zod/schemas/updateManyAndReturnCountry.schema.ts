import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountrySelectObjectSchema as CountrySelectObjectSchema } from './objects/CountrySelect.schema';
import { CountryUpdateManyMutationInputObjectSchema as CountryUpdateManyMutationInputObjectSchema } from './objects/CountryUpdateManyMutationInput.schema';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './objects/CountryWhereInput.schema';

export const CountryUpdateManyAndReturnSchema: z.ZodType<Prisma.CountryUpdateManyAndReturnArgs> = z.object({ select: CountrySelectObjectSchema.optional(), data: CountryUpdateManyMutationInputObjectSchema, where: CountryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CountryUpdateManyAndReturnArgs>;

export const CountryUpdateManyAndReturnZodSchema = z.object({ select: CountrySelectObjectSchema.optional(), data: CountryUpdateManyMutationInputObjectSchema, where: CountryWhereInputObjectSchema.optional() }).strict();