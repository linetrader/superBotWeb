import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './CountryWhereInput.schema';
import { CountryUpdateWithoutUsersInputObjectSchema as CountryUpdateWithoutUsersInputObjectSchema } from './CountryUpdateWithoutUsersInput.schema';
import { CountryUncheckedUpdateWithoutUsersInputObjectSchema as CountryUncheckedUpdateWithoutUsersInputObjectSchema } from './CountryUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CountryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CountryUpdateWithoutUsersInputObjectSchema), z.lazy(() => CountryUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const CountryUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.CountryUpdateToOneWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryUpdateToOneWithWhereWithoutUsersInput>;
export const CountryUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
