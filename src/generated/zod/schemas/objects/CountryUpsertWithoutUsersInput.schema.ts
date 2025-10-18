import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryUpdateWithoutUsersInputObjectSchema as CountryUpdateWithoutUsersInputObjectSchema } from './CountryUpdateWithoutUsersInput.schema';
import { CountryUncheckedUpdateWithoutUsersInputObjectSchema as CountryUncheckedUpdateWithoutUsersInputObjectSchema } from './CountryUncheckedUpdateWithoutUsersInput.schema';
import { CountryCreateWithoutUsersInputObjectSchema as CountryCreateWithoutUsersInputObjectSchema } from './CountryCreateWithoutUsersInput.schema';
import { CountryUncheckedCreateWithoutUsersInputObjectSchema as CountryUncheckedCreateWithoutUsersInputObjectSchema } from './CountryUncheckedCreateWithoutUsersInput.schema';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './CountryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CountryUpdateWithoutUsersInputObjectSchema), z.lazy(() => CountryUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => CountryCreateWithoutUsersInputObjectSchema), z.lazy(() => CountryUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => CountryWhereInputObjectSchema).optional()
}).strict();
export const CountryUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.CountryUpsertWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryUpsertWithoutUsersInput>;
export const CountryUpsertWithoutUsersInputObjectZodSchema = makeSchema();
