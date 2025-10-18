import * as z from 'zod';
export const BotRuntimeDeleteManyResultSchema = z.object({
  count: z.number()
});