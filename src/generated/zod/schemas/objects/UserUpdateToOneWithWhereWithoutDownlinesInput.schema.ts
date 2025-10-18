import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutDownlinesInputObjectSchema as UserUpdateWithoutDownlinesInputObjectSchema } from './UserUpdateWithoutDownlinesInput.schema';
import { UserUncheckedUpdateWithoutDownlinesInputObjectSchema as UserUncheckedUpdateWithoutDownlinesInputObjectSchema } from './UserUncheckedUpdateWithoutDownlinesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutDownlinesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDownlinesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutDownlinesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDownlinesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDownlinesInput>;
export const UserUpdateToOneWithWhereWithoutDownlinesInputObjectZodSchema = makeSchema();
