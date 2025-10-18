import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeCreateManyInputObjectSchema as BotRuntimeCreateManyInputObjectSchema } from './objects/BotRuntimeCreateManyInput.schema';

export const BotRuntimeCreateManySchema: z.ZodType<Prisma.BotRuntimeCreateManyArgs> = z.object({ data: z.union([ BotRuntimeCreateManyInputObjectSchema, z.array(BotRuntimeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BotRuntimeCreateManyArgs>;

export const BotRuntimeCreateManyZodSchema = z.object({ data: z.union([ BotRuntimeCreateManyInputObjectSchema, z.array(BotRuntimeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();