import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  referralCode: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  googleOtpEnabled: SortOrderSchema.optional(),
  googleOtpSecret: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserInfoMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserInfoMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoMinOrderByAggregateInput>;
export const UserInfoMinOrderByAggregateInputObjectZodSchema = makeSchema();
