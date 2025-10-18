import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

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
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UserWalletOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserWalletOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletOrderByWithRelationInput>;
export const UserWalletOrderByWithRelationInputObjectZodSchema = makeSchema();
