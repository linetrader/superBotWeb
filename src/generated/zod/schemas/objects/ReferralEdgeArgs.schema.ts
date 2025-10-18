import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeSelectObjectSchema as ReferralEdgeSelectObjectSchema } from './ReferralEdgeSelect.schema';
import { ReferralEdgeIncludeObjectSchema as ReferralEdgeIncludeObjectSchema } from './ReferralEdgeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReferralEdgeSelectObjectSchema).optional(),
  include: z.lazy(() => ReferralEdgeIncludeObjectSchema).optional()
}).strict();
export const ReferralEdgeArgsObjectSchema = makeSchema();
export const ReferralEdgeArgsObjectZodSchema = makeSchema();
