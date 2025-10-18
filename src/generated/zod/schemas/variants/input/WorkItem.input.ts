import * as z from 'zod';

import { WorkTypeSchema } from '../../enums/WorkType.schema';
import { WorkStatusSchema } from '../../enums/WorkStatus.schema';
// prettier-ignore
export const WorkItemInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    botId: z.string().optional().nullable(),
    bot: z.unknown().optional().nullable(),
    type: WorkTypeSchema,
    status: WorkStatusSchema,
    dedupeKey: z.string().optional().nullable(),
    sqsMessageId: z.string().optional().nullable(),
    sqsGroupId: z.string().optional().nullable(),
    payload: z.unknown().optional().nullable(),
    attempts: z.number().int(),
    nextVisibleAt: z.date().optional().nullable(),
    runs: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type WorkItemInputType = z.infer<typeof WorkItemInputSchema>;
