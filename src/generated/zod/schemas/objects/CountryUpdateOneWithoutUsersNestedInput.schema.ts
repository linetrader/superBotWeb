import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryCreateWithoutUsersInputObjectSchema as CountryCreateWithoutUsersInputObjectSchema } from './CountryCreateWithoutUsersInput.schema';
import { CountryUncheckedCreateWithoutUsersInputObjectSchema as CountryUncheckedCreateWithoutUsersInputObjectSchema } from './CountryUncheckedCreateWithoutUsersInput.schema';
import { CountryCreateOrConnectWithoutUsersInputObjectSchema as CountryCreateOrConnectWithoutUsersInputObjectSchema } from './CountryCreateOrConnectWithoutUsersInput.schema';
import { CountryUpsertWithoutUsersInputObjectSchema as CountryUpsertWithoutUsersInputObjectSchema } from './CountryUpsertWithoutUsersInput.schema';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './CountryWhereInput.schema';
import { CountryWhereUniqueInputObjectSchema as CountryWhereUniqueInputObjectSchema } from './CountryWhereUniqueInput.schema';
import { CountryUpdateToOneWithWhereWithoutUsersInputObjectSchema as CountryUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './CountryUpdateToOneWithWhereWithoutUsersInput.schema';
import { CountryUpdateWithoutUsersInputObjectSchema as CountryUpdateWithoutUsersInputObjectSchema } from './CountryUpdateWithoutUsersInput.schema';
import { CountryUncheckedUpdateWithoutUsersInputObjectSchema as CountryUncheckedUpdateWithoutUsersInputObjectSchema } from './CountryUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CountryCreateWithoutUsersInputObjectSchema), z.lazy(() => CountryUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CountryCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => CountryUpsertWithoutUsersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CountryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CountryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CountryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CountryUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => CountryUpdateWithoutUsersInputObjectSchema), z.lazy(() => CountryUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const CountryUpdateOneWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.CountryUpdateOneWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryUpdateOneWithoutUsersNestedInput>;
export const CountryUpdateOneWithoutUsersNestedInputObjectZodSchema = makeSchema();
