import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { NestedEnumGroupKeyWithAggregatesFilterObjectSchema as NestedEnumGroupKeyWithAggregatesFilterObjectSchema } from './NestedEnumGroupKeyWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGroupKeyFilterObjectSchema as NestedEnumGroupKeyFilterObjectSchema } from './NestedEnumGroupKeyFilter.schema'

const makeSchema = () => z.object({
  equals: GroupKeySchema.optional(),
  in: GroupKeySchema.array().optional(),
  notIn: GroupKeySchema.array().optional(),
  not: z.union([GroupKeySchema, z.lazy(() => NestedEnumGroupKeyWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGroupKeyFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGroupKeyFilterObjectSchema).optional()
}).strict();
export const EnumGroupKeyWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumGroupKeyWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumGroupKeyWithAggregatesFilter>;
export const EnumGroupKeyWithAggregatesFilterObjectZodSchema = makeSchema();
