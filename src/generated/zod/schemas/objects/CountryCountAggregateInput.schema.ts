import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  code: z.literal(true).optional(),
  name: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CountryCountAggregateInputObjectSchema: z.ZodType<Prisma.CountryCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CountryCountAggregateInputType>;
export const CountryCountAggregateInputObjectZodSchema = makeSchema();
