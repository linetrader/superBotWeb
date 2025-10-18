import * as z from 'zod';
export const ExchangeCreateResultSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  active: z.boolean(),
  supportsFutures: z.boolean(),
  markets: z.array(z.unknown()),
  credentials: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});