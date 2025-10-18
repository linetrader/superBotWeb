import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './objects/TradingBotWhereInput.schema';

export const TradingBotDeleteManySchema: z.ZodType<Prisma.TradingBotDeleteManyArgs> = z.object({ where: TradingBotWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TradingBotDeleteManyArgs>;

export const TradingBotDeleteManyZodSchema = z.object({ where: TradingBotWhereInputObjectSchema.optional() }).strict();