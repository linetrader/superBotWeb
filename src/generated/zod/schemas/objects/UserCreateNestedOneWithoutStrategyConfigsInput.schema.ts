import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutStrategyConfigsInputObjectSchema as UserCreateWithoutStrategyConfigsInputObjectSchema } from './UserCreateWithoutStrategyConfigsInput.schema';
import { UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema as UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema } from './UserUncheckedCreateWithoutStrategyConfigsInput.schema';
import { UserCreateOrConnectWithoutStrategyConfigsInputObjectSchema as UserCreateOrConnectWithoutStrategyConfigsInputObjectSchema } from './UserCreateOrConnectWithoutStrategyConfigsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutStrategyConfigsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStrategyConfigsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutStrategyConfigsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStrategyConfigsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutStrategyConfigsInput>;
export const UserCreateNestedOneWithoutStrategyConfigsInputObjectZodSchema = makeSchema();
