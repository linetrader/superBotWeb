import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  userId: z.string(),
  name: z.string()
}).strict();
export const StrategyConfigUserIdNameCompoundUniqueInputObjectSchema: z.ZodType<Prisma.StrategyConfigUserIdNameCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUserIdNameCompoundUniqueInput>;
export const StrategyConfigUserIdNameCompoundUniqueInputObjectZodSchema = makeSchema();
