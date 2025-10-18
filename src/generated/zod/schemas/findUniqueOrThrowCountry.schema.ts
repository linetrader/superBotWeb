import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountrySelectObjectSchema as CountrySelectObjectSchema } from './objects/CountrySelect.schema';
import { CountryIncludeObjectSchema as CountryIncludeObjectSchema } from './objects/CountryInclude.schema';
import { CountryWhereUniqueInputObjectSchema as CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';

export const CountryFindUniqueOrThrowSchema: z.ZodType<Prisma.CountryFindUniqueOrThrowArgs> = z.object({ select: CountrySelectObjectSchema.optional(), include: CountryIncludeObjectSchema.optional(), where: CountryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CountryFindUniqueOrThrowArgs>;

export const CountryFindUniqueOrThrowZodSchema = z.object({ select: CountrySelectObjectSchema.optional(), include: CountryIncludeObjectSchema.optional(), where: CountryWhereUniqueInputObjectSchema }).strict();