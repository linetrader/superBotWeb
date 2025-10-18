import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { NestedEnumGroupKeyFilterObjectSchema as NestedEnumGroupKeyFilterObjectSchema } from './NestedEnumGroupKeyFilter.schema'

const makeSchema = () => z.object({
  equals: GroupKeySchema.optional(),
  in: GroupKeySchema.array().optional(),
  notIn: GroupKeySchema.array().optional(),
  not: z.union([GroupKeySchema, z.lazy(() => NestedEnumGroupKeyFilterObjectSchema)]).optional()
}).strict();
export const EnumGroupKeyFilterObjectSchema: z.ZodType<Prisma.EnumGroupKeyFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumGroupKeyFilter>;
export const EnumGroupKeyFilterObjectZodSchema = makeSchema();
