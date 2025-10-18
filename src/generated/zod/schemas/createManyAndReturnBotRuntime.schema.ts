import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeSelectObjectSchema as BotRuntimeSelectObjectSchema } from './objects/BotRuntimeSelect.schema';
import { BotRuntimeCreateManyInputObjectSchema as BotRuntimeCreateManyInputObjectSchema } from './objects/BotRuntimeCreateManyInput.schema';

export const BotRuntimeCreateManyAndReturnSchema: z.ZodType<Prisma.BotRuntimeCreateManyAndReturnArgs> = z.object({ select: BotRuntimeSelectObjectSchema.optional(), data: z.union([ BotRuntimeCreateManyInputObjectSchema, z.array(BotRuntimeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BotRuntimeCreateManyAndReturnArgs>;

export const BotRuntimeCreateManyAndReturnZodSchema = z.object({ select: BotRuntimeSelectObjectSchema.optional(), data: z.union([ BotRuntimeCreateManyInputObjectSchema, z.array(BotRuntimeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();