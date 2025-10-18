import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotSelectObjectSchema as TradingBotSelectObjectSchema } from './objects/TradingBotSelect.schema';
import { TradingBotCreateManyInputObjectSchema as TradingBotCreateManyInputObjectSchema } from './objects/TradingBotCreateManyInput.schema';

export const TradingBotCreateManyAndReturnSchema: z.ZodType<Prisma.TradingBotCreateManyAndReturnArgs> = z.object({ select: TradingBotSelectObjectSchema.optional(), data: z.union([ TradingBotCreateManyInputObjectSchema, z.array(TradingBotCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TradingBotCreateManyAndReturnArgs>;

export const TradingBotCreateManyAndReturnZodSchema = z.object({ select: TradingBotSelectObjectSchema.optional(), data: z.union([ TradingBotCreateManyInputObjectSchema, z.array(TradingBotCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();