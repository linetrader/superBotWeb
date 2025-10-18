import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogCreateManyInputObjectSchema as BotLogCreateManyInputObjectSchema } from './objects/BotLogCreateManyInput.schema';

export const BotLogCreateManySchema: z.ZodType<Prisma.BotLogCreateManyArgs> = z.object({ data: z.union([ BotLogCreateManyInputObjectSchema, z.array(BotLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BotLogCreateManyArgs>;

export const BotLogCreateManyZodSchema = z.object({ data: z.union([ BotLogCreateManyInputObjectSchema, z.array(BotLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();