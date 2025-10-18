import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutTradingBotsInputObjectSchema as UserCreateWithoutTradingBotsInputObjectSchema } from './UserCreateWithoutTradingBotsInput.schema';
import { UserUncheckedCreateWithoutTradingBotsInputObjectSchema as UserUncheckedCreateWithoutTradingBotsInputObjectSchema } from './UserUncheckedCreateWithoutTradingBotsInput.schema';
import { UserCreateOrConnectWithoutTradingBotsInputObjectSchema as UserCreateOrConnectWithoutTradingBotsInputObjectSchema } from './UserCreateOrConnectWithoutTradingBotsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTradingBotsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTradingBotsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTradingBotsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTradingBotsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTradingBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTradingBotsInput>;
export const UserCreateNestedOneWithoutTradingBotsInputObjectZodSchema = makeSchema();
