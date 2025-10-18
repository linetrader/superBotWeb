import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  bots: z.boolean().optional(),
  groupExchanges: z.boolean().optional()
}).strict();
export const ExchangeMarketCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ExchangeMarketCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCountOutputTypeSelect>;
export const ExchangeMarketCountOutputTypeSelectObjectZodSchema = makeSchema();
