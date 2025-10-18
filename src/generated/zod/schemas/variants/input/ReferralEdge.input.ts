import * as z from 'zod';

import { EdgeTypeSchema } from '../../enums/EdgeType.schema';
// prettier-ignore
export const ReferralEdgeInputSchema = z.object({
    id: z.string(),
    type: EdgeTypeSchema,
    parentId: z.string(),
    parent: z.unknown(),
    childId: z.string(),
    child: z.unknown(),
    position: z.number().int().optional().nullable(),
    groupNo: z.number().int().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ReferralEdgeInputType = z.infer<typeof ReferralEdgeInputSchema>;
