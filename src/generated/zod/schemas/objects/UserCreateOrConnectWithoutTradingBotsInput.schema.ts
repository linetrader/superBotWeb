import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTradingBotsInputObjectSchema as UserCreateWithoutTradingBotsInputObjectSchema } from './UserCreateWithoutTradingBotsInput.schema';
import { UserUncheckedCreateWithoutTradingBotsInputObjectSchema as UserUncheckedCreateWithoutTradingBotsInputObjectSchema } from './UserUncheckedCreateWithoutTradingBotsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTradingBotsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTradingBotsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTradingBotsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTradingBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTradingBotsInput>;
export const UserCreateOrConnectWithoutTradingBotsInputObjectZodSchema = makeSchema();
