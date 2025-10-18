import * as z from 'zod';
export const UserInfoDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  referralCode: z.string(),
  level: z.number().int(),
  googleOtpEnabled: z.boolean(),
  googleOtpSecret: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));