import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigSelectObjectSchema as StrategyConfigSelectObjectSchema } from './objects/StrategyConfigSelect.schema';
import { StrategyConfigIncludeObjectSchema as StrategyConfigIncludeObjectSchema } from './objects/StrategyConfigInclude.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './objects/StrategyConfigWhereUniqueInput.schema';

export const StrategyConfigFindUniqueSchema: z.ZodType<Prisma.StrategyConfigFindUniqueArgs> = z.object({ select: StrategyConfigSelectObjectSchema.optional(), include: StrategyConfigIncludeObjectSchema.optional(), where: StrategyConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StrategyConfigFindUniqueArgs>;

export const StrategyConfigFindUniqueZodSchema = z.object({ select: StrategyConfigSelectObjectSchema.optional(), include: StrategyConfigIncludeObjectSchema.optional(), where: StrategyConfigWhereUniqueInputObjectSchema }).strict();