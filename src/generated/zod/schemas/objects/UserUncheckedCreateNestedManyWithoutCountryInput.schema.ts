import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCountryInputObjectSchema as UserCreateWithoutCountryInputObjectSchema } from './UserCreateWithoutCountryInput.schema';
import { UserUncheckedCreateWithoutCountryInputObjectSchema as UserUncheckedCreateWithoutCountryInputObjectSchema } from './UserUncheckedCreateWithoutCountryInput.schema';
import { UserCreateOrConnectWithoutCountryInputObjectSchema as UserCreateOrConnectWithoutCountryInputObjectSchema } from './UserCreateOrConnectWithoutCountryInput.schema';
import { UserCreateManyCountryInputEnvelopeObjectSchema as UserCreateManyCountryInputEnvelopeObjectSchema } from './UserCreateManyCountryInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCountryInputObjectSchema), z.lazy(() => UserCreateWithoutCountryInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutCountryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCountryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutCountryInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutCountryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyCountryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedCreateNestedManyWithoutCountryInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutCountryInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutCountryInput>;
export const UserUncheckedCreateNestedManyWithoutCountryInputObjectZodSchema = makeSchema();
