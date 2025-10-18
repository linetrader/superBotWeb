import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWalletCreateWithoutUserInputObjectSchema as UserWalletCreateWithoutUserInputObjectSchema } from './UserWalletCreateWithoutUserInput.schema';
import { UserWalletUncheckedCreateWithoutUserInputObjectSchema as UserWalletUncheckedCreateWithoutUserInputObjectSchema } from './UserWalletUncheckedCreateWithoutUserInput.schema';
import { UserWalletCreateOrConnectWithoutUserInputObjectSchema as UserWalletCreateOrConnectWithoutUserInputObjectSchema } from './UserWalletCreateOrConnectWithoutUserInput.schema';
import { UserWalletWhereUniqueInputObjectSchema as UserWalletWhereUniqueInputObjectSchema } from './UserWalletWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserWalletCreateWithoutUserInputObjectSchema), z.lazy(() => UserWalletUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserWalletCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => UserWalletWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserWalletCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.UserWalletCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletCreateNestedOneWithoutUserInput>;
export const UserWalletCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
