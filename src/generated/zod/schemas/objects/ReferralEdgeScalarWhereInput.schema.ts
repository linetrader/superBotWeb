import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumEdgeTypeFilterObjectSchema as EnumEdgeTypeFilterObjectSchema } from './EnumEdgeTypeFilter.schema';
import { EdgeTypeSchema } from '../enums/EdgeType.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const referraledgescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema), z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema), z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumEdgeTypeFilterObjectSchema), EdgeTypeSchema]).optional(),
  parentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  childId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  groupNo: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReferralEdgeScalarWhereInputObjectSchema: z.ZodType<Prisma.ReferralEdgeScalarWhereInput> = referraledgescalarwhereinputSchema as unknown as z.ZodType<Prisma.ReferralEdgeScalarWhereInput>;
export const ReferralEdgeScalarWhereInputObjectZodSchema = referraledgescalarwhereinputSchema;
