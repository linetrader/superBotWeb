import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EdgeTypeSchema } from '../enums/EdgeType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: EdgeTypeSchema,
  parentId: z.string(),
  childId: z.string(),
  position: z.number().int().optional().nullable(),
  groupNo: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ReferralEdgeCreateManyInputObjectSchema: z.ZodType<Prisma.ReferralEdgeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeCreateManyInput>;
export const ReferralEdgeCreateManyInputObjectZodSchema = makeSchema();
