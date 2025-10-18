import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutDownlinesInputObjectSchema as UserCreateWithoutDownlinesInputObjectSchema } from './UserCreateWithoutDownlinesInput.schema';
import { UserUncheckedCreateWithoutDownlinesInputObjectSchema as UserUncheckedCreateWithoutDownlinesInputObjectSchema } from './UserUncheckedCreateWithoutDownlinesInput.schema';
import { UserCreateOrConnectWithoutDownlinesInputObjectSchema as UserCreateOrConnectWithoutDownlinesInputObjectSchema } from './UserCreateOrConnectWithoutDownlinesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDownlinesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDownlinesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDownlinesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutDownlinesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDownlinesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutDownlinesInput>;
export const UserCreateNestedOneWithoutDownlinesInputObjectZodSchema = makeSchema();
