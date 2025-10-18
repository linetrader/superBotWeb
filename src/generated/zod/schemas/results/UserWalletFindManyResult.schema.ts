import * as z from 'zod';
export const UserWalletFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});