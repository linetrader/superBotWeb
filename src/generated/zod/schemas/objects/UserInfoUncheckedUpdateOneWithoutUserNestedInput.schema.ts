import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserInfoCreateWithoutUserInputObjectSchema as UserInfoCreateWithoutUserInputObjectSchema } from './UserInfoCreateWithoutUserInput.schema';
import { UserInfoUncheckedCreateWithoutUserInputObjectSchema as UserInfoUncheckedCreateWithoutUserInputObjectSchema } from './UserInfoUncheckedCreateWithoutUserInput.schema';
import { UserInfoCreateOrConnectWithoutUserInputObjectSchema as UserInfoCreateOrConnectWithoutUserInputObjectSchema } from './UserInfoCreateOrConnectWithoutUserInput.schema';
import { UserInfoUpsertWithoutUserInputObjectSchema as UserInfoUpsertWithoutUserInputObjectSchema } from './UserInfoUpsertWithoutUserInput.schema';
import { UserInfoWhereInputObjectSchema as UserInfoWhereInputObjectSchema } from './UserInfoWhereInput.schema';
import { UserInfoWhereUniqueInputObjectSchema as UserInfoWhereUniqueInputObjectSchema } from './UserInfoWhereUniqueInput.schema';
import { UserInfoUpdateToOneWithWhereWithoutUserInputObjectSchema as UserInfoUpdateToOneWithWhereWithoutUserInputObjectSchema } from './UserInfoUpdateToOneWithWhereWithoutUserInput.schema';
import { UserInfoUpdateWithoutUserInputObjectSchema as UserInfoUpdateWithoutUserInputObjectSchema } from './UserInfoUpdateWithoutUserInput.schema';
import { UserInfoUncheckedUpdateWithoutUserInputObjectSchema as UserInfoUncheckedUpdateWithoutUserInputObjectSchema } from './UserInfoUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserInfoCreateWithoutUserInputObjectSchema), z.lazy(() => UserInfoUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserInfoCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => UserInfoUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserInfoWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserInfoWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserInfoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserInfoUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserInfoUpdateWithoutUserInputObjectSchema), z.lazy(() => UserInfoUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const UserInfoUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserInfoUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoUncheckedUpdateOneWithoutUserNestedInput>;
export const UserInfoUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
