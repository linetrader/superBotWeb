import * as z from 'zod';

export const UserInfoScalarFieldEnumSchema = z.enum(['id', 'userId', 'referralCode', 'level', 'googleOtpEnabled', 'googleOtpSecret', 'createdAt', 'updatedAt'])

export type UserInfoScalarFieldEnum = z.infer<typeof UserInfoScalarFieldEnumSchema>;