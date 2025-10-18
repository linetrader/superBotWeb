import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotSelectObjectSchema as TradingBotSelectObjectSchema } from './objects/TradingBotSelect.schema';
import { TradingBotUpdateManyMutationInputObjectSchema as TradingBotUpdateManyMutationInputObjectSchema } from './objects/TradingBotUpdateManyMutationInput.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './objects/TradingBotWhereInput.schema';

export const TradingBotUpdateManyAndReturnSchema: z.ZodType<Prisma.TradingBotUpdateManyAndReturnArgs> = z.object({ select: TradingBotSelectObjectSchema.optional(), data: TradingBotUpdateManyMutationInputObjectSchema, where: TradingBotWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TradingBotUpdateManyAndReturnArgs>;

export const TradingBotUpdateManyAndReturnZodSchema = z.object({ select: TradingBotSelectObjectSchema.optional(), data: TradingBotUpdateManyMutationInputObjectSchema, where: TradingBotWhereInputObjectSchema.optional() }).strict();