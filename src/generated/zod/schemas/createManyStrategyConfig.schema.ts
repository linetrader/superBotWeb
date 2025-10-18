import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigCreateManyInputObjectSchema as StrategyConfigCreateManyInputObjectSchema } from './objects/StrategyConfigCreateManyInput.schema';

export const StrategyConfigCreateManySchema: z.ZodType<Prisma.StrategyConfigCreateManyArgs> = z.object({ data: z.union([ StrategyConfigCreateManyInputObjectSchema, z.array(StrategyConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StrategyConfigCreateManyArgs>;

export const StrategyConfigCreateManyZodSchema = z.object({ data: z.union([ StrategyConfigCreateManyInputObjectSchema, z.array(StrategyConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();