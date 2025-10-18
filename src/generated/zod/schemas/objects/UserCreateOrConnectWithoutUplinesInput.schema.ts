import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUplinesInputObjectSchema as UserCreateWithoutUplinesInputObjectSchema } from './UserCreateWithoutUplinesInput.schema';
import { UserUncheckedCreateWithoutUplinesInputObjectSchema as UserUncheckedCreateWithoutUplinesInputObjectSchema } from './UserUncheckedCreateWithoutUplinesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUplinesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUplinesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUplinesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUplinesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutUplinesInput>;
export const UserCreateOrConnectWithoutUplinesInputObjectZodSchema = makeSchema();
