import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  exchanges: z.boolean().optional()
}).strict();
export const BotGroupCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BotGroupCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCountOutputTypeSelect>;
export const BotGroupCountOutputTypeSelectObjectZodSchema = makeSchema();
