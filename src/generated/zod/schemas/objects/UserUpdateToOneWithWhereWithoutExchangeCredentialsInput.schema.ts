import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutExchangeCredentialsInputObjectSchema as UserUpdateWithoutExchangeCredentialsInputObjectSchema } from './UserUpdateWithoutExchangeCredentialsInput.schema';
import { UserUncheckedUpdateWithoutExchangeCredentialsInputObjectSchema as UserUncheckedUpdateWithoutExchangeCredentialsInputObjectSchema } from './UserUncheckedUpdateWithoutExchangeCredentialsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutExchangeCredentialsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutExchangeCredentialsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutExchangeCredentialsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutExchangeCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutExchangeCredentialsInput>;
export const UserUpdateToOneWithWhereWithoutExchangeCredentialsInputObjectZodSchema = makeSchema();
