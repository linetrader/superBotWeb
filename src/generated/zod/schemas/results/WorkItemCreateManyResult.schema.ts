import * as z from 'zod';
export const WorkItemCreateManyResultSchema = z.object({
  count: z.number()
});