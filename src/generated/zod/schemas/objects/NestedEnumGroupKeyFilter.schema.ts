import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema'

const nestedenumgroupkeyfilterSchema = z.object({
  equals: GroupKeySchema.optional(),
  in: GroupKeySchema.array().optional(),
  notIn: GroupKeySchema.array().optional(),
  not: z.union([GroupKeySchema, z.lazy(() => NestedEnumGroupKeyFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumGroupKeyFilterObjectSchema: z.ZodType<Prisma.NestedEnumGroupKeyFilter> = nestedenumgroupkeyfilterSchema as unknown as z.ZodType<Prisma.NestedEnumGroupKeyFilter>;
export const NestedEnumGroupKeyFilterObjectZodSchema = nestedenumgroupkeyfilterSchema;
