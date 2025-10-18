import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutDownlinesInputObjectSchema as UserCreateWithoutDownlinesInputObjectSchema } from './UserCreateWithoutDownlinesInput.schema';
import { UserUncheckedCreateWithoutDownlinesInputObjectSchema as UserUncheckedCreateWithoutDownlinesInputObjectSchema } from './UserUncheckedCreateWithoutDownlinesInput.schema';
import { UserCreateOrConnectWithoutDownlinesInputObjectSchema as UserCreateOrConnectWithoutDownlinesInputObjectSchema } from './UserCreateOrConnectWithoutDownlinesInput.schema';
import { UserUpsertWithoutDownlinesInputObjectSchema as UserUpsertWithoutDownlinesInputObjectSchema } from './UserUpsertWithoutDownlinesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutDownlinesInputObjectSchema as UserUpdateToOneWithWhereWithoutDownlinesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutDownlinesInput.schema';
import { UserUpdateWithoutDownlinesInputObjectSchema as UserUpdateWithoutDownlinesInputObjectSchema } from './UserUpdateWithoutDownlinesInput.schema';
import { UserUncheckedUpdateWithoutDownlinesInputObjectSchema as UserUncheckedUpdateWithoutDownlinesInputObjectSchema } from './UserUncheckedUpdateWithoutDownlinesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDownlinesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDownlinesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDownlinesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDownlinesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutDownlinesInputObjectSchema), z.lazy(() => UserUpdateWithoutDownlinesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDownlinesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutDownlinesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDownlinesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutDownlinesNestedInput>;
export const UserUpdateOneRequiredWithoutDownlinesNestedInputObjectZodSchema = makeSchema();
