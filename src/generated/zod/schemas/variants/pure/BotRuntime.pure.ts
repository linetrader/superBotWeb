import * as z from 'zod';

import { BotStatusSchema } from '../../enums/BotStatus.schema';
// prettier-ignore
export const BotRuntimeModelSchema = z.object({
    id: z.string(),
    botId: z.string(),
    bot: z.unknown(),
    status: BotStatusSchema,
    pid: z.number().int().nullable(),
    queueJobId: z.string().nullable(),
    startedAt: z.date().nullable(),
    stoppedAt: z.date().nullable(),
    lastHeartbeat: z.date().nullable(),
    lastError: z.string().nullable(),
    workerTaskArn: z.string().nullable(),
    workerRevision: z.string().nullable(),
    desiredState: BotStatusSchema.nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BotRuntimePureType = z.infer<typeof BotRuntimeModelSchema>;
