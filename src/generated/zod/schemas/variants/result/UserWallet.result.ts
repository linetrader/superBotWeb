import * as z from 'zod';

// prettier-ignore
export const UserWalletResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    depositAddress: z.string().nullable(),
    withdrawAddress: z.string().nullable(),
    depositPrivCipher: z.string().nullable(),
    depositPrivIv: z.string().nullable(),
    depositPrivTag: z.string().nullable(),
    depositKeyAlg: z.string().nullable(),
    depositKeyVersion: z.number().int().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserWalletResultType = z.infer<typeof UserWalletResultSchema>;
