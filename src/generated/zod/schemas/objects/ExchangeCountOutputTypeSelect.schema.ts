import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  markets: z.boolean().optional(),
  credentials: z.boolean().optional()
}).strict();
export const ExchangeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ExchangeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCountOutputTypeSelect>;
export const ExchangeCountOutputTypeSelectObjectZodSchema = makeSchema();
