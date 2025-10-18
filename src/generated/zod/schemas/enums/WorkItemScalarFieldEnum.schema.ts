import * as z from 'zod';

export const WorkItemScalarFieldEnumSchema = z.enum(['id', 'userId', 'botId', 'type', 'status', 'dedupeKey', 'sqsMessageId', 'sqsGroupId', 'payload', 'attempts', 'nextVisibleAt', 'createdAt', 'updatedAt'])

export type WorkItemScalarFieldEnum = z.infer<typeof WorkItemScalarFieldEnumSchema>;