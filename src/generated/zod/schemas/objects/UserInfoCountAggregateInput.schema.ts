import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  referralCode: z.literal(true).optional(),
  level: z.literal(true).optional(),
  googleOtpEnabled: z.literal(true).optional(),
  googleOtpSecret: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserInfoCountAggregateInputObjectSchema: z.ZodType<Prisma.UserInfoCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoCountAggregateInputType>;
export const UserInfoCountAggregateInputObjectZodSchema = makeSchema();
