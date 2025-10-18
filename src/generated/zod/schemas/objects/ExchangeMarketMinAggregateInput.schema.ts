import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  exchangeId: z.literal(true).optional(),
  code: z.literal(true).optional(),
  name: z.literal(true).optional(),
  restBaseUrl: z.literal(true).optional(),
  wsBaseUrl: z.literal(true).optional(),
  active: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ExchangeMarketMinAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeMarketMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketMinAggregateInputType>;
export const ExchangeMarketMinAggregateInputObjectZodSchema = makeSchema();
