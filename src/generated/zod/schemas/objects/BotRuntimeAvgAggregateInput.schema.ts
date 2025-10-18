import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  pid: z.literal(true).optional()
}).strict();
export const BotRuntimeAvgAggregateInputObjectSchema: z.ZodType<Prisma.BotRuntimeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeAvgAggregateInputType>;
export const BotRuntimeAvgAggregateInputObjectZodSchema = makeSchema();
