import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutWalletInputObjectSchema as UserCreateWithoutWalletInputObjectSchema } from './UserCreateWithoutWalletInput.schema';
import { UserUncheckedCreateWithoutWalletInputObjectSchema as UserUncheckedCreateWithoutWalletInputObjectSchema } from './UserUncheckedCreateWithoutWalletInput.schema';
import { UserCreateOrConnectWithoutWalletInputObjectSchema as UserCreateOrConnectWithoutWalletInputObjectSchema } from './UserCreateOrConnectWithoutWalletInput.schema';
import { UserUpsertWithoutWalletInputObjectSchema as UserUpsertWithoutWalletInputObjectSchema } from './UserUpsertWithoutWalletInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutWalletInputObjectSchema as UserUpdateToOneWithWhereWithoutWalletInputObjectSchema } from './UserUpdateToOneWithWhereWithoutWalletInput.schema';
import { UserUpdateWithoutWalletInputObjectSchema as UserUpdateWithoutWalletInputObjectSchema } from './UserUpdateWithoutWalletInput.schema';
import { UserUncheckedUpdateWithoutWalletInputObjectSchema as UserUncheckedUpdateWithoutWalletInputObjectSchema } from './UserUncheckedUpdateWithoutWalletInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWalletInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWalletInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWalletInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWalletInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutWalletInputObjectSchema), z.lazy(() => UserUpdateWithoutWalletInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWalletInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutWalletNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWalletNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutWalletNestedInput>;
export const UserUpdateOneRequiredWithoutWalletNestedInputObjectZodSchema = makeSchema();
