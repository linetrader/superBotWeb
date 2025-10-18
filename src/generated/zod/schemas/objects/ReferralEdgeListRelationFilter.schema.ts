import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeWhereInputObjectSchema as ReferralEdgeWhereInputObjectSchema } from './ReferralEdgeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReferralEdgeWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReferralEdgeWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReferralEdgeWhereInputObjectSchema).optional()
}).strict();
export const ReferralEdgeListRelationFilterObjectSchema: z.ZodType<Prisma.ReferralEdgeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeListRelationFilter>;
export const ReferralEdgeListRelationFilterObjectZodSchema = makeSchema();
