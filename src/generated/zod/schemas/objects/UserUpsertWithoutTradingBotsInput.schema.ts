import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutTradingBotsInputObjectSchema as UserUpdateWithoutTradingBotsInputObjectSchema } from './UserUpdateWithoutTradingBotsInput.schema';
import { UserUncheckedUpdateWithoutTradingBotsInputObjectSchema as UserUncheckedUpdateWithoutTradingBotsInputObjectSchema } from './UserUncheckedUpdateWithoutTradingBotsInput.schema';
import { UserCreateWithoutTradingBotsInputObjectSchema as UserCreateWithoutTradingBotsInputObjectSchema } from './UserCreateWithoutTradingBotsInput.schema';
import { UserUncheckedCreateWithoutTradingBotsInputObjectSchema as UserUncheckedCreateWithoutTradingBotsInputObjectSchema } from './UserUncheckedCreateWithoutTradingBotsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTradingBotsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTradingBotsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTradingBotsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTradingBotsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTradingBotsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTradingBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTradingBotsInput>;
export const UserUpsertWithoutTradingBotsInputObjectZodSchema = makeSchema();
