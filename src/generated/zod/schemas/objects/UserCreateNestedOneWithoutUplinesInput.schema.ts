import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUplinesInputObjectSchema as UserCreateWithoutUplinesInputObjectSchema } from './UserCreateWithoutUplinesInput.schema';
import { UserUncheckedCreateWithoutUplinesInputObjectSchema as UserUncheckedCreateWithoutUplinesInputObjectSchema } from './UserUncheckedCreateWithoutUplinesInput.schema';
import { UserCreateOrConnectWithoutUplinesInputObjectSchema as UserCreateOrConnectWithoutUplinesInputObjectSchema } from './UserCreateOrConnectWithoutUplinesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUplinesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUplinesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUplinesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUplinesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUplinesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutUplinesInput>;
export const UserCreateNestedOneWithoutUplinesInputObjectZodSchema = makeSchema();
