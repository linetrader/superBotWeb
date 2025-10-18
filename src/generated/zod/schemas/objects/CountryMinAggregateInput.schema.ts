import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  code: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const CountryMinAggregateInputObjectSchema: z.ZodType<Prisma.CountryMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CountryMinAggregateInputType>;
export const CountryMinAggregateInputObjectZodSchema = makeSchema();
