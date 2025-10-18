import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string().max(16),
  name: z.string().max(50).optional().nullable(),
  restBaseUrl: z.string(),
  wsBaseUrl: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ExchangeMarketCreateManyExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateManyExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateManyExchangeInput>;
export const ExchangeMarketCreateManyExchangeInputObjectZodSchema = makeSchema();
