import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutStrategyConfigsInputObjectSchema as UserCreateWithoutStrategyConfigsInputObjectSchema } from './UserCreateWithoutStrategyConfigsInput.schema';
import { UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema as UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema } from './UserUncheckedCreateWithoutStrategyConfigsInput.schema';
import { UserCreateOrConnectWithoutStrategyConfigsInputObjectSchema as UserCreateOrConnectWithoutStrategyConfigsInputObjectSchema } from './UserCreateOrConnectWithoutStrategyConfigsInput.schema';
import { UserUpsertWithoutStrategyConfigsInputObjectSchema as UserUpsertWithoutStrategyConfigsInputObjectSchema } from './UserUpsertWithoutStrategyConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutStrategyConfigsInputObjectSchema as UserUpdateToOneWithWhereWithoutStrategyConfigsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutStrategyConfigsInput.schema';
import { UserUpdateWithoutStrategyConfigsInputObjectSchema as UserUpdateWithoutStrategyConfigsInputObjectSchema } from './UserUpdateWithoutStrategyConfigsInput.schema';
import { UserUncheckedUpdateWithoutStrategyConfigsInputObjectSchema as UserUncheckedUpdateWithoutStrategyConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutStrategyConfigsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutStrategyConfigsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStrategyConfigsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutStrategyConfigsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutStrategyConfigsInputObjectSchema), z.lazy(() => UserUpdateWithoutStrategyConfigsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStrategyConfigsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutStrategyConfigsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStrategyConfigsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutStrategyConfigsNestedInput>;
export const UserUpdateOneRequiredWithoutStrategyConfigsNestedInputObjectZodSchema = makeSchema();
