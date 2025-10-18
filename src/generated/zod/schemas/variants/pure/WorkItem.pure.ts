import * as z from 'zod';

import { WorkTypeSchema } from '../../enums/WorkType.schema';
import { WorkStatusSchema } from '../../enums/WorkStatus.schema';
// prettier-ignore
export const WorkItemModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    botId: z.string().nullable(),
    bot: z.unknown().nullable(),
    type: WorkTypeSchema,
    status: WorkStatusSchema,
    dedupeKey: z.string().nullable(),
    sqsMessageId: z.string().nullable(),
    sqsGroupId: z.string().nullable(),
    payload: z.unknown().nullable(),
    attempts: z.number().int(),
    nextVisibleAt: z.date().nullable(),
    runs: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type WorkItemPureType = z.infer<typeof WorkItemModelSchema>;
