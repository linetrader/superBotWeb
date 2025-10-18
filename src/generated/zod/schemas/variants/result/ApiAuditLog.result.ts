import * as z from 'zod';

// prettier-ignore
export const ApiAuditLogResultSchema = z.object({
    id: z.string(),
    userId: z.string().nullable(),
    path: z.string(),
    method: z.string(),
    status: z.number().int(),
    ip: z.string().nullable(),
    ua: z.string().nullable(),
    payload: z.unknown().nullable(),
    createdAt: z.date()
}).strict();

export type ApiAuditLogResultType = z.infer<typeof ApiAuditLogResultSchema>;
