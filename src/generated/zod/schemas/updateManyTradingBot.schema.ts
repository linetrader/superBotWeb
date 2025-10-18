import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotUpdateManyMutationInputObjectSchema as TradingBotUpdateManyMutationInputObjectSchema } from './objects/TradingBotUpdateManyMutationInput.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './objects/TradingBotWhereInput.schema';

export const TradingBotUpdateManySchema: z.ZodType<Prisma.TradingBotUpdateManyArgs> = z.object({ data: TradingBotUpdateManyMutationInputObjectSchema, where: TradingBotWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TradingBotUpdateManyArgs>;

export const TradingBotUpdateManyZodSchema = z.object({ data: TradingBotUpdateManyMutationInputObjectSchema, where: TradingBotWhereInputObjectSchema.optional() }).strict();