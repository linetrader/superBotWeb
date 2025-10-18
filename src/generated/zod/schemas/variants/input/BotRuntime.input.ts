import * as z from 'zod';

import { BotStatusSchema } from '../../enums/BotStatus.schema';
// prettier-ignore
export const BotRuntimeInputSchema = z.object({
    id: z.string(),
    botId: z.string(),
    bot: z.unknown(),
    status: BotStatusSchema,
    pid: z.number().int().optional().nullable(),
    queueJobId: z.string().optional().nullable(),
    startedAt: z.date().optional().nullable(),
    stoppedAt: z.date().optional().nullable(),
    lastHeartbeat: z.date().optional().nullable(),
    lastError: z.string().optional().nullable(),
    workerTaskArn: z.string().optional().nullable(),
    workerRevision: z.string().optional().nullable(),
    desiredState: BotStatusSchema.optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BotRuntimeInputType = z.infer<typeof BotRuntimeInputSchema>;
