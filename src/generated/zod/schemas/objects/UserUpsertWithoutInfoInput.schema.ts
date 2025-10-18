import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutInfoInputObjectSchema as UserUpdateWithoutInfoInputObjectSchema } from './UserUpdateWithoutInfoInput.schema';
import { UserUncheckedUpdateWithoutInfoInputObjectSchema as UserUncheckedUpdateWithoutInfoInputObjectSchema } from './UserUncheckedUpdateWithoutInfoInput.schema';
import { UserCreateWithoutInfoInputObjectSchema as UserCreateWithoutInfoInputObjectSchema } from './UserCreateWithoutInfoInput.schema';
import { UserUncheckedCreateWithoutInfoInputObjectSchema as UserUncheckedCreateWithoutInfoInputObjectSchema } from './UserUncheckedCreateWithoutInfoInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutInfoInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInfoInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutInfoInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInfoInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutInfoInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutInfoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutInfoInput>;
export const UserUpsertWithoutInfoInputObjectZodSchema = makeSchema();
