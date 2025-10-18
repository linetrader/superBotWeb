import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  pid: z.literal(true).optional()
}).strict();
export const BotRuntimeSumAggregateInputObjectSchema: z.ZodType<Prisma.BotRuntimeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeSumAggregateInputType>;
export const BotRuntimeSumAggregateInputObjectZodSchema = makeSchema();
