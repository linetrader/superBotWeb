import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategySelectObjectSchema as BoxStrategySelectObjectSchema } from './objects/BoxStrategySelect.schema';
import { BoxStrategyCreateManyInputObjectSchema as BoxStrategyCreateManyInputObjectSchema } from './objects/BoxStrategyCreateManyInput.schema';

export const BoxStrategyCreateManyAndReturnSchema: z.ZodType<Prisma.BoxStrategyCreateManyAndReturnArgs> = z.object({ select: BoxStrategySelectObjectSchema.optional(), data: z.union([ BoxStrategyCreateManyInputObjectSchema, z.array(BoxStrategyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BoxStrategyCreateManyAndReturnArgs>;

export const BoxStrategyCreateManyAndReturnZodSchema = z.object({ select: BoxStrategySelectObjectSchema.optional(), data: z.union([ BoxStrategyCreateManyInputObjectSchema, z.array(BoxStrategyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();