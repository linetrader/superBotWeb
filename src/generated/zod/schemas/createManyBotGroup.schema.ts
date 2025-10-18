import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupCreateManyInputObjectSchema as BotGroupCreateManyInputObjectSchema } from './objects/BotGroupCreateManyInput.schema';

export const BotGroupCreateManySchema: z.ZodType<Prisma.BotGroupCreateManyArgs> = z.object({ data: z.union([ BotGroupCreateManyInputObjectSchema, z.array(BotGroupCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupCreateManyArgs>;

export const BotGroupCreateManyZodSchema = z.object({ data: z.union([ BotGroupCreateManyInputObjectSchema, z.array(BotGroupCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();