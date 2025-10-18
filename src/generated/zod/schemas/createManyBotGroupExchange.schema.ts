import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupExchangeCreateManyInputObjectSchema as BotGroupExchangeCreateManyInputObjectSchema } from './objects/BotGroupExchangeCreateManyInput.schema';

export const BotGroupExchangeCreateManySchema: z.ZodType<Prisma.BotGroupExchangeCreateManyArgs> = z.object({ data: z.union([ BotGroupExchangeCreateManyInputObjectSchema, z.array(BotGroupExchangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateManyArgs>;

export const BotGroupExchangeCreateManyZodSchema = z.object({ data: z.union([ BotGroupExchangeCreateManyInputObjectSchema, z.array(BotGroupExchangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();