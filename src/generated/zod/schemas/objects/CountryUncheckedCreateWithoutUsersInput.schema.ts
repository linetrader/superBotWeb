import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  code: z.string(),
  name: z.string()
}).strict();
export const CountryUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.CountryUncheckedCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryUncheckedCreateWithoutUsersInput>;
export const CountryUncheckedCreateWithoutUsersInputObjectZodSchema = makeSchema();
