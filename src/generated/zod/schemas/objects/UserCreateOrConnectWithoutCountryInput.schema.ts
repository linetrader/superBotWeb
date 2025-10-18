import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCountryInputObjectSchema as UserCreateWithoutCountryInputObjectSchema } from './UserCreateWithoutCountryInput.schema';
import { UserUncheckedCreateWithoutCountryInputObjectSchema as UserUncheckedCreateWithoutCountryInputObjectSchema } from './UserUncheckedCreateWithoutCountryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCountryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCountryInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCountryInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCountryInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutCountryInput>;
export const UserCreateOrConnectWithoutCountryInputObjectZodSchema = makeSchema();
