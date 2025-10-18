import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotSelectObjectSchema as TradingBotSelectObjectSchema } from './objects/TradingBotSelect.schema';
import { TradingBotIncludeObjectSchema as TradingBotIncludeObjectSchema } from './objects/TradingBotInclude.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './objects/TradingBotWhereUniqueInput.schema';
import { TradingBotCreateInputObjectSchema as TradingBotCreateInputObjectSchema } from './objects/TradingBotCreateInput.schema';
import { TradingBotUncheckedCreateInputObjectSchema as TradingBotUncheckedCreateInputObjectSchema } from './objects/TradingBotUncheckedCreateInput.schema';
import { TradingBotUpdateInputObjectSchema as TradingBotUpdateInputObjectSchema } from './objects/TradingBotUpdateInput.schema';
import { TradingBotUncheckedUpdateInputObjectSchema as TradingBotUncheckedUpdateInputObjectSchema } from './objects/TradingBotUncheckedUpdateInput.schema';

export const TradingBotUpsertOneSchema: z.ZodType<Prisma.TradingBotUpsertArgs> = z.object({ select: TradingBotSelectObjectSchema.optional(), include: TradingBotIncludeObjectSchema.optional(), where: TradingBotWhereUniqueInputObjectSchema, create: z.union([ TradingBotCreateInputObjectSchema, TradingBotUncheckedCreateInputObjectSchema ]), update: z.union([ TradingBotUpdateInputObjectSchema, TradingBotUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TradingBotUpsertArgs>;

export const TradingBotUpsertOneZodSchema = z.object({ select: TradingBotSelectObjectSchema.optional(), include: TradingBotIncludeObjectSchema.optional(), where: TradingBotWhereUniqueInputObjectSchema, create: z.union([ TradingBotCreateInputObjectSchema, TradingBotUncheckedCreateInputObjectSchema ]), update: z.union([ TradingBotUpdateInputObjectSchema, TradingBotUncheckedUpdateInputObjectSchema ]) }).strict();