import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserInfoCountOrderByAggregateInputObjectSchema as UserInfoCountOrderByAggregateInputObjectSchema } from './UserInfoCountOrderByAggregateInput.schema';
import { UserInfoAvgOrderByAggregateInputObjectSchema as UserInfoAvgOrderByAggregateInputObjectSchema } from './UserInfoAvgOrderByAggregateInput.schema';
import { UserInfoMaxOrderByAggregateInputObjectSchema as UserInfoMaxOrderByAggregateInputObjectSchema } from './UserInfoMaxOrderByAggregateInput.schema';
import { UserInfoMinOrderByAggregateInputObjectSchema as UserInfoMinOrderByAggregateInputObjectSchema } from './UserInfoMinOrderByAggregateInput.schema';
import { UserInfoSumOrderByAggregateInputObjectSchema as UserInfoSumOrderByAggregateInputObjectSchema } from './UserInfoSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  referralCode: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  googleOtpEnabled: SortOrderSchema.optional(),
  googleOtpSecret: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => UserInfoCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UserInfoAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserInfoMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserInfoMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UserInfoSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserInfoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserInfoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoOrderByWithAggregationInput>;
export const UserInfoOrderByWithAggregationInputObjectZodSchema = makeSchema();
