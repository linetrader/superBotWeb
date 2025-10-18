import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  code: z.string().max(2),
  name: z.string()
}).strict();
export const CountryCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.CountryCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryCreateWithoutUsersInput>;
export const CountryCreateWithoutUsersInputObjectZodSchema = makeSchema();
