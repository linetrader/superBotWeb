import * as z from 'zod';
export const BotLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    botId: z.number(),
    bot: z.number(),
    level: z.number(),
    message: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    botId: z.string().nullable(),
    message: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    botId: z.string().nullable(),
    message: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});