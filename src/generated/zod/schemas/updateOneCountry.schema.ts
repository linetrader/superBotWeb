import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountrySelectObjectSchema as CountrySelectObjectSchema } from './objects/CountrySelect.schema';
import { CountryIncludeObjectSchema as CountryIncludeObjectSchema } from './objects/CountryInclude.schema';
import { CountryUpdateInputObjectSchema as CountryUpdateInputObjectSchema } from './objects/CountryUpdateInput.schema';
import { CountryUncheckedUpdateInputObjectSchema as CountryUncheckedUpdateInputObjectSchema } from './objects/CountryUncheckedUpdateInput.schema';
import { CountryWhereUniqueInputObjectSchema as CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';

export const CountryUpdateOneSchema: z.ZodType<Prisma.CountryUpdateArgs> = z.object({ select: CountrySelectObjectSchema.optional(), include: CountryIncludeObjectSchema.optional(), data: z.union([CountryUpdateInputObjectSchema, CountryUncheckedUpdateInputObjectSchema]), where: CountryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CountryUpdateArgs>;

export const CountryUpdateOneZodSchema = z.object({ select: CountrySelectObjectSchema.optional(), include: CountryIncludeObjectSchema.optional(), data: z.union([CountryUpdateInputObjectSchema, CountryUncheckedUpdateInputObjectSchema]), where: CountryWhereUniqueInputObjectSchema }).strict();