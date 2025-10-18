import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupSelectObjectSchema as BotGroupSelectObjectSchema } from './objects/BotGroupSelect.schema';
import { BotGroupCreateManyInputObjectSchema as BotGroupCreateManyInputObjectSchema } from './objects/BotGroupCreateManyInput.schema';

export const BotGroupCreateManyAndReturnSchema: z.ZodType<Prisma.BotGroupCreateManyAndReturnArgs> = z.object({ select: BotGroupSelectObjectSchema.optional(), data: z.union([ BotGroupCreateManyInputObjectSchema, z.array(BotGroupCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupCreateManyAndReturnArgs>;

export const BotGroupCreateManyAndReturnZodSchema = z.object({ select: BotGroupSelectObjectSchema.optional(), data: z.union([ BotGroupCreateManyInputObjectSchema, z.array(BotGroupCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();