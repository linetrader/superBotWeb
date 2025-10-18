import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigSelectObjectSchema as StrategyConfigSelectObjectSchema } from './objects/StrategyConfigSelect.schema';
import { StrategyConfigIncludeObjectSchema as StrategyConfigIncludeObjectSchema } from './objects/StrategyConfigInclude.schema';
import { StrategyConfigUpdateInputObjectSchema as StrategyConfigUpdateInputObjectSchema } from './objects/StrategyConfigUpdateInput.schema';
import { StrategyConfigUncheckedUpdateInputObjectSchema as StrategyConfigUncheckedUpdateInputObjectSchema } from './objects/StrategyConfigUncheckedUpdateInput.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './objects/StrategyConfigWhereUniqueInput.schema';

export const StrategyConfigUpdateOneSchema: z.ZodType<Prisma.StrategyConfigUpdateArgs> = z.object({ select: StrategyConfigSelectObjectSchema.optional(), include: StrategyConfigIncludeObjectSchema.optional(), data: z.union([StrategyConfigUpdateInputObjectSchema, StrategyConfigUncheckedUpdateInputObjectSchema]), where: StrategyConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StrategyConfigUpdateArgs>;

export const StrategyConfigUpdateOneZodSchema = z.object({ select: StrategyConfigSelectObjectSchema.optional(), include: StrategyConfigIncludeObjectSchema.optional(), data: z.union([StrategyConfigUpdateInputObjectSchema, StrategyConfigUncheckedUpdateInputObjectSchema]), where: StrategyConfigWhereUniqueInputObjectSchema }).strict();