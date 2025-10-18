import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumEdgeTypeWithAggregatesFilterObjectSchema as EnumEdgeTypeWithAggregatesFilterObjectSchema } from './EnumEdgeTypeWithAggregatesFilter.schema';
import { EdgeTypeSchema } from '../enums/EdgeType.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const referraledgescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReferralEdgeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReferralEdgeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReferralEdgeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReferralEdgeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReferralEdgeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumEdgeTypeWithAggregatesFilterObjectSchema), EdgeTypeSchema]).optional(),
  parentId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  childId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  groupNo: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReferralEdgeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReferralEdgeScalarWhereWithAggregatesInput> = referraledgescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReferralEdgeScalarWhereWithAggregatesInput>;
export const ReferralEdgeScalarWhereWithAggregatesInputObjectZodSchema = referraledgescalarwherewithaggregatesinputSchema;
