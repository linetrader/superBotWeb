import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  depositAddress: z.string().optional().nullable(),
  withdrawAddress: z.string().optional().nullable(),
  depositPrivCipher: z.string().optional().nullable(),
  depositPrivIv: z.string().optional().nullable(),
  depositPrivTag: z.string().optional().nullable(),
  depositKeyAlg: z.string().optional().nullable(),
  depositKeyVersion: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const UserWalletUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserWalletUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletUncheckedCreateInput>;
export const UserWalletUncheckedCreateInputObjectZodSchema = makeSchema();
