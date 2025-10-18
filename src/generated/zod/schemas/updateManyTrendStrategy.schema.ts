import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategyUpdateManyMutationInputObjectSchema as TrendStrategyUpdateManyMutationInputObjectSchema } from './objects/TrendStrategyUpdateManyMutationInput.schema';
import { TrendStrategyWhereInputObjectSchema as TrendStrategyWhereInputObjectSchema } from './objects/TrendStrategyWhereInput.schema';

export const TrendStrategyUpdateManySchema: z.ZodType<Prisma.TrendStrategyUpdateManyArgs> = z.object({ data: TrendStrategyUpdateManyMutationInputObjectSchema, where: TrendStrategyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TrendStrategyUpdateManyArgs>;

export const TrendStrategyUpdateManyZodSchema = z.object({ data: TrendStrategyUpdateManyMutationInputObjectSchema, where: TrendStrategyWhereInputObjectSchema.optional() }).strict();