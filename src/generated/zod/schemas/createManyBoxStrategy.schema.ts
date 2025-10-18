import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategyCreateManyInputObjectSchema as BoxStrategyCreateManyInputObjectSchema } from './objects/BoxStrategyCreateManyInput.schema';

export const BoxStrategyCreateManySchema: z.ZodType<Prisma.BoxStrategyCreateManyArgs> = z.object({ data: z.union([ BoxStrategyCreateManyInputObjectSchema, z.array(BoxStrategyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BoxStrategyCreateManyArgs>;

export const BoxStrategyCreateManyZodSchema = z.object({ data: z.union([ BoxStrategyCreateManyInputObjectSchema, z.array(BoxStrategyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();