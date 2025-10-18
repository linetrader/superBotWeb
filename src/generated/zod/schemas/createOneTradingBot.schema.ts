import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotSelectObjectSchema as TradingBotSelectObjectSchema } from './objects/TradingBotSelect.schema';
import { TradingBotIncludeObjectSchema as TradingBotIncludeObjectSchema } from './objects/TradingBotInclude.schema';
import { TradingBotCreateInputObjectSchema as TradingBotCreateInputObjectSchema } from './objects/TradingBotCreateInput.schema';
import { TradingBotUncheckedCreateInputObjectSchema as TradingBotUncheckedCreateInputObjectSchema } from './objects/TradingBotUncheckedCreateInput.schema';

export const TradingBotCreateOneSchema: z.ZodType<Prisma.TradingBotCreateArgs> = z.object({ select: TradingBotSelectObjectSchema.optional(), include: TradingBotIncludeObjectSchema.optional(), data: z.union([TradingBotCreateInputObjectSchema, TradingBotUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TradingBotCreateArgs>;

export const TradingBotCreateOneZodSchema = z.object({ select: TradingBotSelectObjectSchema.optional(), include: TradingBotIncludeObjectSchema.optional(), data: z.union([TradingBotCreateInputObjectSchema, TradingBotUncheckedCreateInputObjectSchema]) }).strict();