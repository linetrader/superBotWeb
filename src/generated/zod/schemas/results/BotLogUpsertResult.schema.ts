import * as z from 'zod';
export const BotLogUpsertResultSchema = z.object({
  id: z.string(),
  botId: z.string(),
  bot: z.unknown(),
  level: z.unknown(),
  message: z.string(),
  createdAt: z.date()
});