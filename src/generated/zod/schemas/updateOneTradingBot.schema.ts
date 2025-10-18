import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotSelectObjectSchema as TradingBotSelectObjectSchema } from './objects/TradingBotSelect.schema';
import { TradingBotIncludeObjectSchema as TradingBotIncludeObjectSchema } from './objects/TradingBotInclude.schema';
import { TradingBotUpdateInputObjectSchema as TradingBotUpdateInputObjectSchema } from './objects/TradingBotUpdateInput.schema';
import { TradingBotUncheckedUpdateInputObjectSchema as TradingBotUncheckedUpdateInputObjectSchema } from './objects/TradingBotUncheckedUpdateInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './objects/TradingBotWhereUniqueInput.schema';

export const TradingBotUpdateOneSchema: z.ZodType<Prisma.TradingBotUpdateArgs> = z.object({ select: TradingBotSelectObjectSchema.optional(), include: TradingBotIncludeObjectSchema.optional(), data: z.union([TradingBotUpdateInputObjectSchema, TradingBotUncheckedUpdateInputObjectSchema]), where: TradingBotWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TradingBotUpdateArgs>;

export const TradingBotUpdateOneZodSchema = z.object({ select: TradingBotSelectObjectSchema.optional(), include: TradingBotIncludeObjectSchema.optional(), data: z.union([TradingBotUpdateInputObjectSchema, TradingBotUncheckedUpdateInputObjectSchema]), where: TradingBotWhereUniqueInputObjectSchema }).strict();