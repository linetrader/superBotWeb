import * as z from 'zod';

// prettier-ignore
export const WorkAttemptInputSchema = z.object({
    id: z.string(),
    workItemId: z.string(),
    workItem: z.unknown(),
    startedAt: z.date(),
    finishedAt: z.date().optional().nullable(),
    workerTaskArn: z.string().optional().nullable(),
    exitCode: z.number().int().optional().nullable(),
    error: z.string().optional().nullable(),
    logsRef: z.string().optional().nullable()
}).strict();

export type WorkAttemptInputType = z.infer<typeof WorkAttemptInputSchema>;
