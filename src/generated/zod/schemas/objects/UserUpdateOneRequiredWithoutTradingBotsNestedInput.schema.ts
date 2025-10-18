import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutTradingBotsInputObjectSchema as UserCreateWithoutTradingBotsInputObjectSchema } from './UserCreateWithoutTradingBotsInput.schema';
import { UserUncheckedCreateWithoutTradingBotsInputObjectSchema as UserUncheckedCreateWithoutTradingBotsInputObjectSchema } from './UserUncheckedCreateWithoutTradingBotsInput.schema';
import { UserCreateOrConnectWithoutTradingBotsInputObjectSchema as UserCreateOrConnectWithoutTradingBotsInputObjectSchema } from './UserCreateOrConnectWithoutTradingBotsInput.schema';
import { UserUpsertWithoutTradingBotsInputObjectSchema as UserUpsertWithoutTradingBotsInputObjectSchema } from './UserUpsertWithoutTradingBotsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTradingBotsInputObjectSchema as UserUpdateToOneWithWhereWithoutTradingBotsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTradingBotsInput.schema';
import { UserUpdateWithoutTradingBotsInputObjectSchema as UserUpdateWithoutTradingBotsInputObjectSchema } from './UserUpdateWithoutTradingBotsInput.schema';
import { UserUncheckedUpdateWithoutTradingBotsInputObjectSchema as UserUncheckedUpdateWithoutTradingBotsInputObjectSchema } from './UserUncheckedUpdateWithoutTradingBotsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTradingBotsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTradingBotsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTradingBotsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTradingBotsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTradingBotsInputObjectSchema), z.lazy(() => UserUpdateWithoutTradingBotsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTradingBotsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTradingBotsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTradingBotsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTradingBotsNestedInput>;
export const UserUpdateOneRequiredWithoutTradingBotsNestedInputObjectZodSchema = makeSchema();
