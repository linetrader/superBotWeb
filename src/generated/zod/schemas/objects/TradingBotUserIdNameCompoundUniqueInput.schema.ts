import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  userId: z.string(),
  name: z.string()
}).strict();
export const TradingBotUserIdNameCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TradingBotUserIdNameCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUserIdNameCompoundUniqueInput>;
export const TradingBotUserIdNameCompoundUniqueInputObjectZodSchema = makeSchema();
