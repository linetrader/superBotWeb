import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWalletCreateWithoutUserInputObjectSchema as UserWalletCreateWithoutUserInputObjectSchema } from './UserWalletCreateWithoutUserInput.schema';
import { UserWalletUncheckedCreateWithoutUserInputObjectSchema as UserWalletUncheckedCreateWithoutUserInputObjectSchema } from './UserWalletUncheckedCreateWithoutUserInput.schema';
import { UserWalletCreateOrConnectWithoutUserInputObjectSchema as UserWalletCreateOrConnectWithoutUserInputObjectSchema } from './UserWalletCreateOrConnectWithoutUserInput.schema';
import { UserWalletUpsertWithoutUserInputObjectSchema as UserWalletUpsertWithoutUserInputObjectSchema } from './UserWalletUpsertWithoutUserInput.schema';
import { UserWalletWhereInputObjectSchema as UserWalletWhereInputObjectSchema } from './UserWalletWhereInput.schema';
import { UserWalletWhereUniqueInputObjectSchema as UserWalletWhereUniqueInputObjectSchema } from './UserWalletWhereUniqueInput.schema';
import { UserWalletUpdateToOneWithWhereWithoutUserInputObjectSchema as UserWalletUpdateToOneWithWhereWithoutUserInputObjectSchema } from './UserWalletUpdateToOneWithWhereWithoutUserInput.schema';
import { UserWalletUpdateWithoutUserInputObjectSchema as UserWalletUpdateWithoutUserInputObjectSchema } from './UserWalletUpdateWithoutUserInput.schema';
import { UserWalletUncheckedUpdateWithoutUserInputObjectSchema as UserWalletUncheckedUpdateWithoutUserInputObjectSchema } from './UserWalletUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserWalletCreateWithoutUserInputObjectSchema), z.lazy(() => UserWalletUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserWalletCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => UserWalletUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWalletWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWalletWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWalletWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserWalletUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserWalletUpdateWithoutUserInputObjectSchema), z.lazy(() => UserWalletUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const UserWalletUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserWalletUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletUpdateOneWithoutUserNestedInput>;
export const UserWalletUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
