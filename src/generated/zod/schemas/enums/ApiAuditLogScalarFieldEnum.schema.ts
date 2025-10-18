import * as z from 'zod';

export const ApiAuditLogScalarFieldEnumSchema = z.enum(['id', 'userId', 'path', 'method', 'status', 'ip', 'ua', 'payload', 'createdAt'])

export type ApiAuditLogScalarFieldEnum = z.infer<typeof ApiAuditLogScalarFieldEnumSchema>;