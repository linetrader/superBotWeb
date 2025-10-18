import * as z from 'zod';
export const WorkItemDeleteManyResultSchema = z.object({
  count: z.number()
});