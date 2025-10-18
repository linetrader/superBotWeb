import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  level: z.literal(true).optional()
}).strict();
export const UserInfoSumAggregateInputObjectSchema: z.ZodType<Prisma.UserInfoSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoSumAggregateInputType>;
export const UserInfoSumAggregateInputObjectZodSchema = makeSchema();
