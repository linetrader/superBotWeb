import * as z from 'zod';
export const BotGroupAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    botId: z.number(),
    bot: z.number(),
    key: z.number(),
    exchanges: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    botId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    botId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});