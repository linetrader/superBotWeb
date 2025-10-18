import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountrySelectObjectSchema as CountrySelectObjectSchema } from './objects/CountrySelect.schema';
import { CountryIncludeObjectSchema as CountryIncludeObjectSchema } from './objects/CountryInclude.schema';
import { CountryCreateInputObjectSchema as CountryCreateInputObjectSchema } from './objects/CountryCreateInput.schema';
import { CountryUncheckedCreateInputObjectSchema as CountryUncheckedCreateInputObjectSchema } from './objects/CountryUncheckedCreateInput.schema';

export const CountryCreateOneSchema: z.ZodType<Prisma.CountryCreateArgs> = z.object({ select: CountrySelectObjectSchema.optional(), include: CountryIncludeObjectSchema.optional(), data: z.union([CountryCreateInputObjectSchema, CountryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CountryCreateArgs>;

export const CountryCreateOneZodSchema = z.object({ select: CountrySelectObjectSchema.optional(), include: CountryIncludeObjectSchema.optional(), data: z.union([CountryCreateInputObjectSchema, CountryUncheckedCreateInputObjectSchema]) }).strict();