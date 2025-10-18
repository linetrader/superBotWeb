import * as z from 'zod';

// prettier-ignore
export const UserInfoResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    referralCode: z.string(),
    level: z.number().int(),
    googleOtpEnabled: z.boolean(),
    googleOtpSecret: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserInfoResultType = z.infer<typeof UserInfoResultSchema>;
