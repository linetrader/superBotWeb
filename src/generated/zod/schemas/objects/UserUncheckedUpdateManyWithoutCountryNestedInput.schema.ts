import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCountryInputObjectSchema as UserCreateWithoutCountryInputObjectSchema } from './UserCreateWithoutCountryInput.schema';
import { UserUncheckedCreateWithoutCountryInputObjectSchema as UserUncheckedCreateWithoutCountryInputObjectSchema } from './UserUncheckedCreateWithoutCountryInput.schema';
import { UserCreateOrConnectWithoutCountryInputObjectSchema as UserCreateOrConnectWithoutCountryInputObjectSchema } from './UserCreateOrConnectWithoutCountryInput.schema';
import { UserUpsertWithWhereUniqueWithoutCountryInputObjectSchema as UserUpsertWithWhereUniqueWithoutCountryInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutCountryInput.schema';
import { UserCreateManyCountryInputEnvelopeObjectSchema as UserCreateManyCountryInputEnvelopeObjectSchema } from './UserCreateManyCountryInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutCountryInputObjectSchema as UserUpdateWithWhereUniqueWithoutCountryInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutCountryInput.schema';
import { UserUpdateManyWithWhereWithoutCountryInputObjectSchema as UserUpdateManyWithWhereWithoutCountryInputObjectSchema } from './UserUpdateManyWithWhereWithoutCountryInput.schema';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCountryInputObjectSchema), z.lazy(() => UserCreateWithoutCountryInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutCountryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCountryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutCountryInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutCountryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutCountryInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutCountryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyCountryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutCountryInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutCountryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutCountryInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutCountryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedUpdateManyWithoutCountryNestedInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutCountryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateManyWithoutCountryNestedInput>;
export const UserUncheckedUpdateManyWithoutCountryNestedInputObjectZodSchema = makeSchema();
