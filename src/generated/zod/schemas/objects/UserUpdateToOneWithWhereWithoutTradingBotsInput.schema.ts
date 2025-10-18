import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTradingBotsInputObjectSchema as UserUpdateWithoutTradingBotsInputObjectSchema } from './UserUpdateWithoutTradingBotsInput.schema';
import { UserUncheckedUpdateWithoutTradingBotsInputObjectSchema as UserUncheckedUpdateWithoutTradingBotsInputObjectSchema } from './UserUncheckedUpdateWithoutTradingBotsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTradingBotsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTradingBotsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTradingBotsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTradingBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTradingBotsInput>;
export const UserUpdateToOneWithWhereWithoutTradingBotsInputObjectZodSchema = makeSchema();
