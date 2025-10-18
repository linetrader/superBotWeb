import * as z from 'zod';

export const EdgeTypeSchema = z.enum(['REFERRER', 'SPONSOR'])

export type EdgeType = z.infer<typeof EdgeTypeSchema>;