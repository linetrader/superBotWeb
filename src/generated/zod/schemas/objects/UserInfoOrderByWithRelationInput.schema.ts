import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  referralCode: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  googleOtpEnabled: SortOrderSchema.optional(),
  googleOtpSecret: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UserInfoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserInfoOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoOrderByWithRelationInput>;
export const UserInfoOrderByWithRelationInputObjectZodSchema = makeSchema();
