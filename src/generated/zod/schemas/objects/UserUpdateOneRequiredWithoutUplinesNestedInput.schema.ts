import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUplinesInputObjectSchema as UserCreateWithoutUplinesInputObjectSchema } from './UserCreateWithoutUplinesInput.schema';
import { UserUncheckedCreateWithoutUplinesInputObjectSchema as UserUncheckedCreateWithoutUplinesInputObjectSchema } from './UserUncheckedCreateWithoutUplinesInput.schema';
import { UserCreateOrConnectWithoutUplinesInputObjectSchema as UserCreateOrConnectWithoutUplinesInputObjectSchema } from './UserCreateOrConnectWithoutUplinesInput.schema';
import { UserUpsertWithoutUplinesInputObjectSchema as UserUpsertWithoutUplinesInputObjectSchema } from './UserUpsertWithoutUplinesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUplinesInputObjectSchema as UserUpdateToOneWithWhereWithoutUplinesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUplinesInput.schema';
import { UserUpdateWithoutUplinesInputObjectSchema as UserUpdateWithoutUplinesInputObjectSchema } from './UserUpdateWithoutUplinesInput.schema';
import { UserUncheckedUpdateWithoutUplinesInputObjectSchema as UserUncheckedUpdateWithoutUplinesInputObjectSchema } from './UserUncheckedUpdateWithoutUplinesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUplinesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUplinesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUplinesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUplinesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUplinesInputObjectSchema), z.lazy(() => UserUpdateWithoutUplinesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUplinesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutUplinesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUplinesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutUplinesNestedInput>;
export const UserUpdateOneRequiredWithoutUplinesNestedInputObjectZodSchema = makeSchema();
