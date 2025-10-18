import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountryOrderByWithRelationInputObjectSchema as CountryOrderByWithRelationInputObjectSchema } from './objects/CountryOrderByWithRelationInput.schema';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './objects/CountryWhereInput.schema';
import { CountryWhereUniqueInputObjectSchema as CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';
import { CountryCountAggregateInputObjectSchema as CountryCountAggregateInputObjectSchema } from './objects/CountryCountAggregateInput.schema';
import { CountryMinAggregateInputObjectSchema as CountryMinAggregateInputObjectSchema } from './objects/CountryMinAggregateInput.schema';
import { CountryMaxAggregateInputObjectSchema as CountryMaxAggregateInputObjectSchema } from './objects/CountryMaxAggregateInput.schema';

export const CountryAggregateSchema: z.ZodType<Prisma.CountryAggregateArgs> = z.object({ orderBy: z.union([CountryOrderByWithRelationInputObjectSchema, CountryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryWhereInputObjectSchema.optional(), cursor: CountryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CountryCountAggregateInputObjectSchema ]).optional(), _min: CountryMinAggregateInputObjectSchema.optional(), _max: CountryMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CountryAggregateArgs>;

export const CountryAggregateZodSchema = z.object({ orderBy: z.union([CountryOrderByWithRelationInputObjectSchema, CountryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CountryWhereInputObjectSchema.optional(), cursor: CountryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CountryCountAggregateInputObjectSchema ]).optional(), _min: CountryMinAggregateInputObjectSchema.optional(), _max: CountryMaxAggregateInputObjectSchema.optional() }).strict();