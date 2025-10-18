import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWalletWhereUniqueInputObjectSchema as UserWalletWhereUniqueInputObjectSchema } from './UserWalletWhereUniqueInput.schema';
import { UserWalletCreateWithoutUserInputObjectSchema as UserWalletCreateWithoutUserInputObjectSchema } from './UserWalletCreateWithoutUserInput.schema';
import { UserWalletUncheckedCreateWithoutUserInputObjectSchema as UserWalletUncheckedCreateWithoutUserInputObjectSchema } from './UserWalletUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWalletWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserWalletCreateWithoutUserInputObjectSchema), z.lazy(() => UserWalletUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserWalletCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserWalletCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletCreateOrConnectWithoutUserInput>;
export const UserWalletCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
