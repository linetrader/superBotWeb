import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutWalletInputObjectSchema as UserCreateNestedOneWithoutWalletInputObjectSchema } from './UserCreateNestedOneWithoutWalletInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  depositAddress: z.string().optional().nullable(),
  withdrawAddress: z.string().optional().nullable(),
  depositPrivCipher: z.string().optional().nullable(),
  depositPrivIv: z.string().optional().nullable(),
  depositPrivTag: z.string().optional().nullable(),
  depositKeyAlg: z.string().optional().nullable(),
  depositKeyVersion: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWalletInputObjectSchema)
}).strict();
export const UserWalletCreateInputObjectSchema: z.ZodType<Prisma.UserWalletCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletCreateInput>;
export const UserWalletCreateInputObjectZodSchema = makeSchema();
