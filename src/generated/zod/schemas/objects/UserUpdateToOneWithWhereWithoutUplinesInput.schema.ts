import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUplinesInputObjectSchema as UserUpdateWithoutUplinesInputObjectSchema } from './UserUpdateWithoutUplinesInput.schema';
import { UserUncheckedUpdateWithoutUplinesInputObjectSchema as UserUncheckedUpdateWithoutUplinesInputObjectSchema } from './UserUncheckedUpdateWithoutUplinesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUplinesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUplinesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUplinesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUplinesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUplinesInput>;
export const UserUpdateToOneWithWhereWithoutUplinesInputObjectZodSchema = makeSchema();
