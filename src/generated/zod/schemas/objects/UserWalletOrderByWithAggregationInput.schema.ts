import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserWalletCountOrderByAggregateInputObjectSchema as UserWalletCountOrderByAggregateInputObjectSchema } from './UserWalletCountOrderByAggregateInput.schema';
import { UserWalletAvgOrderByAggregateInputObjectSchema as UserWalletAvgOrderByAggregateInputObjectSchema } from './UserWalletAvgOrderByAggregateInput.schema';
import { UserWalletMaxOrderByAggregateInputObjectSchema as UserWalletMaxOrderByAggregateInputObjectSchema } from './UserWalletMaxOrderByAggregateInput.schema';
import { UserWalletMinOrderByAggregateInputObjectSchema as UserWalletMinOrderByAggregateInputObjectSchema } from './UserWalletMinOrderByAggregateInput.schema';
import { UserWalletSumOrderByAggregateInputObjectSchema as UserWalletSumOrderByAggregateInputObjectSchema } from './UserWalletSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  depositAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  withdrawAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  depositPrivCipher: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  depositPrivIv: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  depositPrivTag: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  depositKeyAlg: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  depositKeyVersion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => UserWalletCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UserWalletAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserWalletMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserWalletMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UserWalletSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserWalletOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserWalletOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletOrderByWithAggregationInput>;
export const UserWalletOrderByWithAggregationInputObjectZodSchema = makeSchema();
