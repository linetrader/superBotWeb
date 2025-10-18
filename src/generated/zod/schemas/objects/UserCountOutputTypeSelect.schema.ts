import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  downlines: z.boolean().optional(),
  uplines: z.boolean().optional(),
  exchangeCredentials: z.boolean().optional(),
  strategyConfigs: z.boolean().optional(),
  tradingBots: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
