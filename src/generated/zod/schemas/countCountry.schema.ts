import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountryOrderByWithRelationInputObjectSchema as CountryOrderByWithRelationInputObjectSchema } from './objects/CountryOrderByWithRelationInput.schema';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './objects/CountryWhereInput.schema';
import { CountryWhereUniqueInputObjectSchema as CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';
import { CountryCountAggregateInputObjectSchema as CountryCountAggregateInputObjectSchema } from './objects/CountryCountAggregateInput.schema';

export const CountryCountSchema: z.ZodType<Prisma.CountryCountArgs> = z.object({ orderBy: z.union([CountryOrderByWithRelationInputObjectSchema, CountryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryWhereInputObjectSchema.optional(), cursor: CountryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CountryCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CountryCountArgs>;

export const CountryCountZodSchema = z.object({ orderBy: z.union([CountryOrderByWithRelationInputObjectSchema, CountryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryWhereInputObjectSchema.optional(), cursor: CountryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CountryCountAggregateInputObjectSchema ]).optional() }).strict();