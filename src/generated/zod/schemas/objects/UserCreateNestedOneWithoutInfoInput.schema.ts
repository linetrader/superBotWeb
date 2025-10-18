import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutInfoInputObjectSchema as UserCreateWithoutInfoInputObjectSchema } from './UserCreateWithoutInfoInput.schema';
import { UserUncheckedCreateWithoutInfoInputObjectSchema as UserUncheckedCreateWithoutInfoInputObjectSchema } from './UserUncheckedCreateWithoutInfoInput.schema';
import { UserCreateOrConnectWithoutInfoInputObjectSchema as UserCreateOrConnectWithoutInfoInputObjectSchema } from './UserCreateOrConnectWithoutInfoInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInfoInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInfoInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInfoInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutInfoInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInfoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutInfoInput>;
export const UserCreateNestedOneWithoutInfoInputObjectZodSchema = makeSchema();
