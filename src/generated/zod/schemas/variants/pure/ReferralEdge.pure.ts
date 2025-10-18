import * as z from 'zod';

import { EdgeTypeSchema } from '../../enums/EdgeType.schema';
// prettier-ignore
export const ReferralEdgeModelSchema = z.object({
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

export type ReferralEdgePureType = z.infer<typeof ReferralEdgeModelSchema>;
