import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutExchangeCredentialsInputObjectSchema as UserCreateWithoutExchangeCredentialsInputObjectSchema } from './UserCreateWithoutExchangeCredentialsInput.schema';
import { UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema as UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema } from './UserUncheckedCreateWithoutExchangeCredentialsInput.schema';
import { UserCreateOrConnectWithoutExchangeCredentialsInputObjectSchema as UserCreateOrConnectWithoutExchangeCredentialsInputObjectSchema } from './UserCreateOrConnectWithoutExchangeCredentialsInput.schema';
import { UserUpsertWithoutExchangeCredentialsInputObjectSchema as UserUpsertWithoutExchangeCredentialsInputObjectSchema } from './UserUpsertWithoutExchangeCredentialsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutExchangeCredentialsInputObjectSchema as UserUpdateToOneWithWhereWithoutExchangeCredentialsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutExchangeCredentialsInput.schema';
import { UserUpdateWithoutExchangeCredentialsInputObjectSchema as UserUpdateWithoutExchangeCredentialsInputObjectSchema } from './UserUpdateWithoutExchangeCredentialsInput.schema';
import { UserUncheckedUpdateWithoutExchangeCredentialsInputObjectSchema as UserUncheckedUpdateWithoutExchangeCredentialsInputObjectSchema } from './UserUncheckedUpdateWithoutExchangeCredentialsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutExchangeCredentialsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutExchangeCredentialsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutExchangeCredentialsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutExchangeCredentialsInputObjectSchema), z.lazy(() => UserUpdateWithoutExchangeCredentialsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutExchangeCredentialsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutExchangeCredentialsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutExchangeCredentialsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutExchangeCredentialsNestedInput>;
export const UserUpdateOneRequiredWithoutExchangeCredentialsNestedInputObjectZodSchema = makeSchema();
