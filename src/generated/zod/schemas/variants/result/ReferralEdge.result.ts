import * as z from 'zod';

import { EdgeTypeSchema } from '../../enums/EdgeType.schema';
// prettier-ignore
export const ReferralEdgeResultSchema = z.object({
    id: z.string(),
    type: EdgeTypeSchema,
    parentId: z.string(),
    parent: z.unknown(),
    childId: z.string(),
    child: z.unknown(),
    position: z.number().int().nullable(),
    groupNo: z.number().int().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ReferralEdgeResultType = z.infer<typeof ReferralEdgeResultSchema>;
