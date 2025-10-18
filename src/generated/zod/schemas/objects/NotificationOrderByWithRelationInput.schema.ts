import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  channel: SortOrderSchema.optional(),
  target: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  payload: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const NotificationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.NotificationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationOrderByWithRelationInput>;
export const NotificationOrderByWithRelationInputObjectZodSchema = makeSchema();
