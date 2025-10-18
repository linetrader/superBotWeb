import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  depositAddress: z.boolean().optional(),
  withdrawAddress: z.boolean().optional(),
  depositPrivCipher: z.boolean().optional(),
  depositPrivIv: z.boolean().optional(),
  depositPrivTag: z.boolean().optional(),
  depositKeyAlg: z.boolean().optional(),
  depositKeyVersion: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const UserWalletSelectObjectSchema: z.ZodType<Prisma.UserWalletSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletSelect>;
export const UserWalletSelectObjectZodSchema = makeSchema();
