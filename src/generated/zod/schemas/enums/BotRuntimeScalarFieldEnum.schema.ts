import * as z from 'zod';

export const BotRuntimeScalarFieldEnumSchema = z.enum(['id', 'botId', 'status', 'pid', 'queueJobId', 'startedAt', 'stoppedAt', 'lastHeartbeat', 'lastError', 'workerTaskArn', 'workerRevision', 'desiredState', 'createdAt', 'updatedAt'])

export type BotRuntimeScalarFieldEnum = z.infer<typeof BotRuntimeScalarFieldEnumSchema>;