import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserInfoUpdateWithoutUserInputObjectSchema as UserInfoUpdateWithoutUserInputObjectSchema } from './UserInfoUpdateWithoutUserInput.schema';
import { UserInfoUncheckedUpdateWithoutUserInputObjectSchema as UserInfoUncheckedUpdateWithoutUserInputObjectSchema } from './UserInfoUncheckedUpdateWithoutUserInput.schema';
import { UserInfoCreateWithoutUserInputObjectSchema as UserInfoCreateWithoutUserInputObjectSchema } from './UserInfoCreateWithoutUserInput.schema';
import { UserInfoUncheckedCreateWithoutUserInputObjectSchema as UserInfoUncheckedCreateWithoutUserInputObjectSchema } from './UserInfoUncheckedCreateWithoutUserInput.schema';
import { UserInfoWhereInputObjectSchema as UserInfoWhereInputObjectSchema } from './UserInfoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserInfoUpdateWithoutUserInputObjectSchema), z.lazy(() => UserInfoUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserInfoCreateWithoutUserInputObjectSchema), z.lazy(() => UserInfoUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => UserInfoWhereInputObjectSchema).optional()
}).strict();
export const UserInfoUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.UserInfoUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoUpsertWithoutUserInput>;
export const UserInfoUpsertWithoutUserInputObjectZodSchema = makeSchema();
