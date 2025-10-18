import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategySelectObjectSchema as TrendStrategySelectObjectSchema } from './objects/TrendStrategySelect.schema';
import { TrendStrategyUpdateManyMutationInputObjectSchema as TrendStrategyUpdateManyMutationInputObjectSchema } from './objects/TrendStrategyUpdateManyMutationInput.schema';
import { TrendStrategyWhereInputObjectSchema as TrendStrategyWhereInputObjectSchema } from './objects/TrendStrategyWhereInput.schema';

export const TrendStrategyUpdateManyAndReturnSchema: z.ZodType<Prisma.TrendStrategyUpdateManyAndReturnArgs> = z.object({ select: TrendStrategySelectObjectSchema.optional(), data: TrendStrategyUpdateManyMutationInputObjectSchema, where: TrendStrategyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TrendStrategyUpdateManyAndReturnArgs>;

export const TrendStrategyUpdateManyAndReturnZodSchema = z.object({ select: TrendStrategySelectObjectSchema.optional(), data: TrendStrategyUpdateManyMutationInputObjectSchema, where: TrendStrategyWhereInputObjectSchema.optional() }).strict();