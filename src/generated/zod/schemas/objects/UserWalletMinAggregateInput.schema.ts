import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  depositAddress: z.literal(true).optional(),
  withdrawAddress: z.literal(true).optional(),
  depositPrivCipher: z.literal(true).optional(),
  depositPrivIv: z.literal(true).optional(),
  depositPrivTag: z.literal(true).optional(),
  depositKeyAlg: z.literal(true).optional(),
  depositKeyVersion: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const UserWalletMinAggregateInputObjectSchema: z.ZodType<Prisma.UserWalletMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletMinAggregateInputType>;
export const UserWalletMinAggregateInputObjectZodSchema = makeSchema();
