import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWalletWhereInputObjectSchema as UserWalletWhereInputObjectSchema } from './UserWalletWhereInput.schema';
import { UserWalletUpdateWithoutUserInputObjectSchema as UserWalletUpdateWithoutUserInputObjectSchema } from './UserWalletUpdateWithoutUserInput.schema';
import { UserWalletUncheckedUpdateWithoutUserInputObjectSchema as UserWalletUncheckedUpdateWithoutUserInputObjectSchema } from './UserWalletUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWalletWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserWalletUpdateWithoutUserInputObjectSchema), z.lazy(() => UserWalletUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserWalletUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserWalletUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletUpdateToOneWithWhereWithoutUserInput>;
export const UserWalletUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
