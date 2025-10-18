import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutUplinesInputObjectSchema as UserUpdateWithoutUplinesInputObjectSchema } from './UserUpdateWithoutUplinesInput.schema';
import { UserUncheckedUpdateWithoutUplinesInputObjectSchema as UserUncheckedUpdateWithoutUplinesInputObjectSchema } from './UserUncheckedUpdateWithoutUplinesInput.schema';
import { UserCreateWithoutUplinesInputObjectSchema as UserCreateWithoutUplinesInputObjectSchema } from './UserCreateWithoutUplinesInput.schema';
import { UserUncheckedCreateWithoutUplinesInputObjectSchema as UserUncheckedCreateWithoutUplinesInputObjectSchema } from './UserUncheckedCreateWithoutUplinesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUplinesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUplinesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUplinesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUplinesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUplinesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUplinesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutUplinesInput>;
export const UserUpsertWithoutUplinesInputObjectZodSchema = makeSchema();
