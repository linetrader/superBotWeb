import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutStrategyConfigsInputObjectSchema as UserUpdateWithoutStrategyConfigsInputObjectSchema } from './UserUpdateWithoutStrategyConfigsInput.schema';
import { UserUncheckedUpdateWithoutStrategyConfigsInputObjectSchema as UserUncheckedUpdateWithoutStrategyConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutStrategyConfigsInput.schema';
import { UserCreateWithoutStrategyConfigsInputObjectSchema as UserCreateWithoutStrategyConfigsInputObjectSchema } from './UserCreateWithoutStrategyConfigsInput.schema';
import { UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema as UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema } from './UserUncheckedCreateWithoutStrategyConfigsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutStrategyConfigsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStrategyConfigsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutStrategyConfigsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutStrategyConfigsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutStrategyConfigsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutStrategyConfigsInput>;
export const UserUpsertWithoutStrategyConfigsInputObjectZodSchema = makeSchema();
