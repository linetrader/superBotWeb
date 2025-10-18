import * as z from 'zod';

// prettier-ignore
export const UserInfoModelSchema = z.object({
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

export type UserInfoPureType = z.infer<typeof UserInfoModelSchema>;
