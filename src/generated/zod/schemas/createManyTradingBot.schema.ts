import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotCreateManyInputObjectSchema as TradingBotCreateManyInputObjectSchema } from './objects/TradingBotCreateManyInput.schema';

export const TradingBotCreateManySchema: z.ZodType<Prisma.TradingBotCreateManyArgs> = z.object({ data: z.union([ TradingBotCreateManyInputObjectSchema, z.array(TradingBotCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TradingBotCreateManyArgs>;

export const TradingBotCreateManyZodSchema = z.object({ data: z.union([ TradingBotCreateManyInputObjectSchema, z.array(TradingBotCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();