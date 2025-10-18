import * as z from 'zod';

export const GroupKeySchema = z.enum(['A', 'B'])

export type GroupKey = z.infer<typeof GroupKeySchema>;