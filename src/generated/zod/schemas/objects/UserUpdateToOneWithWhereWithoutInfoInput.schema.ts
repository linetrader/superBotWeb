import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutInfoInputObjectSchema as UserUpdateWithoutInfoInputObjectSchema } from './UserUpdateWithoutInfoInput.schema';
import { UserUncheckedUpdateWithoutInfoInputObjectSchema as UserUncheckedUpdateWithoutInfoInputObjectSchema } from './UserUncheckedUpdateWithoutInfoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutInfoInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInfoInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutInfoInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInfoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInfoInput>;
export const UserUpdateToOneWithWhereWithoutInfoInputObjectZodSchema = makeSchema();
