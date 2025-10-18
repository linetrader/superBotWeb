import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigSelectObjectSchema as StrategyConfigSelectObjectSchema } from './objects/StrategyConfigSelect.schema';
import { StrategyConfigCreateManyInputObjectSchema as StrategyConfigCreateManyInputObjectSchema } from './objects/StrategyConfigCreateManyInput.schema';

export const StrategyConfigCreateManyAndReturnSchema: z.ZodType<Prisma.StrategyConfigCreateManyAndReturnArgs> = z.object({ select: StrategyConfigSelectObjectSchema.optional(), data: z.union([ StrategyConfigCreateManyInputObjectSchema, z.array(StrategyConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StrategyConfigCreateManyAndReturnArgs>;

export const StrategyConfigCreateManyAndReturnZodSchema = z.object({ select: StrategyConfigSelectObjectSchema.optional(), data: z.union([ StrategyConfigCreateManyInputObjectSchema, z.array(StrategyConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();