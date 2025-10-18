import * as z from 'zod';
export const UserWalletAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    depositAddress: z.number(),
    withdrawAddress: z.number(),
    depositPrivCipher: z.number(),
    depositPrivIv: z.number(),
    depositPrivTag: z.number(),
    depositKeyAlg: z.number(),
    depositKeyVersion: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    depositKeyVersion: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    depositKeyVersion: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    depositAddress: z.string().nullable(),
    withdrawAddress: z.string().nullable(),
    depositPrivCipher: z.string().nullable(),
    depositPrivIv: z.string().nullable(),
    depositPrivTag: z.string().nullable(),
    depositKeyAlg: z.string().nullable(),
    depositKeyVersion: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    depositAddress: z.string().nullable(),
    withdrawAddress: z.string().nullable(),
    depositPrivCipher: z.string().nullable(),
    depositPrivIv: z.string().nullable(),
    depositPrivTag: z.string().nullable(),
    depositKeyAlg: z.string().nullable(),
    depositKeyVersion: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});