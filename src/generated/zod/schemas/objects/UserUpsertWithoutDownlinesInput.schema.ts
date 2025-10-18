import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutDownlinesInputObjectSchema as UserUpdateWithoutDownlinesInputObjectSchema } from './UserUpdateWithoutDownlinesInput.schema';
import { UserUncheckedUpdateWithoutDownlinesInputObjectSchema as UserUncheckedUpdateWithoutDownlinesInputObjectSchema } from './UserUncheckedUpdateWithoutDownlinesInput.schema';
import { UserCreateWithoutDownlinesInputObjectSchema as UserCreateWithoutDownlinesInputObjectSchema } from './UserCreateWithoutDownlinesInput.schema';
import { UserUncheckedCreateWithoutDownlinesInputObjectSchema as UserUncheckedCreateWithoutDownlinesInputObjectSchema } from './UserUncheckedCreateWithoutDownlinesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutDownlinesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDownlinesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutDownlinesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDownlinesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutDownlinesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutDownlinesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutDownlinesInput>;
export const UserUpsertWithoutDownlinesInputObjectZodSchema = makeSchema();
