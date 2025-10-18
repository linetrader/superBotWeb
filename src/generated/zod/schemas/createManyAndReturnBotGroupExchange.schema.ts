import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupExchangeSelectObjectSchema as BotGroupExchangeSelectObjectSchema } from './objects/BotGroupExchangeSelect.schema';
import { BotGroupExchangeCreateManyInputObjectSchema as BotGroupExchangeCreateManyInputObjectSchema } from './objects/BotGroupExchangeCreateManyInput.schema';

export const BotGroupExchangeCreateManyAndReturnSchema: z.ZodType<Prisma.BotGroupExchangeCreateManyAndReturnArgs> = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), data: z.union([ BotGroupExchangeCreateManyInputObjectSchema, z.array(BotGroupExchangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateManyAndReturnArgs>;

export const BotGroupExchangeCreateManyAndReturnZodSchema = z.object({ select: BotGroupExchangeSelectObjectSchema.optional(), data: z.union([ BotGroupExchangeCreateManyInputObjectSchema, z.array(BotGroupExchangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();