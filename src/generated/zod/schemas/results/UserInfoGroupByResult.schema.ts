import * as z from 'zod';
export const UserInfoGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  referralCode: z.string(),
  level: z.number().int(),
  googleOtpEnabled: z.boolean(),
  googleOtpSecret: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    referralCode: z.number(),
    level: z.number(),
    googleOtpEnabled: z.number(),
    googleOtpSecret: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    level: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    level: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    referralCode: z.string().nullable(),
    level: z.number().int().nullable(),
    googleOtpSecret: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    referralCode: z.string().nullable(),
    level: z.number().int().nullable(),
    googleOtpSecret: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));