import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategyWhereInputObjectSchema as BoxStrategyWhereInputObjectSchema } from './objects/BoxStrategyWhereInput.schema';

export const BoxStrategyDeleteManySchema: z.ZodType<Prisma.BoxStrategyDeleteManyArgs> = z.object({ where: BoxStrategyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BoxStrategyDeleteManyArgs>;

export const BoxStrategyDeleteManyZodSchema = z.object({ where: BoxStrategyWhereInputObjectSchema.optional() }).strict();