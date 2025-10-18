import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutExchangeCredentialsInputObjectSchema as UserCreateWithoutExchangeCredentialsInputObjectSchema } from './UserCreateWithoutExchangeCredentialsInput.schema';
import { UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema as UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema } from './UserUncheckedCreateWithoutExchangeCredentialsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutExchangeCredentialsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExchangeCredentialsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutExchangeCredentialsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutExchangeCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutExchangeCredentialsInput>;
export const UserCreateOrConnectWithoutExchangeCredentialsInputObjectZodSchema = makeSchema();
