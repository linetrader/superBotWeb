import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCountryInputObjectSchema as UserUpdateWithoutCountryInputObjectSchema } from './UserUpdateWithoutCountryInput.schema';
import { UserUncheckedUpdateWithoutCountryInputObjectSchema as UserUncheckedUpdateWithoutCountryInputObjectSchema } from './UserUncheckedUpdateWithoutCountryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutCountryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCountryInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutCountryInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutCountryInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutCountryInput>;
export const UserUpdateWithWhereUniqueWithoutCountryInputObjectZodSchema = makeSchema();
