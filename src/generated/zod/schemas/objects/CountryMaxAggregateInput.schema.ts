import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  code: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const CountryMaxAggregateInputObjectSchema: z.ZodType<Prisma.CountryMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CountryMaxAggregateInputType>;
export const CountryMaxAggregateInputObjectZodSchema = makeSchema();
