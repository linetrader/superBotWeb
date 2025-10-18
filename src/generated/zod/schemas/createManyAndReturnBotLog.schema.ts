import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogSelectObjectSchema as BotLogSelectObjectSchema } from './objects/BotLogSelect.schema';
import { BotLogCreateManyInputObjectSchema as BotLogCreateManyInputObjectSchema } from './objects/BotLogCreateManyInput.schema';

export const BotLogCreateManyAndReturnSchema: z.ZodType<Prisma.BotLogCreateManyAndReturnArgs> = z.object({ select: BotLogSelectObjectSchema.optional(), data: z.union([ BotLogCreateManyInputObjectSchema, z.array(BotLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BotLogCreateManyAndReturnArgs>;

export const BotLogCreateManyAndReturnZodSchema = z.object({ select: BotLogSelectObjectSchema.optional(), data: z.union([ BotLogCreateManyInputObjectSchema, z.array(BotLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();