import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountrySelectObjectSchema as CountrySelectObjectSchema } from './objects/CountrySelect.schema';
import { CountryIncludeObjectSchema as CountryIncludeObjectSchema } from './objects/CountryInclude.schema';
import { CountryWhereUniqueInputObjectSchema as CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';
import { CountryCreateInputObjectSchema as CountryCreateInputObjectSchema } from './objects/CountryCreateInput.schema';
import { CountryUncheckedCreateInputObjectSchema as CountryUncheckedCreateInputObjectSchema } from './objects/CountryUncheckedCreateInput.schema';
import { CountryUpdateInputObjectSchema as CountryUpdateInputObjectSchema } from './objects/CountryUpdateInput.schema';
import { CountryUncheckedUpdateInputObjectSchema as CountryUncheckedUpdateInputObjectSchema } from './objects/CountryUncheckedUpdateInput.schema';

export const CountryUpsertOneSchema: z.ZodType<Prisma.CountryUpsertArgs> = z.object({ select: CountrySelectObjectSchema.optional(), include: CountryIncludeObjectSchema.optional(), where: CountryWhereUniqueInputObjectSchema, create: z.union([ CountryCreateInputObjectSchema, CountryUncheckedCreateInputObjectSchema ]), update: z.union([ CountryUpdateInputObjectSchema, CountryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CountryUpsertArgs>;

export const CountryUpsertOneZodSchema = z.object({ select: CountrySelectObjectSchema.optional(), include: CountryIncludeObjectSchema.optional(), where: CountryWhereUniqueInputObjectSchema, create: z.union([ CountryCreateInputObjectSchema, CountryUncheckedCreateInputObjectSchema ]), update: z.union([ CountryUpdateInputObjectSchema, CountryUncheckedUpdateInputObjectSchema ]) }).strict();