import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  parentId: z.boolean().optional(),
  parent: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  childId: z.boolean().optional(),
  child: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  position: z.boolean().optional(),
  groupNo: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ReferralEdgeSelectObjectSchema: z.ZodType<Prisma.ReferralEdgeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeSelect>;
export const ReferralEdgeSelectObjectZodSchema = makeSchema();
