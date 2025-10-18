import * as z from 'zod';

// prettier-ignore
export const ApiAuditLogInputSchema = z.object({
    id: z.string(),
    userId: z.string().optional().nullable(),
    path: z.string(),
    method: z.string(),
    status: z.number().int(),
    ip: z.string().optional().nullable(),
    ua: z.string().optional().nullable(),
    payload: z.unknown().optional().nullable(),
    createdAt: z.date()
}).strict();

export type ApiAuditLogInputType = z.infer<typeof ApiAuditLogInputSchema>;
