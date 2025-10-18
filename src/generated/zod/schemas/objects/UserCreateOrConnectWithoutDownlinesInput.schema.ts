import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDownlinesInputObjectSchema as UserCreateWithoutDownlinesInputObjectSchema } from './UserCreateWithoutDownlinesInput.schema';
import { UserUncheckedCreateWithoutDownlinesInputObjectSchema as UserUncheckedCreateWithoutDownlinesInputObjectSchema } from './UserUncheckedCreateWithoutDownlinesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutDownlinesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDownlinesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutDownlinesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDownlinesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutDownlinesInput>;
export const UserCreateOrConnectWithoutDownlinesInputObjectZodSchema = makeSchema();
