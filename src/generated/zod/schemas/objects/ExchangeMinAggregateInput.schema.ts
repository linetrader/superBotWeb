import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  name: z.literal(true).optional(),
  active: z.literal(true).optional(),
  supportsFutures: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ExchangeMinAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMinAggregateInputType>;
export const ExchangeMinAggregateInputObjectZodSchema = makeSchema();
