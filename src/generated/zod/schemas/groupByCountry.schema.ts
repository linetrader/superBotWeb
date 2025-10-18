import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './objects/CountryWhereInput.schema';
import { CountryOrderByWithAggregationInputObjectSchema as CountryOrderByWithAggregationInputObjectSchema } from './objects/CountryOrderByWithAggregationInput.schema';
import { CountryScalarWhereWithAggregatesInputObjectSchema as CountryScalarWhereWithAggregatesInputObjectSchema } from './objects/CountryScalarWhereWithAggregatesInput.schema';
import { CountryScalarFieldEnumSchema } from './enums/CountryScalarFieldEnum.schema';
import { CountryCountAggregateInputObjectSchema as CountryCountAggregateInputObjectSchema } from './objects/CountryCountAggregateInput.schema';
import { CountryMinAggregateInputObjectSchema as CountryMinAggregateInputObjectSchema } from './objects/CountryMinAggregateInput.schema';
import { CountryMaxAggregateInputObjectSchema as CountryMaxAggregateInputObjectSchema } from './objects/CountryMaxAggregateInput.schema';

export const CountryGroupBySchema: z.ZodType<Prisma.CountryGroupByArgs> = z.object({ where: CountryWhereInputObjectSchema.optional(), orderBy: z.union([CountryOrderByWithAggregationInputObjectSchema, CountryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CountryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CountryScalarFieldEnumSchema), _count: z.union([ z.literal(true), CountryCountAggregateInputObjectSchema ]).optional(), _min: CountryMinAggregateInputObjectSchema.optional(), _max: CountryMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CountryGroupByArgs>;

export const CountryGroupByZodSchema = z.object({ where: CountryWhereInputObjectSchema.optional(), orderBy: z.union([CountryOrderByWithAggregationInputObjectSchema, CountryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CountryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CountryScalarFieldEnumSchema), _count: z.union([ z.literal(true), CountryCountAggregateInputObjectSchema ]).optional(), _min: CountryMinAggregateInputObjectSchema.optional(), _max: CountryMaxAggregateInputObjectSchema.optional() }).strict();