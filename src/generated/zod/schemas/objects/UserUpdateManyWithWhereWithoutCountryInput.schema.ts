import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema as UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutCountryInputObjectSchema as UserUncheckedUpdateManyWithoutCountryInputObjectSchema } from './UserUncheckedUpdateManyWithoutCountryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutCountryInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutCountryInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutCountryInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutCountryInput>;
export const UserUpdateManyWithWhereWithoutCountryInputObjectZodSchema = makeSchema();
