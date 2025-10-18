import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  code: z.string().max(2),
  name: z.string()
}).strict();
export const CountryCreateManyInputObjectSchema: z.ZodType<Prisma.CountryCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryCreateManyInput>;
export const CountryCreateManyInputObjectZodSchema = makeSchema();
