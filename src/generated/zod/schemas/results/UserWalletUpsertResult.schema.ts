import * as z from 'zod';
export const UserWalletUpsertResultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  depositAddress: z.string().optional(),
  withdrawAddress: z.string().optional(),
  depositPrivCipher: z.string().optional(),
  depositPrivIv: z.string().optional(),
  depositPrivTag: z.string().optional(),
  depositKeyAlg: z.string().optional(),
  depositKeyVersion: z.number().int().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});