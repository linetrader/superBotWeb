import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutStrategyConfigsInputObjectSchema as UserUpdateWithoutStrategyConfigsInputObjectSchema } from './UserUpdateWithoutStrategyConfigsInput.schema';
import { UserUncheckedUpdateWithoutStrategyConfigsInputObjectSchema as UserUncheckedUpdateWithoutStrategyConfigsInputObjectSchema } from './UserUncheckedUpdateWithoutStrategyConfigsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutStrategyConfigsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStrategyConfigsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutStrategyConfigsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStrategyConfigsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStrategyConfigsInput>;
export const UserUpdateToOneWithWhereWithoutStrategyConfigsInputObjectZodSchema = makeSchema();
