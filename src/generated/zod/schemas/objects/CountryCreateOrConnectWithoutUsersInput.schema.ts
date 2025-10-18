import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryWhereUniqueInputObjectSchema as CountryWhereUniqueInputObjectSchema } from './CountryWhereUniqueInput.schema';
import { CountryCreateWithoutUsersInputObjectSchema as CountryCreateWithoutUsersInputObjectSchema } from './CountryCreateWithoutUsersInput.schema';
import { CountryUncheckedCreateWithoutUsersInputObjectSchema as CountryUncheckedCreateWithoutUsersInputObjectSchema } from './CountryUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CountryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CountryCreateWithoutUsersInputObjectSchema), z.lazy(() => CountryUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const CountryCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.CountryCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryCreateOrConnectWithoutUsersInput>;
export const CountryCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
