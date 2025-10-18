import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  depositAddress: SortOrderSchema.optional(),
  withdrawAddress: SortOrderSchema.optional(),
  depositPrivCipher: SortOrderSchema.optional(),
  depositPrivIv: SortOrderSchema.optional(),
  depositPrivTag: SortOrderSchema.optional(),
  depositKeyAlg: SortOrderSchema.optional(),
  depositKeyVersion: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserWalletMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserWalletMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletMaxOrderByAggregateInput>;
export const UserWalletMaxOrderByAggregateInputObjectZodSchema = makeSchema();
