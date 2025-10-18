import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  users: z.boolean().optional()
}).strict();
export const CountryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CountryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CountryCountOutputTypeSelect>;
export const CountryCountOutputTypeSelectObjectZodSchema = makeSchema();
