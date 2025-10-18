import * as z from 'zod';

// prettier-ignore
export const UserWalletInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    depositAddress: z.string().optional().nullable(),
    withdrawAddress: z.string().optional().nullable(),
    depositPrivCipher: z.string().optional().nullable(),
    depositPrivIv: z.string().optional().nullable(),
    depositPrivTag: z.string().optional().nullable(),
    depositKeyAlg: z.string().optional().nullable(),
    depositKeyVersion: z.number().int().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserWalletInputType = z.infer<typeof UserWalletInputSchema>;
