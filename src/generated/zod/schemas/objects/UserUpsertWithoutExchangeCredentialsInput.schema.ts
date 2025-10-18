import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutExchangeCredentialsInputObjectSchema as UserUpdateWithoutExchangeCredentialsInputObjectSchema } from './UserUpdateWithoutExchangeCredentialsInput.schema';
import { UserUncheckedUpdateWithoutExchangeCredentialsInputObjectSchema as UserUncheckedUpdateWithoutExchangeCredentialsInputObjectSchema } from './UserUncheckedUpdateWithoutExchangeCredentialsInput.schema';
import { UserCreateWithoutExchangeCredentialsInputObjectSchema as UserCreateWithoutExchangeCredentialsInputObjectSchema } from './UserCreateWithoutExchangeCredentialsInput.schema';
import { UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema as UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema } from './UserUncheckedCreateWithoutExchangeCredentialsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutExchangeCredentialsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutExchangeCredentialsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutExchangeCredentialsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutExchangeCredentialsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutExchangeCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutExchangeCredentialsInput>;
export const UserUpsertWithoutExchangeCredentialsInputObjectZodSchema = makeSchema();
