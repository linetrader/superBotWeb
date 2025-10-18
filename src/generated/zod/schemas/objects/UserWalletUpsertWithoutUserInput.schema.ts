import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWalletUpdateWithoutUserInputObjectSchema as UserWalletUpdateWithoutUserInputObjectSchema } from './UserWalletUpdateWithoutUserInput.schema';
import { UserWalletUncheckedUpdateWithoutUserInputObjectSchema as UserWalletUncheckedUpdateWithoutUserInputObjectSchema } from './UserWalletUncheckedUpdateWithoutUserInput.schema';
import { UserWalletCreateWithoutUserInputObjectSchema as UserWalletCreateWithoutUserInputObjectSchema } from './UserWalletCreateWithoutUserInput.schema';
import { UserWalletUncheckedCreateWithoutUserInputObjectSchema as UserWalletUncheckedCreateWithoutUserInputObjectSchema } from './UserWalletUncheckedCreateWithoutUserInput.schema';
import { UserWalletWhereInputObjectSchema as UserWalletWhereInputObjectSchema } from './UserWalletWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserWalletUpdateWithoutUserInputObjectSchema), z.lazy(() => UserWalletUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserWalletCreateWithoutUserInputObjectSchema), z.lazy(() => UserWalletUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => UserWalletWhereInputObjectSchema).optional()
}).strict();
export const UserWalletUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.UserWalletUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletUpsertWithoutUserInput>;
export const UserWalletUpsertWithoutUserInputObjectZodSchema = makeSchema();
