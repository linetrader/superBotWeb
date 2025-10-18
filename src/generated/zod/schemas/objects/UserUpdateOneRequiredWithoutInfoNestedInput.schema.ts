import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutInfoInputObjectSchema as UserCreateWithoutInfoInputObjectSchema } from './UserCreateWithoutInfoInput.schema';
import { UserUncheckedCreateWithoutInfoInputObjectSchema as UserUncheckedCreateWithoutInfoInputObjectSchema } from './UserUncheckedCreateWithoutInfoInput.schema';
import { UserCreateOrConnectWithoutInfoInputObjectSchema as UserCreateOrConnectWithoutInfoInputObjectSchema } from './UserCreateOrConnectWithoutInfoInput.schema';
import { UserUpsertWithoutInfoInputObjectSchema as UserUpsertWithoutInfoInputObjectSchema } from './UserUpsertWithoutInfoInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutInfoInputObjectSchema as UserUpdateToOneWithWhereWithoutInfoInputObjectSchema } from './UserUpdateToOneWithWhereWithoutInfoInput.schema';
import { UserUpdateWithoutInfoInputObjectSchema as UserUpdateWithoutInfoInputObjectSchema } from './UserUpdateWithoutInfoInput.schema';
import { UserUncheckedUpdateWithoutInfoInputObjectSchema as UserUncheckedUpdateWithoutInfoInputObjectSchema } from './UserUncheckedUpdateWithoutInfoInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInfoInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInfoInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInfoInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInfoInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutInfoInputObjectSchema), z.lazy(() => UserUpdateWithoutInfoInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInfoInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutInfoNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInfoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutInfoNestedInput>;
export const UserUpdateOneRequiredWithoutInfoNestedInputObjectZodSchema = makeSchema();
