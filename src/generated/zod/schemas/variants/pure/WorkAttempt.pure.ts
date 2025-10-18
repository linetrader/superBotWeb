import * as z from 'zod';

// prettier-ignore
export const WorkAttemptModelSchema = z.object({
    id: z.string(),
    workItemId: z.string(),
    workItem: z.unknown(),
    startedAt: z.date(),
    finishedAt: z.date().nullable(),
    workerTaskArn: z.string().nullable(),
    exitCode: z.number().int().nullable(),
    error: z.string().nullable(),
    logsRef: z.string().nullable()
}).strict();

export type WorkAttemptPureType = z.infer<typeof WorkAttemptModelSchema>;
