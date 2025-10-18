import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserInfoWhereInputObjectSchema as UserInfoWhereInputObjectSchema } from './UserInfoWhereInput.schema';
import { UserInfoUpdateWithoutUserInputObjectSchema as UserInfoUpdateWithoutUserInputObjectSchema } from './UserInfoUpdateWithoutUserInput.schema';
import { UserInfoUncheckedUpdateWithoutUserInputObjectSchema as UserInfoUncheckedUpdateWithoutUserInputObjectSchema } from './UserInfoUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserInfoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserInfoUpdateWithoutUserInputObjectSchema), z.lazy(() => UserInfoUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserInfoUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserInfoUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoUpdateToOneWithWhereWithoutUserInput>;
export const UserInfoUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
