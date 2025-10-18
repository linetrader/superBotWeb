import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInfoInputObjectSchema as UserCreateWithoutInfoInputObjectSchema } from './UserCreateWithoutInfoInput.schema';
import { UserUncheckedCreateWithoutInfoInputObjectSchema as UserUncheckedCreateWithoutInfoInputObjectSchema } from './UserUncheckedCreateWithoutInfoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutInfoInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInfoInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutInfoInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInfoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutInfoInput>;
export const UserCreateOrConnectWithoutInfoInputObjectZodSchema = makeSchema();
