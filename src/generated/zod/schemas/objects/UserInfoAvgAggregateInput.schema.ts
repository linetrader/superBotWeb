import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  level: z.literal(true).optional()
}).strict();
export const UserInfoAvgAggregateInputObjectSchema: z.ZodType<Prisma.UserInfoAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoAvgAggregateInputType>;
export const UserInfoAvgAggregateInputObjectZodSchema = makeSchema();
