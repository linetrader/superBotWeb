import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategyWhereInputObjectSchema as TrendStrategyWhereInputObjectSchema } from './objects/TrendStrategyWhereInput.schema';

export const TrendStrategyDeleteManySchema: z.ZodType<Prisma.TrendStrategyDeleteManyArgs> = z.object({ where: TrendStrategyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TrendStrategyDeleteManyArgs>;

export const TrendStrategyDeleteManyZodSchema = z.object({ where: TrendStrategyWhereInputObjectSchema.optional() }).strict();