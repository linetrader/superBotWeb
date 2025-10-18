import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserInfoCreateWithoutUserInputObjectSchema as UserInfoCreateWithoutUserInputObjectSchema } from './UserInfoCreateWithoutUserInput.schema';
import { UserInfoUncheckedCreateWithoutUserInputObjectSchema as UserInfoUncheckedCreateWithoutUserInputObjectSchema } from './UserInfoUncheckedCreateWithoutUserInput.schema';
import { UserInfoCreateOrConnectWithoutUserInputObjectSchema as UserInfoCreateOrConnectWithoutUserInputObjectSchema } from './UserInfoCreateOrConnectWithoutUserInput.schema';
import { UserInfoWhereUniqueInputObjectSchema as UserInfoWhereUniqueInputObjectSchema } from './UserInfoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserInfoCreateWithoutUserInputObjectSchema), z.lazy(() => UserInfoUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserInfoCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => UserInfoWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserInfoCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.UserInfoCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoCreateNestedOneWithoutUserInput>;
export const UserInfoCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
