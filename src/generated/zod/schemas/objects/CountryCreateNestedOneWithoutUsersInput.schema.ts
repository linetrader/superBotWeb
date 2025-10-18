import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryCreateWithoutUsersInputObjectSchema as CountryCreateWithoutUsersInputObjectSchema } from './CountryCreateWithoutUsersInput.schema';
import { CountryUncheckedCreateWithoutUsersInputObjectSchema as CountryUncheckedCreateWithoutUsersInputObjectSchema } from './CountryUncheckedCreateWithoutUsersInput.schema';
import { CountryCreateOrConnectWithoutUsersInputObjectSchema as CountryCreateOrConnectWithoutUsersInputObjectSchema } from './CountryCreateOrConnectWithoutUsersInput.schema';
import { CountryWhereUniqueInputObjectSchema as CountryWhereUniqueInputObjectSchema } from './CountryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CountryCreateWithoutUsersInputObjectSchema), z.lazy(() => CountryUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CountryCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => CountryWhereUniqueInputObjectSchema).optional()
}).strict();
export const CountryCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.CountryCreateNestedOneWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryCreateNestedOneWithoutUsersInput>;
export const CountryCreateNestedOneWithoutUsersInputObjectZodSchema = makeSchema();
