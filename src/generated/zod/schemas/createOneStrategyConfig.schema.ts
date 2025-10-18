import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigSelectObjectSchema as StrategyConfigSelectObjectSchema } from './objects/StrategyConfigSelect.schema';
import { StrategyConfigIncludeObjectSchema as StrategyConfigIncludeObjectSchema } from './objects/StrategyConfigInclude.schema';
import { StrategyConfigCreateInputObjectSchema as StrategyConfigCreateInputObjectSchema } from './objects/StrategyConfigCreateInput.schema';
import { StrategyConfigUncheckedCreateInputObjectSchema as StrategyConfigUncheckedCreateInputObjectSchema } from './objects/StrategyConfigUncheckedCreateInput.schema';

export const StrategyConfigCreateOneSchema: z.ZodType<Prisma.StrategyConfigCreateArgs> = z.object({ select: StrategyConfigSelectObjectSchema.optional(), include: StrategyConfigIncludeObjectSchema.optional(), data: z.union([StrategyConfigCreateInputObjectSchema, StrategyConfigUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StrategyConfigCreateArgs>;

export const StrategyConfigCreateOneZodSchema = z.object({ select: StrategyConfigSelectObjectSchema.optional(), include: StrategyConfigIncludeObjectSchema.optional(), data: z.union([StrategyConfigCreateInputObjectSchema, StrategyConfigUncheckedCreateInputObjectSchema]) }).strict();