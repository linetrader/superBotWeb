import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  tradingBots: z.boolean().optional()
}).strict();
export const StrategyConfigCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StrategyConfigCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigCountOutputTypeSelect>;
export const StrategyConfigCountOutputTypeSelectObjectZodSchema = makeSchema();
