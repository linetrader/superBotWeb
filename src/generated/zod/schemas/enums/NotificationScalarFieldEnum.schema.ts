import * as z from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id', 'userId', 'channel', 'target', 'payload', 'status', 'createdAt', 'updatedAt'])

export type NotificationScalarFieldEnum = z.infer<typeof NotificationScalarFieldEnumSchema>;