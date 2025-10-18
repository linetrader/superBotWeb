import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCountryInputObjectSchema as UserUpdateWithoutCountryInputObjectSchema } from './UserUpdateWithoutCountryInput.schema';
import { UserUncheckedUpdateWithoutCountryInputObjectSchema as UserUncheckedUpdateWithoutCountryInputObjectSchema } from './UserUncheckedUpdateWithoutCountryInput.schema';
import { UserCreateWithoutCountryInputObjectSchema as UserCreateWithoutCountryInputObjectSchema } from './UserCreateWithoutCountryInput.schema';
import { UserUncheckedCreateWithoutCountryInputObjectSchema as UserUncheckedCreateWithoutCountryInputObjectSchema } from './UserUncheckedCreateWithoutCountryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutCountryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCountryInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCountryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCountryInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutCountryInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutCountryInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutCountryInput>;
export const UserUpsertWithWhereUniqueWithoutCountryInputObjectZodSchema = makeSchema();
