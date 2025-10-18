import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  parentId: SortOrderSchema.optional(),
  childId: SortOrderSchema.optional(),
  position: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  groupNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  parent: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  child: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReferralEdgeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReferralEdgeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeOrderByWithRelationInput>;
export const ReferralEdgeOrderByWithRelationInputObjectZodSchema = makeSchema();
