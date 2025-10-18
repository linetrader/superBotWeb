import * as z from 'zod';

export const WorkAttemptScalarFieldEnumSchema = z.enum(['id', 'workItemId', 'startedAt', 'finishedAt', 'workerTaskArn', 'exitCode', 'error', 'logsRef'])

export type WorkAttemptScalarFieldEnum = z.infer<typeof WorkAttemptScalarFieldEnumSchema>;