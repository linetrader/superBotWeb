import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountryIncludeObjectSchema as CountryIncludeObjectSchema } from './objects/CountryInclude.schema';
import { CountryOrderByWithRelationInputObjectSchema as CountryOrderByWithRelationInputObjectSchema } from './objects/CountryOrderByWithRelationInput.schema';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './objects/CountryWhereInput.schema';
import { CountryWhereUniqueInputObjectSchema as CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';
import { CountryScalarFieldEnumSchema } from './enums/CountryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CountryFindFirstSelectSchema: z.ZodType<Prisma.CountrySelect> = z.object({
    code: z.boolean().optional(),
    name: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CountrySelect>;

export const CountryFindFirstSelectZodSchema = z.object({
    code: z.boolean().optional(),
    name: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CountryFindFirstSchema: z.ZodType<Prisma.CountryFindFirstArgs> = z.object({ select: CountryFindFirstSelectSchema.optional(), include: z.lazy(() => CountryIncludeObjectSchema.optional()), orderBy: z.union([CountryOrderByWithRelationInputObjectSchema, CountryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryWhereInputObjectSchema.optional(), cursor: CountryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CountryScalarFieldEnumSchema, CountryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CountryFindFirstArgs>;

export const CountryFindFirstZodSchema = z.object({ select: CountryFindFirstSelectSchema.optional(), include: z.lazy(() => CountryIncludeObjectSchema.optional()), orderBy: z.union([CountryOrderByWithRelationInputObjectSchema, CountryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryWhereInputObjectSchema.optional(), cursor: CountryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CountryScalarFieldEnumSchema, CountryScalarFieldEnumSchema.array()]).optional() }).strict();