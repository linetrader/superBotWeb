import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserInfoWhereUniqueInputObjectSchema as UserInfoWhereUniqueInputObjectSchema } from './UserInfoWhereUniqueInput.schema';
import { UserInfoCreateWithoutUserInputObjectSchema as UserInfoCreateWithoutUserInputObjectSchema } from './UserInfoCreateWithoutUserInput.schema';
import { UserInfoUncheckedCreateWithoutUserInputObjectSchema as UserInfoUncheckedCreateWithoutUserInputObjectSchema } from './UserInfoUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserInfoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserInfoCreateWithoutUserInputObjectSchema), z.lazy(() => UserInfoUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserInfoCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserInfoCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoCreateOrConnectWithoutUserInput>;
export const UserInfoCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
