import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutStrategyConfigsInputObjectSchema as UserCreateWithoutStrategyConfigsInputObjectSchema } from './UserCreateWithoutStrategyConfigsInput.schema';
import { UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema as UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema } from './UserUncheckedCreateWithoutStrategyConfigsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutStrategyConfigsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStrategyConfigsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutStrategyConfigsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStrategyConfigsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutStrategyConfigsInput>;
export const UserCreateOrConnectWithoutStrategyConfigsInputObjectZodSchema = makeSchema();
