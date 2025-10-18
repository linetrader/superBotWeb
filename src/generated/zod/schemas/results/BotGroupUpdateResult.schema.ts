import * as z from 'zod';
export const BotGroupUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  botId: z.string(),
  bot: z.unknown(),
  key: z.unknown(),
  exchanges: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));