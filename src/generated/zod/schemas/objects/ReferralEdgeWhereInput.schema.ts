import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumEdgeTypeFilterObjectSchema as EnumEdgeTypeFilterObjectSchema } from './EnumEdgeTypeFilter.schema';
import { EdgeTypeSchema } from '../enums/EdgeType.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const referraledgewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReferralEdgeWhereInputObjectSchema), z.lazy(() => ReferralEdgeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReferralEdgeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReferralEdgeWhereInputObjectSchema), z.lazy(() => ReferralEdgeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumEdgeTypeFilterObjectSchema), EdgeTypeSchema]).optional(),
  parentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  childId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  groupNo: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  parent: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  child: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const ReferralEdgeWhereInputObjectSchema: z.ZodType<Prisma.ReferralEdgeWhereInput> = referraledgewhereinputSchema as unknown as z.ZodType<Prisma.ReferralEdgeWhereInput>;
export const ReferralEdgeWhereInputObjectZodSchema = referraledgewhereinputSchema;
