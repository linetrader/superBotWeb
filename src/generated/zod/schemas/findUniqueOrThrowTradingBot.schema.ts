import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotSelectObjectSchema as TradingBotSelectObjectSchema } from './objects/TradingBotSelect.schema';
import { TradingBotIncludeObjectSchema as TradingBotIncludeObjectSchema } from './objects/TradingBotInclude.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './objects/TradingBotWhereUniqueInput.schema';

export const TradingBotFindUniqueOrThrowSchema: z.ZodType<Prisma.TradingBotFindUniqueOrThrowArgs> = z.object({ select: TradingBotSelectObjectSchema.optional(), include: TradingBotIncludeObjectSchema.optional(), where: TradingBotWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TradingBotFindUniqueOrThrowArgs>;

export const TradingBotFindUniqueOrThrowZodSchema = z.object({ select: TradingBotSelectObjectSchema.optional(), include: TradingBotIncludeObjectSchema.optional(), where: TradingBotWhereUniqueInputObjectSchema }).strict();