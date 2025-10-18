import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigSelectObjectSchema as StrategyConfigSelectObjectSchema } from './objects/StrategyConfigSelect.schema';
import { StrategyConfigIncludeObjectSchema as StrategyConfigIncludeObjectSchema } from './objects/StrategyConfigInclude.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './objects/StrategyConfigWhereUniqueInput.schema';

export const StrategyConfigDeleteOneSchema: z.ZodType<Prisma.StrategyConfigDeleteArgs> = z.object({ select: StrategyConfigSelectObjectSchema.optional(), include: StrategyConfigIncludeObjectSchema.optional(), where: StrategyConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StrategyConfigDeleteArgs>;

export const StrategyConfigDeleteOneZodSchema = z.object({ select: StrategyConfigSelectObjectSchema.optional(), include: StrategyConfigIncludeObjectSchema.optional(), where: StrategyConfigWhereUniqueInputObjectSchema }).strict();