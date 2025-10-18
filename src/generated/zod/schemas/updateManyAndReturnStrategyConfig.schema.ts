import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigSelectObjectSchema as StrategyConfigSelectObjectSchema } from './objects/StrategyConfigSelect.schema';
import { StrategyConfigUpdateManyMutationInputObjectSchema as StrategyConfigUpdateManyMutationInputObjectSchema } from './objects/StrategyConfigUpdateManyMutationInput.schema';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './objects/StrategyConfigWhereInput.schema';

export const StrategyConfigUpdateManyAndReturnSchema: z.ZodType<Prisma.StrategyConfigUpdateManyAndReturnArgs> = z.object({ select: StrategyConfigSelectObjectSchema.optional(), data: StrategyConfigUpdateManyMutationInputObjectSchema, where: StrategyConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StrategyConfigUpdateManyAndReturnArgs>;

export const StrategyConfigUpdateManyAndReturnZodSchema = z.object({ select: StrategyConfigSelectObjectSchema.optional(), data: StrategyConfigUpdateManyMutationInputObjectSchema, where: StrategyConfigWhereInputObjectSchema.optional() }).strict();