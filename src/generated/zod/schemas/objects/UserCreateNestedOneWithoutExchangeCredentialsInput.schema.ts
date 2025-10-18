import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutExchangeCredentialsInputObjectSchema as UserCreateWithoutExchangeCredentialsInputObjectSchema } from './UserCreateWithoutExchangeCredentialsInput.schema';
import { UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema as UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema } from './UserUncheckedCreateWithoutExchangeCredentialsInput.schema';
import { UserCreateOrConnectWithoutExchangeCredentialsInputObjectSchema as UserCreateOrConnectWithoutExchangeCredentialsInputObjectSchema } from './UserCreateOrConnectWithoutExchangeCredentialsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutExchangeCredentialsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutExchangeCredentialsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutExchangeCredentialsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutExchangeCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutExchangeCredentialsInput>;
export const UserCreateNestedOneWithoutExchangeCredentialsInputObjectZodSchema = makeSchema();
